# SCSS start up template (in React + TypeScript + Vite)

Vernard Mercader

## Synopsis

Whenever I start a frontend project, one of my struggles is maintaining consistency of how I develop the entire SCSS framework for a project.

### Here's what you need to know

- When I start an SCSS projects, I have "main" files that control global definitions in the entire application.
- These are:
    - the file that holds global variable definitions (media query vars, theme colours, font definitions, functions, etc.)
    - the file that defines globally used styles (selector overrides, style-framework overrides [Material UI, Tw-Bootstrap, etc.], global classnames, etc.)
    - I could have a 3rd global file definition, but it depends on the project.

Throughout the years of Web app & frontend development these have been routine but because I never made a template before, I painstakingly have to recreate it from scratch from project to project.  This template will fix ALL that.

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
