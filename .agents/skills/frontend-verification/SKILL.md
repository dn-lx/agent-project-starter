---
name: frontend-verification
description: Verify material frontend changes in a real rendered runtime, including workflows, responsive behavior, console/network health and failure states.
---

# Frontend Verification

Use for material frontend behavior, layout, interaction, responsive, navigation, form, print or browser-runtime changes.

This skill owns **rendered runtime evidence**. It does not choose visual direction; use the Design Stack for that. Accessibility/visual-regression remains a specialist verification layer.

## Required evidence for material UI changes

Code inspection alone is not enough. Verify the changed behavior in a real browser or browser automation environment.

At minimum:
1. load the changed surface from the same commit being reviewed,
2. complete the primary user flow,
3. verify one ordinary desktop viewport and one narrow mobile viewport unless the product defines another matrix,
4. inspect browser console for new errors/warnings caused by the change,
5. inspect failed network requests relevant to the flow,
6. exercise loading, empty, error, disabled or validation states that the change touches,
7. capture screenshots or Playwright evidence for meaningful visual/layout changes.

If the project has critical tablet/iOS/Safari/print behavior, include the documented project-specific device/browser check.

## Before/after comparison

For regressions or redesigns, capture the current behavior before editing when practical. After implementation, compare:
- functionality,
- hierarchy/layout,
- responsive behavior,
- focus/keyboard behavior,
- runtime errors,
- network behavior,
- user-visible error handling.

## Specialist layers

Load `accessibility-visual-regression` when accessibility or stable screenshot baselines matter.
Load `performance-budget` when rendering, assets, bundle/runtime work or network behavior can materially affect performance.

## Failure handling

A frontend task is not fully verified when:
- the page was not rendered,
- only source code was inspected,
- console/network failures were ignored,
- the tested environment differs materially from the changed deployment,
- screenshots were updated blindly.

If browser verification cannot be run, report that limitation explicitly in the PR/evidence packet.
