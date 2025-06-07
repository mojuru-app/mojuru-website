import { defineConfig } from "vitepress";
import nav from "./config/nav.mjs";
import sidebar from "./config/sidebar.mjs";
import footer from "./config/footer.mjs";
import socialLinks from "./config/socialLinks.mjs";
import head from "./config/head.mjs";

export default defineConfig({
  title: "Mojuru",
  description: "Effortless streaming, right on your iOS device.",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    head,

    logo: "/logo.png",

    appearance: "force-dark",

    socialLinks,

    nav,

    sidebar,

    footer,

    search: {
      provider: "local",
    },
  },
});
