import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue"

export default defineNuxtPlugin((NuxtApp) => {
    NuxtApp.vueApp.component("scroll-parallax", ScrollParallax);
})