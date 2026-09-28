# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with Hugo static site generator using the PaperMod theme. The site is deployed to GitHub Pages at https://55kwukai.github.io/.

## Essential Commands

**Development:**
```bash
hugo server          # Start dev server at http://localhost:1313
hugo server -D       # Include draft posts
```

**Build:**
```bash
hugo                 # Build site to public/ directory
hugo --minify        # Build with minification
hugo --cleanDestinationDir  # Build and remove stale files from public/ directory
```

**Content Management:**
```bash
hugo new posts/Tech/my-post.md     # Create new post in Tech category
hugo new posts/Life/my-post.md     # Create new post in Life category
hugo new posts/Product/my-post.md  # Create new post in Product category
```

## Architecture

**Content Organization:**
- Posts are organized in `content/posts/` with three main categories: `Tech/`, `Life/`, and `Product/`
- Each post is a markdown file with YAML frontmatter
- The site uses profile mode (enabled in config.yml) showing author info on homepage

**Theme Customization:**
- Base theme: PaperMod located in `themes/PaperMod/`
- Custom CSS overrides in `assets/css/` (mirrors theme structure)
- Custom layout overrides in `layouts/` (mirrors theme structure)
- To customize theme components, copy from `themes/PaperMod/` to root and modify

**Static Assets:**
- `static/img/` - Images and icons
- `static/Resume.pdf` - Resume file linked in navigation
- Files in `static/` are served at site root

**Configuration:**
- `config.yml` - Main Hugo configuration
- Site uses Chinese language with CJK support enabled
- Profile mode configured with social icons (Twitter, GitHub, LinkedIn, Email)

**Build Output:**
- Generated site goes to `public/` directory
- `public/` is build output and is gitignored. Do not commit it
- Pushing `main` runs GitHub Actions, which builds with Hugo extended 0.115.3 and publishes `public/` to the `gh-pages` branch of `55kwukai/55kwukai.github.io`
- Git history for posts lives in this repository root. Roll back a post here, then push `main` so Actions republishes the site

## Key Configuration Notes

- `baseURL` is set to GitHub Pages URL
- `hasCJKLanguage: true` for proper Chinese text handling
- `buildDrafts: false` - drafts excluded from production builds
- `author`, table of contents, comments, and share buttons use the defaults in `config.yml`. Do not repeat them in post frontmatter
- Post `date` is the publication date and stays in frontmatter. `lastmod` comes from Git via `enableGitInfo`. Do not set `lastmod` in posts. The deploy checkout uses `fetch-depth: 0` so that history is available at build time
- Syntax highlighting uses Darcula style with line numbers enabled
- Search functionality powered by Fuse.js (configured in fuseOpts) 
