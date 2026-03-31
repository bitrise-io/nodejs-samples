# Node.js Sample Projects

This repository contains Node.js sample projects covering typical combinations of frameworks and package managers.

## Samples

| Directory | Framework | Package Manager | Testing |
|-----------|-----------|-----------------|---------|
| [next-js-npm](next-js-npm/) | Next.js | npm | Jest · Testing Library |
| [next-js-turborepo](next-js-turborepo/) | Next.js · Turborepo | npm | Jest · Testing Library |
| [next-js-yarn](next-js-yarn/) | Next.js | Yarn | — |

---

### next-js-npm

**Stack:** Next.js · React · TypeScript · Jest · Testing Library · npm

**What it demonstrates:**
- Next.js application with TypeScript
- Unit and component testing with Jest and React Testing Library
- Dependency management with npm

**How to run:**
```bash
cd next-js-npm
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

**How to run:**
```bash
cd next-js-turborepo
npm install
npm test
```

---

### next-js-yarn

**Stack:** Next.js · React · TypeScript · Yarn

**What it demonstrates:**
- Next.js application with TypeScript
- Dependency management with Yarn

**How to run:**
```bash
cd next-js-yarn
yarn install
yarn build
```
