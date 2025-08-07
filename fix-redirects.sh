#!/bin/bash

# Script to fix ERR_TOO_MANY_REDIRECTS error
# Usage: ./fix-redirects.sh [backup|restore|disable]

echo "🔧 NextGen Presentations - Redirect Fix Tool"
echo "==========================================="

case "$1" in
    "backup")
        echo "📁 Switching to backup .htaccess (no redirects)..."
        if [ -f ".htaccess" ]; then
            mv .htaccess .htaccess.problematic
            echo "✅ Current .htaccess saved as .htaccess.problematic"
        fi
        if [ -f ".htaccess.backup" ]; then
            cp .htaccess.backup .htaccess
            echo "✅ Backup .htaccess activated"
        else
            echo "❌ .htaccess.backup not found"
            exit 1
        fi
        ;;
    "restore")
        echo "🔄 Restoring original .htaccess..."
        if [ -f ".htaccess.problematic" ]; then
            mv .htaccess.problematic .htaccess
            echo "✅ Original .htaccess restored"
        else
            echo "❌ .htaccess.problematic not found"
            exit 1
        fi
        ;;
    "disable")
        echo "🚫 Disabling .htaccess..."
        if [ -f ".htaccess" ]; then
            mv .htaccess .htaccess.disabled
            echo "✅ .htaccess disabled"
        else
            echo "❌ .htaccess not found"
            exit 1
        fi
        ;;
    "simple")
        echo "📁 Switching to simple .htaccess..."
        if [ -f ".htaccess" ]; then
            mv .htaccess .htaccess.problematic
            echo "✅ Current .htaccess saved as .htaccess.problematic"
        fi
        if [ -f ".htaccess.simple" ]; then
            cp .htaccess.simple .htaccess
            echo "✅ Simple .htaccess activated"
        else
            echo "❌ .htaccess.simple not found"
            exit 1
        fi
        ;;
    *)
        echo "Usage: $0 [backup|restore|disable|simple]"
        echo ""
        echo "Commands:"
        echo "  backup  - Use backup .htaccess without redirects"
        echo "  simple  - Use simplified .htaccess"
        echo "  restore - Restore original .htaccess"
        echo "  disable - Completely disable .htaccess"
        echo ""
        echo "💡 If you see ERR_TOO_MANY_REDIRECTS, try:"
        echo "   $0 backup"
        exit 1
        ;;
esac

echo ""
echo "🌐 Now test your website and clear browser cache (Ctrl+F5)"
echo "📧 If problems persist, contact your hosting provider"