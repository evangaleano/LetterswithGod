const defaultAmazonUrl = "https://www.amazon.com/dp/B0HKGKRM28";

export const siteConfig = {
  name: "Letters With God",
  description:
    "A guided prayer journal created to help you be still, listen, and surrender to the Father's guidance.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://letterswithgod.com",
  amazonUrl:
    process.env.NEXT_PUBLIC_AMAZON_PRODUCT_URL || defaultAmazonUrl,
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};
