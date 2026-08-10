const { Eyebrow: EyebrowH, Button: ButtonH } = window.Dylo;
function Hero() {
  return (
    <section style={{ background: 'var(--dylo-bone)', backgroundImage: 'linear-gradient(rgba(27,23,20,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(27,23,20,0.05) 1px,transparent 1px)', backgroundSize: '42px 42px', padding: '96px 32px 84px' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 26, alignItems: 'flex-start' }}>
        <EyebrowH>AI-native software factory</EyebrowH>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '-0.03em', fontSize: 'clamp(44px,6vw,84px)', lineHeight: 0.98, color: 'var(--dylo-ink)' }}>Software, made.</h1>
        <p style={{ margin: 0, maxWidth: 620, fontFamily: 'var(--font-display)', fontSize: 20, lineHeight: 1.55, color: 'var(--text-body)' }}>Apps &amp; data solutions for SMBs that want a d&iacute;lo &mdash; a crafted work &mdash; not a robota. We ship production software with an AI-native team, fast.</p>
        <div style={{ display: 'flex', gap: 14, marginTop: 8 }}>
          <a href="#start" style={{ textDecoration: 'none' }}><ButtonH variant="primary" size="lg">Start a project</ButtonH></a>
          <a href="#work" style={{ textDecoration: 'none' }}><ButtonH variant="secondary" size="lg">See the work</ButtonH></a>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
