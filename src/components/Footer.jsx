import Brand from "./Brand.jsx";

const footerLinks = [
  { label: "Services", href: "services.html" },
  { label: "Results", href: "results.html" },
  { label: "My Story", href: "story.html" },
  { label: "FAQs", href: "faqs.html" },
  { label: "Contact", href: "contact.html" },
  { label: "Terms & Conditions", href: "terms.html" },
  { label: "Privacy", href: "privacy.html" },
  {
    label: "Instagram ↗",
    href: "https://www.instagram.com/mspt.25/",
    external: true,
  },
];

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-main">
          <div>
            <Brand />
            <p className="muted" style={{ fontSize: 13, marginTop: 17 }}>
              Personal Training &amp; Strength and Conditioning
              <br />
              Western Sydney, Australia
            </p>
          </div>
          <nav className="foot-links" aria-label="Footer navigation">
            {footerLinks.map(({ label, href, external }) => (
              <a
                href={href}
                key={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="foot-bottom">
          © {new Date().getFullYear()} MS Performance Training. Built for
          progress, not shortcuts.
        </div>
      </div>
    </footer>
  );
}
