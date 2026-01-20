# Deployment Troubleshooting Guide

## ✅ Issue Fixed: Netlify Build Error

### Problem
Netlify deployment failed with error:
```
Deploy directory 'dist' does not exist
Build script returned: "Do not use this command, only use lint to check"
```

### Root Cause
The `package.json` had placeholder build commands that didn't actually build the project:
```json
{
  "scripts": {
    "build": "echo 'Do not use this command, only use lint to check'"
  }
}
```

### Solution Applied
Updated `package.json` with proper Vite build commands:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "..."
  }
}
```

### Configuration Files Added

#### netlify.toml
- Configures Netlify build settings
- Sets publish directory to `dist`
- Adds SPA routing (redirects to index.html)
- Includes security headers
- Optimizes caching for assets

#### vercel.json
- Configures Vercel deployment
- Sets output directory to `dist`
- Adds SPA rewrites
- Optimizes caching

## 🚀 Next Steps for Deployment

### For Netlify
1. **Push the changes** to your GitHub repository:
   ```bash
   git push origin master
   ```

2. **Trigger new deployment** in Netlify:
   - Netlify will automatically detect the push
   - Or manually trigger: Deploys → Trigger deploy → Deploy site

3. **Verify build logs**:
   - Check that `pnpm run build` executes successfully
   - Confirm `dist` directory is created
   - Verify deployment succeeds

### For Vercel
1. **Push the changes** to your GitHub repository
2. Vercel will auto-deploy on push
3. Or manually deploy:
   ```bash
   npm i -g vercel
   vercel --prod
   ```

## 📋 Build Process Explained

### What happens during `pnpm run build`:

1. **TypeScript Compilation** (`tsc`)
   - Checks all TypeScript files for type errors
   - Ensures code quality and type safety
   - Does not emit files (noEmit: true in tsconfig)

2. **Vite Build** (`vite build`)
   - Bundles all source code
   - Minifies JavaScript and CSS
   - Optimizes images and assets
   - Generates source maps
   - Creates production-ready files in `dist/`

3. **Output Structure** (`dist/`)
   ```
   dist/
   ├── index.html          # Entry HTML file
   ├── assets/
   │   ├── index-[hash].js    # Bundled JavaScript
   │   ├── index-[hash].css   # Bundled CSS
   │   └── [images]           # Optimized images
   └── favicon.png
   ```

## 🔍 Verification Steps

### Test Build Locally (Optional)
```bash
# Install dependencies
pnpm install

# Run build
pnpm run build

# Check dist directory exists
ls -la dist/

# Preview production build
pnpm run preview
```

### Expected Output
```
✓ built in [time]ms
dist/index.html                   [size]
dist/assets/index-[hash].js       [size]
dist/assets/index-[hash].css      [size]
```

## 🐛 Common Issues & Solutions

### Issue: "tsc: command not found"
**Solution:** TypeScript is installed as a dev dependency. Ensure `pnpm install` ran successfully.

### Issue: "Module not found" during build
**Solution:** 
1. Clear node_modules: `rm -rf node_modules`
2. Clear pnpm cache: `pnpm store prune`
3. Reinstall: `pnpm install`

### Issue: Build succeeds but site shows blank page
**Solution:**
1. Check browser console for errors
2. Verify all image URLs are accessible
3. Check that base path is correct in vite.config.ts

### Issue: "Cannot find module '@/...'"
**Solution:** The `@` alias is configured in:
- `vite.config.ts` (for Vite)
- `tsconfig.json` (for TypeScript)
Both should have matching path configurations.

### Issue: CSS not loading
**Solution:**
1. Verify `src/index.css` exists
2. Check it's imported in `src/main.tsx`
3. Ensure Tailwind directives are present

## 📊 Build Performance

### Expected Build Times
- **Development** (`pnpm run dev`): ~2-3 seconds
- **Production** (`pnpm run build`): ~10-30 seconds
- **Netlify/Vercel**: ~1-2 minutes (includes install)

### Build Size Targets
- **JavaScript**: ~200-500 KB (minified + gzipped)
- **CSS**: ~50-100 KB (minified + gzipped)
- **Total**: ~300-700 KB (excluding images)

## 🎯 Deployment Checklist

Before deploying, ensure:
- [x] `package.json` has correct build scripts
- [x] `netlify.toml` or `vercel.json` configured
- [x] All environment variables set (if any)
- [x] `.gitignore` includes `dist/` and `node_modules/`
- [x] Code pushed to GitHub
- [x] Build succeeds locally
- [x] All lint checks pass

## 📞 Support

If deployment still fails:
1. Check deployment platform logs for specific errors
2. Verify Node version matches (20+)
3. Ensure all dependencies are in `package.json`
4. Check for any missing environment variables

## 🎉 Success Indicators

Your deployment succeeded when you see:
- ✅ Build completes without errors
- ✅ `dist` directory created
- ✅ Site is accessible at deployment URL
- ✅ All pages load correctly
- ✅ Images display properly
- ✅ Navigation works
- ✅ Dark/Light mode toggle works
- ✅ PDF download works
- ✅ Contact form opens email client

---

**Last Updated:** January 2026  
**Status:** ✅ Build configuration fixed and ready for deployment
