import { DirectiveBinding } from 'vue';

import lax from "lax.js";
if (process.client) {
  lax.init();
  lax.addDriver("scrollY", () => window.scrollY);
}

const preset = {
  "parallax_y0": {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [-200, 0, 200],
      ]
    }
  },
  "parallax_y1": {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [100, 0, -100],
      ]
    }
  },
  "parallax_y2": {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [-100, 0, 100],
      ]
    }
  },
  "parallax_y3": {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [50, 0, -350],
      ]
    }
  },
  "parallax_y4": {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [75, 0, -200],
      ]
    }
  },
  "parallax_y5": {
    scrollY: {
      translateY: [
        ["elInY", "elCenterY", "elOutY"],
        [-100, 0, 350],
      ]
    }
  },
}

const LaxDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (process.client) setTimeout(() => {
      if (!binding.value) lax.addElement(el);
      else if (typeof binding.value == "string") lax.addElement(el, { data_lax_preset: binding.value });
      else if (typeof binding.value == "object" && binding.value.preset) lax.addElement(el, preset[binding.value?.preset]);
      else if (typeof binding.value == "object") lax.addElement(el, binding.value);
    }, 100);
  },
  unmounted(el: HTMLElement) {
    if (process.client) lax.removeElement(el);
  },
  getSSRProps(binding, vnode) {
    // you can provide SSR-specific props here
    return {}
  }
}

export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.vueApp.directive("lax", LaxDirective);
})