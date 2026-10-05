# Repository Guidelines

## Project Structure & Module Organization

This repository is currently an empty project scaffold. Keep the layout small and conventional as code is added:

- `src/` for application source modules and components.
- `public/` for static files served unchanged (images, icons, downloads).
- `tests/` for automated tests that are not colocated with source files.
- `docs/` for longer design or setup documentation.

Group code by feature when practical, and keep feature-specific assets close to the feature. Avoid placing generated output, dependencies, or local secrets under version control.

## Build, Test, and Development Commands

No build system or package manifest is committed yet. When introducing tooling, document the canonical commands in `README.md` and keep them consistent with this guide. A typical Node-based setup would provide:

```powershell
npm install       # install dependencies
npm run dev       # run the local development server
npm test          # execute automated tests
npm run build     # create a production build
```

Run the relevant validation commands before opening a pull request.

## Coding Style & Naming Conventions

Follow the formatter and linter selected for the project; do not hand-format files against automated output. Use 2 spaces for JSON, YAML, CSS, and JavaScript/TypeScript unless the adopted formatter specifies otherwise. Name files and folders in lowercase kebab-case (for example, `project-card.tsx`); use `PascalCase` for components and `camelCase` for functions and variables.

Keep modules focused, use descriptive names, and avoid unrelated refactors in the same change.

## Testing Guidelines

Add or update tests for behavior changes. Name test files after the unit under test (for example, `project-card.test.tsx`) and use clear behavior-focused test descriptions. Once a test framework is selected, run its full suite locally; changes should not lower meaningful coverage.

## Commit & Pull Request Guidelines

Git history is not available in this workspace, so no repository-specific commit convention can be inferred. Use short imperative commit subjects, such as `Add portfolio project card` or `Fix mobile navigation spacing`.

Pull requests should explain the change and verification performed, link related issues when available, and include screenshots or recordings for visible UI changes. Keep each pull request scoped to one coherent outcome.

## Security & Configuration

Never commit credentials, API keys, or environment-specific configuration. Store local values in ignored `.env` files and provide safe placeholders in an `.env.example` file when configuration is required.
