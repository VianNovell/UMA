#!/bin/bash

# Local Database Setup Script for UMA Website
echo "🚀 Setting up local database for UMA website..."

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL is not installed."
    echo "Please install PostgreSQL first:"
    echo "  macOS: brew install postgresql"
    echo "  Ubuntu/Debian: sudo apt install postgresql postgresql-contrib"
    echo "  Windows: Download from https://www.postgresql.org/download/windows/"
    exit 1
fi

# Check if PostgreSQL is running
if ! pg_isready -q; then
    echo "❌ PostgreSQL is not running."
    echo "Please start PostgreSQL:"
    echo "  macOS: brew services start postgresql"
    echo "  Linux: sudo systemctl start postgresql"
    echo "  Windows: Start PostgreSQL service from Services"
    exit 1
fi

# Create database if it doesn't exist
echo "📊 Creating database 'uma_local'..."
createdb uma_local 2>/dev/null || echo "Database 'uma_local' already exists"

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.local .env
    echo "✅ Created .env file from .env.local"
    echo "📋 Please edit .env and update DATABASE_URL with your PostgreSQL username"
else
    echo "✅ .env file already exists"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Push database schema
echo "🗄️  Setting up database schema..."
npm run db:push

echo "✅ Local setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env file and update DATABASE_URL if needed"
echo "2. Run: npm run dev"
echo "3. Open: http://localhost:5173"
echo ""
echo "Need help? Check LOCAL_SETUP.md for detailed instructions."