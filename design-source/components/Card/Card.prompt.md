The signature dylo panel — ink border + hard block-shadow offset, like a stamped plate. Use for content blocks, feature cards, and pricing.

```jsx
<Card eyebrow="Approach" title="Six weeks. Price in the quote.">
  A working web app, then we look after it.
</Card>
<Card tone="ink" title="A dylo engineer builds your web app for a one-off fee, and we look after it from €30 a month." elevated={false} />
```

Barely rounded; never a soft floating shadow — the block offset is the brand. `tone="ink"` for dark emphasis panels. Composes `Eyebrow` internally.
