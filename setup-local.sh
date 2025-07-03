#!/bin/bash

echo "Setting up Unique Management Associates website for local development..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js (v18 or higher) first."
    echo "Visit: https://nodejs.org/en/download/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "Node.js version is too old. Please install Node.js v18 or higher."
    exit 1
fi

echo "Node.js version: $(node -v) ✓"

# Install dependencies
echo "Installing dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cp .env.example .env
    echo ""
    echo "⚠️  IMPORTANT: Edit the .env file and add your RESEND_API_KEY"
    echo "   1. Sign up at https://resend.com"
    echo "   2. Get your API key from the dashboard"
    echo "   3. Replace 're_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' with your actual key"
    echo ""
fi

echo "Setup complete! 🎉"
echo ""
echo "To start the development server:"
echo "  npm run dev"
echo ""
echo "Then open your browser to: http://localhost:5000"