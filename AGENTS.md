AGENTS.md

- Build: `npm run build` (Next.js production build)
- Dev: `npm run dev` (real backend), `npm run dev:mock` (mock API)
- Start: `npm start` or `npm run start:mock`
- Typecheck: `npm run typecheck` (runs `tsc --noEmit`)
- Lint: `npm run lint` (Next.js ESLint + `stylelint` for CSS)
- Format: `npm run prettier:check` / `npm run prettier:write`
- Tests: `npm test` (prettier check, lint, typecheck, jest)
- Run single Jest test file: `npx jest path/to/file.test.tsx` or `npm run jest -- path/to/file.test.tsx`

Code style (apply to all edits):

- Use TypeScript `strict` patterns; prefer explicit types for public APIs.
- Files under `src/components/**` are client components: include `"use client"` at top.
- Server components/pages live under `src/app/**`; prefer server actions for mutations.
- Imports: absolute alias `@/*` supported; keep imports grouped: external libs, absolute aliases, relative.
- Naming: PascalCase for React components and files that export a component, camelCase for functions/vars.
- Types/interfaces: suffix with `Props` for component props (e.g. `HolidayCardProps`).
- Error handling: surface errors to `showToast` (use `src/lib/services/common/toastService.ts`) and parse Set-Cookie using `parseSetCookieHeader` util for server actions.
- Formatting: run Prettier; Tailwind classes allowed alongside Mantine—avoid duplicating utility sets.
- For layouting and styling, prefer Talwing utility classes; for all other commponents use Mantine components and theming.

Notes:

- Do NOT edit generated types in `src/lib/types/models/mjw-service.ts`; regenerate via `npm run update-types`.
- Copilot: repository contains Copilot guidelines in `.github/copilot-instructions.md` — follow them.
- No Cursor rules found in the repo.
