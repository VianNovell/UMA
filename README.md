# Unique Management Associates Website

A professional website for Unique Management Associates - Accounting and Tax Consultancy Services.

## Local Development Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Quick Setup

**Option 1: Automatic Setup (Recommended)**
```bash
# Linux/Mac
./setup-local.sh

# Windows
setup-local.bat
```

**Option 2: Manual Setup**

1. **Clone/Download the project**
   ```bash
   # If using git
   git clone <your-repo-url>
   cd unique-management-website

   # Or download and extract the ZIP file
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Copy the example file and edit it:
   ```bash
   cp .env.example .env
   # Edit .env and add your RESEND_API_KEY
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the website**
   Open your browser and go to: `http://localhost:5000`

### Features
- Professional company website with contact form
- Email notifications sent to viankamanzi5@gmail.com
- Responsive design with company branding
- Contact form with service selection
- Professional email templates

### Email Setup
The contact form uses Resend service to send email notifications. Make sure to:
1. Sign up at [Resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your `.env` file as `RESEND_API_KEY`

### Project Structure
```
├── client/          # React frontend
├── server/          # Express backend
├── shared/          # Shared types and schemas
├── attached_assets/ # Company assets and images
└── package.json     # Dependencies and scripts
```

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

### Troubleshooting
- Make sure port 5000 is not in use by other applications
- Check that all dependencies are installed correctly
- Verify your RESEND_API_KEY is valid and added to .env file