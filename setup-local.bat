@echo off
echo Setting up Unique Management Associates website for local development...

:: Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js (v18 or higher) first.
    echo Visit: https://nodejs.org/en/download/
    pause
    exit /b 1
)

echo Node.js version: 
node --version

:: Install dependencies
echo Installing dependencies...
call npm install

:: Create .env file if it doesn't exist
if not exist .env (
    echo Creating .env file...
    copy .env.example .env
    echo.
    echo WARNING: Edit the .env file and add your RESEND_API_KEY
    echo   1. Sign up at https://resend.com
    echo   2. Get your API key from the dashboard
    echo   3. Replace 're_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' with your actual key
    echo.
)

echo Setup complete!
echo.
echo To start the development server:
echo   npm run dev
echo.
echo Then open your browser to: http://localhost:5000
pause