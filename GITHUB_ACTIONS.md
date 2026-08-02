# GitHub Actions – CI Pipeline

This repository runs continuous integration via GitHub Actions. The workflow is
defined in [`.github/workflows/ci.yml`](./.github/workflows/ci.yml).

## When it runs

The pipeline is triggered on:

- **`push` to `main`** – validates whatever lands on the default branch.
- **`pull_request`** (any target branch) – validates changes before they are
  merged.

## Structure

The project is an npm **workspaces monorepo** (`shared`, `backend`, `frontend`).
CI runs **three independent jobs in parallel**, one per workspace:

| Lane         | Stages                                       |
| ------------ | -------------------------------------------- |
| **shared**   | Install → Format Check → Type Check          |
| **backend**  | Install → Format Check → Lint → Build → Test |
| **frontend** | Install → Format Check → Lint → Build → Test |

All lanes run at the same time (no `needs:` between them). Within a lane the
stages run sequentially and are **fail-fast** – the first failing stage stops
that lane and marks the run red.

The `shared` lane is deliberately thinner: `shared` is a types-only package, so
it has nothing to lint or test. Its **Type Check** stage runs `tsc --noEmit` to
validate the contract in isolation (errors in exports that no consumer uses yet
would otherwise go unnoticed), and its **Format Check** is the only place
`shared/`'s formatting is enforced. When `shared` gains runtime logic, add Lint
and Test stages to this lane.

### Stages

| Stage            | Command (backend / frontend)              | Purpose                                                           |
| ---------------- | ----------------------------------------- | ----------------------------------------------------------------- |
| **Install**      | `npm ci`                                  | Installs **all** workspaces from the single root lockfile.        |
| **Format Check** | `npm run format:check:{backend,frontend}` | Fails if any file is not Prettier-formatted (non-mutating check). |
| **Lint**         | `npm run lint:{backend,frontend}`         | ESLint (flat config) for the package.                             |
| **Build**        | `npm run build:{backend,frontend}`        | Type-checks and compiles (`tsc` / `tsc -b && vite build`).        |
| **Test**         | `npm run test:{backend,frontend}`         | Runs the Vitest suite.                                            |

Because it is a workspaces monorepo, a single `npm ci` at the repo root installs
every workspace's dependencies from one `package-lock.json`; the stages are then
scoped to a package with the `:backend` / `:frontend` script variants.

## Environment

- **Runner:** `ubuntu-latest`
- **Node.js:** 24 (via `actions/setup-node@v7`, with `cache: npm`)
- **Checkout:** `actions/checkout@v7`

The `cache: npm` option keys on the root `package-lock.json`, so dependency
installs are cached between runs.

## Reproducing CI locally

Run the same checks before pushing. From the repo root:

```bash
# Everything, across all workspaces
npm run format:check   # or: npm run format   (to auto-fix)
npm run lint
npm run build
npm test

# Or scoped to a single package (mirrors a CI lane)
npm run format:check:backend
npm run lint:backend
npm run build:backend
npm run test:backend
```

If `format:check` fails, run `npm run format` to auto-fix, then commit.
