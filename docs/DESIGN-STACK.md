# Design Stack

The starter keeps one small design-routing layer instead of several overlapping generic frontend skills.

## Roles

### Taste Skill — generation and redesign

Use **Taste Skill** when the main problem is visual direction, anti-generic composition, hierarchy, typography, spacing, density, or a substantial redesign.

Verified upstream:
- Repository: `tasteskill/tasteskill`
- Audited skill path: `skills/taste-skill/SKILL.md`
- Audited revision: `ccc3a2f84f529ee7faafcfe0a71678447675056f`
- License: MIT

Typical project install:

```bash
npx skills add https://github.com/tasteskill/tasteskill --skill "design-taste-frontend"
```

The upstream defaults are intentionally opinionated. The project's product brief, design system, accessibility requirements and explicit user direction always win.

### Impeccable — critique, polish and deterministic design checks

Use **Impeccable** for audit, critique, polish, responsive/UX hardening, browser iteration and anti-pattern detection.

Verified upstream:
- Repository: `pbakaus/impeccable`
- Audited skill path: `.agents/skills/impeccable/SKILL.md`
- Audited revision: `2f12a53b1e5eaa38fd69625926340704a4ced54b`
- License: Apache-2.0

Typical project install:

```bash
npx impeccable install
```

Impeccable can install hooks and local runtime support. Review those hooks before enabling them and keep developer-local caches/configuration out of Git.

### Awesome Design Skills — on-demand style catalogue

**Awesome Design Skills is a registry, not the default design brain.** It contains many named design-system packs. Do not bulk-install the catalogue into every project.

Verified upstream:
- Repository: `bergside/awesome-design-skills`
- Audited README revision: `9466ecea1615b75488c346d03c298fbb86d8fe10`
- License: MIT

Browse styles:

```bash
npx typeui.sh list
```

Pull only a selected style when the project brief calls for it:

```bash
npx typeui.sh pull <slug>
```

Record the chosen style/design authority in the consuming project's Project Memory or design documentation so later agents do not silently switch aesthetics.

## What this replaces

The starter no longer maintains separate generic:
- `frontend-design`
- `design-taste`
- `motion-design`

Those responsibilities overlap materially with Taste Skill + Impeccable. Motion remains part of design work when the selected upstream skill or project brief requires it.

The separate `accessibility-visual-regression` skill remains because it provides verification evidence rather than visual direction.

## Selection rule

Use the smallest useful combination:

| Need | Use |
| --- | --- |
| New premium interface / major redesign | Taste Skill |
| Existing UI critique / polish / hardening | Impeccable |
| Strong named aesthetic or design-system style | One Awesome Design style |
| Final UI evidence | Accessibility + Visual Regression |
| Tiny copy/spacing fix | No external design pack unless necessary |

Do not load all three by default.

## Update policy

These are external projects and may change. Before a material upgrade:
1. inspect upstream release notes/source,
2. review new hooks/scripts/permissions,
3. update the audited revision in this document,
4. run the project's normal UI and security checks,
5. keep the upgrade separate from unrelated product work when practical.
