# Deekas - Share Your Nail Art Designs

A modern, responsive web application for discovering, curating, and sharing beautiful nail art inspiration. Designed with a vibrant, community-focused UI, Deekas allows users to browse trending designs across various categories and securely upload their own custom photos directly from their devices.

## Features

- **Dynamic Galleries**: Infinite-scrolling feeds powered by a robust backend architecture, featuring seamless categorical filtering (Manicures, Pedicures, Seasonal, Minimalist, etc.).
- **Trending System**: Algorithmic "Trending 🔥" section that curates the most popular designs based on simulated user interactions.
- **Custom User Uploads**: Fully functional upload interface allowing users to share their own creations to the platform.
- **macOS Native HEIC Processing**: A custom Python backend server specifically built to intercept Apple iPhone `.heic` photos, converting them securely to web-safe JPGs using native macOS `sips` commands before they hit the browser limit.
- **Persistent LocalStorage**: A frictionless data persistence layer utilizing browser `localStorage`, ensuring user uploads and interactions permanently survive browser refreshes.
- **Clean Aesthetic**: A beautiful, minimalist pink-and-white UI featuring interactive modal popups, CSS grid layouts, and smooth animations.

## Tech Stack

- **Frontend**: Vanilla HTML5, CSS3 (Flexbox/Grid), and Modern JavaScript (ES6+).
- **Backend Infrastructure**: Python 3 `http.server` customized for multi-part file processing.
- **Image Processing Engine**: Native macOS Terminal `sips` operations for zero-dependency image conversion, alongside client-side fallback `heic2any` pipelines.
- **Database Architecture**: Static JSON deployment merged seamlessly with frontend `localStorage` databases.

## Getting Started

### Prerequisites
- macOS Environment (for HEIC conversion support)
- Python 3.x installed

### Installation & Running

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/shahhadiqa/ResumeWebsite.git
   cd ResumeWebsite
   ```

2. Start the custom Python backend server to enable full upload support:
   ```bash
   python3 server.py
   ```

3. Open your web browser and navigate directly to:
   ```
   http://localhost:8000
   ```

4. You can now browse the interactive galleries or click "+ SHARE DESIGN" to test the HEIC conversion pipeline!

## File Structure

```
├── index.html       # Application entry point and UI structure
├── styles.css       # Core design system and responsive properties
├── script.js        # Dynamic routing, gallery logic, and API calls
├── server.py        # Python HTTP Server and Image Processing pipeline
├── images.json      # Pre-curated image database
└── uploads/         # Local secure storage for user image submissions
```

## Future Scope

- Expanding the backend JSON storage to a full cloud-based dynamic database.
- Integrating user authentication (OAuth).
- Implementing a real-time 'like' synchronization system across client sessions.