import { defineConfig } from "vitepress";
import nav from "./config/nav.mjs";
import sidebar from "./config/sidebar.mjs";
import footer from "./config/footer.mjs";

export default defineConfig({
  title: "Mojuru",
  description: "Effortless streaming, right on your iOS device.",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    logo: "/logo.png",

    appearance: "force-dark",

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/mojuru-app/mojuru",
      },
      {
        icon: "discord",
        link: "https://discord.gg/vv5nhvhqQD",
      },
    ],

    nav,

    sidebar,

    footer,

    search: {
      provider: "local",
    },
  },
});
