# Deployment Guide for Render.com
**Developer:** Joshua Kim S. Entrina (Josuwapy)  
**Institution:** Torres Capitol College (`philcountryville.com`)  
**Project:** BSIT Digital Portfolio (featuring School Billing System & Faculty Evaluation System Capstones)

This portfolio is fully configured and ready for 1-click deployment on **Render** (both as a **Node.js Web Service** or a **Static Site**).

---

## Method 1: Deploy as a Web Service (Recommended)

Render will automatically read the included `render.yaml` blueprint.

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for Render deployment"
   git push origin main
   ```

2. **Connect to Render:**
   - Log in to your [Render Dashboard](https://dashboard.render.com/).
   - Click **New +** > **Blueprint**.
   - Select your repository (`Josuwapy/...`).
   - Render will auto-detect `render.yaml` and configure:
     - **Build Command:** `npm install && npm run build`
     - **Start Command:** `npm start`
     - **Health Check:** `/healthz`
     - **Region:** Singapore (`singapore` - lowest latency for Northern Mindanao / Philippines).
   - Click **Apply**.

---

## Method 2: Manual Web Service Setup (Without Blueprint)

If you prefer to configure manually:
1. In Render Dashboard, click **New +** > **Web Service**.
2. Connect your GitHub repository.
3. Set the following settings:
   - **Name:** `joshua-entrina-portfolio`
   - **Language / Environment:** `Node`
   - **Branch:** `main`
   - **Region:** `Singapore (Southeast Asia)`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Instance Type:** `Free`
4. Click **Deploy Web Service**.

---

## Method 3: Deploy as a Static Site (Free perpetual static hosting)

If you prefer Render's Static Site hosting:
1. In Render Dashboard, click **New +** > **Static Site**.
2. Connect your GitHub repository.
3. Configure:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. In the **Redirects / Rewrites** tab:
   - **Type:** `Rewrite`
   - **Source:** `/*`
   - **Destination:** `/index.html`
5. Click **Create Static Site**.

---

## Production Checks Performed:
- [x] Express production server with SPA fallback (`server.js`)
- [x] Production asset caching headers (immutable hashed assets)
- [x] Automatic `/healthz` endpoint for zero-downtime health monitoring
- [x] Public asset mirrors for all portfolio images (`public/assets/images`)
- [x] Responsive layout tested for smartphones and Windows desktops
