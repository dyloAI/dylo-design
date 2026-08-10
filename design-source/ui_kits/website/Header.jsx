const { Button, Card, Badge, Eyebrow, Input } = window.Dylo;
function Header() {
  const navStyle = { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 15, color: 'var(--dylo-graphite)', textDecoration: 'none' };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 10, background: 'var(--dylo-bone)', borderBottom: '1px solid var(--hairline)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '18px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src="../../assets/dylo-logo-horizontal.svg" alt="dylo" style={{ height: 26 }} />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <a href="#work" style={navStyle}>Work</a>
          <a href="#studio" style={navStyle}>Studio</a>
          <a href="#start" style={{ textDecoration: 'none' }}><Button variant="primary" size="sm">Start a project</Button></a>
        </nav>
      </div>
    </header>
  );
}
window.Header = Header;
