<template>
    <div class="product-sample overflow-y-hidden flex flex-row items-center"
         itemscope
         itemtype="https://schema.org/Product"
         :class="props.product?.theme"
         v-bg-image="sampleBg">
        <div class="container px-5 py-10 mx-auto flex flex-col  md:h-full md:justify-center md:items-center"
             :class="[{'md:flex-row-reverse': props.reversed}, {'md:flex-row': !props.reversed}]">
            <div class="md:basis-1/2"
                 :class="[{'justify-end md:text-right': props.reversed}, {'justify-start md:text-left': !props.reversed}]">
                <h2 class="text-2xl md:text-5xl font-black leading-normal"
                    v-intersect="intersectFadeInOut"
                    itemprop="name"
                    v-html="product.title">
                </h2>
                <h3 v-if="product.subtitle"
                    itemprop="model"
                    v-intersect="intersectFadeInOut"
                    class="text-2xl md:text-4xl font-light">{{product.subtitle}}</h3>
                <q v-if="product.motto"
                   class="block my-5 text-xl font-light italic"
                   v-html="product.motto"></q>
                <p v-for="content_line in product.content"
                   itemprop="description"
                   v-html="content_line"></p>

                <div class="flex flex-row items-center mx-auto my-8 md:my-14 justify-center"
                     :class="[{'md:justify-end md:text-right': props.reversed}, {'md:justify-start md:text-left': !props.reversed}]">
                    <img v-for="(sample,$index) in product.samples"
                         class="thumbnail cursor-pointer mx-2 transition-all w-10 md:w-16 z-10"
                         :key="$index"
                         :class="[sampleThumbnailClass, ($index == sampleIndex ? sampleActiveClass : '')]"
                         :alt="product.title"
                         v-src="sample"
                         v-intersect="intersectFadeInOut"
                         @click="setSampleIndex($index)" />
                </div>
                <slot></slot>
            </div>
            <div class="md:basis-1/2 flex flex-row items-center justify-center content-center">
                <img ref="leadImage"
                     class="sampleImage"
                     :class="sampleClass"
                     :alt="product.title"
                     v-src="sampleImage"
                     v-intersect="{...intersectFadeInOut, onChange: intersectChanged}" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { intersectFadeInOut } from "~~/helpers";

/* const $img = useImage(); */

let intersectSwitchTimer;

const props = defineProps<{
    product: ProductSample,
    reversed?: Boolean,
    sampleThumbnailClass?: any,
    sampleActiveClass?: any,
    sampleClass?: any,
    theme?: 'dark' | 'light',
}>();

const leadImage = ref<HTMLImageElement>();
const sampleIndex = ref(0);
const product = computed<ProductSample>(() => props.product);
const sampleImage = computed(() => props.product.samples[sampleIndex.value]);

const sampleBg = computed(() => props.product.background);
const sampleClass = computed(() => props.sampleClass || 'halo')
const sampleThumbnailClass = computed(() => props.sampleThumbnailClass || 'shadow-slate-700 shadow-md');
const sampleActiveClass = computed(() => props.sampleActiveClass || 'shadow-xl')

function intersectChanged(value) {
    if (value && !intersectSwitchTimer) intersectSwitchTimer = setInterval(intersectSwitch, 3 * 1000);
    else if (!value && intersectSwitchTimer) clearInterval(intersectSwitchTimer);
}

function intersectSwitch() {
    if (!props.product?.samples || props.product.samples.length == 0) return;
    let _sampleIndex = sampleIndex.value + 1;
    if (_sampleIndex >= props.product.samples.length) _sampleIndex = 0;
    sampleIndex.value = _sampleIndex;
}

function setSampleIndex(value) {
    if (intersectSwitchTimer) clearTimeout(intersectSwitchTimer);
    sampleIndex.value = value;
}

function thumbImage(sample) {
    return import(/* @vite-ignore */[props.product.base, sample].join("/"));
}

</script>

<style scoped lang="scss">
.product-sample {
    background-position: 50% 50%;
    background-size: cover;
    background-attachment: fixed;

    &.dark,
    &.dark * {
        color: white;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5) !important;
    }

    &.light {
        color: black;
    }

    .sampleImage {
        width: auto !important;
        height: auto !important;
        max-width: 400px;
    }

    .halo {
        box-shadow: 0 0 250px 10px rgba(255, 255, 255, 1);
    }

    p {
        position: relative;
        z-index: 1;
    }
}

@media (max-width:767px) {
    .product-sample {
        max-width: 100vw;
        min-height: 100vh;

        .sampleImage {
            max-width: 70vw !important;
            height: auto !important;
        }
    }
}
</style>