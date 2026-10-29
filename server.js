import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

const distPath = path.join(__dirname, 'dist');
const srcImagesPath = path.join(__dirname, 'src', 'assets', 'images');
const publicImagesPath = path.join(__dirname, 'public', 'assets', 'images');

// Ensure dist directory exists
if (!fs.existsSync(distPath)) {
  console.warn(`[Warning] Dist directory not found at ${distPath}. Run "npm run build" first.`);
}

// Security & Caching Headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Health check endpoint for Render health checks
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Primary static file handler for Vite production bundle
app.use(express.static(distPath, {
  maxAge: '1d',
  setHeaders: (res, filePath) => {
    // Cache hashed assets aggressively
    if (filePath.includes('/assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// Redundancy fallbacks: Direct image routing for any legacy relative links
if (fs.existsSync(srcImagesPath)) {
  app.use('/src/assets/images', express.static(srcImagesPath, { maxAge: '7d' }));
  app.use('/assets/images', express.static(srcImagesPath, { maxAge: '7d' }));
}
if (fs.existsSync(publicImagesPath)) {
  app.use('/images', express.static(publicImagesPath, { maxAge: '7d' }));
}

// Dedicated profile image shortcut
app.get(['/profile.jpg', '/profile.png', '/juswa.jpg', '/juswa.png', '/profile-photo.jpg'], (req, res) => {
  const candidates = [
    path.join(distPath, 'juswa.jpg'),
    path.join(distPath, 'juswa.png'),
    path.join(__dirname, 'public', 'juswa.jpg'),
    path.join(srcImagesPath, 'juswa.jpg'),
    path.join(distPath, 'assets', 'images', 'juswa.jpg'),
    path.join(distPath, 'assets', 'images', 'joshua_formal_suit_1791945332404.jpg'),
    path.join(srcImagesPath, 'joshua_formal_suit_1791945332404.jpg'),
  ];
  for (const file of candidates) {
    if (fs.existsSync(file)) {
      return res.sendFile(file);
    }
  }
  res.status(404).send('Profile image not found');
});

// Prevent returning HTML index fallback for missing assets with file extensions
app.get(/\.(jpg|jpeg|png|gif|webp|svg|ico|css|js|map|woff|woff2|ttf)$/i, (req, res) => {
  res.status(404).send('Static asset not found');
});

// SPA Fallback: send index.html for application routes
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Application bundle not built. Please run "npm run build".');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`===================================================`);
  console.log(`  Joshua Kim S. Entrina - BSIT Digital Portfolio`);
  console.log(`  Institution : Torres Capitol College (philcountryville.com)`);
  console.log(`  Production Server Running on: http://${HOST}:${PORT}`);
  console.log(`  Ready for Render Deployment`);
  console.log(`===================================================`);
});
