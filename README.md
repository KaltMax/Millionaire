# Millionaire

[![CI](https://github.com/KaltMax/Millionaire/actions/workflows/ci.yml/badge.svg)](https://github.com/KaltMax/Millionaire/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

A small "Who Wants to Be a Millionaire"-style quiz game, currently seeded with Lord of the Rings questions. Built as a full-stack TypeScript monorepo — a React client, an Express API, and a shared package that defines the API contract.

## Tech stack

- **Frontend:** React 19 + Vite 8
- **Backend:** Express 5
- **Language:** TypeScript (shared types package as the API contract)
- **Testing:** Vitest 4
- **Quality:** ESLint 10, Prettier 3, EditorConfig
- **CI:** GitHub Actions
- **Tooling:** npm workspaces (monorepo)

## Repository structure

```
Millionaire/
├── shared/       # Shared TypeScript types (the API contract)
├── backend/      # Express API (serves quiz rounds)
├── frontend/     # React + Vite client
├── .github/      # CI workflow
└── package.json  # Workspaces root + aggregate scripts
```

The three packages are npm **workspaces**, so a single install at the root wires them together and one lockfile governs the whole repo.

**Packages**

- [`shared/`](./shared) — shared TypeScript types (the API contract)
- [`backend/`](./backend/README.md) — Express API
- [`frontend/`](./frontend/README.md) — React + Vite client

## Prerequisites

- **Node.js** 22 or newer (CI runs on 24)
- **npm** 9+ (ships with Node)

## Getting started

```bash
git clone https://github.com/KaltMax/Millionaire.git
cd Millionaire
npm install        # installs all workspaces from the single root lockfile

# Copy the env templates
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

npm run dev        # starts backend and frontend together
```

- Backend API: [http://localhost:3000](http://localhost:3000) (endpoints: `GET /round`, `POST /round/:id/guess`)
- Frontend: [http://localhost:5173](http://localhost:5173)

## Environment variables

Each package reads configuration from a local, git-ignored `.env` file. Copy the
`.env.example` templates (done in "Getting started" above) and adjust as needed.

**`backend/.env`** — validated on startup; the server **exits** if a value is missing:

| Variable      | Example                 | Description                            |
| ------------- | ----------------------- | -------------------------------------- |
| `PORT`        | `3000`                  | Port the Express API listens on        |
| `CORS_ORIGIN` | `http://localhost:5173` | Allowed CORS origin (the frontend URL) |

**`frontend/.env`** — read by Vite at build time. `VITE_`-prefixed vars are **inlined
into the client bundle** (public — never put secrets here):

| Variable       | Example                 | Description             |
| -------------- | ----------------------- | ----------------------- |
| `VITE_API_URL` | `http://localhost:3000` | Base URL of the backend |

## Available scripts

Run from the repo root. Each command has `:backend`, `:frontend`, and (where
applicable) `:shared` variants to scope it to a single workspace.

| Command                | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Run backend and frontend together (parallel)   |
| `npm run build`        | Type-check and build all workspaces            |
| `npm test`             | Run the Vitest suites                          |
| `npm run lint`         | Lint with ESLint                               |
| `npm run format`       | Format the repo with Prettier (write)          |
| `npm run format:check` | Verify formatting without writing (used by CI) |

Example — work on a single package: `npm run dev:backend`, `npm run test:frontend`.

## Testing

Each package uses [Vitest](https://vitest.dev). Run everything with `npm test`,
or scope it: `npm run test:backend` / `npm run test:frontend`.

## Continuous integration

On every push to `main` and every pull request, GitHub Actions runs three parallel lanes (`shared`, `backend`, `frontend`). See [GITHUB_ACTIONS.md](./GITHUB_ACTIONS.md) for the full pipeline documentation.

## License

Released under the [MIT License](./LICENSE).
