# 🚀 Deployment Guide for GitHub Pages

This guide will walk you through deploying your 3D Solar System app to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed locally
- Project ready for deployment

## 🔧 Step 1: Prepare Your Project

### Update `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-3d-solar-system/', // Replace with your repository name
})
```

**Important**: The `base` path must match your GitHub repository name!

## 📦 Step 2: Install gh-pages

```bash
npm install --save-dev gh-pages
```

## 📝 Step 3: Add Deploy Scripts

Update your `package.json`:

```json
{
  "name": "solar-system",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## 🎯 Step 4: Create GitHub Repository

### Option A: New Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: 3D Solar System"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/react-3d-solar-system.git

# Push to GitHub
git push -u origin main
```

### Option B: Existing Repository

```bash
# Add changes
git add .

# Commit
git commit -m "Prepare for deployment"

# Push
git push origin main
```

## 🚀 Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your production bundle (`npm run build`)
2. Create a `gh-pages` branch
3. Push the `dist` folder to that branch
4. Deploy to GitHub Pages

## ⚙️ Step 6: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

## ⏱️ Step 7: Wait for Deployment

- Deployment typically takes 2-5 minutes
- Check the **Actions** tab to monitor progress
- Once complete, your site will be live at:
  ```
  https://YOUR_USERNAME.github.io/react-3d-solar-system/
  ```

## ✅ Step 8: Verify Deployment

Visit your deployed site and check:
- ✓ All planets load correctly
- ✓ Textures display properly
- ✓ Controls work (keyboard shortcuts)
- ✓ No console errors

## 🔄 Updating Your Deployment

Whenever you make changes:

```bash
# Make your changes
# ...

# Add and commit
git add .
git commit -m "Description of changes"

# Push to main branch
git push origin main

# Deploy updated version
npm run deploy
```

## 🐛 Troubleshooting

### Issue: Blank Page After Deployment

**Solution**: Check `vite.config.js` base path matches repository name

```javascript
base: '/react-3d-solar-system/', // Must match repo name!
```

### Issue: Textures Not Loading

**Solution**: Ensure textures are in `public/textures/` and paths are correct

```javascript
texture: '/textures/earth.jpg' // Correct
texture: './textures/earth.jpg' // Incorrect
```

### Issue: 404 on Refresh

**Solution**: GitHub Pages doesn't support client-side routing by default. For this single-page app, this shouldn't be an issue.

### Issue: Deployment Failed

**Solution**: Check GitHub Actions tab for error logs

Common fixes:
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`
- Retry: `npm run deploy`

## 📱 Custom Domain (Optional)

### Add Custom Domain

1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. Go to repository **Settings** → **Pages**
3. Enter your custom domain in **Custom domain** field
4. Add DNS records at your domain provider:

```
Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
```

5. Wait for DNS propagation (5-48 hours)

### Add CNAME File

Create `public/CNAME` with your domain:
```
www.yourdomain.com
```

## 🔒 Enable HTTPS

GitHub Pages automatically provides HTTPS for `*.github.io` domains.

For custom domains:
1. Wait for DNS propagation
2. Go to **Settings** → **Pages**
3. Check **Enforce HTTPS** option

## 📊 Analytics (Optional)

### Add Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `index.html`:

```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

## 🎉 Success!

Your 3D Solar System is now live!

**Share your deployment:**
- 🌐 Live Site: `https://YOUR_USERNAME.github.io/react-3d-solar-system/`
- 📂 Repository: `https://github.com/YOUR_USERNAME/react-3d-solar-system`
- 📖 Documentation: Link to your README

## 💡 Additional Tips

### Optimize Build Size

```bash
# Analyze bundle size
npm run build -- --mode production

# Check dist folder size
du -sh dist/
```

### Update Deployment Frequency

**Quick Updates**: `npm run deploy`  
**Full Updates**: Commit to main first, then deploy

### Automate with GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

This auto-deploys on every push to main!

---

**Need Help?**
- 📧 Contact: [Your Email]
- 🐙 Issues: [GitHub Issues](https://github.com/YOUR_USERNAME/react-3d-solar-system/issues)

**Happy Deploying! 🚀**
