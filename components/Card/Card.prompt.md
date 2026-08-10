The signature dylo panel — ink border + hard block-shadow offset, like a stamped plate. Use for content blocks, feature cards, and pricing.

```jsx
<Card eyebrow="Approach" title="Ship, then iterate.">
  A working data pipeline in six weeks, then refined against real use.
</Card>
<Card tone="ink" title="Made, not churned." elevated={false} />
```

Barely rounded; never a soft floating shadow — the block offset is the brand. `tone="ink"` for dark emphasis panels. Composes `Eyebrow` internally.
