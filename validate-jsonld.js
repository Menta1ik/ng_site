#!/usr/bin/env node
/*
  Quick JSON-LD syntax validator.
  - Scans all .html files under the current directory
  - Extracts <script type="application/ld+json"> blocks
  - Tries JSON.parse on each block and reports syntax errors
*/

const fs = require('fs');
const path = require('path');

const root = process.cwd();
let filesChecked = 0;
let blocksChecked = 0;
let errors = [];

function listHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let results = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      // skip node_modules and .git and .venv etc.
      if (['node_modules', '.git', '.venv', '.well-known'].includes(e.name)) continue;
      results = results.concat(listHtmlFiles(full));
    } else if (e.isFile() && e.name.toLowerCase().endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

function extractJsonLd(html) {
  const blocks = [];
  // crude but effective: find <script ... type="application/ld+json" ...> ... </script>
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    blocks.push(m[1].trim());
  }
  return blocks;
}

function sanitizeJson(text) {
  // Remove potential BOM
  if (text.charCodeAt(0) === 0xFEFF) {
    text = text.slice(1);
  }
  return text;
}

function validate() {
  const htmlFiles = listHtmlFiles(root);
  for (const file of htmlFiles) {
    filesChecked++;
    const content = fs.readFileSync(file, 'utf8');
    const blocks = extractJsonLd(content);
    if (blocks.length === 0) continue;
    blocks.forEach((b, idx) => {
      blocksChecked++;
      const jsonText = sanitizeJson(b);
      try {
        JSON.parse(jsonText);
      } catch (e) {
        errors.push({ file, block: idx + 1, message: e.message });
      }
    });
  }

  if (errors.length === 0) {
    console.log(`OK: ${filesChecked} HTML files scanned, ${blocksChecked} JSON-LD blocks valid.`);
    process.exit(0);
  } else {
    console.error(`ERRORS: ${errors.length} invalid JSON-LD blocks found in ${filesChecked} files.`);
    for (const err of errors) {
      console.error(`- ${err.file} [block #${err.block}]: ${err.message}`);
    }
    process.exit(1);
  }
}

validate();