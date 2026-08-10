Foundry-stamped action button — ink primary with a hard block-shadow that "seats" on press; use for the one primary action per view, secondary/ghost for the rest.

```jsx
<Button variant="primary" size="md" onClick={submit}>Start a project</Button>
<Button variant="secondary">View work</Button>
<Button variant="ghost" size="sm">Cancel</Button>
```

Variants: `primary` (ink), `secondary` (bone + ink border), `ghost` (bare). Sizes: `sm` / `md` / `lg`. Keep one primary per view — the brand's restraint applies to emphasis too. Never recolour to a non-brand hue; the accent lives on the mark, not on buttons.
