// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Solutions", url: "/solutions" },
  { name: "Developers", url: "/welcome-to-docs/" },
  { name: "Resources", url: "/resources" },
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
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};