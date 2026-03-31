# Node.js Sample Projects

This repository contains Node.js sample projects covering typical combinations of frameworks, package managers, and tool version management setups.

## Samples

| Directory | Framework | Package Manager | Testing | Node Version Management |
|-----------|-----------|-----------------|---------|-------------------------|
| [next-js-npm](next-js-npm/) | Next.js | npm | Jest · Testing Library | `.nvmrc` |
| [next-js-turborepo](next-js-turborepo/) | Next.js · Turborepo | npm | Jest · Testing Library | `.tool-versions` |
| [next-js-yarn](next-js-yarn/) | Next.js | Yarn | — | `engines` in package.json |

---

### next-js-npm

**Stack:** Next.js · React · TypeScript · Jest · Testing Library · npm

**What it demonstrates:**
- Next.js application with TypeScript
- Unit and component testing with Jest and React Testing Library
- Dependency management with npm
- Node version pinned via `.nvmrc` (used by nvm and fnm)

**How to run:**
```bash
cd next-js-npm
nvm use  # or: fnm use
npm install
npm test
```

---

### next-js-turborepo

**Stack:** Next.js · React · TypeScript · Jest · Testing Library · Turborepo · npm

**What it demonstrates:**
- Monorepo setup managed by Turborepo
- Next.js application with TypeScript inside a monorepo workspace
- Unit and component testing with Jest and React Testing Library
- Parallel task execution with Turborepo pipelines
- Node version pinned via `.tool-versions` (used by asdf and mise)

**How to run:**
```bash
cd next-js-turborepo
asdf install  # or: mise install
npm install
npm test
```

---

### next-js-yarn

**Stack:** Next.js · React · TypeScript · Yarn

**What it demonstrates:**
- Next.js application with TypeScript
- Dependency management with Yarn
- Node version requirement declared via `engines` field in `package.json`

**How to run:**
```bash
corepack enable  # one-time setup, activates yarn via Node.js corepack
cd next-js-yarn
yarn install
yarn build
```
