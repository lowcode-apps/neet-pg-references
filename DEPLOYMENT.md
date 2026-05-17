# GitHub Pages Deployment Guide

This guide will help you deploy the NEET PG References website to GitHub Pages.

## Prerequisites

- GitHub repository with the `docs/` folder
- Admin access to the repository

## Step-by-Step Deployment

### 1. Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/[username]/neet-pg-references`
2. Click on **Settings** (top navigation bar)
3. Scroll down to **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` (or your default branch)
   - **Folder**: Select `/docs`
5. Click **Save**

### 2. Wait for Deployment

- GitHub will automatically build and deploy your site
- This usually takes 1-3 minutes
- You'll see a message at the top with your site URL

### 3. Access Your Website

Your site will be available at:
```
https://[username].github.io/neet-pg-references/
```

For example:
```
https://jagankumar-egov.github.io/neet-pg-references/
```

### 4. Update the README

Update the main README.md with your actual GitHub Pages URL:

```markdown
## 🌐 View Online

**[Visit the GitHub Pages Website](https://[username].github.io/neet-pg-references/)**
```

## Testing Locally

Before deploying, you can test the website locally:

### Using Python (easiest)
```bash
cd docs
python3 -m http.server 8000
```
Then visit: http://localhost:8000

### Using Node.js
```bash
cd docs
npx http-server -p 8000
```
Then visit: http://localhost:8000

## Custom Domain (Optional)

If you want to use a custom domain like `neet-pg.yourdomain.com`:

1. **Update the CNAME file** in `docs/CNAME`:
   ```
   neet-pg.yourdomain.com
   ```

2. **Configure DNS settings** with your domain provider:
   - Add a CNAME record pointing to: `[username].github.io`
   - Or add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

3. **Enable HTTPS** in GitHub Pages settings (recommended)

## Troubleshooting

### Site not loading PDFs
- Make sure PDF files are in the correct folders: `question-papers/` and `solved-papers/`
- Check that file paths in `index.html` are correct (using `../` to go up from `docs/`)

### Site showing 404
- Verify GitHub Pages is enabled in Settings
- Check that the branch and folder are correct
- Wait a few minutes for GitHub to build the site

### Changes not appearing
- GitHub Pages can take 1-10 minutes to update
- Try clearing your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Actions tab to see if the deployment succeeded

### PDF viewer not working
- Some browsers block iframe content over HTTP
- Make sure you're using HTTPS (GitHub Pages provides this automatically)
- Try a different browser (Chrome, Firefox, Safari all support PDF viewing)

## File Structure

The website consists of these files in the `docs/` folder:

```
docs/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── .nojekyll          # Tells GitHub to skip Jekyll processing
├── CNAME              # Custom domain (optional)
└── README.md          # Documentation
```

## Features of the Website

- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- 🎨 **Modern UI**: Clean interface inspired by MkDocs
- 📄 **PDF Viewer**: View PDFs directly in browser
- ⬇️ **Download**: Download any PDF for offline study
- ⌨️ **Keyboard Shortcuts**:
  - Press `h` to go to home
  - Press `Esc` to exit PDF viewer
- 🚀 **Fast Loading**: No build process, pure HTML/CSS/JS

## Updating the Website

To update content:

1. Edit files in the `docs/` folder
2. Commit and push to GitHub:
   ```bash
   git add docs/
   git commit -m "Update website"
   git push
   ```
3. GitHub Pages will automatically rebuild (1-3 minutes)

## Adding New PDFs

1. Add PDF files to `question-papers/` or `solved-papers/` folder
2. Update `docs/index.html` to add links in the sidebar:
   ```html
   <a href="#" class="nav-link" onclick="loadPDF('../solved-papers/NEW-FILE.pdf', 'Display Title')">
       <i class="fas fa-file-pdf"></i> Display Name
   </a>
   ```
3. Commit and push changes

## Support

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Verify your repository settings
3. Check the browser console for errors (F12)
4. Ensure all file paths are correct

## Security

- All content is served over HTTPS
- No server-side code (static site)
- No user data collection
- PDFs are served directly from GitHub

---

**Need Help?** Open an issue in the GitHub repository.
