// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // General
  app: {
    baseURL: process.env.NODE_ENV === "development" ? "/" : "/projectm/",
    buildAssetsDir: "assets",
  },
  experimental: {
    payloadExtraction: false,
  },
  modules: ["@nuxt/content"],
  router: {
    options: {
      strict: false,
    },
  },
  sourcemap: false,
  ssr: true,

  // Modules
  content: {
    // Configuring code highlighting
    // https://content.nuxtjs.org/api/configuration
    highlight: {
      theme: "github-dark",
      preload: ["c", "cpp"],
    },
    markdown: {
      // Configuring external link processing
      // https://github.com/rehypejs/rehype-external-links
      rehypePlugins: [
        [
          "rehype-external-links",
          {
            target: "_blank",
            rel: "noopener noreferer",
          },
        ],
      ],
    },
  },
});
