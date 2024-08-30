import { DirectiveBinding, nextTick } from "vue";
type StyleOptions = string[] | { [prop: string]: any }

type ScrollBehaviorOptions = {
    size: number
    true?: StyleOptions
    false?: StyleOptions
}

type ScrollBehaviorHandler = (isApplied: boolean, el: HTMLElement, options: ScrollBehaviorOptions) => any;

class ScrollBehavior {
    protected current: boolean
    protected el!: HTMLElement
    protected options!: ScrollBehaviorOptions
    protected callback!: ScrollBehaviorHandler

    public constructor(protected vm) { }

    public async bind(window: Window, el: HTMLElement, binding: DirectiveBinding<ScrollBehaviorOptions & { callback?: ScrollBehaviorHandler }>) {
        await nextTick();

        console.log("behavior bind", binding.value)

        this.el = el;
        this.options = {
            size: binding.value.size,
            true: binding.value.true,
            false: binding.value.false
        }
        this.callback = binding.value.callback;

        window.addEventListener("scroll", ($event) => this.ScrollBehaviorHandle(this, $event), { passive: true });
    }

    public async unbind(window: Window, el: HTMLElement) {
        window.removeEventListener("scroll", ($event) => this.ScrollBehaviorHandle(this, $event));
        this.removeStyleOptions(this.options.true);
        this.removeStyleOptions(this.options.false);
    }

    protected ScrollBehaviorHandle(self: ScrollBehavior, $event) {
        const _top = $event.target?.scrollingElement?.scrollTop || -1;
        if (_top < 0 || self.options.size < 0) return;

        const _new = ($event.target?.scrollingElement?.scrollTop >= self.options.size);
        if (_new == self.current) return;

        self.current = _new;
        if (self.current) {
            self.addStyleOptions(self.options.true || {});
            self.removeStyleOptions(self.options.false || {});
        }
        else {
            self.addStyleOptions(self.options.false || {});
            self.removeStyleOptions(self.options.true || {});
        }

        if (self.callback) self.callback(_new, self.el, self.options);
    }

    protected addStyleOptions(options: StyleOptions) {
        const me = this;

        if (Array.isArray(options)) me.el.classList.add(...options);
        else for (const prop of Object.keys(options)) {
            me.el.style[prop as any] = options[prop];
        }
    }

    protected removeStyleOptions(options: StyleOptions) {
        const me = this;
        if(!options) return;
        else if (Array.isArray(options)) me.el.classList.remove(...options);
        else for (const prop of Object.keys(options)) {
            me.el.style.removeProperty(prop);
        }
    }

}

const ScrollBehaviorMap: Map<HTMLElement, ScrollBehavior> = new Map<HTMLElement, ScrollBehavior>();

const ScrollBehaviorDirective = {
    mounted(el: HTMLElement, binding: DirectiveBinding<ScrollBehaviorOptions & { callback: ScrollBehaviorHandler }>, vnode) {
        const behavior: ScrollBehavior = new ScrollBehavior(vnode.context!);
        ScrollBehaviorMap.set(el, behavior);
        behavior.bind(window, el, binding);
    },

    unmounted(el: HTMLElement) {
        const behavior: ScrollBehavior | undefined = ScrollBehaviorMap.get(el);
        if (behavior) behavior.unbind(window, el);
    },
    getSSRProps(binding, vnode) {
        // you can provide SSR-specific props here
        return {}
    }
}

export default defineNuxtPlugin((NuxtApp) => {
    NuxtApp.vueApp.directive("scroll-behavior", ScrollBehaviorDirective);
})