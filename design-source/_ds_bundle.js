/* @ds-bundle: {"format":4,"namespace":"DyloDesignSystem_0168fd","components":[{"name":"Badge","sourcePath":"components/Badge/Badge.jsx"},{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/Eyebrow/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/Input/Input.jsx"}],"sourceHashes":{"components/Badge/Badge.jsx":"00d2ba8aa1e4","components/Button/Button.jsx":"4becf4e402e2","components/Card/Card.jsx":"ebcf53af8493","components/Eyebrow/Eyebrow.jsx":"8aa383415b84","components/Input/Input.jsx":"c22cd2308579","ui_kits/website/ContactSection.jsx":"081efc2037a0","ui_kits/website/Footer.jsx":"5461852d4355","ui_kits/website/Header.jsx":"9e08dcf40cdf","ui_kits/website/Hero.jsx":"48739a69574c","ui_kits/website/StudioSection.jsx":"b868bbed4365","ui_kits/website/WorkSection.jsx":"8a2f25cadd47"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DyloDesignSystem_0168fd = window.DyloDesignSystem_0168fd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Badge/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * dylo Badge — a small status or technical chip. Mono type, square-ish.
 */
function Badge({
  variant = 'default',
  children,
  ...rest
}) {
  const variants = {
    default: {
      background: 'var(--dylo-bone)',
      color: 'var(--dylo-ink)',
      border: '1px solid var(--dylo-ink)'
    },
    solid: {
      background: 'var(--dylo-ink)',
      color: 'var(--dylo-bone)',
      border: '1px solid var(--dylo-ink)'
    },
    accent: {
      background: 'var(--dylo-oxide)',
      color: 'var(--dylo-paper)',
      border: '1px solid var(--dylo-oxide)'
    },
    muted: {
      background: 'transparent',
      color: 'var(--dylo-concrete)',
      border: '1px solid var(--dylo-line)'
    }
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      padding: '5px 9px',
      borderRadius: 'var(--radius-sm)',
      ...v
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/Button/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * dylo Button — foundry-stamped action. Ink primary with a hard block-shadow
 * that "seats" on press. Secondary is bone with an ink border; ghost is bare.
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const sizes = {
    sm: {
      padding: '7px 13px',
      fontSize: 13
    },
    md: {
      padding: '11px 20px',
      fontSize: 15
    },
    lg: {
      padding: '15px 28px',
      fontSize: 17
    }
  };
  const palettes = {
    primary: {
      bg: 'var(--dylo-ink)',
      bgHover: 'var(--dylo-graphite)',
      fg: 'var(--dylo-bone)',
      border: 'var(--dylo-ink)'
    },
    secondary: {
      bg: 'var(--dylo-bone)',
      bgHover: 'var(--dylo-paper)',
      fg: 'var(--dylo-ink)',
      border: 'var(--dylo-ink)'
    },
    ghost: {
      bg: 'transparent',
      bgHover: 'rgba(27,23,20,0.06)',
      fg: 'var(--dylo-ink)',
      border: 'transparent'
    }
  };
  const p = palettes[variant] || palettes.primary;
  const hasShadow = variant !== 'ghost';
  const style = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    whiteSpace: 'nowrap',
    border: `1px solid ${p.border}`,
    borderRadius: 'var(--radius-sm)',
    background: disabled ? 'var(--dylo-concrete)' : hover ? p.bgHover : p.bg,
    color: disabled ? 'var(--dylo-bone)' : p.fg,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    boxShadow: hasShadow && !disabled ? press ? '1px 1px 0 rgba(27,23,20,0.20)' : '4px 4px 0 rgba(27,23,20,0.18)' : 'none',
    transform: hasShadow && press && !disabled ? 'translate(3px,3px)' : 'translate(0,0)',
    transition: 'transform 120ms ease, box-shadow 120ms ease, background 120ms ease',
    ...sizes[size]
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Eyebrow/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * dylo Eyebrow — the mono section label with an oxide tick. Sits above almost
 * every headline. The single most recognizable brand device.
 */
function Eyebrow({
  tone = 'dark',
  tick = true,
  children,
  ...rest
}) {
  const fg = tone === 'light' ? 'var(--dylo-bone)' : 'var(--dylo-concrete)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 11,
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '0.24em',
      textTransform: 'uppercase',
      color: fg
    }
  }, rest), tick && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      background: 'var(--dylo-oxide)',
      flex: 'none',
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Eyebrow/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * dylo Card — the signature foundry panel: a paper/ink surface with a full
 * border and a hard block-shadow offset, like a stamped plate. Barely rounded.
 */
function Card({
  eyebrow,
  title,
  tone = 'light',
  elevated = true,
  children,
  ...rest
}) {
  const dark = tone === 'ink';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: dark ? 'var(--dylo-ink)' : 'var(--dylo-paper)',
      color: dark ? 'var(--dylo-bone)' : 'var(--dylo-ink)',
      border: dark ? '1px solid var(--dylo-ink)' : '1px solid var(--dylo-ink)',
      borderRadius: 'var(--radius-md)',
      boxShadow: elevated ? '6px 6px 0 rgba(27,23,20,0.12)' : 'none',
      padding: 'var(--space-6)',
      ...rest.style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: dark ? 'light' : 'dark'
  }, eyebrow)), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      fontSize: 24,
      lineHeight: 1.1
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.6,
      color: dark ? '#C7BEB1' : 'var(--dylo-graphite)',
      marginTop: title ? 12 : 0
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/Input/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * dylo Input — text field with a mono label. Square, ink-bordered, oxide focus.
 */
function Input({
  label,
  hint,
  id,
  disabled = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? 'in-' + String(label).toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      fontFamily: 'var(--font-display)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--dylo-concrete)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      color: 'var(--dylo-ink)',
      background: disabled ? 'var(--dylo-bone)' : 'var(--dylo-paper)',
      border: `1px solid ${focus ? 'var(--dylo-oxide)' : 'var(--dylo-ink)'}`,
      borderRadius: 'var(--radius-sm)',
      padding: '11px 13px',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px rgba(154,82,54,0.16)' : 'none',
      transition: 'border-color 120ms ease, box-shadow 120ms ease',
      opacity: disabled ? 0.6 : 1
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--dylo-concrete)',
      letterSpacing: '0.02em'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Input/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactSection.jsx
try { (() => {
const {
  Eyebrow: EyebrowC,
  Input: InputC,
  Button: ButtonC,
  Badge: BadgeC
} = window.Dylo;
function ContactSection() {
  const [sent, setSent] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "start",
    style: {
      padding: '84px 32px',
      background: 'var(--dylo-bone)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(EyebrowC, null, "Start a project"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '18px 0 30px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 36,
      letterSpacing: '-0.02em',
      color: 'var(--dylo-ink)'
    }
  }, "Tell us what you're building."), sent ? /*#__PURE__*/React.createElement(BadgeC, {
    variant: "accent"
  }, "Message sent \u2014 we'll reply within one business day.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(InputC, {
    label: "Name",
    placeholder: "Jan Nov\\u00e1k",
    required: true
  }), /*#__PURE__*/React.createElement(InputC, {
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  }), /*#__PURE__*/React.createElement(InputC, {
    label: "What are you building?",
    placeholder: "A claims-review tool for our team",
    required: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ButtonC, {
    type: "submit",
    variant: "primary"
  }, "Send")))));
}
window.ContactSection = ContactSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--dylo-ink)',
      padding: '40px 32px',
      borderTop: '1px solid var(--dylo-graphite)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/dylo-logo-horizontal-reversed.svg",
    alt: "dylo",
    style: {
      height: 20
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.08em',
      color: '#8E857A'
    }
  }, "We make d\xEDlo \u2014 not robota. \xB7 \xA9 2026 dylo")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Eyebrow,
  Input
} = window.Dylo;
function Header() {
  const navStyle = {
    fontFamily: 'var(--font-display)',
    fontWeight: 500,
    fontSize: 15,
    color: 'var(--dylo-graphite)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'var(--dylo-bone)',
      borderBottom: '1px solid var(--hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      padding: '18px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/dylo-logo-horizontal.svg",
    alt: "dylo",
    style: {
      height: 26
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#work",
    style: navStyle
  }, "Work"), /*#__PURE__*/React.createElement("a", {
    href: "#studio",
    style: navStyle
  }, "Studio"), /*#__PURE__*/React.createElement("a", {
    href: "#start",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Start a project")))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Eyebrow: EyebrowH,
  Button: ButtonH
} = window.Dylo;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--dylo-bone)',
      backgroundImage: 'linear-gradient(rgba(27,23,20,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(27,23,20,0.05) 1px,transparent 1px)',
      backgroundSize: '42px 42px',
      padding: '96px 32px 84px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 26,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(EyebrowH, null, "AI-native software factory"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '-0.03em',
      fontSize: 'clamp(44px,6vw,84px)',
      lineHeight: 0.98,
      color: 'var(--dylo-ink)'
    }
  }, "Software, made."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 620,
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, "Apps & data solutions for SMBs that want a d\xEDlo \u2014 a crafted work \u2014 not a robota. We ship production software with an AI-native team, fast."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#start",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(ButtonH, {
    variant: "primary",
    size: "lg"
  }, "Start a project")), /*#__PURE__*/React.createElement("a", {
    href: "#work",
    style: {
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(ButtonH, {
    variant: "secondary",
    size: "lg"
  }, "See the work")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StudioSection.jsx
try { (() => {
const {
  Eyebrow: EyebrowS
} = window.Dylo;
const STEPS = [{
  n: '01',
  t: 'Scope',
  d: 'A two-day sprint to define the one problem worth solving first.'
}, {
  n: '02',
  t: 'Build',
  d: 'An AI-native team ships a working product in weeks, not quarters.'
}, {
  n: '03',
  t: 'Iterate',
  d: 'We stay on as the work runs, tightening what matters.'
}];
function StudioSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "studio",
    style: {
      padding: '84px 32px',
      background: 'var(--dylo-ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(EyebrowS, {
    tone: "light"
  }, "How we work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '18px 0 44px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      letterSpacing: '-0.02em',
      color: 'var(--dylo-bone)'
    }
  }, "Precise. Engineered. Bold."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 40
    }
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      borderTop: '1px solid var(--dylo-graphite)',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: '0.1em',
      color: 'var(--dylo-oxide)'
    }
  }, s.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--dylo-bone)',
      marginTop: 10
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      lineHeight: 1.6,
      color: '#C7BEB1',
      marginTop: 10
    }
  }, s.d))))));
}
window.StudioSection = StudioSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StudioSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WorkSection.jsx
try { (() => {
const {
  Card: CardW,
  Badge: BadgeW,
  Eyebrow: EyebrowW
} = window.Dylo;
const PROJECTS = [{
  name: 'Inventory OS',
  industry: 'RETAIL',
  desc: 'Real-time stock &amp; reorder automation across 40 storefronts.'
}, {
  name: 'Claims Copilot',
  industry: 'INSURANCE',
  desc: 'AI-assisted claims intake that cut review time by 70%.'
}, {
  name: 'Route Planner',
  industry: 'LOGISTICS',
  desc: 'Daily dispatch optimizer for a 120-vehicle delivery fleet.'
}];
function WorkSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      padding: '84px 32px',
      background: 'var(--dylo-paper)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(EyebrowW, null, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '18px 0 40px',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 40,
      letterSpacing: '-0.02em',
      color: 'var(--dylo-ink)'
    }
  }, "D\xEDlo, delivered."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 24
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(CardW, {
    key: p.name,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(BadgeW, {
    variant: "muted"
  }, p.industry), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--dylo-ink)'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    },
    dangerouslySetInnerHTML: {
      __html: p.desc
    }
  }))))));
}
window.WorkSection = WorkSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WorkSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

})();
