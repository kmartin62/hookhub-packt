# HookHub - Project Context & Instructions

HookHub is a Next.js 16 application built with React 19, Tailwind CSS 4, and TypeScript. It utilizes the Next.js App Router for its architecture.

## ⚠️ CRITICAL: AI Agent Strategy

This project uses a version of Next.js (v16+) that contains breaking changes from previous versions. **Your training data is likely outdated.**

- **Documentation Source of Truth:** ALWAYS read the bundled documentation in `node_modules/next/dist/docs/` before writing code or suggesting implementations.
- **Key Navigation:**
    - `node_modules/next/dist/docs/index.md`: Main entry point.
    - `node_modules/next/dist/docs/01-app/`: Documentation for the App Router.
    - `node_modules/next/dist/docs/01-app/02-guides/ai-agents.md`: Specific instructions for AI agents.
- **Performance Hint:** If fixing slow client-side navigations, exporting `unstable_instant` from the route may be required in addition to using `Suspense`. Refer to `docs/01-app/02-guides/instant-navigation.md` for details.

## Project Overview

- **Framework:** Next.js 16 (App Router)
- **Library:** React 19 (Server Components, etc.)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Package Manager:** npm

## Building and Running

| Task | Command |
| :--- | :--- |
| **Development** | `npm run dev` |
| **Build** | `npm run build` |
| **Production Start** | `npm run start` |
| **Linting** | `npm run lint` |

## Development Conventions

- **File Structure:** Follow the Next.js App Router conventions. Main page logic is located in `app/page.tsx`.
- **Styling:** Use Tailwind CSS 4 utility classes. Configuration is in `postcss.config.mjs`.
- **Path Aliases:** Use the `@/` prefix to refer to the project root (e.g., `import { ... } from "@/app/..."`).
- **Type Safety:** Ensure all new code is strictly typed using TypeScript.
- **Modern React:** Leverage React 19 features where appropriate, keeping in mind the distinction between Client and Server Components.

## Important Files

- `app/layout.tsx`: Root layout for the application.
- `app/page.tsx`: Home page component.
- `next.config.ts`: Next.js configuration.
- `tsconfig.json`: TypeScript configuration.
- `AGENTS.md` / `GEMINI.md`: Meta-instructions for AI agents.
