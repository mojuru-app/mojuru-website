export default {
  "/docs/": [
    {
      text: "",
      items: [
        { text: "What is Mojuru?", link: "/docs/introduction/" },
        { text: "Download", link: "/docs/download/" },
        { text: "Mojuru Plus", link: "/docs/mojuru-plus/" },
      ],
    },
    {
      text: "FAQ",
      items: [{ text: "General", link: "/docs/faq/general/" }],
    },
    {
      text: "Guides",
      items: [
        { text: "Getting Started", link: "/docs/guides/getting-started/" },
        {
          text: "Plugins",
          link: "/docs/guides/plugins/",
          collapsed: true,
          items: [
            {
              text: "Metadata",
              link: "/docs/guides/plugins/metadata/",
            },
            {
              text: "Script",
              link: "/docs/guides/plugins/script/",
              collapsed: true,
              items: [
                { text: "Search", link: "/docs/guides/plugins/script/search/" },
                {
                  text: "Fetch Episodes",
                  link: "/docs/guides/plugins/script/fetch-episodes/",
                },
                {
                  text: "Fetch Sources",
                  link: "/docs/guides/plugins/script/fetch-sources/",
                },
              ],
            },
          ],
        },
        { text: "AniList", link: "/docs/guides/anilist/" },
        { text: "Mojuru Plus", link: "/docs/guides/mojuru-plus/" },
      ],
    },
  ],
};
