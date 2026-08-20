/**
 * Harvest Editorial packs and pricing page: pack-size clarity, enquiry-based
 * commercial guidance, and SEO metadata.
 */
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { assetPath } from "@/lib/sitePaths";
import SiteLayout, { whatsappHref } from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";
import { packVariants, pricingTiers } from "@/lib/commercialData";

export default function PacksPricing() {
  return (
    <SiteLayout activePath="/packs-pricing">
      <SEOHead
        title="Pack Sizes & Wholesale Price Guide"
        description="Explore CHI-ZARAM red palm oil pack formats (1L, 3L, 5L, and bulk) and our wholesale supply tiers. Request current rate cards and pricing via WhatsApp."
        path="/packs-pricing"
      />
      <main>
        <section className="inner-hero inner-hero--pricing">
          <div className="container inner-hero__grid">
            <div>
              <p className="eyebrow"><span className="eyebrow__line" /> Packs &amp; pricing</p>
              <h1>Built for households,<br /><em>priced for value.</em></h1>
              <p className="inner-hero__intro">Choose the pack format and supply level that fits your need. Final rates are confirmed directly because availability, location, and logistics can affect delivered pricing.</p>
            </div>
            <div className="inner-hero__visual">
              <img src={assetPath("/manus-storage/chi-zaram-pack-5l_b3198c6e.jpg")} alt="CHI-ZARAM five litre palm oil value pack" />
              <span className="inner-hero__stamp">Pack<br /><strong>your way.</strong></span>
            </div>
          </div>
        </section>

        <section className="pack-page section-pad">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Palm oil formats</p>
                <h2>One trusted line,<br /><em>four useful ways.</em></h2>
              </div>
              <p className="section-heading__aside">Select the format that matches your kitchen, shelf, shop, restaurant, or distribution plan. Product availability is confirmed on enquiry.</p>
            </div>
            <div className="pack-variant-page-grid">
              {packVariants.map((pack) => (
                <article className="pack-variant-page-card" key={pack.label}>
                  <div className="pack-variant-page-card__image">
                    <img src={pack.src} alt={`${pack.label} ${pack.title}`} loading="lazy" />
                  </div>
                  <div className="pack-variant-page-card__body">
                    <span>{pack.label}</span>
                    <h3>{pack.title}</h3>
                    <p>{pack.copy}</p>
                    <a className="text-link" href={whatsappHref(`Hello CHI-ZARAM, I would like to enquire about the ${pack.label} ${pack.title} red palm oil pack. Please share current pricing and availability.`)} target="_blank" rel="noreferrer">
                      Ask about this pack <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing-section section-pad">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">Wholesale price guide</p>
                <h2>More volume,<br /><em>better value.</em></h2>
              </div>
              <p className="section-heading__aside">The guide below explains the supply structure for red palm oil and vegetable oil. Current prices, minimum order quantities, and delivered costs are confirmed on WhatsApp.</p>
            </div>
            <div className="multi-page-price-table">
              <table>
                <thead>
                  <tr>
                    <th>Supply tier</th>
                    <th>Order volume</th>
                    <th>Guide rate</th>
                    <th>Best suited to</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((tier) => (
                    <tr key={tier.tier}>
                      <td><strong>{tier.tier}</strong></td>
                      <td>{tier.volume}</td>
                      <td><span>{tier.rate}</span><small>Confirm on WhatsApp</small></td>
                      <td>{tier.suitedTo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="pricing-page-actions">
              <span><Check size={16} /> Available for red palm oil and vegetable oil</span>
              <a className="button button--crimson" href={whatsappHref("Hello CHI-ZARAM Wholesale Desk, I would like the current red palm oil and vegetable oil rate card. Please share pack sizes, MOQ, and delivery options.")} target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> Request the current rate card
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
