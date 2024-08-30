import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["cookieControl"]?: typeof import("@dargmuesli/nuxt-cookie-control").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["gtm"]?: typeof import("@zadigetvoltaire/nuxt-gtm").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["indielayer"]?: typeof import("@indielayer/ui/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["sitemap"]?: typeof import("./../../../frontend/modules/sitemap-xml").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["compression"]?: typeof import("@averjs/nuxt-compression").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@dargmuesli/nuxt-cookie-control", Exclude<NuxtConfig["cookieControl"], boolean>] | ["@zadigetvoltaire/nuxt-gtm", Exclude<NuxtConfig["gtm"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@indielayer/ui/nuxt", Exclude<NuxtConfig["indielayer"], boolean>] | ["./../../../frontend/modules/sitemap-xml", Exclude<NuxtConfig["sitemap"], boolean>] | ["@averjs/nuxt-compression", Exclude<NuxtConfig["compression"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["cookieControl"]?: typeof import("@dargmuesli/nuxt-cookie-control").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["gtm"]?: typeof import("@zadigetvoltaire/nuxt-gtm").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["indielayer"]?: typeof import("@indielayer/ui/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["sitemap"]?: typeof import("./../../../frontend/modules/sitemap-xml").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["compression"]?: typeof import("@averjs/nuxt-compression").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>,  modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@dargmuesli/nuxt-cookie-control", Exclude<NuxtConfig["cookieControl"], boolean>] | ["@zadigetvoltaire/nuxt-gtm", Exclude<NuxtConfig["gtm"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@indielayer/ui/nuxt", Exclude<NuxtConfig["indielayer"], boolean>] | ["./../../../frontend/modules/sitemap-xml", Exclude<NuxtConfig["sitemap"], boolean>] | ["@averjs/nuxt-compression", Exclude<NuxtConfig["compression"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },
  }
  interface PublicRuntimeConfig {
   gtm: {
      devtools: boolean,

      id: string,
   },

   indielayerOptions: {
      prefix: string,

      icons: {
         expand: string,

         shrink: string,

         xmark: string,
      },

      theme: {
         extend: {
            primary: {
               50: string,

               100: string,

               200: string,

               300: string,

               400: string,

               500: string,

               600: string,

               700: string,

               800: string,

               900: string,

               950: string,
            },
         },
      },
   },

   cookieControl: {
      barPosition: string,

      closeModalOnClickOutside: boolean,

      colors: {
         barBackground: string,

         barButtonBackground: string,

         barButtonColor: string,

         barButtonHoverBackground: string,

         barButtonHoverColor: string,

         barTextColor: string,

         checkboxActiveBackground: string,

         checkboxActiveCircleBackground: string,

         checkboxDisabledBackground: string,

         checkboxDisabledCircleBackground: string,

         checkboxInactiveBackground: string,

         checkboxInactiveCircleBackground: string,

         controlButtonBackground: string,

         controlButtonHoverBackground: string,

         controlButtonIconColor: string,

         controlButtonIconHoverColor: string,

         focusRingColor: string,

         modalBackground: string,

         modalButtonBackground: string,

         modalButtonColor: string,

         modalButtonHoverBackground: string,

         modalButtonHoverColor: string,

         modalOverlay: string,

         modalOverlayOpacity: number,

         modalTextColor: string,

         modalUnsavedColor: string,
      },

      cookies: {
         necessary: Array<any>,

         optional: Array<any>,
      },

      cookieExpiryOffsetMs: number,

      cookieNameIsConsentGiven: string,

      cookieNameCookiesEnabledIds: string,

      cookieOptions: {
         path: string,

         sameSite: string,

         secure: boolean,
      },

      isAcceptNecessaryButtonEnabled: boolean,

      isControlButtonEnabled: boolean,

      isCookieIdVisible: boolean,

      isCssEnabled: boolean,

      isCssPonyfillEnabled: boolean,

      isDashInDescriptionEnabled: boolean,

      isIframeBlocked: boolean,

      isModalForced: boolean,

      locales: Array<string>,

      localeTexts: {
         en: {
            accept: string,

            acceptAll: string,

            bannerDescription: string,

            bannerTitle: string,

            close: string,

            cookiesFunctional: string,

            cookiesNecessary: string,

            cookiesOptional: string,

            decline: string,

            declineAll: string,

            here: string,

            iframeBlocked: string,

            manageCookies: string,

            save: string,

            settingsUnsaved: string,
         },
      },

      optional: Array<string>,

      en: {
         links: {
            "https://futureknx.com/cookie-policy": string,

            "https://futureknx.com/terms-conditions": string,
         },
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }