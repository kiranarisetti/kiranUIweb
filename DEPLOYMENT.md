# Deployment Guide

## How to Deploy to GitHub Pages

Your website is now configured for automatic deployment to GitHub Pages.

### Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** > **Pages**
   - Under "Build and deployment":
     - Source: Select **GitHub Actions**
   - That's it! The workflow will automatically build and deploy

3. **Access your website:**
   - Your site will be live at: `https://yourusername.github.io/kiranUIweb/`
   - It takes 2-3 minutes for the first deployment

### Important Notes:

- The `.github/workflows/deploy.yml` file handles automatic deployment
- Every push to the `main` branch triggers a new deployment
- The `dist` folder is not committed (it's in `.gitignore`) - it's built automatically
- The website uses the repository name `/kiranUIweb/` as the base path

### To Update Your Website:

Simply push changes to the main branch:
```bash
git add .
git commit -m "Updated content"
git push origin main
```

The site will automatically rebuild and redeploy in 2-3 minutes.

### Troubleshooting:

If the site doesn't load:
1. Check the **Actions** tab in GitHub to see if the deployment succeeded
2. Make sure GitHub Pages is set to use **GitHub Actions** as the source
3. Verify the repository name matches `/kiranUIweb/` in `vite.config.ts`
