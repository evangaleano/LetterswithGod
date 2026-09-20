export function trackEvent(name, properties = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...properties });

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", name, properties);
  }
}
