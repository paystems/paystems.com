// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Solutions", url: "/solutions" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Products",
    links: [
      { name: "Payment Orchestration", url: "/payment-orchestration/" },
      { name: "Recurring Payments", url: "/recurring-payments" },
      { name: "Checkout Experience", url: "/checkout-experience" },
      { name: "Authentication", url: "/authentication/" },
      { name: "Tokenisation", url: "/tokenisation" },
      { name: "Payouts", url: "/payouts" },
    ],
  },
  {
    section: "Solutions",
    links: [
      { name: "Intelligent Routing", url: "/solutions/intelligent-routing" },
      { name: "Secure Vault", url: "/solutions/secure-vault" },
      { name: "APM Widgets", url: "/solutions/apm-widgets" },
      { name: "Cost Observability", url: "/solutions/cost-observability" },
      { name: "Reconciliation", url: "/solutions/reconciliation" },
      { name: "Revenue Recovery", url: "/solutions/revenue-recovery" },
    ],
  },
];
// An object of links for social icons
export const socialLinks = {
  facebook: "https://facebook.com/paystems/",
  x: "https://x.com/PayStems",
  github: "https://github.com/paystems",
  youtube: "https://www.youtube.com/@PayStems",
  linkedin: "https://www.linkedin.com/company/paystems/",
  reddit: "https://www.reddit.com/user/paystems/",
  tiktok: "https://www.tiktok.com/@paystems",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};