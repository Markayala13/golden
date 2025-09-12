#!/bin/bash

echo "🚀 Setting up Texas Pool & Pavers Modern Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOF
# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Analytics (optional)
# NEXT_PUBLIC_GA_ID=your-ga-id
# NEXT_PUBLIC_GTM_ID=your-gtm-id

# Email (for forms)
# EMAIL_SERVICE_ID=your-email-service
# EMAIL_TEMPLATE_ID=your-template-id
# EMAIL_PUBLIC_KEY=your-public-key
EOF
    echo "✅ .env.local created"
fi

# Copy static assets
echo "📁 Setting up static assets..."
mkdir -p public
cp -r LOGOS public/ 2>/dev/null || echo "⚠️  LOGOS folder not found"
cp -r pic public/ 2>/dev/null || echo "⚠️  pic folder not found"
cp -r PIC2 public/ 2>/dev/null || echo "⚠️  PIC2 folder not found"

echo "✅ Setup complete!"
echo ""
echo "🎉 Next steps:"
echo "1. Run 'npm run dev' to start the development server"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Configure your environment variables in .env.local"
echo ""
echo "📚 For more information, check the README.md file" 