// Build script for Vercel deployment
import { execSync } from 'child_process';
import { copyFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

console.log('Building UMA website for deployment...');

try {
  // Run the client build
  console.log('Building client...');
  execSync('cd client && npm install && npm run build', { stdio: 'inherit' });
  
  // Create dist directory in root
  if (!existsSync('dist')) {
    mkdirSync('dist', { recursive: true });
  }
  
  // Copy client build to root dist
  console.log('Copying client build to dist...');
  execSync('cp -r client/dist/* dist/', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}