# MovieFinder React

## Setup

1) Install dependencies

```bash
npm install
```

2) Configure environment variables

Create a `.env` file in the project root with your API keys. You can copy from `.env.example`:

```bash
cp .env.example .env
```

Then edit `.env` and set your keys:

```
VITE_OMDB_API_KEY=your_omdb_key_here
# Optional if you add TMDB usage later
VITE_TMDB_API_KEY=your_tmdb_key_here
```

Note: After changing env files, restart the dev server.

3) Start the dev server

```bash
npm run dev
```

## Troubleshooting

- If searches fail with "Failed to fetch movies" or a message about missing API key, ensure `VITE_OMDB_API_KEY` is set in `.env` and that you restarted the dev server.
- The app uses the OMDb API (`https://www.omdbapi.com`). Get a free key at `https://www.omdbapi.com/apikey.aspx`.
- This project uses Vite. For configuration, see `vite.config.js`.

