function Footer() {
  return (
    <footer style={{ background: 'var(--dylo-ink)', padding: '40px 32px', borderTop: '1px solid var(--dylo-graphite)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <img src="../../assets/dylo-logo-horizontal-reversed.svg" alt="dylo" style={{ height: 20 }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', color: '#8E857A' }}>We make d&iacute;lo &mdash; not robota. &middot; &copy; 2026 dylo</span>
      </div>
    </footer>
  );
}
window.Footer = Footer;
