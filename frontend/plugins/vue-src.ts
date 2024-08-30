import { DirectiveBinding } from 'vue';
const VueSrc = {
    mounted(el: HTMLElement, binding: DirectiveBinding<Promise<any>>) {
        if (!binding.value || typeof binding.value != 'object') return;

        el.style.opacity = "0";

        binding.value.then((result) => {
            el.setAttribute("src", result.default);
            el.style.opacity = "1";
        })
    },

    updated(el: HTMLElement, binding: DirectiveBinding) {
        binding.value.then((result) => {
            el.setAttribute("src", result.default);
        })
    },
    getSSRProps(binding, vnode) {
        // you can provide SSR-specific props here
        return {}
    }
}

export default defineNuxtPlugin((NuxtApp) => {
    NuxtApp.vueApp.directive("src", VueSrc);
})