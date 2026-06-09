# moreHOPE WebDev Profile

A personal web development portfolio built with Express, EJS, and MongoDB. The app serves a frontend portfolio website from EJS views, with static assets in `public/`, and is designed for showcasing projects, skills, and about information.

## Features

- Express server with EJS view rendering
- Static asset delivery from `public/`
- Portfolio pages including home, about, login, and an animated alien page
- Basic MongoDB connection using Mongoose
- Responsive frontend styling with Bootstrap and custom CSS

## Installation

1. Clone or copy the repository:

```bash
git clone <repo-url>
cd moreHope_WebDev_Profile
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file if you need environment-specific values (optional):

```bash
PORT=3000
```

4. Update the MongoDB connection if needed in `app.js`.

## Running the app

Start the server with:

```bash
node app.js
```

Then open `http://localhost:3000` in your browser.

## Project structure

- `app.js` - Express server entry point
- `package.json` - Project metadata and npm dependencies
- `index.html` - Example static page included in the repository
- `public/` - Static frontend assets
  - `css/` - Stylesheets
  - `img/` - Images
- `views/` - EJS templates for rendered pages
  - `partials/` - Shared header/footer templates

## Dependencies

- `express`
- `ejs`
- `dotenv`
- `mongoose`
- `body-parser`
- `jquery`
- `bootstrap`
- `lodash`
- `jsdom`

## Notes

- The current MongoDB connection URI is hardcoded in `app.js`; for production use, move it to `.env`.
- The `views` directory contains EJS templates for rendering dynamic pages.
- Static assets are served from `public/`.

## License

ISC
