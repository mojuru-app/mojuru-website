import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Mojuru",
  description: "Stream your personal content effortlessly",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    logo: "/logo.png",

    appearance: "force-dark",

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/vv5nhvhqQD" }
    ],
  },
});
