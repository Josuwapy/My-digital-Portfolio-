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

// Serve static assets from dist
app.use(express.static(distPath, {
  maxAge: '1d',
  setHeaders: (res, filePath) => {
    // Cache hashed assets aggressively
    if (filePath.includes('/assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// SPA Fallback: send index.html for any unknown route
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
