# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static news website for Jharkhand state news in Hindi. The project is a modern, responsive web application built with vanilla HTML5, CSS3, and JavaScript - no frameworks or build tools required.

## Key Architecture

### Frontend Structure
- **Static Single Page Application**: All content loads dynamically via JavaScript
- **Component-based approach**: Modular JavaScript functions create news cards, featured articles, and trending items
- **Data-driven**: News content stored in JavaScript data structures and rendered dynamically
- **Mobile-first responsive design**: CSS Grid and Flexbox with multiple breakpoints

### Core Technologies
- **HTML5**: Semantic structure with proper meta tags and Hindi language support
- **CSS3**: Modern features (Grid, Flexbox, gradients, animations, backdrop-filter)
- **Vanilla JavaScript**: No external JavaScript dependencies
- **External Resources**: Google Fonts (Noto Sans Devanagari), Font Awesome icons, Unsplash images

### Data Architecture
- News articles stored as JavaScript objects in `newsData` array in `script.js`
- Each article has: id, title, excerpt, content, category, date, image, featured flag
- Dynamic rendering creates DOM elements from data
- Supports featured articles and trending news sections

## Development Commands

### Running the Application
```bash
# Open in browser directly (no server required)
start index.html

# Or serve with local server for development
python -m http.server 8000
# Then visit http://localhost:8000
```

### Testing
```bash
# No automated tests currently configured
# Manual testing in browser across different screen sizes
```

### Code Validation
```bash
# Validate HTML (if installed)
html5validator index.html

# Check for JavaScript errors in browser console
# CSS validation at https://jigsaw.w3.org/css-validator/
```

## File Structure and Responsibilities

### `index.html` (9.7KB)
- Main HTML structure with semantic markup
- Includes all sections: header, navigation, breaking news, main content, sidebar, footer
- Dynamic content containers populated by JavaScript
- Hindi language support with proper meta tags

### `styles.css` (13.5KB) 
- Complete responsive styling with mobile-first approach
- CSS Grid layout for main content and news cards
- Custom animations (breaking news ticker, hover effects)
- Three responsive breakpoints: 1024px, 768px, 480px
- Color scheme: Primary blue (#2a5298), gold accents (#ffd700), breaking news red (#dc3545)

### `script.js` (22.7KB)
- Contains complete news data (10 Jharkhand-focused articles)
- Dynamic DOM manipulation functions for content rendering
- Mobile menu, search functionality, and smooth scrolling
- Performance optimizations (lazy loading, intersection observer)
- Error handling and performance monitoring

## Content and Localization

### Language Support
- Primary language: Hindi (lang="hi")
- Font: Noto Sans Devanagari for proper Hindi typography
- All UI text, news content, and navigation in Hindi
- Date formatting in Hindi locale

### News Categories
- राज्य समाचार (State News)
- राजनीति (Politics) 
- खेल (Sports)
- व्यापार (Business)
- मनोरंजन (Entertainment)
- स्वास्थ्य (Health)
- शिक्षा (Education)
- धर्म (Religion)

## Important Implementation Details

### News Data Management
- Add new articles to `newsData` array in `script.js`
- Set `featured: true` for main featured article (only one should be featured)
- Images should be 800x400px from Unsplash or similar
- Date format: "YYYY-MM-DD"

### Responsive Behavior
- Desktop (1200px+): Two-column layout with sidebar
- Tablet (768px-1023px): Single column, news grid adapts
- Mobile (≤767px): Hamburger menu, stacked layout, optimized touch targets
- Very small screens (≤480px): Hide search box, compress content

### Performance Features
- Lazy loading images with `loading="lazy"` attribute
- Intersection Observer for advanced lazy loading
- CSS transforms for smooth animations
- Breaking news ticker animation with CSS keyframes
- Event delegation for better performance

### Interactive Elements
- Mobile hamburger menu with animation
- Search box (currently shows alert, not implemented)
- Hover effects on cards and buttons
- Smooth scrolling navigation
- Social media links (placeholder URLs)

## Development Guidelines

### Adding News Articles
1. Add new object to `newsData` array in `script.js`
2. Include all required fields: id, title, excerpt, content, category, date, image
3. Set `featured: false` for regular articles
4. Use proper Hindi text formatting
5. Image URLs should point to 800x400px images

### Styling Changes
- Main color variables are defined inline in CSS - consider extracting to CSS custom properties
- Maintain 15px container padding on mobile, 30px on desktop
- Use existing transition classes for consistency
- Test across all breakpoints when making layout changes

### Code Maintenance
- All JavaScript functions are modular and can be tested individually
- Error handling is implemented for unhandled promises and general errors
- Performance monitoring logs page load times to console
- No external dependencies to maintain or update

This is a production-ready static website that can be deployed to any web server or CDN without a build process.