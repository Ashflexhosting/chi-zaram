/**
 * Harvest Editorial shared shell: warm cream space, Palm Crimson accents,
 * deep leaf green, editorial serif headlines, and WhatsApp-first conversion.
 */
import { ArrowUpRight, Instagram, Menu, MessageCircle, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import type { ReactNode } from "react";

const whatsappNumber = "2348092192180";
const defaultMessage = "Hello CHI-ZARAM, I would like to explore your products and current availability.";

export function whatsappHref(message = defaultMessage) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export default function SiteLayout({ children, activePath }: { children: ReactNode; activePath?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="site-shell page-shell">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <span>Retail <i /> Bulk Supply <i /> Consumer Products</span>
          <a href={whatsappHref()} target="_blank" rel="noreferrer">WhatsApp ordering <ArrowUpRight size={13} strokeWidth={1.8} /></a>
        </div>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link className="brand-lockup" href="/" aria-label="CHI-ZARAM home">
            <img src="/manus-storage/chi-zaram-mark_15d277e5.png" alt="" className="brand-lockup__mark" />
            <span className="brand-lockup__type"><strong>CHI-ZARAM</strong><small>Palm Oil &amp; More</small></span>
          </Link>
          <nav className={`main-nav page-nav ${mobileOpen ? "main-nav--open" : ""}`} aria-label="Primary navigation">
            <Link onClick={() => setMobileOpen(false)} className={activePath === "/story" ? "is-active" : ""} href="/story">Our story</Link>
            <Link onClick={() => setMobileOpen(false)} className={activePath === "/catalogue" ? "is-active" : ""} href="/catalogue">What we carry</Link>
            <Link onClick={() => setMobileOpen(false)} className={activePath === "/packs-pricing" ? "is-active" : ""} href="/packs-pricing">Packs &amp; Pricing</Link>
            <Link onClick={() => setMobileOpen(false)} className={activePath === "/bulk-supply" ? "is-active" : ""} href="/bulk-supply">Bulk supply</Link>
            <Link onClick={() => setMobileOpen(false)} className={activePath === "/contact" ? "is-active" : ""} href="/contact">Contact</Link>
          </nav>
          <a className="header-cta" href={whatsappHref()} target="_blank" rel="noreferrer"><MessageCircle size={16} /><span>Order on WhatsApp</span></a>
          <button className="menu-toggle page-menu-toggle" type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>
      {children}
      <footer className="site-footer page-footer">
        <div className="container site-footer__top">
          <Link className="brand-lockup brand-lockup--footer" href="/">
            <img src="/manus-storage/chi-zaram-mark_15d277e5.png" alt="" className="brand-lockup__mark" />
            <span className="brand-lockup__type"><strong>CHI-ZARAM</strong><small>Palm Oil &amp; More</small></span>
          </Link>
          <div className="footer-tagline">Good things are<br /><em>worth sharing.</em></div>
          <div className="footer-contact"><span>Start a conversation</span><a href={whatsappHref()} target="_blank" rel="noreferrer"><MessageCircle size={15} /> 0809 219 2180</a><a href="https://www.tiktok.com/@ogonwibe" target="_blank" rel="noreferrer"><Instagram size={15} /> @ogonwibe</a></div>
        </div>
        <div className="container site-footer__bottom"><span>© 2026 CHI-ZARAM Palm Oil &amp; More Enterprises</span><span>Retail &amp; Bulk Supply</span><Link href="/contact">Talk to the team <ArrowUpRight size={14} /></Link></div>
      </footer>
    </div>
  );
}
