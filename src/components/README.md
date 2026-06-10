# Components

This folder is reserved for the Vite/React component split requested for the portfolio site:

- `Navbar`
- `Hero`
- `About`
- `Experience`
- `Projects`
- `Skills`
- `LifeGallery`
- `Contact`

The current local preview uses `src/main.tsx` as a self-contained entry so it can run on this machine without npm.
When npm/Vite dependencies are installed, these components can be moved out of `main.tsx` one by one without changing
the content model in `src/data/profile.ts`.
