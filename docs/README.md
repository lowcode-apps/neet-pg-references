# NEET PG References - GitHub Pages

This directory contains the GitHub Pages website for NEET PG question papers and solutions.

## Local Development

To test the website locally:

1. **Using Python's built-in server:**
   ```bash
   cd docs
   python3 -m http.server 8000
   ```
   Then visit: http://localhost:8000

2. **Using Node.js (if installed):**
   ```bash
   cd docs
   npx http-server -p 8000
   ```
   Then visit: http://localhost:8000

## Features

- Responsive design that works on all devices
- Clean, modern UI inspired by MkDocs
- In-browser PDF viewing
- Easy navigation between papers
- Download functionality for offline study
- Keyboard shortcuts (h for home, Esc to exit PDF viewer)

## Structure

- `index.html` - Main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - JavaScript for navigation and PDF viewing
- `.nojekyll` - Tells GitHub Pages to skip Jekyll processing
- `CNAME` - Optional custom domain configuration

## Deployment

This site is configured to deploy automatically through GitHub Pages from the `docs/` folder.

To enable GitHub Pages:
1. Go to repository Settings
2. Navigate to Pages section
3. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs
4. Save

Your site will be available at: `https://[username].github.io/[repository-name]/`

## Technologies Used

- Pure HTML, CSS, and JavaScript (no build process required)
- Font Awesome for icons
- Native browser PDF rendering
- CSS Grid and Flexbox for layout
- CSS variables for theming

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Educational use only.
