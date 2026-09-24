---
name: test-engineering
description: Design, add or repair the project's test harness and regression coverage without duplicating risk-based quality-gate selection.
---

# Test Engineering

Use when a project lacks an appropriate test layer, a changed behavior needs regression coverage, the harness/fixtures are unreliable, or CI must be wired to meaningful tests.

This skill owns **how tests are structured and maintained**. `quality-gates` owns **which checks must run for a given risk level**.

## Principles

- Prefer the project's existing runner and conventions before adding dependencies.
- Test behavior and contracts, not implementation trivia.
- Use the smallest layer that proves the requirement: unit → integration/contract → browser/E2E.
- Keep fixtures deterministic and isolated from production data.
- Cover negative/error paths for security, validation, money, data and permission boundaries.
- Do not weaken assertions, skip unstable failures, or regenerate snapshots merely to get green CI.

## Harness selection

Choose tools based on the actual stack.

For JavaScript/TypeScript:
- use an existing unit runner if present; Node's test runner, Vitest or Jest can all be valid,
- use Playwright for real browser workflows when UI behavior matters,
- use `@axe-core/playwright` when automated accessibility rules add value.

Do not add Vitest, Playwright or any other tool solely because the starter mentions it.

## Coverage design

For changed behavior, identify:
- pure logic that deserves unit coverage,
- integration boundaries that need contract/fixture coverage,
- user-critical flows that need browser coverage,
- security/privacy negative paths,
- regression scenarios that previously failed.

Keep E2E suites focused on workflows that benefit from real integration. Avoid duplicating every unit case in the browser.

## CI integration

Meaningful CI should:
- install from the lockfile,
- run deterministic checks on the reviewed commit,
- fail on real test failures,
- preserve useful failure artifacts where supported,
- use concurrency/cancel-in-progress where obsolete runs waste resources.

## Evidence reporting

Use `docs/templates/VERIFICATION-EVIDENCE-TEMPLATE.md` for material changes when a compact verification record helps.

Record:
- exact command/check name,
- commit/SHA or CI run,
- result,
- scope,
- relevant artifact/screenshot/log,
- anything not run and why.

A green badge without knowing what it executed is not sufficient evidence.
