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
npm run dev        # starts backend and frontend together
```

- Backend API: [http://localhost:3000](http://localhost:3000) (endpoint: `GET /round`)
- Frontend: [http://localhost:5173](http://localhost:5173)

By default the frontend calls the backend at `http://localhost:3000`. To point it
elsewhere, set `VITE_API_URL` (e.g. in `frontend/.env`):

```bash
VITE_API_URL=http://localhost:3000
```

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
