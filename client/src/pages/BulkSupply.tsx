/**
 * Harvest Editorial bulk-supply page: practical process, delivery guidance,
 * WhatsApp enquiry form, and SEO metadata.
 */
import { ArrowUpRight, Check, Truck } from "lucide-react";
import { FormEvent, useState } from "react";
import SiteLayout, { whatsappHref } from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";

export default function BulkSupply() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Hello CHI-ZARAM Wholesale Desk, I would like to request a bulk supply quotation.\n\n• Product: ${form.get("product")}\n• Quantity: ${form.get("quantity")}\n• Location: ${form.get("location")}\n• Buyer type: ${form.get("buyer")}\n\nPlease share current pricing, availability, MOQ, and delivery arrangements.`;
    setSent(true);
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  };

  return (
    <SiteLayout activePath="/bulk-supply">
      <SEOHead
        title="Retail & Bulk Supply Quotation"
        description="Request bulk supply quotes for red palm oil and vegetable oil from CHI-ZARAM. Structured pricing and delivery for retailers, resellers, and distributors."
        path="/bulk-supply"
      />
      <main>
        <section className="inner-hero inner-hero--bulk">
          <div className="container inner-hero__grid">
            <div>
              <p className="eyebrow"><span className="eyebrow__line" /> Retail &amp; bulk supply</p>
              <h1>Need more<br /><em>to go around?</em></h1>
              <p className="inner-hero__intro">Buying for resale, a food business, a larger household, or a growing distribution route? Tell us what you need and we’ll confirm the next move.</p>
            </div>
            <div className="inner-hero__visual">
              <img src="/manus-storage/chi-zaram-pack-bulk_ffbd7e5f.jpg" alt="Bulk red palm oil jerrycans ready for supply" />
              <span className="inner-hero__stamp">Direct<br /><strong>supply.</strong></span>
            </div>
          </div>
        </section>

        <section className="bulk-process section-pad">
          <div className="container">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow">How it works</p>
                <h2>From enquiry<br /><em>to dispatch.</em></h2>
              </div>
              <p className="section-heading__aside">We keep the process direct so you can ask the right questions, understand current availability, and make a clear buying decision.</p>
            </div>
            <div className="bulk-process-grid">
              <article>
                <span>01</span>
                <h3>Tell us what you need</h3>
                <p>Share the product, pack size or quantity, buyer type, and delivery location.</p>
              </article>
              <article>
                <span>02</span>
                <h3>We confirm the details</h3>
                <p>Our team responds with current rates, available formats, minimum quantities, and supply options.</p>
              </article>
              <article>
                <span>03</span>
                <h3>We arrange the next move</h3>
                <p>Delivery, payment, collection, and dispatch details are agreed directly with the buyer.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bulk-details section-pad">
          <div className="container bulk-details__grid">
            <div className="bulk-details__copy">
              <div className="section-kicker"><span className="section-kicker__number">01</span><span>Coverage &amp; logistics</span></div>
              <p className="eyebrow">Built around real supply needs</p>
              <h2>Quality + value +<br /><em>convenience.</em></h2>
              <p className="body-copy">Local delivery, regional transport, and direct pickup options are discussed according to the order and destination. Coverage and dispatch costs are confirmed on enquiry rather than assumed.</p>
              <div className="bulk-feature">
                <div className="bulk-feature__icon"><Truck size={20} /></div>
                <div>
                  <strong>Delivery coverage by location</strong>
                  <span>Share your destination and we’ll confirm the most practical route.</span>
                </div>
              </div>
              <div className="bulk-checks">
                <span><Check size={15} /> Retail, reseller, wholesale, and distributor conversations</span>
                <span><Check size={15} /> Red palm oil and vegetable oil supply guidance</span>
                <span><Check size={15} /> Pack sizes and quantity-specific WhatsApp messages</span>
              </div>
            </div>

            <form className="bulk-form" onSubmit={submit}>
              <div className="enquiry-card__top">
                <span className="enquiry-card__label">Wholesale desk</span>
                <span className="enquiry-card__status"><i /> WhatsApp first</span>
              </div>
              <h3>Start a bulk enquiry</h3>
              <p>Share the basics. We’ll take it from there.</p>
              <label>Product
                <select name="product" defaultValue="Red Palm Oil">
                  <option>Red Palm Oil</option>
                  <option>Vegetable Oil</option>
                  <option>Multiple categories</option>
                </select>
              </label>
              <label>Estimated quantity<input name="quantity" placeholder="e.g. 20 cartons or 50 jerrycans" required /></label>
              <label>Delivery location<input name="location" placeholder="City, state, or region" required /></label>
              <label>Buyer type
                <select name="buyer" defaultValue="Retailer / reseller">
                  <option>Household / direct buyer</option>
                  <option>Retailer / reseller</option>
                  <option>Restaurant / food business</option>
                  <option>Distributor</option>
                </select>
              </label>
              <button className="button button--crimson button--full" type="submit">
                {sent ? "Opening WhatsApp…" : "Send bulk enquiry"} <ArrowUpRight size={16} />
              </button>
              <small className="enquiry-card__fineprint">Current pricing and delivery terms are confirmed directly with the CHI-ZARAM team.</small>
            </form>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
