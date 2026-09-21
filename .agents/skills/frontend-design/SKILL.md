---
name: frontend-design
description: Guide intentional, accessible, production-quality UI work while preserving the project's existing design system and architecture.
---

# Frontend Design

Use for new screens, substantial UI changes, component redesigns or visual-system work.

This is the **foundation skill**. For substantial visual redesigns also read `../design-taste/SKILL.md`. For animation/transition/gesture work also read `../motion-design/SKILL.md`. See `docs/FRONTEND-QUALITY-STANDARD.md`.

Before coding:
1. inspect active components/styles,
2. state user goal, hierarchy, primary action and responsive behavior,
3. reuse existing tokens/components where coherent,
4. prefer one intentional design direction,
5. preserve accessibility, focus/keyboard, touch targets and reduced-motion needs.

Rules:
- avoid generic card-heavy redesigns when simpler hierarchy works,
- do not add a framework/icon/animation library solely for appearance,
- preserve loading/empty/error/success/disabled/offline states,
- verify business-critical interaction before and after visual changes,
- prefer semantic accessible controls,
- check narrow mobile and ordinary desktop plus project-specific breakpoints.

Specialist routing:
- **Design Taste:** new visual direction, major page/component redesign, weak hierarchy, generic/template-looking UI.
- **Motion Design:** animation, transitions, hover/press/loading motion, gestures, drawers/modals, scroll-linked behavior.
- For a tiny copy/layout fix, do not load extra design skills unless the change materially affects those areas.

For branded projects, create a project-specific brand/assets skill rather than hard-coding branding into this generic starter.
