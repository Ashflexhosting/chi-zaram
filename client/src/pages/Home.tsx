/**
 * Chi-Zaram Harvest Editorial system: asymmetrical storytelling, Palm Crimson accents,
 * warm natural imagery, DM Serif Display headlines, and Manrope utility copy.
 * This page is the public-facing brand narrative and WhatsApp-first conversion path.
 */
import { FormEvent, TouchEvent as ReactTouchEvent, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
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
import { BackToTop } from "@/components/SiteLayout";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const whatsappNumber = "2348092192180";

const categories = [
  {
    number: "01",
    title: "Red Palm Oil",
    label: "CHI-ZARAM FOODS",
    copy: "Our flagship red palm oil, presented in family and bulk sizes for authentic Nigerian cooking.",
    details: "100% pure, fresh, and natural red palm oil extracted from premium palm fruits. Hygienically processed with no artificial additives or preservatives, rich in natural vitamins A and E.",
    specs: ["Available sizes: 1L, 2L, 3L, 4L, 5L & Bulk Jerrycans", "100% natural red palm oil with rich aroma", "Ideal for soups, stews, and traditional dishes", "Family-size value and bulk supply available"],
    image: "/manus-storage/chi-zaram-gen-palmoil_d61695e1.jpg",
    className: "category-card category-card--large",
  },
  {
    number: "02",
    title: "Vegetable Oil & More",
    label: "CHI-ZARAM FOODS",
    copy: "Pure Nigerian vegetable oil, groundnut oil, and pantry staples for healthy daily meals.",
    details: "Premium vegetable and cooking oils filtered for purity and clean taste. Perfect for frying, general cooking, and wholesome family nutrition.",
    specs: ["Available in 1L, 3L, 5L and wholesale cartons", "Pure, natural, and nutrient-rich", "Great for frying, baking, and all cooking", "Affordable price with trusted quality"],
    image: "/manus-storage/chi-zaram-gen-vegetable_e13416ab.jpg",
    className: "category-card category-card--cleaning",
  },
  {
    number: "03",
    title: "Delta State Yellow Garri",
    label: "CHI-ZARAM FOODS",
    copy: "Golden yellow garri sourced from Delta State for quick family meals, snacks, and everyday pantry value.",
    details: "A clean, bright, and versatile cassava staple with the familiar texture and sunny colour that belongs in every well-stocked Nigerian pantry.",
    specs: ["Retail, family, and bulk formats available on enquiry", "Sourced from Delta State", "Ideal for soaking, garri eba, and pantry use", "Current pricing and delivery confirmed via WhatsApp"],
    image: "/manus-storage/chi-zaram-yellow-garri-delta-state_d15b1171.jpg",
    className: "category-card category-card--garri",
  },
  {
    number: "04",
    title: "Fabrics Collection",
    label: "CHI-ZARAM FABRICS",
    copy: "Expertly tailored premium denim jeans and fabrics with durable stitching and lasting comfort.",
    details: "An exclusive collection of blue and black denim jeans designed for timeless style, superior durability, and everyday comfort.",
    specs: ["Premium denim and cotton fabrics", "Expert tailoring with durable stitching", "Modern fit for lasting comfort", "Available in blue and black styles"],
    image: "/manus-storage/chi-zaram-gen-fabrics_b7f05a2b.jpg",
    className: "category-card category-card--fabrics",
  },
  {
    number: "05",
    title: "Cleaning Essentials & Fragrance",
    label: "CHI-ZARAM HOME & FRAGRANCE",
    copy: "Practical home care essentials and concentrated oil perfumes for daily lifestyle needs.",
    details: "Dependable household helpers and long-lasting oil perfumes selected for freshness, quality, and everyday value.",
    specs: ["Home care and cleaning essentials", "Concentrated oil perfumes / fragrances", "Great for personal use and gifting", "Wholesale reselling options available"],
    image: "/manus-storage/chi-zaram-gen-home_7c839812.jpg",
    className: "category-card category-card--wide category-card--fragrance",
  },
];

const galleryImages = [
  { title: "Red Palm Oil", src: "/manus-storage/chi-zaram-gen-palmoil_d61695e1.jpg", desc: "Warm, natural product storytelling for the flagship line" },
      { title: "Vegetable Oil", src: "/manus-storage/chi-zaram-gen-vegetable_e13416ab.jpg", desc: "Clean golden pantry styling for everyday meals" },
  { title: "Delta State Yellow Garri", src: "/manus-storage/chi-zaram-yellow-garri-delta-state_d15b1171.jpg", desc: "Golden cassava staple sourced from Delta State" },
    { title: "Fabrics Collection", src: "/manus-storage/chi-zaram-gen-fabrics_b7f05a2b.jpg", desc: "Indigo denim and textured fabric direction" },
  { title: "Home & Fragrance", src: "/manus-storage/chi-zaram-gen-home_7c839812.jpg", desc: "Warm shelf-life styling for home essentials" },
  { title: "The CHI-ZARAM World", src: "/manus-storage/chi-zaram-gen-hero_3991ab64.jpg", desc: "The brand's natural, editorial point of view" },
];

const packVariants = [
  { label: "1L", title: "Retail bottle", src: "/manus-storage/chi-zaram-pack-1l_6e672af6.jpg", quantity: "1L retail pack" },
  { label: "3L", title: "Family pack", src: "/manus-storage/chi-zaram-pack-3l_733459fa.jpg", quantity: "3L family pack" },
  { label: "5L", title: "Value jerrycan", src: "/manus-storage/chi-zaram-pack-5l_b3198c6e.jpg", quantity: "5L family pack" },
  { label: "Bulk", title: "Wholesale supply", src: "/manus-storage/chi-zaram-pack-bulk_ffbd7e5f.jpg", quantity: "Bulk jerrycan / carton" },
];

function GalleryImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`gallery-image-frame ${loaded ? "is-loaded" : ""}`}>
      <span className="gallery-image-frame__loader" aria-hidden="true" />
      <img src={src} alt={alt} loading="lazy" decoding="async" onLoad={() => setLoaded(true)} />
    </div>
  );
}

const pricingTiers = [
  { tier: "Retail", volume: "1–4 units", redPalm: "Standard rate", vegetable: "Standard rate", note: "Single-unit household orders" },
  { tier: "Reseller", volume: "5–19 units", redPalm: "Volume rate", vegetable: "Volume rate", note: "For shops, vendors & small resellers" },
  { tier: "Wholesale", volume: "20–49 units", redPalm: "Preferred rate", vegetable: "Preferred rate", note: "Best value for regular bulk buyers", featured: true },
  { tier: "Distributor", volume: "50+ units", redPalm: "Custom quote", vegetable: "Custom quote", note: "Dedicated pricing & logistics" },
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
  const [selectedQuantity, setSelectedQuantity] = useState("5L family pack");
  const [activePackVariant, setActivePackVariant] = useState(packVariants[2]);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);
  const [pricingProduct, setPricingProduct] = useState<"redPalm" | "vegetable">("redPalm");
  const [pricingVolume, setPricingVolume] = useState("20–49 units");
  const lightboxTouchStart = useRef<number | null>(null);

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const openProductWhatsApp = (product: string, quantity: string) => {
    openWhatsApp(`Hello CHI-ZARAM, I would like to enquire about the following product.\n\n• Product: ${product}\n• Selected Quantity: ${quantity}\n\nPlease share the current price, availability, and delivery options.`);
  };

  const shiftGallery = (direction: number) => {
    setActiveGalleryIndex((current) => {
      if (current === null) return current;
      return (current + direction + galleryImages.length) % galleryImages.length;
    });
  };

  useEffect(() => {
    if (activeGalleryIndex === null && activeCategory === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveGalleryIndex(null);
        setActiveCategory(null);
      }
      if (activeGalleryIndex !== null && event.key === "ArrowRight") shiftGallery(1);
      if (activeGalleryIndex !== null && event.key === "ArrowLeft") shiftGallery(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeGalleryIndex, activeCategory]);

  const handleLightboxTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    lightboxTouchStart.current = event.touches[0]?.clientX ?? null;
  };

  const handleLightboxTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    if (lightboxTouchStart.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? lightboxTouchStart.current;
    const distance = endX - lightboxTouchStart.current;
    if (Math.abs(distance) > 45) shiftGallery(distance < 0 ? 1 : -1);
    lightboxTouchStart.current = null;
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

  const modalQuantityOptions = activeCategory?.title === "Red Palm Oil" ? packVariants.map((variant) => variant.quantity) : activeCategory?.title === "Vegetable Oil & More" ? ["1L retail pack", "3L family pack", "5L family pack", "Wholesale carton"] : activeCategory?.title === "Delta State Yellow Garri" ? ["Retail pouch", "5kg family pack", "Bulk sack", "Wholesale quantity"] : ["1 unit", "5 units", "Wholesale carton"];

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
            <a href="/story" onClick={() => setMobileOpen(false)}>Our story</a>
            <a href="/catalogue" onClick={() => setMobileOpen(false)}>What we carry</a>
            <a href="/packs-pricing" onClick={() => setMobileOpen(false)}>Packs &amp; Pricing</a>
            <a href="/bulk-supply" onClick={() => setMobileOpen(false)}>Bulk supply</a>
            <a href="/contact" onClick={() => setMobileOpen(false)}>Contact</a>
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
                <img src="/manus-storage/chi-zaram-gen-hero_3991ab64.jpg" alt="Red palm oil, palm fruits, and fresh palm leaves arranged on a natural table" />
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
                <p className="body-copy">CHI-ZARAM is a Nigerian consumer-products and retail/bulk-supply brand focused on bringing quality everyday products closer to customers. Our product portfolio spans red palm oil, pure vegetable oil, fabrics, cleaning essentials, and oil perfumes.</p>
                <div className="story-callout"><Sparkles size={19} /><span>One master brand.<br /><strong>Many ways to live well.</strong></span></div>
              </div>
              <a className="text-link" href="#portfolio">Explore our collection <ArrowUpRight size={17} /></a>
            </div>
            <div className="story-section__side-note"><span>CHI-ZARAM</span><p>Pure goodness.<br /><em>Naturally better.</em></p></div>
          </div>
        </section>

        <section className="brand-showcase section-pad">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">The CHI-ZARAM standard</p>
                <h2>From nature's source<br /><em>to your family table.</em></h2>
              </div>
              <p className="section-heading__aside">Every CHI-ZARAM product is selected and packaged with care. Whether you are buying single retail units or wholesale bulk supplies, our commitment to purity and value remains constant.</p>
            </div>
            <div className="brand-showcase__grid">
              <div className="brand-showcase__card">
                <img src="/manus-storage/chi-zaram-gen-hero_3991ab64.jpg" alt="CHI-ZARAM brand presentation with verified pack sizes" loading="lazy" />
                <div className="brand-showcase__tag">Direct Representation</div>
                <h4>Trusted quality from our hands to yours</h4>
                <p>We take pride in transparent presentation, consistent pack sizes, and direct customer engagement.</p>
              </div>
              <div className="brand-showcase__card">
                <img src="/manus-storage/chi-zaram-gen-vegetable_e13416ab.jpg" alt="CHI-ZARAM Palm Oil and More roundel" loading="lazy" />
                <div className="brand-showcase__tag">Palm Oil &amp; More</div>
                <h4>A growing pantry and lifestyle ecosystem</h4>
                <p>From palm and vegetable oils to groundnut oil, grains, and fabrics — explore our complete range.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-section section-pad" id="portfolio">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow">What we carry</p><h2 className="portfolio-section__title"><span>A little more of</span><em>the good stuff.</em></h2></div>
              <p className="section-heading__aside">From the kitchen to the home, from personal style to thoughtful gifting — we’re building a considered range of products for real, everyday life.</p>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <button
                  type="button"
                  className={category.className}
                  key={category.title}
                  onClick={() => { setSelectedQuantity(category.title === "Red Palm Oil" ? "5L family pack" : category.title === "Delta State Yellow Garri" ? "5kg family pack" : "1 unit"); setActivePackVariant(packVariants[2]); setActiveCategory(category); }}
                  style={{ textAlign: "left", border: 0, padding: 0 }}
                >
                  <div className="category-card__image"><img src={category.image} alt="" loading="lazy" /></div>
                  <div className="category-card__overlay" />
                  <img className="category-card__mark" src="/manus-storage/chi-zaram-mark_15d277e5.png" alt="" />
                  <div className="category-card__content"><span className="category-card__number">{category.number}</span><span className="category-card__label">{category.label}</span><h3>{category.title}</h3><p>{category.copy}</p><span className="category-card__link">View product details <ArrowUpRight size={16} /></span></div>
                </button>
              ))}
            </div>
            <div className="category-grid__footer">
              <p>Explore the full CHI-ZARAM range, including pack formats, household essentials, fabrics, and direct supply options.</p>
              <a className="button button--quiet" href="/catalogue">View all products <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="palm-section section-pad" id="palm-oil">
          <div className="container palm-section__inner">
            <div className="palm-section__visual"><img src="/manus-storage/chi-zaram-gen-palmoil_d61695e1.jpg" alt="CHI-ZARAM 5 Litre Palm Oil container with palm fruits" loading="lazy" /><img className="palm-section__brand-stamp" src="/manus-storage/chi-zaram-mark_15d277e5.png" alt="" /><div className="palm-section__badge"><span>Family size</span><strong>5L</strong><small>lasting value</small></div></div>
            <div className="palm-section__copy"><div className="section-kicker section-kicker--light"><span className="section-kicker__number">02</span><span>The flagship</span></div><p className="eyebrow eyebrow--gold">CHI-ZARAM Foods</p><h2>Pure, fresh,<br /><em>naturally better.</em></h2><p className="body-copy body-copy--light">Our red palm oil is available in 1L, 2L, 3L, 4L, and 5L containers as well as bulk jerrycans. Rich in vitamins A and E with no artificial additives.</p><div className="palm-points"><span><Check size={16} /> 100% pure &amp; natural red palm oil</span><span><Check size={16} /> Multiple pack sizes (1L to 5L &amp; Bulk)</span><span><Check size={16} /> Hygienically processed for soups &amp; stews</span></div><button className="button button--gold" type="button" onClick={() => openWhatsApp("Hello CHI-ZARAM, I would like to enquire about palm oil pack sizes (1L to 5L and bulk). Please share current pricing and availability.")}>Enquire about Palm Oil <ArrowUpRight size={17} /></button><p className="micro-note">Current availability and pricing are confirmed on enquiry.</p></div>
          </div>
        </section>

        <section className="gallery-section section-pad">
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">Visual Catalogue</p>
              <h2>Explore our packages &amp; products.</h2>
              <p>A closer look at our certified pack sizes, fabric collections, and everyday essentials.</p>
            </div>
            <div className="gallery-grid">
              {galleryImages.map((item, idx) => (
                <button className="gallery-card" type="button" key={idx} onClick={() => setActiveGalleryIndex(idx)} aria-label={`Open ${item.title} image`}>
                  <div className="gallery-card__img"><GalleryImage src={item.src} alt={item.title} /></div>
                  <div className="gallery-card__info">
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {activeGalleryIndex !== null && (
          <div className="lightbox-backdrop" onClick={() => setActiveGalleryIndex(null)}>
            <div className="lightbox" onClick={(e) => e.stopPropagation()} onTouchStart={handleLightboxTouchStart} onTouchEnd={handleLightboxTouchEnd}>
              <button className="lightbox__close" type="button" onClick={() => setActiveGalleryIndex(null)} aria-label="Close image gallery"><X size={22} /></button>
              <button className="lightbox__arrow lightbox__arrow--left" type="button" onClick={() => shiftGallery(-1)} aria-label="Previous image"><ArrowLeft size={24} /></button>
              <div className="lightbox__media"><img src={galleryImages[activeGalleryIndex].src} alt={galleryImages[activeGalleryIndex].title} loading="eager" decoding="async" /></div>
              <button className="lightbox__arrow lightbox__arrow--right" type="button" onClick={() => shiftGallery(1)} aria-label="Next image"><ArrowRight size={24} /></button>
              <div className="lightbox__caption"><strong>{galleryImages[activeGalleryIndex].title}</strong><span>{galleryImages[activeGalleryIndex].desc}</span><small>{activeGalleryIndex + 1} / {galleryImages.length}</small></div>
              <div className="lightbox__dots" aria-label="Gallery image selector">{galleryImages.map((item, index) => <button key={item.title} className={index === activeGalleryIndex ? "is-active" : ""} type="button" onClick={() => setActiveGalleryIndex(index)} aria-label={`View ${item.title}`} />)}</div>
            </div>
          </div>
        )}

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

        <section className="pricing-section section-pad" id="pricing">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow">Wholesale price guide</p><h2>More volume,<br /><em>better value.</em></h2></div>
              <p className="section-heading__aside">Choose a product to view the supply tiers. Final rates are confirmed on enquiry because pack availability, location, and logistics can affect the delivered price.</p>
            </div>
            <div className="pricing-switcher" role="tablist" aria-label="Wholesale product selector">
              <button className={pricingProduct === "redPalm" ? "is-active" : ""} type="button" onClick={() => setPricingProduct("redPalm")} role="tab" aria-selected={pricingProduct === "redPalm"}>Red Palm Oil</button>
              <button className={pricingProduct === "vegetable" ? "is-active" : ""} type="button" onClick={() => setPricingProduct("vegetable")} role="tab" aria-selected={pricingProduct === "vegetable"}>Vegetable Oil</button>
            </div>
            <div className="pricing-table-wrap">
              <table className="pricing-table">
                <thead><tr><th>Supply Tier</th><th>Order Volume</th><th>{pricingProduct === "redPalm" ? "Red Palm Oil" : "Vegetable Oil"}</th><th>What it suits</th><th /></tr></thead>
                <tbody>{pricingTiers.map((tier) => <tr className={`${tier.featured ? "is-featured" : ""} ${pricingVolume === tier.volume ? "is-selected" : ""}`} key={tier.tier} onClick={() => setPricingVolume(tier.volume)}><td><strong>{tier.tier}</strong>{tier.featured && <span className="pricing-table__badge">Best value</span>}</td><td>{tier.volume}</td><td><span className="pricing-table__rate">{pricingProduct === "redPalm" ? tier.redPalm : tier.vegetable}</span><small>Confirm on WhatsApp</small></td><td>{tier.note}</td><td><button className="pricing-table__cta" type="button" onClick={(e) => { e.stopPropagation(); openProductWhatsApp(pricingProduct === "redPalm" ? "CHI-ZARAM Red Palm Oil" : "CHI-ZARAM Vegetable Oil", tier.volume); }}>Enquire <ArrowUpRight size={14} /></button></td></tr>)}</tbody>
              </table>
            </div>
            <div className="pricing-note"><span><Check size={16} /> Selected tier: <strong>{pricingVolume}</strong></span><button className="text-link" type="button" onClick={() => openProductWhatsApp(pricingProduct === "redPalm" ? "CHI-ZARAM Red Palm Oil" : "CHI-ZARAM Vegetable Oil", pricingVolume)}>Request this tier on WhatsApp <ArrowUpRight size={16} /></button></div>
          </div>
        </section>

        <section className="supply-section section-pad" id="supply">
          <div className="container supply-section__inner">
            <div className="supply-section__copy"><div className="section-kicker"><span className="section-kicker__number">03</span><span>Retail &amp; bulk supply</span></div><p className="eyebrow">For the home, shop, or growing business</p><h2>Need more<br /><em>to go around?</em></h2><p className="body-copy">Buying for resale, a food business, or larger household needs? Tell us what you need, the quantity, and your location. Our team can confirm current availability and supply options.</p><div className="supply-feature"><div className="supply-feature__icon"><Truck size={20} /></div><div><strong>Quality + value + convenience</strong><span>A direct path from enquiry to dispatch.</span></div></div></div>
            <form className="enquiry-card" onSubmit={handleSubmit}><div className="enquiry-card__top"><span className="enquiry-card__label">Wholesale desk</span><span className="enquiry-card__status"><i /> WhatsApp first</span></div><h3>Start an enquiry</h3><p>Share the basics. We’ll take it from there.</p><label>What are you looking for?<select name="product" defaultValue="Palm Oil"><option>Palm Oil</option><option>Vegetable Oil</option><option>Delta State Yellow Garri</option><option>Cleaning Essentials</option><option>Fabrics Collections</option><option>Oil Perfume</option><option>Multiple categories</option></select></label><label>Estimated quantity<input name="quantity" placeholder="e.g. 20 units / 2 cartons" /></label><label>Delivery location<input name="location" placeholder="City or area" required /></label><button className="button button--crimson button--full" type="submit">{submitted ? "Opening WhatsApp…" : "Send enquiry on WhatsApp"}<ArrowUpRight size={17} /></button><span className="enquiry-card__fineprint">No fixed prices are published here — live availability and logistics are confirmed directly.</span></form>
          </div>
        </section>

        <section className="process-section section-pad">
          <div className="container">
            <div className="section-heading section-heading--center"><p className="eyebrow">How it works</p><h2>Simple by design.</h2><p>Because ordering should feel as easy as finding the right thing.</p></div>
            <div className="process-grid">{supplySteps.map((step) => <div className="process-step" key={step.number}><span className="process-step__number">{step.number}</span><div className="process-step__icon">{step.number === "01" ? <ShoppingBag size={20} /> : step.number === "02" ? <MessageCircle size={20} /> : <Truck size={20} />}</div><h3>{step.title}</h3><p>{step.copy}</p></div>)}</div>
          </div>
        </section>

        <section className="testimonial-placeholder section-pad" aria-labelledby="testimonial-title">
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">Customer voices</p>
              <h2 id="testimonial-title">Real experiences,<br /><em>when they’re ready to share.</em></h2>
              <p>This space is reserved for verified feedback from CHI-ZARAM customers. We will only publish names, comments, and ratings with permission.</p>
            </div>
            <div className="testimonial-placeholder__card">
              <div className="testimonial-placeholder__mark">✳</div>
              <div><span className="testimonial-placeholder__label">Verified feedback coming soon</span><h3>A better buying experience starts with listening.</h3><p>Have you ordered from CHI-ZARAM? Share your experience with our team and, with your permission, it can help future customers buy with confidence.</p></div>
              <button className="button button--crimson" type="button" onClick={() => openWhatsApp("Hello CHI-ZARAM, I would like to share feedback about my recent order. Please let me know how to submit it.")}>Share feedback <ArrowUpRight size={16} /></button>
            </div>
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
              <img src={activeCategory.title === "Red Palm Oil" ? activePackVariant.src : activeCategory.image} alt={activeCategory.title === "Red Palm Oil" ? `CHI-ZARAM ${activePackVariant.label} red palm oil pack` : activeCategory.title} loading="eager" decoding="async" />
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
              {activeCategory.title === "Red Palm Oil" && <div className="pack-variant-strip" aria-label="Red palm oil pack-size variants">
                {packVariants.map((variant) => <button className={`pack-variant ${activePackVariant.label === variant.label ? "is-active" : ""}`} type="button" key={variant.label} onClick={() => { setActivePackVariant(variant); setSelectedQuantity(variant.quantity); }}>
                  <span className="pack-variant__image"><img src={variant.src} alt={`${variant.label} ${variant.title}`} loading="lazy" decoding="async" /></span><strong>{variant.label}</strong><small>{variant.title}</small>
                </button>)}
              </div>}
              <label className="product-modal__quantity">Selected quantity
                <select value={selectedQuantity} onChange={(e) => { const next = e.target.value; setSelectedQuantity(next); const variant = packVariants.find((item) => item.quantity === next); if (variant) setActivePackVariant(variant); }}>
                  {modalQuantityOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <div className="product-modal__actions">
                <button
                  className="button button--crimson button--full"
                  type="button"
                  onClick={() => {
                    const msg = `Hello CHI-ZARAM, I am interested in ${activeCategory.title} (${activeCategory.label}).\n\n• Selected Quantity: ${selectedQuantity}\n\nPlease share current pricing, pack sizes, and availability details.`;
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

      <AccessibilityWidget />
      <BackToTop />
      <footer className="site-footer"><div className="container site-footer__top"><a className="brand-lockup brand-lockup--footer" href="#top"><img src="/manus-storage/chi-zaram-mark_15d277e5.png" alt="" className="brand-lockup__mark" /><span className="brand-lockup__type"><strong>CHI-ZARAM</strong><small>Palm Oil &amp; More</small></span></a><div className="footer-tagline">Pure goodness.<br /><em>Naturally better.</em></div><div className="footer-contact"><span>Start a conversation</span><a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle size={15} /> 0809 219 2180</a><a href="https://www.tiktok.com/@ogonwibe" target="_blank" rel="noreferrer"><Instagram size={15} /> @ogonwibe</a><a href="https://web.facebook.com/ogoonwokoye/photos" target="_blank" rel="noreferrer"><Instagram size={15} /> Facebook</a></div></div><div className="container site-footer__bottom"><span>© 2026 CHI-ZARAM Palm Oil &amp; More Enterprises</span><span>Retail &amp; Bulk Supply</span><span>Built by <a href="https://ashflexwebdesign.com" target="_blank" rel="noreferrer">Ashflex Web Design</a></span><a href="#top">Back to top <ChevronDown size={14} className="rotate-180" /></a></div></footer>

      <a className="whatsapp-float" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" aria-label="Chat with CHI-ZARAM on WhatsApp"><MessageCircle size={21} /><span>Chat with us</span></a>
    </div>
  );
}
