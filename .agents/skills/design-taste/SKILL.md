---
name: design-taste
description: Raise visual quality and reduce generic AI-looking frontend output through deliberate hierarchy, typography, spacing, density and reference-driven design.
---

# Design Taste

Use for new product surfaces, landing pages, major redesigns, or when the user explicitly asks for a more polished/distinctive frontend.

This skill complements `frontend-design`; it does not override accessibility, brand rules, product constraints or existing design-system contracts.

## Start with intent, not decoration

Before implementing:
1. identify the product/user goal,
2. inspect the existing interface and brand assets,
3. identify 2–4 visual references when useful,
4. define the intended design language in a few sentences,
5. choose the appropriate level of visual variance, motion and information density.

## Three design dials

Record these mentally or in the task plan:

- **Visual variance:** conventional/quiet → expressive/asymmetric.
- **Motion level:** static/subtle → highly interactive.
- **Information density:** spacious/editorial → compact/operational.

Do not automatically maximize any dial. A command center, booking flow, luxury landing page and internal admin tool should not share the same visual behavior.

## Anti-generic checks

Avoid defaulting to:
- centered hero + gradient blob + identical feature cards,
- excessive rounded containers around every piece of content,
- weak type scale where all text has similar emphasis,
- arbitrary purple/blue gradients unrelated to brand,
- oversized whitespace that harms task efficiency,
- decorative icons with no information value,
- repeated component patterns that make every page look templated.

Prefer:
- a clear visual thesis,
- strong hierarchy and purposeful spacing,
- typography with distinct roles,
- restrained color with meaningful emphasis,
- composition appropriate to content,
- one or two memorable visual decisions rather than many effects,
- real product states and realistic content during review.

## Reference-driven work

When reference images/designs are available:
- inspect concrete geometry, spacing, type scale, contrast, alignment and interaction patterns,
- translate principles rather than blindly cloning pixels,
- preserve the project's brand/product identity,
- verify the final implementation visually.

If no references exist, derive the design language from the product, audience and existing system instead of inventing a trendy template.

## Redesign audit

Before a redesign, inspect:
- hierarchy,
- alignment/grid,
- spacing rhythm,
- typography,
- color/contrast,
- component repetition,
- content density,
- responsive behavior,
- empty/loading/error states,
- interaction affordance,
- motion consistency.

Fix structural problems before adding polish.

## Guardrails

- Do not introduce a design library solely for visual novelty.
- Do not force asymmetry or editorial layouts into dense operational interfaces.
- Do not sacrifice accessibility for visual distinctiveness.
- Do not regenerate an existing approved brand mark.
- Do not add motion merely because the page feels visually plain.
- Preserve product-critical clarity over stylistic experimentation.

## Verification

For substantial visual work:
- inspect desktop and narrow mobile,
- verify keyboard/focus/contrast,
- verify realistic content/state variations,
- compare against reference/design intent,
- use browser screenshots or visual regression tooling when available.

## Provenance

This project-specific skill is an original adaptation inspired in part by the open-source Taste Skill project's focus on reducing generic AI-generated UI. It does not copy the upstream skill verbatim. Upstream: `Leonxlnx/taste-skill` (MIT).
