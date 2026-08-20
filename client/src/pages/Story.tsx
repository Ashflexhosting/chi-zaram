/**
 * CHI-ZARAM Our Story page (Redesigned): A visually rich editorial narrative
 * featuring layered imagery, brand philosophy, milestone cards, and trustworthy sourcing pillars.
 */
import { ArrowUpRight, CheckCircle2, HeartHandshake, Leaf, ShieldCheck, Truck } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import SiteLayout, { whatsappHref } from "@/components/SiteLayout";

export default function Story() {
  return (
    <SiteLayout activePath="/story">
      <SEOHead
        title="Our Story"
        description="Discover the heritage, quality standards, and natural philosophy behind CHI-ZARAM Palm Oil & More Enterprises."
        path="/story"
      />
      <main className="story-page">
        {/* Immersive Editorial Hero */}
        <section className="story-hero">
          <div className="container story-hero__inner">
            <div className="story-hero__content">
              <span className="eyebrow">Rooted in Heritage &amp; Quality</span>
              <h1>Crafted by nature. <br /><em>Delivered with integrity.</em></h1>
              <p className="lead">
                CHI-ZARAM Palm Oil &amp; More Enterprises was founded on a simple yet uncompromising premise: that everyday family tables, traditional kitchens, and wholesale markets deserve unadulterated natural produce. We bridge traditional harvesting excellence with rigorous modern quality standards.
              </p>
              <div className="story-hero__actions">
                <a className="button button--crimson" href={whatsappHref("Hello CHI-ZARAM, I'm reading your story and would like to connect with your team.")} target="_blank" rel="noreferrer">
                  Speak with our team <ArrowUpRight size={16} />
                </a>
                <Link className="button button--outline" href="/catalogue">
                  Explore our products
                </Link>
              </div>
            </div>
            <div className="story-hero__visual">
              <div className="story-hero__mosaic">
                <div className="story-hero__mosaic-item story-hero__mosaic-item--main">
                  <img src="/manus-storage/chi-zaram-gen-hero_4ae4df23.jpg" alt="CHI-ZARAM editorial brand still life" />
                </div>
                <div className="story-hero__mosaic-item story-hero__mosaic-item--sub">
                  <img src="/manus-storage/chi-zaram-gen-palmoil_352c8087.jpg" alt="Pure red palm oil and fresh palm fruits" />
                </div>
              </div>
              <div className="story-hero__badge-card">
                <Leaf size={20} />
                <div>
                  <strong>100% Pure &amp; Natural</strong>
                  <span>No artificial additives or chemical coloring</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Visual Split */}
        <section className="story-philosophy container">
          <div className="story-philosophy__grid">
            <div className="story-philosophy__image-wrap">
              <img src="/manus-storage/chi-zaram-gen-vegetable_6f849b25.jpg" alt="Pure vegetable oil and pantry staples" />
              <div className="story-philosophy__caption">
                <span>From harvest to kitchen</span>
                <strong>Sourced with care, packed for freshness</strong>
              </div>
            </div>
            <div className="story-philosophy__text">
              <span className="eyebrow">Our Core Ethos</span>
              <h2>Why compromise on what you consume and share?</h2>
              <p>
                In an era where mass production often sacrifices authenticity for volume, CHI-ZARAM stands apart. We maintain strict oversight over every stage of our supply chain—from partner sourcing and hygienic processing to precise pack sizing and secure dispatch.
              </p>
              <p>
                Whether supplying 1-litre bottles to a household kitchen or multi-ton wholesale cartons to distributors across Nigeria, our commitment to purity, clarity, and dependable partnership remains unwavering.
              </p>
              <div className="story-philosophy__checklist">
                <div>
                  <CheckCircle2 size={18} />
                  <span>Strict hygienic quality control at every batch</span>
                </div>
                <div>
                  <CheckCircle2 size={18} />
                  <span>Transparent pack weights and dependable volumes</span>
                </div>
                <div>
                  <CheckCircle2 size={18} />
                  <span>Direct WhatsApp-first customer support and consultation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Milestone Journey */}
        <section className="story-journey">
          <div className="container">
            <div className="section-heading text-center">
              <span className="eyebrow">Growth &amp; Milestones</span>
              <h2>The CHI-ZARAM Journey</h2>
              <p>Key chapters in our commitment to quality consumer supply.</p>
            </div>
            <div className="journey-grid">
              <div className="journey-card">
                <span className="journey-number">01</span>
                <h3>Foundation &amp; Focus</h3>
                <p>Established with a singular dedication to sourcing unadulterated red palm oil for households and local food businesses.</p>
              </div>
              <div className="journey-card">
                <span className="journey-number">02</span>
                <h3>Portfolio Expansion</h3>
                <p>Expanded our offerings to include pure vegetable oils, tailored denim fabrics, and select home care and fragrance essentials.</p>
              </div>
              <div className="journey-card">
                <span className="journey-number">03</span>
                <h3>Wholesale &amp; Bulk Scale</h3>
                <p>Built robust distribution channels and partner logistics to serve regional resellers, market vendors, and bulk buyers seamlessly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars / Values Section */}
        <section className="story-pillars container">
          <div className="section-heading text-center">
            <span className="eyebrow">Our Guiding Values</span>
            <h2>Built on trust and consistency</h2>
            <p>Every product bearing the CHI-ZARAM name reflects our foundational pillars.</p>
          </div>
          <div className="pillars-grid">
            <div className="pillar-item">
              <ShieldCheck size={28} />
              <h3>Uncompromising Purity</h3>
              <p>We reject artificial additives, ensuring every bottle of oil retains its natural nutrients, rich aroma, and authentic golden-red color.</p>
            </div>
            <div className="pillar-item">
              <HeartHandshake size={28} />
              <h3>Honest Partnership</h3>
              <p>We build lasting relationships with retail customers, family shoppers, and bulk distributors through transparent pricing and open dialogue.</p>
            </div>
            <div className="pillar-item">
              <Truck size={28} />
              <h3>Reliable Delivery</h3>
              <p>From local doorstep dispatch to interstate transport coordination, we ensure your orders arrive intact and on schedule.</p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="story-closing">
          <div className="container text-center">
            <span className="eyebrow">Experience the Difference</span>
            <h2>Ready to experience CHI-ZARAM quality?</h2>
            <p>Explore our product catalogue or start a direct conversation with our team on WhatsApp.</p>
            <div className="story-closing__actions">
              <a className="button button--crimson" href={whatsappHref("Hello CHI-ZARAM, I'd like to place an order or discuss product availability.")} target="_blank" rel="noreferrer">
                Order on WhatsApp <ArrowUpRight size={16} />
              </a>
              <Link className="button button--outline" href="/catalogue">
                View product catalogue
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
