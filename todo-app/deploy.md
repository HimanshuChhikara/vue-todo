# Deploying to Cloudflare Pages

This guide will help you deploy the Vue.js Todo App to Cloudflare Pages.

## Prerequisites

1. A Cloudflare account
2. Git repository with your code (GitHub, GitLab, etc.)

## Method 1: Deploy via Cloudflare Dashboard

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Go to Cloudflare Dashboard:**
   - Log in to your Cloudflare account
   - Navigate to "Pages" in the sidebar
   - Click "Create a project"

3. **Connect your repository:**
   - Choose "Connect to Git"
   - Select your repository
   - Authorize Cloudflare to access your repository

4. **Configure build settings:**
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** (leave empty if project is in root)

5. **Deploy:**
   - Click "Save and Deploy"
   - Wait for the build to complete
   - Your app will be available at the provided URL

## Method 2: Deploy using Wrangler CLI

1. **Install Wrangler:**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Deploy:**
   ```bash
   wrangler pages deploy dist --project-name=your-project-name
   ```

## Environment Variables (Optional)

If you need to add environment variables:

1. Go to your Cloudflare Pages project settings
2. Navigate to "Environment variables"
3. Add any required variables

## Custom Domain (Optional)

1. Go to your Cloudflare Pages project settings
2. Navigate to "Custom domains"
3. Add your domain and follow the DNS configuration instructions

## Continuous Deployment

Once connected to Git, Cloudflare Pages will automatically:
- Deploy on every push to the main branch
- Create preview deployments for pull requests
- Provide build logs and deployment status

## Troubleshooting

### Build Failures
- Check that all dependencies are in `package.json`
- Ensure the build command is correct
- Verify the output directory is `dist`

### Routing Issues
- The `_redirects` file handles SPA routing
- Make sure it's included in your build output

### Performance
- Cloudflare Pages automatically optimizes static assets
- Consider enabling Cloudflare's CDN features for better performance

## Support

For more information, visit:
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Vue.js Documentation](https://vuejs.org/) 