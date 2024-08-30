<template>
  <NuxtPage></NuxtPage>
</template>

<script setup lang="ts">
//
import "@fortawesome/fontawesome-free/css/all.css";
import "animate.css";
import "~~/assets/css/fonts/usual/stylesheet.css";
//

useHead({
  htmlAttrs: {
    lang: "en-US"
  },
  titleTemplate(titleChunk) {
    return titleChunk ? `${titleChunk} - Future KNX` : 'Future KNX - Take it easy, simple, smart'
  },
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "icon", type: "image/png", href: "/favicon.png" },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  ],
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=5" },
    { name: "url", content: "https://www.futureknx.com" },
    { name: "identifier-url", content: "https://www.futureknx.com" },
    { name: "author", content: "Future KNX" },
    { name: "subject", content: "KNX Devices, Apps, and Tools" },
    { name: "copyright", content: "Future KNX" },
    { name: "robots", content: "index,follow" },
    { name: "classification", content: "business" },
    { name: "directory", content: "technology" },
    { name: "category", content: "iot" },
    { name: "coverage", content: "Worldwide" },
    { name: "distribution", content: "Global" },
    { name: "rating", content: "General" },
    { name: "revisit-after", content: "7 days" },

    { name: "abstract", content: "High-end finished the unlimited combinations design KNX automation solutions for elegant spaces from the Future KNX." },
    { name: "keywords", content: "knx gateway, knx switch, knx thermostat, knx system devices, knx bluetooth control, knx remote, knx power supply, knx actuator, knx interface, ets 4, ets 5, ets 6, knx mobile app" },

    { "http-equiv": "expires", content: "0" },
    { "http-equiv": "imagetoolbar", content: "no" },
    { "http-equiv": "x-dns-prefetch-controll", content: "off" },

    { name: "google-analytics", content: "G-8B6TQW01FS" },

    { property: "fb:page_id", content: "100086828294176" },

    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://www.futureknx.com" },
    { property: "og:title", content: "Future KNX" },
    { property: "og:description", content: "High-end finished the unlimited combinations design KNX automation solutions for elegant spaces from the Future KNX." },
    { property: "og:image", content: "https://www.futureknx.com/social-cover.webp" },
    { property: "og:site_name", content: "Future KNX" },

    { property: "og:video", content: "https://www.futureknx.com/about-us" },
    { property: "og:video:width", content: "1920" },
    { property: "og:video:height", content: "1080" },
    { property: "og:video:type", content: "text/html" },

    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://www.futureknx.com" },
    { property: "twitter:title", content: "Future KNX" },
    { property: "twitter:description", content: "High-end finished the unlimited combinations design KNX automation solutions for elegant spaces from the Future KNX." },
    { property: "twitter:image", content: "https://www.futureknx.com/social-cover.webp" },
  ],
})

const _routePath = computed(() => useRoute().fullPath);
useRouter().beforeResolve(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });
});

onMounted(() => {
  if(document && document.getElementById) document.getElementById("__nuxt").classList.add("app-ready")
})
</script>

<style lang="scss">
html,
body {
  overflow: auto;
}

html,
body,
#__nuxt {
  @apply min-h-dvh;
  font-family: 'Usual', serif;
}

#__nuxt:not(.app-ready)::before {
  content: " ";
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;

  background-color: #d6d6d6;
  background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTkwMC4yNSA1MDEuMDQiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMTA3LjYiIHkxPSIyNDYuMDIiIHgyPSIyMDEyLjA0IiB5Mj0iMjQ2LjAyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMmJhNzRiIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDM2Y2IyIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iODQuMiIgeTE9IjMxNy43NCIgeDI9IjE5ODguNjUiIHkyPSIzMTcuNzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9Ii4xIiBzdG9wLWNvbG9yPSIjMmJhNzRiIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDM2Y2IyIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0zIiB4MT0iLTU2LjE2IiB5MT0iMzE3Ljc0IiB4Mj0iMTg0OC4yOCIgeTI9IjMxNy43NCIgeGxpbms6aHJlZj0iI2xpbmVhci1ncmFkaWVudCIvPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50LTQiIHgxPSItNTYuMTYiIHkxPSIyNzIuMzUiIHgyPSIxODQ4LjI4IiB5Mj0iMjcyLjM1IiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtNSIgeDE9Ii01Ni4xNiIgeTE9IjMxMi4yIiB4Mj0iMTg0OC4yOCIgeTI9IjMxMi4yIiB4bGluazpocmVmPSIjbGluZWFyLWdyYWRpZW50Ii8+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtNiIgeDE9Ii01Ni4xNiIgeTE9IjMxMy41OSIgeDI9IjE4NDguMjgiIHkyPSIzMTMuNTkiIHhsaW5rOmhyZWY9IiNsaW5lYXItZ3JhZGllbnQiLz48L2RlZnM+PHBhdGggZD0iTTE1NS45LDQ4NC40MmMwLDQuMTYtMy40Nyw3LjYyLTcuNjIsNy42Mkg2MS43NmMtNC4xNiwwLTcuNjItMy40Ny03LjYyLTcuNjJsLS4wOC0yNzUuODJINy42MmMtNC4xNiwwLTcuNjItMy40Ny03LjYyLTcuNjJ2LTU4LjIxYzAtNC4xNywzLjQ3LTcuNjMsNy42Mi03LjYzaDQ2LjQ0di0yMy41NkM1NC4wNiwzMC40OSwxMTAuODgsMCwxNzAuNDgsMGMyMC43OSwwLDQ1Ljc0LDMuNDcsNjMuMDYsNS41NCw0LjE2LjcsNy42Miw0Ljg2LDcuNjIsOS4wMXY1Ny41MWMwLDMuNDctMy40Nyw2LjI0LTcuNjIsNS41NS0xMC40LTIuMDgtMjIuODctMy40Ny0zOC44LTMuNDctMjIuODcsMC0zOC44MSwxMS4wOS0zOC44MSw0Ny4xM3YxMy44NWg3Ny42MmM0LjE2LDAsNy42MiwzLjQ3LDcuNjIsNy42M3Y1OC4yMWMwLDQuMTYtMy40Nyw3LjYyLTcuNjIsNy42MmgtNzcuNjJsLS4wMywyNzUuODJaIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudCkiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0zOTcuNzksNTAwLjM1Yy03NS41MywwLTEyNC4wNS01MS4yOC0xMjQuMDUtMTM4LjZsLjA5LTIxOC45OWMwLTQuMTcsMy40Ny03LjYzLDcuNjItNy42M2g4NS43N2M0LjE2LDAsNy42MiwzLjQ3LDcuNjIsNy42M2wuMDksMjE3LjZjMCwzOC44MSwyMy41Niw2My43Niw1NC43NSw2My43NiwzNy40MiwwLDc3LjYyLTM0LjY2LDc3LjYyLTExMC44OHYtMTcwLjQ4YzAtNC4xNywzLjQ2LTcuNjMsNy42Mi03LjYzaDg4LjAxYzQuMTYsMCw3LjYyLDMuNDcsNy42Miw3LjYzdjM0MS42NWMwLDQuMTYtMy40Nyw3LjYyLTcuNjMsNy42MmgtODMuMTJjLTQuMTcsMC02LjkzLTMuNS02LjkzLTcuNjJsLS4wMy0zNy40MmMtMjQuMjUsMzEuMTgtNjUuMTUsNTMuMzYtMTE1LjA0LDUzLjM2WiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtMikiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0xMDM1LjYxLDUwMC4zNWMtNzUuNTMsMC0xMjQuMDUtNTEuMjgtMTI0LjA1LTEzOC42bC4wOS0yMTguOTljMC00LjE3LDMuNDctNy42Myw3LjYyLTcuNjNoODUuNzdjNC4xNiwwLDcuNjIsMy40Nyw3LjYyLDcuNjNsLjA5LDIxNy42YzAsMzguODEsMjMuNTYsNjMuNzYsNTQuNzUsNjMuNzYsMzcuNDIsMCw3Ny42Mi0zNC42Niw3Ny42Mi0xMTAuODh2LTE3MC40OGMwLTQuMTcsMy40Ni03LjYzLDcuNjItNy42M2g4OC4wMWM0LjE2LDAsNy42MiwzLjQ3LDcuNjIsNy42M3YzNDEuNjVjMCw0LjE2LTMuNDcsNy42Mi03LjYzLDcuNjJoLTgzLjEyYy00LjE3LDAtNi45My0zLjUtNi45My03LjYybC0uMDMtMzcuNDJjLTI0LjI1LDMxLjE4LTY1LjE1LDUzLjM2LTExNS4wNCw1My4zNloiIGZpbGw9InVybCgjbGluZWFyLWdyYWRpZW50LTMpIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNODc4LjA0LDQ3Ny40OGMwLDQuMTYtMy40Nyw5LTYuOTMsMTAuNC0yMC4wOSw2LjI0LTQyLjI3LDExLjA5LTYzLjc1LDExLjA5LTYwLjI5LDAtMTE3LjgxLTMwLjQ5LTExNy44MS0xMTEuNTdsLjY5LTE3OC44aC0zOC44Yy00LjE2LDAtNy42Mi0zLjQ3LTcuNjItNy42MnYtNTguMjFjMC00LjE3LDMuNDctNy42Myw3LjYyLTcuNjNoMzguMTFsLS42OS04MS43N2MwLTQuMTYsMy40Ny03LjYyLDcuNjItNy42Mmg5MC4xYzQuMTYsMCw3LjYyLDMuNDcsNy42Miw3LjYybC0uNyw4MS43N2g3Ny42MmM0LjE3LDAsNy42MiwzLjQ3LDcuNjIsNy42M3Y1OC4yMWMwLDQuMTYtMy40Niw3LjYyLTcuNjIsNy42MmgtNzguMzFsLjY5LDE3Ni4wM2MwLDMwLjQ5LDE1LjI1LDQwLjIsMzguMTIsNDAuMiwxNS45NCwwLDI4LjQxLTIuNzcsMzguOC01LjU1LDQuMTYtLjY5LDcuNjIsMi4wOCw3LjYyLDUuNTV2NTIuNjdaIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC00KSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTEyOTEuNzksNDkyLjA0Yy00LjE3LDAtNy42My0zLjQ3LTcuNjMtNy42MlYxNDIuNzZjMC00LjE3LDMuNDctNy42Myw3LjYzLTcuNjNoODYuNWM0LjE2LDAsNy42MiwzLjQ3LDYuOTIsNy42M2wuMTQsNTIuNjdjMjcuNzItNDIuMjgsNzUuNTMtNjMuMDYsMTI3LjUxLTYzLjA2LDQuODYsMCw5LjcxLjY5LDE0LjU1LDEuMzgsNC4xNi42OSw3LjYyLDQuODUsNy42Miw5LjAxdjYxLjY3YzAsNC4xNi0zLjQ3LDYuOTMtNy42Miw2LjkzLTMuNDctLjY5LTguMzEtLjY5LTExLjc4LS42OS03My40NiwwLTEyNy41MSw0MC44OS0xMjcuNTEsMTIyLjY2bC4zLDE1MS4wOGMwLDQuMTYtMy40Nyw3LjYyLTcuNjIsNy42MmgtODlaIiBmaWxsPSJ1cmwoI2xpbmVhci1ncmFkaWVudC01KSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTE4ODIuMjQsMzcxLjQ1YzQuMTYsMCw3LjYyLDMuNDcsNi45Miw3LjYyLTkuNyw2NS4xNS03Mi4wNywxMjEuOTctMTcxLjE3LDEyMS45Ny0xMTkuMiwwLTE4My42NS03OC4zMS0xODMuNjUtMTg2LjQyLDAtMTEzLjY2LDY3LjkyLTE4OC41LDE4MS41Ny0xODguNXMxODEuNTgsNzYuOTMsMTg0LjM0LDIwMC45N2MwLDQuMTYtMy40Nyw3LjYyLTcuNjIsNy42MmgtMjUzLjY0YzQuMTYsNjcuMjMsMzAuNDksOTcuMDMsODAuMzgsOTcuMDMsMzQuNjYsMCw1OS42MS0xNS4yNSw2OS4zLTUyLjY4LjY5LTQuODUsNC44Ni03LjYyLDkuMDEtNy42Mmg4NC41NVpNMTcxNi42MSwxOTQuNzRjLTQxLjU5LDAtNjYuNTMsMjQuOTQtNzQuODUsNzQuMTVoMTQ2LjIzYy00LjE2LTM4LjEyLTI1LjY0LTc0LjE1LTcxLjM4LTc0LjE1WiIgZmlsbD0idXJsKCNsaW5lYXItZ3JhZGllbnQtNikiIHN0cm9rZS13aWR0aD0iMCIvPjwvc3ZnPg==");
  background-size: 250px;
  background-attachment: fixed;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

p {
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.1);
}

.x-form {
  .bg-white {
    background: transparent !important;
  }

  label,
  label>* {
    color: #fff !important;
  }

  button.x-button,
  .x-input input,
  .x-textarea textarea {
    background: transparent !important;
    border-radius: 0 !important;
    color: #fff;
  }

  textarea,
  input[type] {
    width: 100%;
  }

  .x-textarea textarea {
    min-height: 150px !important;
  }
}

.x-drawer {
  //position: fixed !important;
  transition: all linear 300ms;
}

.x-modal > div.flex.items-end {
  align-items: center  !important;
}

body>div.absolute.ease-in-out {
  position: fixed !important;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
}

.md:flex-row-reverse,
.flex-row-reverse {
  -webkit-flex-direction: row-reverse;
}

.md:flex-col-reverse,
.flex-col-reverse {
  -webkit-flex-direction: column-reverse;
}

@media (min-width: 768px) {
  .x-drawer {
    display: none !important;
  }
}

@media (max-width: 767px) {

  .product-sample,
  .bg-cover,
  .bg-cover.bg-fixed {
    background-attachment: scroll !important;
  }
}
</style>