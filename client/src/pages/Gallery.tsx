/**
 * CHI-ZARAM Photo Gallery page: displays the supplied product, packaging,
 * brand, and lifestyle imagery with category filtering and interactive lightbox browsing.
 */
import { ArrowUpRight, ChevronLeft, ChevronRight, Image as ImageIcon, RotateCcw, Share2, X, ZoomIn, ZoomOut } from "lucide-react";
import { assetPath } from "@/lib/sitePaths";
import { TouchEvent as ReactTouchEvent, useEffect, useRef, useState } from "react";
import SEOHead from "@/components/SEOHead";
import SiteLayout, { whatsappHref } from "@/components/SiteLayout";
import { pricingTiers } from "@/lib/commercialData";

type GalleryCommercial = {
  packSize: string;
  priceGuide: string;
  orderRange: string;
  note: string;
};

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  caption: string;
  src: string;
  mobileSrc: string;
  commercial?: GalleryCommercial;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Flagship Red Palm Oil Bottle & Fresh Palm Fruits",
    category: "Palm Oil",
    caption: "Our signature 1L red palm oil bottle styled alongside fresh palm nuts, representing pure unadulterated quality.",
    src: assetPath("/manus-storage/palmoil-960_3430c348.jpg"),
    mobileSrc: assetPath("/manus-storage/palmoil-480_f3103087.jpg"),
    commercial: {
      packSize: "1L retail bottle",
      priceGuide: "Standard rate",
      orderRange: "1–4 units",
      note: "Current delivered pricing is confirmed on WhatsApp based on stock and location.",
    },
  },
  {
    id: 2,
    title: "Editorial Brand Still Life & Botanicals",
    category: "Brand Story",
    caption: "A warm Harvest Editorial composition capturing botanical elements, warm sunlight, and our core natural philosophy.",
    src: assetPath("/manus-storage/hero-960_46c9d711.jpg"),
    mobileSrc: assetPath("/manus-storage/hero-480_085fccc1.jpg"),
  },
  {
    id: 3,
    title: "Pure Vegetable Oil & Kitchen Staples",
    category: "Vegetable Oil",
    caption: "Crystal-clear vegetable oil bottles and cooking essentials designed for everyday culinary excellence.",
    src: assetPath("/manus-storage/vegetable-960_60063ee3.jpg"),
    mobileSrc: assetPath("/manus-storage/vegetable-480_cc52e48e.jpg"),
    commercial: {
      packSize: "Retail bottles or bulk supply",
      priceGuide: "Standard, volume, or preferred rate",
      orderRange: "1–49 units",
      note: "Vegetable oil pack availability and current rate-card pricing are confirmed on WhatsApp.",
    },
  },
  {
    id: 4,
    title: "Delta State Yellow Garri",
    category: "Yellow Garri",
    caption: "Golden yellow garri sourced from Delta State, styled as a versatile pantry staple for family meals, soaking, and garri eba.",
    src: assetPath("/manus-storage/chi-zaram-yellow-garri-delta-state_d15b1171.jpg"),
    mobileSrc: assetPath("/manus-storage/chi-zaram-yellow-garri-delta-state_d15b1171.jpg"),
    commercial: {
      packSize: "Retail pouch, family pack, or bulk sack",
      priceGuide: "Product-specific quote",
      orderRange: "Confirm on enquiry",
      note: "Share your preferred quantity and destination for the current yellow garri price and delivery options.",
    },
  },
  {
    id: 5,
    title: "Premium Denim & Tailored Fabrics",
    category: "Fabrics",
    caption: "Durable indigo denim jeans and tailored apparel from our lifestyle collection.",
    src: assetPath("/manus-storage/fabrics-960_7ed6ba51.jpg"),
    mobileSrc: assetPath("/manus-storage/fabrics-480_2edf7bc1.jpg"),
    commercial: {
      packSize: "Item-specific sizes and lengths",
      priceGuide: "Product-specific quote",
      orderRange: "Confirm on enquiry",
      note: "Available fabric specifications, quantities, and delivered pricing are confirmed on WhatsApp.",
    },
  },
  {
    id: 6,
    title: "Home Fragrance & Cleaning Essentials",
    category: "Home & Fragrance",
    caption: "Amber glass home care bottles, soy candles, and concentrated oil perfumes for daily living.",
    src: assetPath("/manus-storage/home-960_f88ac88a.jpg"),
    mobileSrc: assetPath("/manus-storage/home-480_b710d4e4.jpg"),
    commercial: {
      packSize: "Product-specific bottles or formats",
      priceGuide: "Product-specific quote",
      orderRange: "Confirm on enquiry",
      note: "Ask for the current product format, price, availability, and delivery options.",
    },
  },
  {
    id: 7,
    title: "1-Litre Retail Bottle Format",
    category: "Palm Oil",
    caption: "Convenient tamper-evident retail bottle format for family kitchens and household cooking.",
    src: assetPath("/manus-storage/pack-1l-960_b48dd7f7.jpg"),
    mobileSrc: assetPath("/manus-storage/pack-1l-480_6a33c6dd.jpg"),
    commercial: {
      packSize: "1L retail bottle",
      priceGuide: "Standard rate",
      orderRange: "1–4 units",
      note: "Ask for the current unit price and delivered total for your location.",
    },
  },
  {
    id: 8,
    title: "3-Litre Family Pack Format",
    category: "Palm Oil",
    caption: "Mid-size family pack offering exceptional value for regular cooking needs.",
    src: assetPath("/manus-storage/pack-3l-960_26cd8620.jpg"),
    mobileSrc: assetPath("/manus-storage/pack-3l-480_29e5f033.jpg"),
    commercial: {
      packSize: "3L family pack",
      priceGuide: "Standard or volume rate",
      orderRange: "1–19 units",
      note: "Current pricing is confirmed by quantity, availability, and delivery destination.",
    },
  },
  {
    id: 9,
    title: "5-Litre Jerrycan Format",
    category: "Palm Oil",
    caption: "Robust 5L jerrycan with secure handle for extended home use and food service caterers.",
    src: assetPath("/manus-storage/pack-5l-960_065d3c96.jpg"),
    mobileSrc: assetPath("/manus-storage/pack-5l-480_34c6d045.jpg"),
    commercial: {
      packSize: "5L value jerrycan",
      priceGuide: "Standard or volume rate",
      orderRange: "1–19 units",
      note: "Ask for the current unit price, carton options, and delivered total for your location.",
    },
  },
  {
    id: 10,
    title: "Wholesale Bulk Container & Carton Supply",
    category: "Bulk Supply",
    caption: "Commercial wholesale container and carton packaging built for distributors and resellers.",
    src: assetPath("/manus-storage/pack-bulk-960_02d289c8.jpg"),
    mobileSrc: assetPath("/manus-storage/pack-bulk-480_021937f5.jpg"),
    commercial: {
      packSize: "Bulk container or wholesale carton",
      priceGuide: "Preferred rate or custom quote",
      orderRange: "20+ units",
      note: "Bulk pricing, MOQ, logistics, and dispatch timing are confirmed with the Wholesale Desk.",
    },
  },
];

const categories = ["All", "Palm Oil", "Vegetable Oil", "Yellow Garri", "Fabrics", "Home & Fragrance", "Bulk Supply", "Brand Story"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [shareFeedback, setShareFeedback] = useState(false);
  const [zoom, setZoom] = useState(1);
  const touchStartX = useRef<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;
  const pricingGuide = pricingTiers.map((tier) => `${tier.rate} · ${tier.volume}`).join("  /  ");
  const buildEnquiryMessage = (item: GalleryItem) => {
    const commercial = item.commercial;
    return `Hello CHI-ZARAM, I am enquiring about ${item.title} (${item.category}) seen in your photo gallery.\n\n${commercial ? `Pack / format: ${commercial.packSize}\nPrice guide: ${commercial.priceGuide}\nExpected order range: ${commercial.orderRange}` : "Product format: Please advise available options"}\n\nPlease share the current price, availability, and delivery cost for my location.`;
  };
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoom(1);
    setShareFeedback(false);
  };
  const showNext = () => {
    setZoom(1);
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
  };
  const showPrevious = () => {
    setZoom(1);
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
  };
  const handleTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };
  const handleTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX;
    if (endX === undefined) return;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) > 50) distance < 0 ? showNext() : showPrevious();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrevious();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <SiteLayout>
      <SEOHead
        title="Photo Gallery"
        description="Explore the complete photo gallery of CHI-ZARAM products, Delta State yellow garri, packaging formats, bulk supply cartons, and brand storytelling."
        path="/gallery"
      />
      <main className="gallery-page">
        <header className="page-header container">
          <span className="eyebrow">Visual Archive</span>
          <h1>Products &amp; Gallery</h1>
          <p className="page-header__lead">
            Explore our complete collection of red palm oil formats, Delta State yellow garri, vegetable oils, denim fabrics, home fragrances, and bulk supply cartons. Click any image to view in high resolution.
          </p>
        </header>

        <section className="container gallery-section">
          <div className="gallery-filters" role="tablist" aria-label="Gallery category filters">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`gallery-filter-btn ${activeCategory === cat ? "is-active" : ""}`}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-card"
                role="button"
                tabIndex={0}
                onClick={() => openLightbox(index)}
                onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") openLightbox(index); }}
              >
                <div className="gallery-card__media">
                  <img src={item.src} srcSet={`${item.mobileSrc} 480w, ${item.src} 960w`} sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={item.title} loading={index < 3 ? "eager" : "lazy"} decoding="async" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = assetPath("/manus-storage/chi-zaram-gen-hero_3991ab64.jpg"); }} />
                  <div className="gallery-card__overlay">
                    <span className="gallery-card__badge"><ImageIcon size={14} /> View large</span>
                  </div>
                </div>
                <div className="gallery-card__content">
                  <span className="gallery-card__category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {activeLightboxItem && (
          <div className="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Image lightbox">
            <div className="lightbox-container">
              <button
                className="lightbox-close"
                type="button"
                aria-label="Close lightbox"
                onClick={() => setLightboxIndex(null)}
              >
                <X size={22} />
              </button>
              <div className="lightbox-main">
                <div className="lightbox-stage">
                  <button
                    className="lightbox-nav-btn lightbox-prev"
                    type="button"
                    aria-label="Previous image"
                    onClick={showPrevious}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <div className="lightbox-media-box" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    <div className="lightbox-zoom-controls" aria-label="Image zoom controls">
                      <button type="button" onClick={() => setZoom((value) => Math.max(1, Number((value - 0.2).toFixed(1))))} disabled={zoom <= 1} aria-label="Zoom out"><ZoomOut size={15} /></button>
                      <span>{Math.round(zoom * 100)}%</span>
                      <button type="button" onClick={() => setZoom((value) => Math.min(2.4, Number((value + 0.2).toFixed(1))))} disabled={zoom >= 2.4} aria-label="Zoom in"><ZoomIn size={15} /></button>
                      <button type="button" onClick={() => setZoom(1)} disabled={zoom === 1} aria-label="Reset zoom"><RotateCcw size={14} /></button>
                    </div>
                    <img className="lightbox-image" src={activeLightboxItem.src} alt={activeLightboxItem.title} decoding="async" style={{ transform: `scale(${zoom})` }} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = assetPath("/manus-storage/hero-960_46c9d711.jpg"); }} />
                  </div>
                  <button
                    className="lightbox-nav-btn lightbox-next"
                    type="button"
                    aria-label="Next image"
                    onClick={showNext}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
                <div className="lightbox-caption">
                  <span className="lightbox-category">{activeLightboxItem.category}</span>
                  <h3>{activeLightboxItem.title}</h3>
                  <p>{activeLightboxItem.caption}</p>
                  <div className="lightbox-commercial" aria-label="Pack size and pricing information">
                    <div className="lightbox-commercial__heading">
                      <span>Commercial details</span>
                      <small>Quote-led pricing</small>
                    </div>
                    {activeLightboxItem.commercial ? (
                      <div className="lightbox-commercial__grid">
                        <div><small>Pack / format</small><strong>{activeLightboxItem.commercial.packSize}</strong></div>
                        <div><small>Price guide</small><strong>{activeLightboxItem.commercial.priceGuide}</strong></div>
                        <div><small>Order range</small><strong>{activeLightboxItem.commercial.orderRange}</strong></div>
                      </div>
                    ) : (
                      <div className="lightbox-commercial__generic"><strong>Product-specific quote</strong><span>Pack format and current pricing confirmed on WhatsApp.</span></div>
                    )}
                    <p className="lightbox-commercial__note">{activeLightboxItem.commercial?.note ?? "Please ask for the relevant product format, current price, and delivery options."}</p>
                    {activeLightboxItem.category === "Palm Oil" || activeLightboxItem.category === "Vegetable Oil" || activeLightboxItem.category === "Bulk Supply" ? (
                      <p className="lightbox-commercial__tiers"><span>Guide tiers</span>{pricingGuide}</p>
                    ) : null}
                  </div>
                  <div className="lightbox-actions">
                    <a
                      className="button button--crimson"
                      href={whatsappHref(buildEnquiryMessage(activeLightboxItem))}
                      target="_blank"
                      rel="noreferrer"
                      >
                        Enquire about this product <ArrowUpRight size={15} />
                      </a>
                    <button
                      className="button button--outline lightbox-share-btn"
                      type="button"
                      onClick={async () => {
                        const shareData = {
                          title: `${activeLightboxItem.title} | CHI-ZARAM`,
                          text: activeLightboxItem.caption,
                          url: window.location.href,
                        };
                        try {
                          if (navigator.share) {
                            await navigator.share(shareData);
                          } else {
                            await navigator.clipboard.writeText(window.location.href);
                            setShareFeedback(true);
                            setTimeout(() => setShareFeedback(false), 2500);
                          }
                        } catch {
                          // User cancelled or share failed
                        }
                      }}
                    >
                      <Share2 size={15} /> {shareFeedback ? "Link copied!" : "Share image"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="lightbox-footer">
                <div className="lightbox-counter">
                  {lightboxIndex! + 1} of {filteredItems.length}
                </div>
                <div className="lightbox-thumbnails">
                  {filteredItems.map((thumbItem, thumbIdx) => (
                    <button
                      key={thumbItem.id}
                      type="button"
                      className={`lightbox-thumb ${thumbIdx === lightboxIndex ? "is-active" : ""}`}
                      onClick={() => openLightbox(thumbIdx)}
                    >
                      <img src={thumbItem.mobileSrc} alt={thumbItem.title} loading="lazy" decoding="async" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </SiteLayout>
  );
}
