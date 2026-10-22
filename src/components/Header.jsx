import { useState } from "react";
import Brand from "./Brand.jsx";

const navigationLinks = [
  { label: "Home", href: "index.html", page: "index" },
  { label: "Services", href: "services.html", page: "services" },
  { label: "Results", href: "results.html", page: "results" },
  { label: "My Story", href: "story.html", page: "story" },
  { label: "FAQs", href: "faqs.html", page: "faqs" },
  { label: "Contact", href: "contact.html", page: "contact" },
];

export default function Header({ activePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav
          className={`nav${menuOpen ? " open" : ""}`}
          id="site-navigation"
          aria-label="Main navigation"
        >
          {navigationLinks.map(({ label, href, page }) => (
            <a
              href={href}
              key={page}
              aria-current={activePage === page ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="btn header-cta" href="contact.html">
          Enquire now ↗
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-controls="site-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
}
