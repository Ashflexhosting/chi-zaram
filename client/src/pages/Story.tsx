/**
 * Harvest Editorial story page: source-backed brand narrative, warm pacing,
 * practical product context, and SEO metadata.
 */
import { ArrowUpRight, Check, Leaf, Sparkles } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";

export default function Story() {
  return (
    <SiteLayout activePath="/story">
      <SEOHead
        title="Our Story & Brand Values"
        description="Discover the story behind CHI-ZARAM Palm Oil & More Enterprises. Explore our commitment to purity, family value, quality-minded consumer products, and direct ordering."
        path="/story"
      />
      <main>
        <section className="inner-hero inner-hero--story">
          <div className="container inner-hero__grid">
            <div>
              <p className="eyebrow"><span className="eyebrow__line" /> Our story</p>
              <h1>A brand with room<br /><em>to grow.</em></h1>
              <p className="inner-hero__intro">CHI-ZARAM is a Nigerian consumer-products and retail/bulk-supply brand focused on bringing quality everyday products closer to customers.</p>
            </div>
            <div className="inner-hero__visual">
              <img src="/manus-storage/chi-zaram-gen-hero_3991ab64.jpg" alt="Warm editorial still life representing the CHI-ZARAM product world" />
              <span className="inner-hero__stamp">Rooted<br /><strong>here.</strong></span>
            </div>
          </div>
        </section>

        <section className="story-page-section section-pad">
          <div className="container story-page-grid">
            <div className="section-kicker"><span className="section-kicker__number">01</span><span>What we believe</span></div>
            <div className="story-page-copy">
              <p className="eyebrow">Good goods, honestly presented</p>
              <h2>Quality everyday goods, <em>closer to home.</em></h2>
              <p className="body-copy">Our range begins with products people use, share, and return to: red palm oil, vegetable oil, groundnut oil, fabrics, cleaning essentials, and oil perfumes. We are building a master brand that makes everyday buying feel more considered without making it complicated.</p>
              <div className="story-page-callout">
                <Sparkles size={19} />
                <span>One master brand.<br /><strong>Many ways to live well.</strong></span>
              </div>
            </div>
          </div>
        </section>

        <section className="story-values section-pad">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">The CHI-ZARAM standard</p>
                <h2>Chosen with care,<br /><em>shared with confidence.</em></h2>
              </div>
              <p className="section-heading__aside">Every product line is presented with the same promise: practical value, clear communication, and a direct path from enquiry to dispatch.</p>
            </div>
            <div className="story-values-grid">
              <article>
                <Leaf size={20} />
                <span>01</span>
                <h3>Quality-minded</h3>
                <p>We keep quality, purity, and dependable presentation at the center of the customer experience.</p>
              </article>
              <article>
                <Check size={20} />
                <span>02</span>
                <h3>Family value</h3>
                <p>Pack sizes and supply options are shaped around households, retailers, resellers, and growing businesses.</p>
              </article>
              <article>
                <ArrowUpRight size={20} />
                <span>03</span>
                <h3>Direct ordering</h3>
                <p>WhatsApp gives customers a simple way to confirm availability, pricing, quantities, and delivery options.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="story-quote section-pad">
          <div className="container story-quote__inner">
            <p className="eyebrow eyebrow--gold">Our point of view</p>
            <blockquote>“Pure goodness is not only about where a product begins. It is also about how clearly it reaches the people who need it.”</blockquote>
            <span>— CHI-ZARAM, Palm Oil &amp; More</span>
            <Link className="button button--gold" href="/catalogue">Explore what we carry <ArrowUpRight size={17} /></Link>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
