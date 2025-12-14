# Deployment Guide

This project is set up for automatic deployment to Vercel when changes are pushed to the `main` branch.

## Option 1: Vercel GitHub Integration (Recommended - Easiest)

This is the simplest and recommended approach:

1. **Connect your GitHub repository to Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project
   - Click "Deploy"

2. **Automatic deployments:**
   - Every push to `main` branch will automatically trigger a deployment
   - Pull requests will create preview deployments
   - No additional configuration needed!

3. **Environment variables (if needed):**
   - Go to Project Settings → Environment Variables
   - Add any required environment variables

## Option 2: GitHub Actions Workflow

If you prefer using GitHub Actions, follow these steps:

### Prerequisites

1. **Get Vercel credentials:**
   - Install Vercel CLI: `npm i -g vercel`
   - Run `vercel login`
   - Run `vercel link` in your project directory
   - This will create a `.vercel` folder with your project and org IDs

2. **Add GitHub Secrets:**
   - Go to your GitHub repository
   - Navigate to Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `VERCEL_TOKEN`: Get from [vercel.com/account/tokens](https://vercel.com/account/tokens)
     - `VERCEL_ORG_ID`: Found in `.vercel/project.json` after running `vercel link`
     - `VERCEL_PROJECT_ID`: Found in `.vercel/project.json` after running `vercel link`

3. **Push to main branch:**
   - The workflow will automatically run on every push to `main`
   - Check the Actions tab in GitHub to see deployment status

### Workflow Features

- ✅ Runs on every push to `main` branch
- ✅ Creates preview deployments for pull requests
- ✅ Runs linter before building
- ✅ Builds the project before deploying
- ✅ Deploys to Vercel production

## Manual Deployment

If you need to deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Troubleshooting

### Build fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version matches (project uses Node 20)
- Check build logs in Vercel dashboard

### GitHub Actions fails
- Verify all secrets are correctly set in GitHub
- Check that Vercel token has proper permissions
- Ensure `.vercel` folder exists (run `vercel link`)

### Environment variables
- Add them in Vercel dashboard: Project Settings → Environment Variables
- Or in GitHub Actions: Settings → Secrets

## Notes

- The project is configured for Next.js 16
- Build output goes to `.next` folder
- Production deployments are automatically optimized by Vercel

