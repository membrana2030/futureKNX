<template>
    <div class="flex flex-col md:flex-row"
         itemscope
         itemtype="https://schema.org/Product">
        <div class="md:basis-1/2">
            <ClientOnly>
                <Viewer3d v-if="item.ar"
                          disable-zoom
                          :camera-orbit="item.cameraOrbit"
                          :camera-target="item.cameraTarget"
                          :model-name="item.ar"
                          :poster="item.image"
                          class="h-64 md:h-auto md:w-full mx-auto aspect-[4/3]"></Viewer3d>
                <img v-else
                     itemprop="image"
                     class="h-64 md:h-96 mx-auto"
                     v-src="item.image"
                     :alt="item.title" />
            </ClientOnly>
        </div>

        <div class="py-14 md:pt-0 md:basis-2/5">
            <component :is="headerTag"
                       itemprop="name"
                       class="text-2xl md:text-4xl font-black">{{ item.title }}</component>
            <component :is="subHeaderTag"
                       itemprop="model"
                       class="text-2xl md:text-3xl font-light"
                       v-if="item.subtitle" v-html="item.subtitle" />
            <div class="md:my-4">
                <code v-text="item.code"></code>
            </div>

            <div class="max-w-xl"
                 itemprop="description">
                <p v-for="p in item.content"
                   v-html="p"></p>

                <div class="mt-5"
                     v-if="props.expanded && item.dimension">
                    <component :is="thirdHeaderTag"
                               class="text-xl">Details</component>
                    <ul class="list-disc ml-5 font-light">
                        <li v-if="item.dimension.width"
                            itemprop="width">Width: {{ item.dimension.width }}</li>
                        <li v-if="item.dimension.height"
                            itemprop="height">Height: {{ item.dimension.height }}</li>
                        <li v-if="item.dimension.length"
                            itemprop="length">Length: {{ item.dimension.length }}</li>
                        <li v-if="item.dimension.weight"
                            itemprop="weight">Weight: {{ item.dimension.weight }}</li>
                    </ul>
                </div>

                <div class="mt-5"
                     v-if="props.expanded && item.downloads">
                    <component :is="thirdHeaderTag"
                               class="text-xl">Downloads</component>
                    <ul class="font-light">
                        <li class="my-2"
                            v-for="d in item.downloads">
                            <a v-bind="d"
                               class="opacity-50 hover:opacity-100">
                                <i class="fas fa-file-pdf mx-2"
                                   :class="[d.format ? `fa-file-${d.format}` : `fa-file`]"></i>
                                {{ d.title }}
                                <span v-if="d.size"
                                      lang="en-US"> &mdash; {{ d.size }}</span>
                                <span v-if="d.format"
                                      class="uppercase"
                                      lang="en-US"> / {{ d.format }}</span>
                                <span v-if="d.lang"
                                      class="uppercase"
                                      lang="en-US">
                                    [{{ d.lang }}]
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
const props = withDefaults(defineProps<{
    item: SystemDevice,
    expanded?: boolean,
    headerTag?: string,
}>(), {
    expanded: true,
    headerTag: "h1",
});

const visible = ref(false);

const item = computed(() => props.item);
const headerTag = computed(() => {
    return props.headerTag || "h1";
})

const subHeaderTag = computed(() => {
    return tagIncrease(1, "h2");
})

const thirdHeaderTag = computed(() => {
    return tagIncrease(2, "h3");
})

const headerIndex = computed<number>(() => {
    if (!headerTag.value) return;
    const h_ = headerTag.value.match(/^h[1-6]$/)?.shift();
    if (h_) return Number(h_.split("").pop());
    else NaN;
})

function tagIncrease(n: number, defaultTag: string = "h1") {
    let tag = defaultTag;
    let h_index: number = headerIndex.value;

    if (!isNaN(h_index)) tag = `h${h_index + n}`;

    return tag;
}

onMounted(() => {
    nextTick(() => visible.value = true)
})
</script>