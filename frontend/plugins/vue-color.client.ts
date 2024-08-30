import VueColor from "@ckpack/vue-color";

export default defineNuxtPlugin((NuxtApp)=>{
    NuxtApp.vueApp.use(VueColor);
})