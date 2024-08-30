import { DirectiveBinding, VNode } from "vue";
import Intersect from "~~/helpers/Intersect";

const intersectMap: Map<HTMLElement, Intersect> = new Map<HTMLElement, Intersect>();

export default defineNuxtPlugin((NuxtApp) => {

    const IntersectDirective = {
        mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) {
            const intersect: Intersect = new Intersect(vnode.context!)
            intersectMap.set(el, intersect)
            intersect.bind(el, binding)
        },

        unmounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode) {
            const intersect: Intersect | undefined = intersectMap.get(el)
            if (intersect) {
                intersect.unbind(el, binding)
            }
        },
        getSSRProps(binding, vnode) {
            // you can provide SSR-specific props here
            return {}
        }
    }

    NuxtApp.vueApp.directive("intersect", IntersectDirective);
})