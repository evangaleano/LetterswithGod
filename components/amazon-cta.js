"use client";

import { trackEvent } from "@/lib/analytics";

export function AmazonCta({ href, location, className = "button button-primary", children = "Get Your Journal" }) {
  function handleClick() {
    trackEvent("AmazonCTAClick", {
      cta_location: location,
      destination: "amazon",
    });
  }

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      aria-label={`${children} on Amazon (opens in a new tab)`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="button-arrow">↗</span>
    </a>
  );
}
