# Repository Guidelines

## Project Structure & Module Organization
- ExpenAI is a Vite + React + TypeScript finance tracker with a Notion-style calendar hub.
- Keep `src/main.tsx` and `src/App.tsx` declarative; place feature logic in `src/features/*` or hooks.
- Hold Shadcn primitives in `src/components/ui` and compose screens in `src/components`, sticking to built-in variants.
- Share utilities in `src/lib`, store mock data in `src/data/mock-expenses.ts`, and use the `@/...` alias for imports.

## Build, Test, and Development Commands
- `npm run dev` starts Vite with fast refresh at http://localhost:5173.
- `npm run build` runs `tsc -b` then emits production bundles in `dist/`.
- `npm run preview` serves the built output for release checks.
- `npm run lint` applies the ESLint stack (`typescript-eslint`, React Hooks, React Refresh); fix warnings immediately.

## Coding Style & UI Conventions
- TypeScript strict mode is on—never merge with type errors or disabled diagnostics.
- Use two-space indentation, wrap long JSX props onto their own lines, and export components/hooks in PascalCase with camelCase utilities.
- Prefer native Shadcn spacing and variants; keep Tailwind usage minimal and adjust tokens centrally in `src/index.css`.
- Keep components straightforward: readable data maps over abstractions, brief comments only when intent is non-obvious.

## Data & State Guidance
- Start with deterministic mock expenses shaped like the future API (`id`, `date`, `amount`, `category`, `isRecurring`).
- Structure calendar data as 7-column weeks so AI-generated insights can slot in later.
- Capture assumptions, domain rules, and study notes in `docs/notes.md` (create if missing).

## Testing Guidelines
- Introduce Vitest + Testing Library specs named `*.test.tsx` beside new components when feasible.
- Until CI exists, list manual QA passes (responsive, keyboard, dark mode) in PRs and add regression tests once tooling lands.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat:`, `fix:`, `chore:`, `refactor:`) with concise imperative subjects.
- Keep commits focused, document decisions or follow-ups briefly, and link issues.
- PRs must include a summary, relevant screenshots/GIFs, mock data notes, and confirmation that linting (and tests if present) ran; rebase on main before review.

## Learning Notes & Collaboration
- Maintain a running journal in `docs/notes.md` for Shadcn patterns, TypeScript lessons, or AI ideas.
- Surface blockers early via issues or threads so we can pair or document solutions quickly.
