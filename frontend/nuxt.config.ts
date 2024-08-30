import { colors } from "@indielayer/ui";
import icons from "./icons";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  builder: "vite",
  modules: [
    [
      "@dargmuesli/nuxt-cookie-control",
      {
        isControlButtonEnabled: false,
        barPosition: "bottom-right",
        optional: ["google-analytics"],
        cookieExpiryOffsetMs: 1000 * 60 * 60 * 24 * 7,
        en: {
          links: {
            "https://futureknx.com/cookie-policy": "Cookie Policy",
            "https://futureknx.com/terms-conditions": "Terms & Conditions",
          },
        },
      },
    ],
    [
      "@zadigetvoltaire/nuxt-gtm",
      {
        id: "GTM-MDSBM87S",
      },
    ],
    [
      "@nuxtjs/tailwindcss",
      {
        css: "@/assets/css/tailwind.scss",
      },
    ],
    ["@vueuse/nuxt"],
    [
      "@indielayer/ui/nuxt",
      {
        icons,
        theme: {
          extend: {
            primary: colors.blue,
          },
        },
      },
    ],
    [
      "./modules/sitemap-xml.ts",
      {
        hostname: "https://futureknx.com",
        cacheTime: 1,
        defaults: {
          changefreq: "weekly",
          priority: 1,
          lastmod: new Date().toISOString(),
        },
      },
    ],
    ["@averjs/nuxt-compression"],
  ],
  css: [`@/assets/css/style.scss`],
  build: {
    transpile: ["@indielayer/ui"],
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        trimCustomFragments: true,
        useShortDoctype: true,
      },
    },
    postcss: {
      sourcemap: false,
      postcssOptions: {
        plugins: {
          "tailwindcss/nesting": {},
          tailwindcss: {},
          autoprefixer: {},
          ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
        },
      },
    },
  },
  vite: {
    plugins: [],
    build: {
      sourcemap: false,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        mangle: {
          eval: true,
          module: true,
          toplevel: true,
          safari10: true,
          properties: false,
        },
        format: {
          comments: false,
          ecma: 2020,
        },
      },
      cssCodeSplit: true,
    },
  },
  nitro: {
    compressPublicAssets: true,
    esbuild: {
      options: {
        target: "es2020",
      },
    },
    preset: "firebase",
    firebase: {
      nodeVersion: "20",
      gen: 1,
      region: "us-central1",
    },
  },
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
