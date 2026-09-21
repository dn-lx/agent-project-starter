# Frontend Quality Standard

Use three complementary skills rather than one oversized frontend prompt.

## 1. Frontend Design — foundation

`.agents/skills/frontend-design/SKILL.md`

Always use for substantial frontend work. It protects:
- accessibility,
- responsive behavior,
- product states,
- design-system consistency,
- semantic implementation.

## 2. Design Taste — visual quality

`.agents/skills/design-taste/SKILL.md`

Use when:
- creating a new screen/product surface,
- redesigning an existing page,
- the interface looks generic/template-like,
- hierarchy/typography/spacing/composition need senior design judgment.

Do **not** force it on tiny copy changes or purely functional UI fixes.

## 3. Motion Design — interaction quality

`.agents/skills/motion-design/SKILL.md`

Use when:
- adding or changing animation/transitions,
- reviewing drawers/modals/popovers,
- adding gesture/drag/scroll motion,
- tuning hover/focus/press/loading transitions,
- motion performance/accessibility matters.

Do not add animation just because the skill exists.

## 4. Accessibility + Visual Regression — verification evidence

`.agents/skills/accessibility-visual-regression/SKILL.md`

Use when:
- substantial UI changed,
- critical user journeys need regression protection,
- responsive/layout regressions are plausible,
- design-system or release-level frontend verification is required.

It verifies the result; it does not choose the visual direction.

## Recommended execution order

```text
product/user goal
      ↓
frontend-design
      ↓
design-taste (when visual redesign is material)
      ↓
motion-design (only when motion is material)
      ↓
implementation
      ↓
accessibility + visual regression verification (when material)
      ↓
browser + responsive verification
```

## Project-specific frontend profile

A generated project should document its own defaults in its project skill or Project Memory:

- brand personality,
- typography/assets,
- design-system/component library,
- default visual variance,
- default motion level,
- default information density,
- critical breakpoints/devices,
- accessibility constraints,
- screenshot/reference sources.

## Why separate skills?

Separating concerns prevents a “beautiful UI” skill from accidentally weakening:
- accessibility,
- task efficiency,
- established design systems,
- brand constraints,
- performance.

It also keeps token/context use smaller because agents load Motion only for tasks where motion actually matters.
