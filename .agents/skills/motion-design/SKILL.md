---
name: motion-design
description: Design and audit purposeful UI motion, transitions and interaction feedback with restraint, accessibility and performance.
---

# Motion Design

Use when implementing or reviewing animation, transitions, hover/focus feedback, gesture response, page transitions, loading movement, drawers/modals, drag/drop or scroll-linked effects.

This skill complements `frontend-design` and `design-taste`. Motion is optional; clarity is not.

## Core principle

Every animation must answer at least one useful question:

- What changed?
- Where did it go?
- What can I interact with?
- Did my action succeed?
- What is currently loading?
- What deserves attention?

If it answers none of these, remove it unless it provides a deliberate brand moment with negligible usability cost.

## Motion hierarchy

Prefer this order:
1. direct interaction feedback,
2. state continuity,
3. spatial transitions,
4. attention guidance,
5. decorative/brand motion.

The further down the list, the more restraint is required.

## Timing

- Tiny feedback should feel immediate.
- Standard UI transitions should finish quickly enough not to block repeated work.
- Large spatial transitions may take longer only when users benefit from perceiving continuity.
- Repeated/frequent actions should use less motion than rare/high-emphasis moments.

Avoid long animations on controls users trigger repeatedly.

## Easing

- Use easing that reflects physical/interaction intent.
- Entrances may decelerate into place.
- Exits should usually leave promptly.
- Avoid arbitrary bounce/spring behavior on serious productivity flows.
- Keep easing/timing families consistent across a product.

## Spatial consistency

Movement should preserve a believable relationship between trigger and result:
- menus/popovers originate near their trigger,
- drawers enter from the edge they occupy,
- expanding content should not appear to teleport,
- shared elements should preserve perceived continuity where practical.

## Performance

Prefer compositor-friendly properties such as transform and opacity when possible. Avoid animation that causes unnecessary layout/repaint work, jank or cumulative layout shift.

Test on realistically constrained/mobile devices when motion is important.

## Accessibility

- Respect `prefers-reduced-motion`.
- Essential state changes must remain understandable without animation.
- Do not rely on motion alone to convey meaning.
- Avoid rapid flashing, aggressive parallax or vestibularly disruptive movement.
- Keep focus movement and screen-reader semantics correct while visual elements transition.

## Interaction states

Review:
- hover,
- keyboard focus,
- press/active,
- disabled,
- loading,
- success/error,
- enter/exit,
- interruption/cancellation.

Animations should be interruptible or resolve gracefully when users act faster than expected.

## Motion budget

For each screen, identify:
- one primary motion pattern,
- supporting micro-interactions,
- effects that should remain static.

Do not animate every card, icon, heading and background simultaneously.

## Audit questions

Before approving motion:
- Does it communicate state or hierarchy?
- Is it fast enough for frequent use?
- Does it remain coherent when interrupted?
- Does reduced-motion mode still work?
- Does it preserve responsive/mobile usability?
- Is performance acceptable?
- Would the interface be clearer if this animation were removed?

If the last answer is yes, remove it.

## Provenance

This is an original project skill informed by established product-motion practices and the open-source `design-motion-principles` skill ecosystem. It does not reproduce that upstream skill verbatim.
