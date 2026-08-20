/**
 * Harvest Editorial packs and pricing page: pack-size clarity, interactive multi-pack calculator
 * with delivery location input, enquiry-based commercial guidance, and SEO metadata.
 */
import { useState, useMemo } from "react";
import { ArrowUpRight, Check, Calculator, MessageCircle, MapPin } from "lucide-react";
import { assetPath } from "@/lib/sitePaths";
import SiteLayout, { whatsappHref } from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";
import { packVariants, pricingTiers } from "@/lib/commercialData";

type PackKey = "1L" | "3L" | "5L" | "25L";

const packPrices: Record<PackKey, number> = {
  "1L": 2500,
  "3L": 8500,
  "5L": 12500,
  "25L": 60000,
};

const packNames: Record<PackKey, string> = {
  "1L": "1L Retail bottle",
  "3L": "3L Family pack",
  "5L": "5L Value jerrycan",
  "25L": "25L Wholesale container",
};

export default function PacksPricing() {
  const [quantities, setQuantities] = useState<Record<PackKey, number>>({
    "1L": 0,
    "3L": 0,
    "5L": 0,
    "25L": 0,
  });
  const [deliveryLocation, setDeliveryLocation] = useState<string>("Isolo, Lagos");

  const handleQtyChange = (key: PackKey, val: string) => {
    const num = parseInt(val, 10);
    setQuantities((prev) => ({
      ...prev,
      [key]: isNaN(num) || num < 0 ? 0 : num,
    }));
  };

  const { totalUnits, totalPrice, whatsAppMessage } = useMemo(() => {
    let units = 0;
    let price = 0;
    const summaryParts: string[] = [];

    (Object.keys(quantities) as PackKey[]).forEach((key) => {
      const q = quantities[key];
      if (q > 0) {
        units += q;
        const sub = q * packPrices[key];
        price += sub;
        summaryParts.push(`${q} x ${packNames[key]} (₦${packPrices[key].toLocaleString()} ea = ₦${sub.toLocaleString()})`);
      }
    });

    const locText = deliveryLocation.trim() ? deliveryLocation.trim() : "Lagos / Nigeria";

    const msg = summaryParts.length > 0
      ? `Hello CHI-ZARAM, I would like to order/enquire about the following multi-pack combination:\n\n${summaryParts.join("\n")}\n\nTotal Estimated Cost: ₦${price.toLocaleString()} (${units} total units).\nDelivery Location: ${locText}\n\nPlease confirm availability, shipping/delivery cost to this location, and final payment details.`
      : `Hello CHI-ZARAM, I would like to inquire about red palm oil wholesale and retail pack pricing (1L ₦2,500, 3L ₦8,500, 5L ₦12,500, 25L ₦60,000). Delivery Location: ${locText}. Please share availability and delivery options.`;

    return { totalUnits: units, totalPrice: price, whatsAppMessage: msg };
  }, [quantities, deliveryLocation]);

  return (
    <SiteLayout activePath="/packs-pricing">
      <SEOHead
        title="Pack Sizes & Wholesale Price Guide with Cost Calculator"
        description="Explore CHI-ZARAM red palm oil pack formats (1L, 3L, 5L, and bulk) and calculate custom multi-pack order estimates instantly. Include delivery location and enquire via WhatsApp."
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
                    <div className="pack-variant-header">
                      <span>{pack.label}</span>
                      <strong className="pack-variant-price">{pack.exactPrice}</strong>
                    </div>
                    <h3>{pack.title}</h3>
                    <p>{pack.copy}</p>
                    <a className="text-link" href={whatsappHref(`Hello CHI-ZARAM, I would like to enquire about the ${pack.label} ${pack.title} red palm oil pack. Please share current pricing and availability.`)} target="_blank" rel="noreferrer">
                      Ask about this pack <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Quick Multi-Pack Calculator */}
            <div className="pack-calculator-section" id="calculator">
              <div className="pack-calculator-header">
                <p className="eyebrow"><Calculator size={14} /> Multi-pack cost estimator</p>
                <h3>Calculate your order in seconds</h3>
                <p>Enter your desired quantities for each pack size below to estimate your total order cost instantly, add your delivery location, and send the breakdown directly to our sales desk on WhatsApp.</p>
              </div>

              <div className="pack-calculator-grid">
                {(["1L", "3L", "5L", "25L"] as PackKey[]).map((key) => {
                  const unitPrice = packPrices[key];
                  const count = quantities[key];
                  const subtotal = count * unitPrice;
                  return (
                    <div className="pack-calc-card" key={key}>
                      <div className="pack-calc-card__top">
                        <span>{key}</span>
                        <strong>₦{unitPrice.toLocaleString()} ea</strong>
                      </div>
                      <label htmlFor={`calc-${key}`}>{packNames[key].split(" ")[1]}</label>
                      <input
                        id={`calc-${key}`}
                        type="number"
                        min="0"
                        max="999"
                        value={count}
                        onChange={(e) => handleQtyChange(key, e.target.value)}
                        aria-label={`Quantity of ${key} packs`}
                      />
                      <div className="pack-calc-card__subtotal">
                        Subtotal: <strong>₦{subtotal.toLocaleString()}</strong>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Delivery Location Field */}
              <div className="pack-calculator-location">
                <label htmlFor="calc-delivery-location">
                  <MapPin size={14} /> Delivery Destination / Area (e.g. Isolo, Ikeja, Lekki, Abuja)
                </label>
                <input
                  id="calc-delivery-location"
                  type="text"
                  value={deliveryLocation}
                  onChange={(e) => setDeliveryLocation(e.target.value)}
                  placeholder="Enter your town, city, or delivery depot"
                  aria-label="Delivery Destination"
                />
              </div>

              <div className="pack-calculator-summary">
                <div className="pack-calculator-totals">
                  <span>Estimated order breakdown</span>
                  <strong>₦{totalPrice.toLocaleString()}</strong>
                  <small>{totalUnits} total unit{totalUnits === 1 ? "" : "s"} selected · Delivering to: {deliveryLocation.trim() || "Lagos"}</small>
                </div>
                <a
                  className="button button--crimson"
                  href={whatsappHref(whatsAppMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={16} /> Send Calculated Order via WhatsApp
                </a>
              </div>
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
            <div className="pricing-availability-banner">
              <strong>(Wholesale &amp; Retail Available)</strong>
              <span>Direct delivery &amp; depot pickup options available for all pack volumes.</span>
            </div>
            <div className="pricing-page-actions">
              <span><Check size={16} /> Wholesale &amp; Retail Available</span>
              <a className="button button--crimson" href={whatsappHref("Hello CHI-ZARAM Wholesale Desk, I would like the current red palm oil and vegetable oil rate card (1L ₦2,500, 3L ₦8,500, 5L ₦12,500, 25L ₦60,000). Please share MOQ and delivery options.")} target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> Request the current rate card
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
