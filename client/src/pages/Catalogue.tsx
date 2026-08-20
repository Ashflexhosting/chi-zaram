/**
 * Harvest Editorial catalogue page: practical product storytelling, distinct
 * category moments, quality assurance notes, and SEO metadata.
 */
import { ArrowUpRight, Check, MessageCircle, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import SiteLayout, { whatsappHref } from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";

const products = [
  { number: "01", title: "Red Palm Oil", label: "CHI-ZARAM FOODS", copy: "Our flagship red palm oil for soups, stews, traditional dishes, family kitchens, and bulk supply.", image: "/manus-storage/chi-zaram-gen-palmoil_d61695e1.jpg", details: ["1L, 3L, 5L, and bulk formats", "Pure, fresh, and natural product line", "Retail, reseller, and wholesale enquiries"], accent: "crimson" },
  { number: "02", title: "Vegetable Oil & More", label: "CHI-ZARAM FOODS", copy: "Vegetable oil, groundnut oil, and pantry staples for frying, baking, everyday cooking, and food businesses.", image: "/manus-storage/chi-zaram-gen-vegetable_e13416ab.jpg", details: ["Retail and carton quantities", "Everyday cooking and food-service use", "Availability confirmed on enquiry"], accent: "gold" },
  { number: "03", title: "Fabrics Collection", label: "CHI-ZARAM FABRICS", copy: "Premium denim jeans and fabrics with durable stitching, timeless colour, and everyday comfort.", image: "/manus-storage/chi-zaram-gen-fabrics_b7f05a2b.jpg", details: ["Blue and black denim styles", "Tailored and ready-to-wear direction", "Individual and reseller enquiries"], accent: "green" },
  { number: "04", title: "Cleaning Essentials & Fragrance", label: "CHI-ZARAM HOME & FRAGRANCE", copy: "Practical home care products and concentrated oil perfumes for daily living, gifting, and resale.", image: "/manus-storage/chi-zaram-gen-home_7c839812.jpg", details: ["Home care and cleaning essentials", "Concentrated oil perfumes", "Personal, gifting, and wholesale use"], accent: "cream" },
];

export default function Catalogue() {
  return (
    <SiteLayout activePath="/catalogue">
      <SEOHead
        title="Product Catalogue: Red Palm Oil, Vegetable Oil, Fabrics & Home"
        description="Explore the CHI-ZARAM product catalogue featuring pure red palm oil, vegetable oil, premium denim jeans, cleaning essentials, and oil perfumes. Retail and bulk supply available."
        path="/catalogue"
      />
      <main>
        <section className="inner-hero inner-hero--catalogue">
          <div className="container inner-hero__grid">
            <div>
              <p className="eyebrow"><span className="eyebrow__line" /> What we carry</p>
              <h1>A little more of<br /><em>the good stuff.</em></h1>
              <p className="inner-hero__intro">From the kitchen to the home, from personal style to thoughtful gifting — explore the CHI-ZARAM range for real, everyday life.</p>
            </div>
            <div className="inner-hero__visual">
              <img src="/manus-storage/chi-zaram-gen-home_7c839812.jpg" alt="CHI-ZARAM home and fragrance product styling" />
              <span className="inner-hero__stamp">Retail<br /><strong>&amp; bulk.</strong></span>
            </div>
          </div>
        </section>

        <section className="catalogue-page section-pad">
          <div className="container">
            <div className="catalogue-intro">
              <p className="eyebrow">The catalogue</p>
              <p>Our product family is intentionally broad, but the buying experience stays simple. Select a category, review the available formats, and message the team for current stock, pricing, and delivery options.</p>
            </div>
            <div className="catalogue-list">
              {products.map((product) => (
                <article className={`catalogue-product catalogue-product--${product.accent}`} key={product.title}>
                  <div className="catalogue-product__image">
                    <img src={product.image} alt={product.title} loading="lazy" />
                  </div>
                  <div className="catalogue-product__body">
                    <div className="catalogue-product__meta">
                      <span>{product.number}</span>
                      <small>{product.label}</small>
                    </div>
                    <h2>{product.title}</h2>
                    <p>{product.copy}</p>
                    <ul>
                      {product.details.map((detail) => (
                        <li key={detail}><Check size={14} />{detail}</li>
                      ))}
                    </ul>
                    <div className="catalogue-product__actions">
                      <a className="button button--crimson" href={whatsappHref(`Hello CHI-ZARAM, I would like to enquire about ${product.title}. Please share the current products, quantities, prices, and delivery options.`)} target="_blank" rel="noreferrer">
                        <MessageCircle size={16} /> Enquire about this range
                      </a>
                      <Link className="text-link" href="/packs-pricing">See packs &amp; pricing <ArrowUpRight size={16} /></Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="catalogue-trust section-pad">
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">Quality Guarantee</p>
              <h2>The CHI-ZARAM assurance.<br /><em>Pure products, transparent supply.</em></h2>
              <p>We believe trust is earned through consistent presentation, verified pack sizes, and direct conversations with our retail and wholesale buyers.</p>
            </div>
            <div className="catalogue-trust__grid">
              <div className="catalogue-trust__card">
                <ShieldCheck size={26} />
                <h3>Hygienically Processed</h3>
                <p>All red palm oil and food products are sourced and packaged under clean, quality-controlled conditions with no artificial additives.</p>
              </div>
              <div className="catalogue-trust__card">
                <Check size={26} />
                <h3>Consistent Pack Sizes</h3>
                <p>Whether you choose our 1L retail bottle, 3L family pack, 5L jerrycan, or bulk wholesale carton, quantities and volumes are strictly maintained.</p>
              </div>
              <div className="catalogue-trust__card">
                <MessageCircle size={26} />
                <h3>Direct WhatsApp Support</h3>
                <p>We discuss every retail order and bulk quotation directly with you to ensure availability, pricing, and delivery terms are clear before dispatch.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="catalogue-cta section-pad">
          <div className="container catalogue-cta__inner">
            <div>
              <p className="eyebrow eyebrow--gold">Not sure where to start?</p>
              <h2>Tell us what you<br /><em>have in mind.</em></h2>
            </div>
            <a className="button button--gold" href={whatsappHref("Hello CHI-ZARAM, I would like help choosing from your product catalogue. Please share recommendations and current availability.")} target="_blank" rel="noreferrer">
              Ask the team <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
