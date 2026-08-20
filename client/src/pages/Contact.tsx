/**
 * Harvest Editorial contact page: concise contact routes, direct ordering,
 * and a low-friction enquiry path for customers and trade buyers.
 */
import { ArrowUpRight, Instagram, MessageCircle, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import SiteLayout, { whatsappHref } from "@/components/SiteLayout";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Hello CHI-ZARAM, I would like to make an enquiry.\n\n• Name: ${form.get("name")}\n• Product or service: ${form.get("product")}\n• Message: ${form.get("message")}\n\nPlease share current availability, pricing, and next steps.`;
    setSent(true);
    window.open(whatsappHref(message), "_blank", "noopener,noreferrer");
  };

  return (
    <SiteLayout activePath="/contact">
      <main>
        <section className="inner-hero inner-hero--contact"><div className="container inner-hero__grid"><div><p className="eyebrow"><span className="eyebrow__line" /> Contact CHI-ZARAM</p><h1>Good things are<br /><em>worth sharing.</em></h1><p className="inner-hero__intro">Ask about products, pack sizes, pricing, delivery coverage, wholesale supply, or the next item on your list.</p></div><div className="inner-hero__visual"><img src="/manus-storage/chi-zaram-gen-hero_3991ab64.jpg" alt="CHI-ZARAM natural product world" /><span className="inner-hero__stamp">Start a<br /><strong>conversation.</strong></span></div></div></section>

        <section className="contact-page section-pad"><div className="container contact-page__grid"><div className="contact-page__copy"><p className="eyebrow">Reach the team</p><h2>Need more<br /><em>to go around?</em></h2><p className="body-copy">WhatsApp is the quickest way to confirm current products, quantities, rates, and delivery options. You can also follow the brand for product updates and everyday inspiration.</p><div className="contact-routes"><a href={whatsappHref()} target="_blank" rel="noreferrer"><MessageCircle size={19} /><span><small>WhatsApp ordering</small><strong>0809 219 2180</strong></span><ArrowUpRight size={16} /></a><a href="tel:+2348092192180"><Phone size={19} /><span><small>Phone</small><strong>Call the sales line</strong></span><ArrowUpRight size={16} /></a><a href="https://www.tiktok.com/@ogonwibe" target="_blank" rel="noreferrer"><Instagram size={19} /><span><small>TikTok</small><strong>@ogonwibe</strong></span><ArrowUpRight size={16} /></a></div></div><form className="contact-form" onSubmit={submit}><span className="enquiry-card__label">Quick enquiry</span><h3>Start with a note.</h3><p>Tell us what you’re looking for and we’ll continue the conversation on WhatsApp.</p><label>Your name<input name="name" placeholder="Your name" required /></label><label>What can we help with?<select name="product" defaultValue="Product availability"><option>Product availability</option><option>Pack sizes and pricing</option><option>Wholesale / bulk supply</option><option>Delivery coverage</option><option>Other enquiry</option></select></label><label>Your message<textarea name="message" placeholder="Tell us what you need" rows={4} required /></label><button className="button button--crimson button--full" type="submit">{sent ? "Opening WhatsApp…" : "Send enquiry"} <ArrowUpRight size={16} /></button></form></div></section>
      </main>
    </SiteLayout>
  );
}
