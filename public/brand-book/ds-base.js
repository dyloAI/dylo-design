// Intentionally does nothing.
//
// Claude Design's original ds-base.js linked ../../styles.css and
// ../../_ds_bundle.js into the template. Neither exists at this path and the
// brand book needs neither: it inlines all of its styling and loads its own
// webfonts, and it renders no React components. Leaving the original in place
// only produced two failed requests and a console error on every view.
//
// The untouched original is in design-source/templates/brand-book/.
