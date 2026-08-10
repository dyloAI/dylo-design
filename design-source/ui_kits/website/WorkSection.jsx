const { Card: CardW, Badge: BadgeW, Eyebrow: EyebrowW } = window.Dylo;
const PROJECTS = [
  { name: 'Inventory OS', industry: 'RETAIL', desc: 'Real-time stock &amp; reorder automation across 40 storefronts.' },
  { name: 'Claims Copilot', industry: 'INSURANCE', desc: 'AI-assisted claims intake that cut review time by 70%.' },
  { name: 'Route Planner', industry: 'LOGISTICS', desc: 'Daily dispatch optimizer for a 120-vehicle delivery fleet.' },
];
function WorkSection() {
  return (
    <section id="work" style={{ padding: '84px 32px', background: 'var(--dylo-paper)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <EyebrowW>Selected work</EyebrowW>
        <h2 style={{ margin: '18px 0 40px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, letterSpacing: '-0.02em', color: 'var(--dylo-ink)' }}>D&iacute;lo, delivered.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {PROJECTS.map((p) => (
            <CardW key={p.name} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <BadgeW variant="muted">{p.industry}</BadgeW>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, color: 'var(--dylo-ink)' }}>{p.name}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)' }} dangerouslySetInnerHTML={{ __html: p.desc }} />
            </CardW>
          ))}
        </div>
      </div>
    </section>
  );
}
window.WorkSection = WorkSection;
