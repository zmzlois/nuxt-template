// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "./assets/css/tailwind.css",
    configPath: "./tailwind.config.js",
    editorSupport: true,
    viewer: true
  }
})
