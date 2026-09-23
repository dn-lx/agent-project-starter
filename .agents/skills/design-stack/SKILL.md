---
name: design-stack
description: Route substantial frontend design work through Taste Skill, Impeccable, and the Awesome Design catalogue without loading overlapping design systems by default.
---

# Design Stack

Use for substantial frontend creation, redesign, visual polish, or design-system work. Do not load it for backend-only work or trivial copy/layout edits.

Read `docs/DESIGN-STACK.md` before using external design packs.

## Routing

Use the smallest design path that satisfies the task:

- **Taste Skill** — primary generation/redesign direction when a screen should feel less generic, more deliberate, or more visually ambitious.
- **Impeccable** — critique, audit, polish, UX hardening, browser iteration, anti-pattern detection, and final design refinement.
- **Awesome Design Skills** — an on-demand catalogue of specific visual systems. Select one style only when the product/brand brief actually calls for a defined aesthetic.
- **Accessibility + Visual Regression** — independent verification evidence after material UI changes. It remains separate because verification is not visual direction.

Do not invoke all sources automatically.

## Existing-product rule

Before changing UI:
1. inspect the current design system, tokens, components, brand assets and real product states,
2. preserve a coherent incumbent system unless the task is explicitly a redesign,
3. treat the user/project brief as higher authority than a third-party skill's defaults,
4. never replace product truth, accessibility, security or functional constraints merely to satisfy an aesthetic rule.

## Third-party skill rule

The starter does not vendor or auto-enable the upstream packs. Use the verified install/update commands in `docs/DESIGN-STACK.md` for projects that need them.

Before relying on an upstream pack:
- verify the source/revision,
- review hooks/scripts before enabling them,
- keep third-party runtime caches and local settings out of Git,
- do not claim a pack is installed merely because this template documents it.

## Practical sequence

For a new or redesigned surface:

```text
product/brand brief
      ↓
Taste Skill OR one selected Awesome Design style
      ↓
implementation
      ↓
Impeccable critique/polish when useful
      ↓
accessibility + visual-regression evidence
```

For an existing UI that only needs refinement:

```text
existing design truth
      ↓
Impeccable audit/polish
      ↓
targeted implementation
      ↓
accessibility + visual-regression evidence
```

## Anti-clutter rule

Do not add another general frontend-design, taste, motion, audit, or polish skill unless a concrete capability gap remains after evaluating this stack. Project-specific brand/design rules belong in the consuming project's design system or project skill.
