#!/bin/bash

# Script to optimize Google Fonts loading across all HTML files

echo "Optimizing Google Fonts loading..."

# Find all HTML files
for file in *.html; do
    if [ -f "$file" ]; then
        echo "Processing $file..."
        
        # Check if file contains Google Fonts
        if grep -q "fonts.googleapis.com" "$file"; then
            # Create backup
            cp "$file" "$file.backup"
            
            # Replace font-family declarations with fallback fonts
            sed -i '' "s/font-family: 'Inter', sans-serif;/font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;/g" "$file"
            
            # Add preload for critical font weight if not already present
            if ! grep -q "preload.*Inter:wght@400" "$file"; then
                # Find the line with Google Fonts CSS and add preload before it
                sed -i '' '/fonts.googleapis.com\/css2.*Inter.*display=swap/i\
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">\
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap"></noscript>' "$file"
            fi
            
            echo "✓ Optimized $file"
        else
            echo "- Skipped $file (no Google Fonts found)"
        fi
    fi
done

echo "Font optimization complete!"
echo "Backups created with .backup extension"