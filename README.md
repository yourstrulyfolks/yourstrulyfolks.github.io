# yourstruly.club

A landing page for yourstruly club - celebrating unique relationship vocabularies and connections.

## Setup for GitHub Pages

### Option 1: Using the main/master branch (Recommended)

1. Push this repository to GitHub
2. Go to your repository settings on GitHub
3. Navigate to **Pages** (under Settings)
4. Under **Source**, select:
   - Branch: `main` (or `master` if that's your default branch)
   - Folder: `/ (root)`
5. Click **Save**
6. Your site will be available at `https://[your-username].github.io/[repository-name]/`

### Option 2: Using the docs folder

If you prefer to use a `docs` folder:
1. Create a `docs` folder
2. Move `index.html`, `index.css`, and `index.js` into the `docs` folder
3. In repository settings → Pages, select:
   - Branch: `main` (or `master`)
   - Folder: `/docs`
4. Click **Save**

## Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server
```

Then visit `http://localhost:8000`

## Project Structure

```
yourstruly/
├── index.html      # Main HTML file
├── index.css       # Styles
├── index.js        # JavaScript animations
└── README.md       # This file
```

## Features

- Responsive design
- Animated icon breathing effects
- Custom fonts (Cyrene & Instrument Serif)
- Clean, minimal aesthetic
