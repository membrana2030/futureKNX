import { DirectiveBinding } from 'vue';
const BackgroundImage = {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        if (!el || !binding?.value || typeof binding?.value != 'object') return;

        (binding.value as Promise<any>).then((result) => {
            el.style.backgroundImage = `url(${result.default.replace('./_nuxt/', '/_nuxt/')})`;
        })
    },
    getSSRProps(binding, vnode) {
        // you can provide SSR-specific props here
        return {}
    }
}

export default defineNuxtPlugin((NuxtApp) => {
    NuxtApp.vueApp.directive("bg-image", BackgroundImage);
})