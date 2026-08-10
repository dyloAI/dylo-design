const { Eyebrow: EyebrowC, Input: InputC, Button: ButtonC, Badge: BadgeC } = window.Dylo;
function ContactSection() {
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };
  return (
    <section id="start" style={{ padding: '84px 32px', background: 'var(--dylo-bone)' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <EyebrowC>Start a project</EyebrowC>
        <h2 style={{ margin: '18px 0 30px', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 36, letterSpacing: '-0.02em', color: 'var(--dylo-ink)' }}>Tell us what you're building.</h2>
        {sent ? (
          <BadgeC variant="accent">Message sent — we'll reply within one business day.</BadgeC>
        ) : (
          <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <InputC label="Name" placeholder="Jan Nov\u00e1k" required />
            <InputC label="Email" type="email" placeholder="you@company.com" required />
            <InputC label="What are you building?" placeholder="A claims-review tool for our team" required />
            <div><ButtonC type="submit" variant="primary">Send</ButtonC></div>
          </form>
        )}
      </div>
    </section>
  );
}
window.ContactSection = ContactSection;
