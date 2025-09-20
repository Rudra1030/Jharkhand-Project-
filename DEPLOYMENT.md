# GitHub Pages Deployment Guide

This guide will help you deploy your Jharkhand Tourism website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Your project pushed to a GitHub repository

## Deployment Steps

### 1. Push Your Code to GitHub

If you haven't already, create a new repository on GitHub and push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. Configure Repository Settings

1. In your repository settings, go to **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Save changes

### 4. Deploy

The deployment will happen automatically when you push to the main branch. The GitHub Actions workflow will:

1. Install dependencies
2. Build your Next.js project
3. Deploy the static files to GitHub Pages

### 5. Access Your Site

Once deployed, your site will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

## Important Notes

- The site is configured to use the repository name as the base path
- If you want to use a custom domain, update the `cname` field in the workflow file
- The build process creates static files in the `dist` directory
- Make sure your images and assets are properly referenced for the production build

## Troubleshooting

### Common Issues

1. **404 Errors**: Make sure your `basePath` and `assetPrefix` are correctly set in `next.config.js`
2. **Images not loading**: Check that your image domains are whitelisted in the Next.js config
3. **Build failures**: Check the Actions tab in your GitHub repository for detailed error logs

### Manual Deployment

If you want to test the build locally:

```bash
npm run build
```

This will create a `dist` folder with your static files that you can preview locally.

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to your `public` folder with your domain name
2. Update the `cname` field in `.github/workflows/deploy.yml`
3. Configure DNS settings with your domain provider
