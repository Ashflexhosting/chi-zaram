/**
 * Chi-Zaram Harvest Editorial system: asymmetrical storytelling, Palm Crimson accents,
 * warm natural imagery, DM Serif Display headlines, and Manrope utility copy.
 * This page is the public-facing brand narrative and WhatsApp-first conversion path.
 */
import { FormEvent, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Instagram,
  Leaf,
  Menu,
  MessageCircle,
  MoveRight,
  Phone,
  ShoppingBag,
  Sparkles,
  Truck,
  X,
} from "lucide-react";

const whatsappNumber = "2348092192180";

const categories = [
  {
    number: "01",
    title: "Palm Oil",
    label: "CHI-ZARAM FOODS",
    copy: "Our flagship red palm oil, presented for everyday cooking, family value, and larger supply needs.",
    details: "Pure red palm oil with rich natural flavor and nutrients. Hygienically processed without artificial additives or preservatives, designed for households and bulk commercial buyers.",
    specs: ["Primary pack: 5 Litres family size", "Bulk jerrycans & cartons available", "Rich in natural vitamins & flavor", "Ideal for retail & food service"],
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85",
    className: "category-card category-card--large",
  },
  {
    number: "02",
    title: "Cleaning Essentials",
    label: "CHI-ZARAM HOME",
    copy: "Practical, dependable everyday helpers for homes, offices, and businesses.",
    details: "Carefully curated household and commercial cleaning essentials designed for superior effectiveness, value, and reliable daily upkeep.",
    specs: ["High-performance cleaning aids", "Suitable for homes & offices", "Bulk quantities for commercial buyers", "Dependable quality standards"],
    image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=85",
    className: "category-card category-card--cleaning",
  },
  {
    number: "03",
    title: "Fabrics Collections",
    label: "CHI-ZARAM FABRICS",
    copy: "A growing edit of texture, colour, and pieces made to be discovered directly.",
    details: "An exquisite selection of fabrics and fashion collections showcasing rich textures, vibrant colors, and timeless appeal for discerning buyers.",
    specs: ["Premium fabric textures", "Curated colorways & patterns", "Direct wholesale & retail ordering", "Suitable for custom tailoring"],
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=85",
    className: "category-card category-card--fabrics",
  },
  {
    number: "04",
    title: "Oil Perfume",
    label: "CHI-ZARAM FRAGRANCE",
    copy: "Small moments of scent, selected for personal style and easy everyday gifting.",
    details: "Long-lasting concentrated oil perfumes offering sophisticated scent profiles, skin-friendly formulations, and great value for personal use or gifting.",
    specs: ["Concentrated fragrance oils", "Long-lasting scent projection", "Portable bottle sizes", "Ideal for retail reselling"],
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1200&q=85",
    className: "category-card category-card--wide category-card--fragrance",
  },
];

const supplySteps = [
  { number: "01", title: "Tell us what you need", copy: "Share the product, quantity, and your location." },
  { number: "02", title: "We confirm the details", copy: "We’ll respond with current availability and supply options." },
  { number: "03", title: "We arrange the next move", copy: "Delivery, payment, and dispatch details are agreed directly." },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<typeof categories[0] | null>(null);

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const product = form.get("product") || "Palm Oil";
    const quantity = form.get("quantity") || "Standard bulk order";
    const location = form.get("location") || "Not specified";
    const tier = form.get("tier") || "General Wholesale";
    const message = `Hello CHI-ZARAM Wholesale Desk, I would like to request a bulk supply quotation.\n\n• Product: ${product}\n• Tier/Category: ${tier}\n• Required Quantity: ${quantity}\n• Delivery Location: ${location}\n\nPlease share current wholesale pricing, availability, and delivery arrangements.`;
    setSubmitted(true);
    openWhatsApp(message);
  };

  return (
    <div className="site-shell">
      <div className="utility-bar">
        <div className="container utility-bar__inner">
          <span>Retail <i /> Bulk Supply <i /> Consumer Products</span>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
            WhatsApp ordering <ArrowUpRight size={13} strokeWidth={1.8} />
          </a>
        </div>
      </div>

      <header className="site-header">
        <div className="container site-header__inner">
          <a className="brand-lockup" href="#top" aria-label="CHI-ZARAM home">
            <img src="/manus-storage/chi-zaram-mark_15d277e5.png" alt="" className="brand-lockup__mark" />
            <span className="brand-lockup__type">
              <strong>CHI-ZARAM</strong>
              <small>Palm Oil &amp; More</small>
            </span>
          </a>

            <nav className={`main-nav ${mobileOpen ? "main-nav--open" : ""}`} aria-label="Primary navigation">
            <a href="#story" onClick={(e) => { e.preventDefault(); setMobileOpen(false); document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' }); }}>Our story</a>
            <a href="#portfolio" onClick={(e) => { e.preventDefault(); setMobileOpen(false); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }}>What we carry</a>
            <a href="#commercial" onClick={(e) => { e.preventDefault(); setMobileOpen(false); document.getElementById('commercial')?.scrollIntoView({ behavior: 'smooth' }); }}>Packs &amp; Pricing</a>
            <a href="#supply" onClick={(e) => { e.preventDefault(); setMobileOpen(false); document.getElementById('supply')?.scrollIntoView({ behavior: 'smooth' }); }}>Bulk supply</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); setMobileOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contact</a>
            <a className="main-nav__mobile-cta" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello CHI-ZARAM, I would like to place an order. Please share current product availability and delivery terms.")}`} target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)}>
              Order on WhatsApp <ArrowUpRight size={16} />
            </a>
          </nav>

          <a className="header-cta" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
            <MessageCircle size={16} />
            <span>Order on WhatsApp</span>
          </a>
          <button className="menu-toggle" type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-section__grain" aria-hidden="true" />
          <div className="container hero-section__inner">
            <div className="hero-copy">
              <p className="eyebrow hero-copy__eyebrow"><span className="eyebrow__line" /> Pure goodness from nature</p>
              <h1>Good things<br /><em>begin at the source.</em></h1>
              <p className="hero-copy__intro">Discover CHI-ZARAM Palm Oil and a growing range of everyday consumer products. Made to be chosen with confidence, ordered with ease, and shared generously.</p>
              <div className="hero-actions">
                <a className="button button--crimson" href="#palm-oil">Shop Palm Oil <ArrowUpRight size={17} /></a>
                <a className="button button--quiet" href="#supply">Buy in bulk <MoveRight size={18} /></a>
              </div>
              <div className="hero-note">
                <span className="hero-note__dot" />
                <span>Retail &amp; bulk supply across everyday needs</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-visual__image-wrap">
                <img src="/manus-storage/chi-zaram-hero_1cb97a94.jpg" alt="Red palm oil, palm fruits, and fresh palm leaves arranged on a natural table" />
                <div className="hero-visual__stamp"><span>100%</span><small>Pure<br />natural</small></div>
              </div>
              <div className="hero-visual__caption"><span>From the palm</span><span className="caption-rule" /><span>To your table</span></div>
              <div className="hero-visual__leaf" aria-hidden="true"><Leaf size={112} strokeWidth={0.65} /></div>
            </div>
          </div>
          <div className="hero-scroll" aria-hidden="true"><span>Scroll to explore</span><div /></div>
        </section>

        <section className="brand-strip" aria-label="Brand pillars">
          <div className="container brand-strip__inner">
            <div className="brand-strip__intro"><span className="brand-strip__mark">✳</span><span>Rooted in<br />everyday life</span></div>
            <div className="brand-strip__item"><strong>01</strong><span>Quality-minded</span></div>
            <div className="brand-strip__item"><strong>02</strong><span>Family value</span></div>
            <div className="brand-strip__item"><strong>03</strong><span>Direct ordering</span></div>
            <div className="brand-strip__item"><strong>04</strong><span>Retail &amp; bulk</span></div>
          </div>
        </section>

        <section className="story-section section-pad" id="story">
          <div className="container story-section__grid">
            <div className="section-kicker"><span className="section-kicker__number">01</span><span>Our story</span></div>
            <div className="story-section__content">
              <p className="eyebrow">A brand with room to grow</p>
              <h2>Quality everyday goods, <em>closer to home.</em></h2>
              <div className="story-section__lower">
                <p className="body-copy">CHI-ZARAM is a Nigerian consumer-products and retail/bulk-supply brand focused on bringing quality everyday products closer to customers. Our portfolio currently spans palm oil, cleaning essentials, fabrics collections, and oil perfumes.</p>
                <div className="story-callout"><Sparkles size={19} /><span>One master brand.<br /><strong>Many ways to live well.</strong></span></div>
              </div>
              <a className="text-link" href="#portfolio">Explore our collection <ArrowUpRight size={17} /></a>
            </div>
            <div className="story-section__side-note"><span>CHI-ZARAM</span><p>Pure goodness.<br /><em>Naturally better.</em></p></div>
          </div>
        </section>

        <section className="portfolio-section section-pad" id="portfolio">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow">What we carry</p><h2>A little more of<br /><em>the good stuff.</em></h2></div>
              <p className="section-heading__aside">From the kitchen to the home, from personal style to thoughtful gifting — we’re building a considered range of products for real, everyday life.</p>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <button
                  type="button"
                  className={category.className}
                  key={category.title}
                  onClick={() => setActiveCategory(category)}
                  style={{ textAlign: "left", border: 0, padding: 0 }}
                >
                  <div className="category-card__image"><img src={category.image} alt="" loading="lazy" /></div>
                  <div className="category-card__overlay" />
                  <img className="category-card__mark" src="/manus-storage/chi-zaram-mark_15d277e5.png" alt="" />
                  <div className="category-card__content"><span className="category-card__number">{category.number}</span><span className="category-card__label">{category.label}</span><h3>{category.title}</h3><p>{category.copy}</p><span className="category-card__link">View product details <ArrowUpRight size={16} /></span></div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="palm-section section-pad" id="palm-oil">
          <div className="container palm-section__inner">
            <div className="palm-section__visual"><img src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1200&q=85" alt="A natural oil bottle with a bowl and palm-inspired warm tones" loading="lazy" /><img className="palm-section__brand-stamp" src="/manus-storage/chi-zaram-mark_15d277e5.png" alt="" /><div className="palm-section__badge"><span>Family size</span><strong>5L</strong><small>lasting value</small></div></div>
            <div className="palm-section__copy"><div className="section-kicker section-kicker--light"><span className="section-kicker__number">02</span><span>The flagship</span></div><p className="eyebrow eyebrow--gold">CHI-ZARAM Foods</p><h2>Pure, fresh,<br /><em>naturally better.</em></h2><p className="body-copy body-copy--light">Our 5-litre hero pack is presented for family use and value, with retail and bulk enquiries available directly through WhatsApp.</p><div className="palm-points"><span><Check size={16} /> Everyday cooking</span><span><Check size={16} /> Family-size value</span><span><Check size={16} /> Retail or bulk supply</span></div><button className="button button--gold" type="button" onClick={() => openWhatsApp("Hello CHI-ZARAM, I would like to enquire about the 5-litre palm oil pack. Please share current price, availability and delivery options.")}>Enquire about Palm Oil <ArrowUpRight size={17} /></button><p className="micro-note">Current availability and pricing are confirmed on enquiry.</p></div>
          </div>
        </section>

        <section className="commercial-section section-pad" id="commercial">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Pack sizes &amp; supply structure</p>
                <h2>Built for households,<br /><em>priced for value.</em></h2>
              </div>
              <p className="section-heading__aside">We offer flexible packaging for household cooking, retail shelves, and commercial kitchens. All pricing and batch availability are confirmed directly through WhatsApp to ensure accuracy.</p>
            </div>

            <div className="commercial-grid">
              <div className="commercial-card">
                <span className="commercial-card__tag">Flagship Product</span>
                <h3>CHI-ZARAM Palm Oil</h3>
                <p className="commercial-card__desc">Pure red palm oil with no additives, hygienically processed for rich flavour and nutritional value.</p>
                <ul className="commercial-specs">
                  <li><strong>Primary Pack:</strong> 5 Litres (Hero household family size)</li>
                  <li><strong>Bulk Options:</strong> Jerrycans &amp; Cartons available on request</li>
                  <li><strong>Pricing Model:</strong> Tiered wholesale / retail pricing confirmed via WhatsApp</li>
                </ul>
                <button className="button button--crimson button--full" type="button" onClick={() => openWhatsApp("Hello CHI-ZARAM, I would like to check current pack prices and availability for Palm Oil.")}>
                  Enquire Palm Oil Pricing <ArrowUpRight size={16} />
                </button>
              </div>

              <div className="commercial-card">
                <span className="commercial-card__tag">Wholesale Tiers</span>
                <h3>Supply Structure</h3>
                <p className="commercial-card__desc">Designed to support individual shoppers, local retailers, restaurants, and commercial distributors.</p>
                <ul className="commercial-specs">
                  <li><strong>Tier 1 (Retail):</strong> Single units for households &amp; direct consumers</li>
                  <li><strong>Tier 2 (Reseller):</strong> Carton / bundle quantities for shops &amp; vendors</li>
                  <li><strong>Tier 3 (Commercial):</strong> High-volume pallet or bulk distribution supply</li>
                </ul>
                <button className="button button--quiet button--full" type="button" onClick={() => openWhatsApp("Hello CHI-ZARAM Wholesale Desk, I would like to request the wholesale tier rate card and MOQ details.")}>
                  Request Wholesale Rate Card <ArrowUpRight size={16} />
                </button>
              </div>

              <div className="commercial-card">
                <span className="commercial-card__tag">Logistics &amp; Fulfillment</span>
                <h3>Delivery Coverage</h3>
                <p className="commercial-card__desc">Reliable dispatch from our operating hubs with structured delivery options for local and regional orders.</p>
                <ul className="commercial-specs">
                  <li><strong>Local Delivery:</strong> Direct doorstep dispatch within operating zones</li>
                  <li><strong>Interstate Bulk:</strong> Partner transport and motor-park logistics for regional buyers</li>
                  <li><strong>Pickup Option:</strong> Direct depot / warehouse collection by arrangement</li>
                </ul>
                <button className="button button--quiet button--full" type="button" onClick={() => openWhatsApp("Hello CHI-ZARAM Logistics, I want to confirm delivery coverage and dispatch cost for my location.")}>
                  Confirm Delivery Coverage <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="supply-section section-pad" id="supply">
          <div className="container supply-section__inner">
            <div className="supply-section__copy"><div className="section-kicker"><span className="section-kicker__number">03</span><span>Retail &amp; bulk supply</span></div><p className="eyebrow">For the home, shop, or growing business</p><h2>Need more<br /><em>to go around?</em></h2><p className="body-copy">Buying for resale, a food business, or larger household needs? Tell us what you need, the quantity, and your location. Our team can confirm current availability and supply options.</p><div className="supply-feature"><div className="supply-feature__icon"><Truck size={20} /></div><div><strong>Quality + value + convenience</strong><span>A direct path from enquiry to dispatch.</span></div></div></div>
            <form className="enquiry-card" onSubmit={handleSubmit}><div className="enquiry-card__top"><span className="enquiry-card__label">Wholesale desk</span><span className="enquiry-card__status"><i /> WhatsApp first</span></div><h3>Start an enquiry</h3><p>Share the basics. We’ll take it from there.</p><label>What are you looking for?<select name="product" defaultValue="Palm Oil"><option>Palm Oil</option><option>Cleaning Essentials</option><option>Fabrics Collections</option><option>Oil Perfume</option><option>Multiple categories</option></select></label><label>Estimated quantity<input name="quantity" placeholder="e.g. 20 units / 2 cartons" /></label><label>Delivery location<input name="location" placeholder="City or area" required /></label><button className="button button--crimson button--full" type="submit">{submitted ? "Opening WhatsApp…" : "Send enquiry on WhatsApp"}<ArrowUpRight size={17} /></button><span className="enquiry-card__fineprint">No fixed prices are published here — live availability and logistics are confirmed directly.</span></form>
          </div>
        </section>

        <section className="process-section section-pad">
          <div className="container">
            <div className="section-heading section-heading--center"><p className="eyebrow">How it works</p><h2>Simple by design.</h2><p>Because ordering should feel as easy as finding the right thing.</p></div>
            <div className="process-grid">{supplySteps.map((step) => <div className="process-step" key={step.number}><span className="process-step__number">{step.number}</span><div className="process-step__icon">{step.number === "01" ? <ShoppingBag size={20} /> : step.number === "02" ? <MessageCircle size={20} /> : <Truck size={20} />}</div><h3>{step.title}</h3><p>{step.copy}</p></div>)}</div>
          </div>
        </section>

        <section className="closing-section" id="contact">
          <div className="closing-section__leaf closing-section__leaf--one" aria-hidden="true"><Leaf size={170} /></div><div className="closing-section__leaf closing-section__leaf--two" aria-hidden="true"><Leaf size={95} /></div>
          <div className="container closing-section__inner"><p className="eyebrow eyebrow--gold">Let’s make the next order easy</p><h2>Good things are<br /><em>worth sharing.</em></h2><p>Have a question, a restock in mind, or a larger supply need? We’re one message away.</p><button className="button button--gold" type="button" onClick={() => openWhatsApp("Hello CHI-ZARAM, I would like to make an enquiry. Please assist me with current products, availability and delivery options.")}>Talk to CHI-ZARAM <ArrowUpRight size={17} /></button></div>
        </section>
      </main>

      {activeCategory && (
        <div className="product-modal-backdrop" onClick={() => setActiveCategory(null)}>
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            <button className="product-modal__close" type="button" onClick={() => setActiveCategory(null)} aria-label="Close modal">
              <X size={20} />
            </button>
            <div className="product-modal__image">
              <img src={activeCategory.image} alt={activeCategory.title} />
              <span className="product-modal__badge">{activeCategory.label}</span>
            </div>
            <div className="product-modal__body">
              <span className="product-modal__number">{activeCategory.number}</span>
              <h3>{activeCategory.title}</h3>
              <p className="product-modal__desc">{activeCategory.details}</p>
              <div className="product-modal__specs-title">Key Specifications &amp; Offerings</div>
              <ul className="product-modal__specs">
                {activeCategory.specs.map((spec, i) => (
                  <li key={i}><Check size={14} /> {spec}</li>
                ))}
              </ul>
              <div className="product-modal__actions">
                <button
                  className="button button--crimson button--full"
                  type="button"
                  onClick={() => {
                    const msg = `Hello CHI-ZARAM, I am interested in ${activeCategory.title} (${activeCategory.label}). Please share current pricing, pack sizes, and availability details.`;
                    setActiveCategory(null);
                    openWhatsApp(msg);
                  }}
                >
                  Enquire via WhatsApp <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="site-footer"><div className="container site-footer__top"><a className="brand-lockup brand-lockup--footer" href="#top"><img src="/manus-storage/chi-zaram-mark_15d277e5.png" alt="" className="brand-lockup__mark" /><span className="brand-lockup__type"><strong>CHI-ZARAM</strong><small>Palm Oil &amp; More</small></span></a><div className="footer-tagline">Pure goodness.<br /><em>Naturally better.</em></div><div className="footer-contact"><span>Start a conversation</span><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle size={15} /> 0809 219 2180</a><a href="https://www.tiktok.com/@ogonwibe" target="_blank" rel="noreferrer"><Instagram size={15} /> @ogonwibe</a></div></div><div className="container site-footer__bottom"><span>© 2026 CHI-ZARAM Palm Oil &amp; More Enterprises</span><span>Retail &amp; Bulk Supply</span><a href="#top">Back to top <ChevronDown size={14} className="rotate-180" /></a></div></footer>

      <a className="whatsapp-float" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="Chat with CHI-ZARAM on WhatsApp"><MessageCircle size={21} /><span>Chat with us</span></a>
    </div>
  );
}
