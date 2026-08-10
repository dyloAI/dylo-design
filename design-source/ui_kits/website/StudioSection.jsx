const { Eyebrow: EyebrowS } = window.Dylo;
const STEPS = [
  { n: '01', t: 'Scope', d: 'A two-day sprint to define the one problem worth solving first.' },
  { n: '02', t: 'Build', d: 'An AI-native team ships a working product in weeks, not quarters.' },
  { n: '03', t: 'Iterate', d: 'We stay on as the work runs, tightening what matters.' },
];
function StudioSection() {
  return (
    <section id="studio" style={{ padding: '84px 32px', background: 'var(--dylo-ink)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <EyebrowS tone="light">How we work</EyebrowS>
        <h2 style={{ margin: '18px 0 44px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 40, letterSpacing: '-0.02em', color: 'var(--dylo-bone)' }}>Precise. Engineered. Bold.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          {STEPS.map((s) => (
            <div key={s.n} style={{ borderTop: '1px solid var(--dylo-graphite)', paddingTop: 20 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 13, letterSpacing: '0.1em', color: 'var(--dylo-oxide)' }}>{s.n}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, color: 'var(--dylo-bone)', marginTop: 10 }}>{s.t}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, lineHeight: 1.6, color: '#C7BEB1', marginTop: 10 }}>{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.StudioSection = StudioSection;
