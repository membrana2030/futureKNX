const SmoothScroll = {
    mounted(el: HTMLElement,) {
        el.addEventListener("click", ($event) => {
            const hash = el.getAttribute("href")?.split("#").pop();
            const _target = hash && document.getElementById(hash);
            if (_target) {
                $event.preventDefault();
                _target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
            }
        }, { passive: true });
    },
    getSSRProps() {
        // you can provide SSR-specific props here
        return {}
    }
}

export default defineNuxtPlugin((NuxtApp) => {
    NuxtApp.vueApp.directive("smooth-scroll", SmoothScroll);
})