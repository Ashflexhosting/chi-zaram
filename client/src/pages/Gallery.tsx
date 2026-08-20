/**
 * CHI-ZARAM Photo Gallery page: displays the supplied product, packaging,
 * brand, and lifestyle imagery with category filtering and interactive lightbox browsing.
 */
import { ArrowUpRight, ChevronLeft, ChevronRight, Image as ImageIcon, Share2, X } from "lucide-react";
import { TouchEvent as ReactTouchEvent, useEffect, useRef, useState } from "react";
import SEOHead from "@/components/SEOHead";
import SiteLayout, { whatsappHref } from "@/components/SiteLayout";

const galleryItems = [
  {
    id: 1,
    title: "Flagship Red Palm Oil Bottle & Fresh Palm Fruits",
    category: "Palm Oil",
    caption: "Our signature 1L red palm oil bottle styled alongside fresh palm nuts, representing pure unadulterated quality.",
    src: "/manus-storage/chi-zaram-gen-palmoil_d61695e1.jpg",
  },
  {
    id: 2,
    title: "Editorial Brand Still Life & Botanicals",
    category: "Brand Story",
    caption: "A warm Harvest Editorial composition capturing botanical elements, warm sunlight, and our core natural philosophy.",
    src: "/manus-storage/chi-zaram-gen-hero_3991ab64.jpg",
  },
  {
    id: 3,
    title: "Pure Vegetable Oil & Kitchen Staples",
    category: "Vegetable Oil",
    caption: "Crystal-clear vegetable oil bottles and cooking essentials designed for everyday culinary excellence.",
    src: "/manus-storage/chi-zaram-gen-vegetable_e13416ab.jpg",
  },
  {
    id: 4,
    title: "Premium Denim & Tailored Fabrics",
    category: "Fabrics",
    caption: "Durable indigo denim jeans and tailored apparel from our lifestyle collection.",
    src: "/manus-storage/chi-zaram-gen-fabrics_b7f05a2b.jpg",
  },
  {
    id: 5,
    title: "Home Fragrance & Cleaning Essentials",
    category: "Home & Fragrance",
    caption: "Amber glass home care bottles, soy candles, and concentrated oil perfumes for daily living.",
    src: "/manus-storage/chi-zaram-gen-home_7c839812.jpg",
  },
  {
    id: 6,
    title: "1-Litre Retail Bottle Format",
    category: "Palm Oil",
    caption: "Convenient tamper-evident retail bottle format for family kitchens and household cooking.",
    src: "/manus-storage/chi-zaram-pack-1l_6e672af6.jpg",
  },
  {
    id: 7,
    title: "3-Litre Family Pack Format",
    category: "Palm Oil",
    caption: "Mid-size family pack offering exceptional value for regular cooking needs.",
    src: "/manus-storage/chi-zaram-pack-3l_733459fa.jpg",
  },
  {
    id: 8,
    title: "5-Litre Jerrycan Format",
    category: "Palm Oil",
    caption: "Robust 5L jerrycan with secure handle for extended home use and food service caterers.",
    src: "/manus-storage/chi-zaram-pack-5l_b3198c6e.jpg",
  },
  {
    id: 9,
    title: "Wholesale Bulk Container & Carton Supply",
    category: "Bulk Supply",
    caption: "Commercial wholesale container and carton packaging built for distributors and resellers.",
    src: "/manus-storage/chi-zaram-pack-bulk_ffbd7e5f.jpg",
  },
];

const categories = ["All", "Palm Oil", "Vegetable Oil", "Fabrics", "Home & Fragrance", "Bulk Supply", "Brand Story"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [shareFeedback, setShareFeedback] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;
  const showNext = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
  const showPrevious = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
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
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <SiteLayout>
      <SEOHead
        title="Photo Gallery"
        description="Explore the complete photo gallery of CHI-ZARAM products, packaging formats, bulk supply cartons, and brand storytelling."
        path="/gallery"
      />
      <main className="gallery-page">
        <header className="page-header container">
          <span className="eyebrow">Visual Archive</span>
          <h1>Products &amp; Gallery</h1>
          <p className="page-header__lead">
            Explore our complete collection of red palm oil formats, vegetable oils, denim fabrics, home fragrances, and bulk supply cartons. Click any image to view in high resolution.
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
                onClick={() => setLightboxIndex(index)}
                onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setLightboxIndex(index); }}
              >
                <div className="gallery-card__media">
                  <img src={item.src} alt={item.title} loading={index < 3 ? "eager" : "lazy"} decoding="async" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/manus-storage/chi-zaram-gen-hero_3991ab64.jpg"; }} />
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
                <button
                  className="lightbox-nav-btn lightbox-prev"
                  type="button"
                  aria-label="Previous image"
                  onClick={showPrevious}
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="lightbox-media-box" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                  <img src={activeLightboxItem.src} alt={activeLightboxItem.title} decoding="async" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/manus-storage/chi-zaram-gen-hero_3991ab64.jpg"; }} />
                  <div className="lightbox-caption">
                    <span className="lightbox-category">{activeLightboxItem.category}</span>
                    <h3>{activeLightboxItem.title}</h3>
                    <p>{activeLightboxItem.caption}</p>
                    <div className="lightbox-actions">
                      <a
                        className="button button--crimson"
                        href={whatsappHref(`Hello CHI-ZARAM, I am enquiring about ${activeLightboxItem.title} (${activeLightboxItem.category}) seen in your photo gallery.`)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Enquire about this item <ArrowUpRight size={15} />
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
                <button
                  className="lightbox-nav-btn lightbox-next"
                  type="button"
                  aria-label="Next image"
                  onClick={showNext}
                >
                  <ChevronRight size={24} />
                </button>
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
                      onClick={() => setLightboxIndex(thumbIdx)}
                    >
                      <img src={thumbItem.src} alt={thumbItem.title} />
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
