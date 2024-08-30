<template>
    <nuxt-layout>
        <section>
            <div class="bg-slate-900 w-full min-h-screen md:min-h-auto md:aspect-[16/9] text-white flex flex-col md:flex-row items-center justify-center bg-cover header">
                <div class="flex flex-col md:flex-row items-center w-full">
                    <div class="hidden md:flex md:basis-1/6">
                        <h3 class="text-6xl text-text ml-20 leading-normal"
                            v-html="'All you <strong>need</strong> is <strong>here</strong>'.split(' ').join('<br />')"></h3>
                    </div>

                    <div class="max-w-sm md:max-w-none md:basis-4/6">
                        <h1 class="font-light text-2xl mt-20 md:mt-0 md:text-6xl text-center">System Devices</h1>
                        <h2 class="font-normal text-2xl text-center mt-14"
                            v-html="[leading.title, leading.subtitle].join(' ').replace('<br/>', ' ')"></h2>
                        <div class="text-center my-2 mb-10">
                            <code class="text-xl">({{ leading.code }})</code>
                        </div>
                        <div>
                            <img class="h-64 md:h-96 mx-auto"
                                 v-src="leading.image"
                                 :alt="leading.title" />
                        </div>
                    </div>

                    <div class="hidden md:flex md:basis-1/6 justify-end">
                        <img src="~~/assets/products/system-devices/icons.svg"
                             class="w-20 mr-20"
                             alt="Future KNX System Devices" />
                    </div>
                </div>
            </div>

            <div class="bg-slate-900  w-full md:aspect-[16/8] text-white flex flex-col md:flex-row items-center justify-center bg-cover bg-no-repeat snap-start"
                 v-for="(item, $index) in items.filter((i) => !/^knx ac/ig.test(i.title))"
                 :class="($index % 2 == 0 ? 'bg-a' : 'bg-b')"
                 :id="item.slug">
                <system-device-item class="container mx-auto max-w-xs md:max-w-7xl flex flex-col items-center justify-center py-20 md:py-0"
                                    header-tag="h2"
                                    :class="($index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse')"
                                    :item="item"
                                    :expanded="false" />
            </div>

            <a name="ac-gateways"></a>
            <div class="bg-slate-900  w-full md:aspect-[16/8] text-white flex flex-col md:flex-row items-center justify-center bg-cover bg-no-repeat snap-start"
                 v-for="(item, $index) in items.filter((i) => /^knx ac/ig.test(i.title))"
                 :class="($index % 2 == 0 ? 'bg-a' : 'bg-b')"
                 :id="item.slug">
                <system-device-item class="container mx-auto max-w-xs md:max-w-7xl flex flex-col items-center justify-center py-20 md:py-0"
                                    header-tag="h2"
                                    :class="($index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse')"
                                    :item="item"
                                    :expanded="false" />
            </div>
        </section>
    </nuxt-layout>
</template>

<script setup lang="ts">
useHead({
    title: "All you need is here",
    meta: [
        { name: "abstract", content: "Manage lighting, curtains, blinds, unlocking, air conditioning, water, electricity and energy controls like a Maestro." },
        { name: "description", content: "Manage lighting, curtains, blinds, unlocking, air conditioning, water, electricity and energy controls like a Maestro." },
    ],
})

const items = computed(() => useSystemDevices());

let leadingIndex = 0;
const leading = ref(items.value[leadingIndex]);

let leadingTimer: any;
function applyLeading() {
    leadingIndex++;
    if (leadingIndex >= items.value.length) leadingIndex = 0;
    leading.value = items.value[leadingIndex];
}

function gotoHash() {
    if (location.hash !== "") {
        const _hash = document.querySelector(`a[name='${location.hash.substring(1)}']`);
        if (_hash) _hash.scrollIntoView({ behavior: 'smooth' });
    }
}

onMounted(() => {
    leadingTimer = setInterval(applyLeading, 5 * 1000);
    setTimeout(gotoHash, 1000);
    window.onhashchange = gotoHash;
});

onUnmounted(() => {
    if (leadingTimer) clearInterval(leadingTimer);
})

</script>


<style scoped lang="scss">
.header {
    background-image: url(~~/assets/products/system-devices/background-cover.jpg);
}

.bg-a {
    background-image: url(~~/assets/products/system-devices/background-a.jpg);
}

.bg-b {
    background-image: url(~~/assets/products/system-devices/background-b.jpg);
}

.view-3d {
    position: relative;
    display: inline-block;

    cursor: pointer;

    &::after {
        content: " ";
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 803.9 809.59'%3E%3Cg fill='%23fff'%3E%3Cpath d='M763,41.16c-36.71-36.96-108.94-67.88-244.6-5.34-20.47,9.44-41.46,20.58-62.75,33.21,19.38-5.46,431.53-118.26,175.61,233.5h-.03c-25.85,41.57-57.82,84.4-94.42,126.42l-32.72-32.94-6.44,165.99,164.84-6.52-44.34-44.64c65.54-74.63,117.85-152.15,150.22-223.38,62.08-136.61,31.35-209.34-5.36-246.3Z' /%3E%3Cpath d='M480.35,489.41c-55.71,55.75-114.65,104.04-171.48,140.9-.07,.05-.14,.1-.22,.15C-22.11,857.52,58.37,508.06,70.65,460.18l-1.81-1.82c-12.68,21.64-23.85,42.97-33.3,63.77-62.08,136.61-31.35,209.34,5.36,246.3,36.71,36.96,108.94,67.88,244.6,5.34,85.55-39.44,180.24-108.25,267.94-194.51l-72.39-.56-.7-89.3Z' /%3E%3Cpath d='M104.04,349.3c-10.08,7.52-21.75,11.18-35.65,11.18-15.11,0-28.44-3.66-40.77-11.2l-6.97-4.27L.29,376.88l5.4,3.9c16.41,11.85,35.98,17.86,58.18,17.86,28.81,0,52.59-6.74,70.65-20.03,18.59-13.67,28.02-31.96,28.02-54.35,0-14.68-4.91-27.25-14.61-37.38-6.44-6.72-14.37-11.81-23.69-15.22,13.29-11.8,19.79-22.72,19.79-33.17,0-13.25-5.95-23.96-17.69-31.84-10.98-7.37-24.71-11.1-40.8-11.1-17.71,0-33.81,4.17-47.84,12.4-14.15,8.3-24.52,19.75-30.84,34.04l-2.79,6.31,34.34,15.08,3.31-6.79c3.3-6.77,9.02-12.83,16.99-18,7.89-5.11,16.22-7.6,25.47-7.6,16.93,0,16.93,5.33,16.93,7.9,0,1.6-1.27,7.83-17.58,20.91-10.95,8.67-23.69,16.59-37.85,23.55l-7.6,3.73,21.68,30.36,6.79-4.98c8.87-6.51,17.75-9.67,27.13-9.67,7.2,0,12.97,2.1,17.65,6.4,4.69,4.33,6.96,9.51,6.96,15.86,0,9.18-4.66,17.11-14.25,24.27Z' /%3E%3Cpath d='M200.72,377.47c15.17,14.04,34.61,21.16,57.77,21.16,21.13,0,38.79-6.7,52.47-19.92,13.57-13.1,20.46-29.47,20.46-48.64s-6.98-35.13-20.75-48.13c-13.84-13.04-31.09-19.66-51.28-19.66-5.3,0-10.31,.4-15.01,1.19,5.27-5.13,11.38-10.03,18.32-14.69,16.26-10.91,33.57-18.54,51.46-22.69l6.79-1.58-4.66-33.36-8.21,1.39c-38.27,6.47-69.83,21.84-93.79,45.68-24.16,24.04-36.41,52.2-36.41,83.69,0,22.85,7.68,41.54,22.83,55.55Zm33.45-70.53c6.48-6.2,14.14-9.22,23.42-9.22,8.55,0,15.79,3.15,22.11,9.62,6.55,6.71,9.73,14.15,9.73,22.73s-3.18,16.02-9.73,22.73c-6.32,6.47-13.55,9.62-22.11,9.62-9.25,0-16.9-3.06-23.37-9.36-6.61-6.43-9.82-13.94-9.82-22.98s3.2-16.84,9.77-23.13Z' /%3E%3Cpath d='M424.68,399.02c26.28,0,46.76-10.48,60.89-31.15,13.39-19.58,20.17-43.4,20.17-70.79s-6.79-51.21-20.17-70.79c-14.13-20.67-34.62-31.15-60.89-31.15s-45.4,10.48-59.53,31.15c-13.39,19.59-20.17,43.4-20.17,70.79s6.79,51.21,20.17,70.79c14.12,20.67,34.15,31.15,59.53,31.15Zm-24.96-151.74c5.92-11.13,14.14-16.31,25.86-16.31s19.49,5.18,25.41,16.31c6.66,12.53,10.04,29.28,10.04,49.81s-3.38,37.28-10.04,49.8c-5.92,11.13-14.14,16.31-25.86,16.31s-19.49-5.18-25.41-16.31c-6.66-12.53-10.04-29.28-10.04-49.81s3.38-37.28,10.04-49.8Z' /%3E%3Cpath d='M553.44,148.52c0-23.51-20.73-42.64-46.21-42.64s-46.21,19.13-46.21,42.64,20.73,42.64,46.21,42.64,46.21-19.13,46.21-42.64Zm-77.33,0c0-15.83,13.96-28.72,31.12-28.72s31.12,12.88,31.12,28.72-13.96,28.72-31.12,28.72-31.12-12.88-31.12-28.72Z' /%3E%3C/g%3E%3C/svg%3E");
        background-size: contain;
        background-repeat: no-repeat;

        display: inline-block;
        position: absolute;
        width: 3rem;
        height: 3rem;
        top: 70%;
        right: 0;
    }
}
</style>