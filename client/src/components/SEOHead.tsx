/**
 * Harvest Editorial SEO helper: updates document title, meta description,
 * OpenGraph, Twitter card tags, and canonical links per route.
 */
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export default function SEOHead({ title, description, path, image = "/manus-storage/chi-zaram-gen-hero_3991ab64.jpg" }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | CHI-ZARAM Palm Oil & More Enterprises`;

    const setMeta = (propertyAttr: string, propertyValue: string, content: string) => {
      let element = document.querySelector(`meta[${propertyAttr}="${propertyValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(propertyAttr, propertyValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", `${title} | CHI-ZARAM`);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", window.location.origin + path);
    setMeta("property", "og:image", window.location.origin + image);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", `${title} | CHI-ZARAM`);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", window.location.origin + image);

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", window.location.origin + path);

    let scriptLd = document.querySelector('script[type="application/ld+json"]');
    if (!scriptLd) {
      scriptLd = document.createElement("script");
      scriptLd.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptLd);
    }
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "CHI-ZARAM Palm Oil & More Enterprises",
      "url": window.location.origin,
      "logo": window.location.origin + "/manus-storage/chi-zaram-mark_15d277e5.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+234-809-219-2180",
        "contactType": "sales",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://www.tiktok.com/@ogonwibe"
      ]
    };
    scriptLd.textContent = JSON.stringify(structuredData);
  }, [title, description, path, image]);

  return null;
}
