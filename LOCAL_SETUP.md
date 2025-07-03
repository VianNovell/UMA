# Local Development Setup Guide

Follow these steps to set up the UMA website for local development on your machine.

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- Git

## Step 1: Install PostgreSQL

### On macOS (using Homebrew):
```bash
# Install PostgreSQL
brew install postgresql

# Start PostgreSQL service
brew services start postgresql

# Create a database for the project
createdb uma_local
```

### On Windows:
1. Download PostgreSQL from https://www.postgresql.org/download/windows/
2. Install and follow the setup wizard
3. Remember the password you set for the postgres user

### On Linux (Ubuntu/Debian):
```bash
# Install PostgreSQL
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create a database
sudo -u postgres createdb uma_local
```

## Step 2: Set Up Environment Variables

1. Copy the environment file:
```bash
cp .env.local .env
```

2. Edit the `.env` file and update the DATABASE_URL:
```
DATABASE_URL=postgresql://your_username@localhost:5432/uma_local
```

Replace `your_username` with your PostgreSQL username (usually your system username on macOS/Linux, or `postgres` on Windows).

## Step 3: Install Dependencies and Set Up Database

```bash
# Install project dependencies
npm install

# Push the database schema to your local database
npm run db:push
```

## Step 4: Start Development Server

```bash
npm run dev
```

The application should now be running at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Troubleshooting

### Database Connection Issues:
- Make sure PostgreSQL is running: `brew services list | grep postgresql` (macOS)
- Check if the database exists: `psql -l` (should show `uma_local`)
- Verify your username in the DATABASE_URL

### Port Already in Use:
- Kill any existing processes: `pkill -f "tsx server/index.ts"`
- Try restarting: `npm run dev`

### Permission Issues:
- On macOS/Linux, you might need to create a PostgreSQL user:
```bash
sudo -u postgres createuser --interactive your_username
```

## Database Management

### View Database Tables:
```bash
psql uma_local
\dt  # List tables
\d users  # Describe users table
\d contact_inquiries  # Describe contact_inquiries table
```

### Reset Database:
```bash
npm run db:push
```

## Development vs Production

- **Local Development**: Uses your local PostgreSQL database
- **Replit Environment**: Uses Replit's managed PostgreSQL database
- Both environments use the same code and schema