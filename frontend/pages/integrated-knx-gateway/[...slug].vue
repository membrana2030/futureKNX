<template>
    <nuxt-layout navigation-theme="dark">
        <section>
            <div class="header w-full aspect-[16/9] bg-cover bg-center bg-no-repeat relative flex flex-row items-center justify-center">
                <div class="basis-1/3">
                    <img v-lax="{ preset: `parallax_y2` }"
                         src="~~/assets/products/a6-touch-panel/header-phone.webp"
                         alt="Future KNX IOT App"
                         class="w-24 md:w-96 mx-auto" />

                    <div class="flex flex-col ml-32 md:flex-row md:max-w-32 md:-ml-5 items-center justify-center mx-auto">
                        <img src="~~/assets/visuals/logo/apple-store.svg"
                             class="h-10 md:h-12 mx-5"
                             alt="Future KNX IOT App, Available on the iPhone - Apple App Store">

                        <img src="~~/assets/visuals/logo/google-play.svg"
                             class="h-10 md:h-12 mx-5"
                             alt="Future KNX IOT App, Available on the Android - Google Play">
                    </div>
                </div>

                <div class="basis-2/3 relative">
                    <img v-lax="{ preset: `parallax_y2` }"
                         class="h-10 md:h-32 absolute right-4 -top-24 z-10"
                         format="webp"
                         src="~~/assets/products/a6-touch-panel/header-01.webp"
                         alt="Future KNX" />

                    <img v-lax="{ preset: `parallax_y1` }"
                         class="w-14 md:w-48 absolute -left-10 -top-44 z-0"
                         format="webp"
                         src="~~/assets/products/a6-touch-panel/header-02.webp"
                         alt="Future KNX" />

                    <img v-lax="{ preset: `parallax_y2` }"
                         class="w-12 md:w-52 absolute left-48 -top-96 z-10"
                         format="webp"
                         src="~~/assets/products/a6-touch-panel/header-04.webp"
                         alt="Future KNX" />

                    <img v-lax="{ preset: `parallax_y3` }"
                         class="w-14 md:w-48 absolute left-48 top-14 z-10"
                         format="webp"
                         src="~~/assets/products/a6-touch-panel/header-03.webp"
                         alt="Future KNX" />

                    <img v-lax="{ preset: `parallax_y4` }"
                         class="w-12 md:w-48 absolute left-0 top-32 z-0"
                         format="webp"
                         src="~~/assets/products/a6-touch-panel/header-05.webp"
                         alt="Future KNX" />

                    <h1 class="text-xl md:text-6xl z-0 font-black absolute mx-auto -top-10"
                        v-lax="{ preset: `parallax_y5` }">
                        Control anywhere <br /> with our IP touchpanel
                    </h1>
                </div>
            </div>

            <div id="ftr-imp10"
                 class="touch-panel text-white w-full aspect-[16/9] bg-cover bg-left bg-no-repeat relative flex flex-row items-center justify-center"
                 itemscope
                 itemtype="https://schema.org/Product">
                <div class="w-full">
                    <!-- <h2 class="text-4xl text-center font-black mt-10"
                    v-intersect="intersectFadeInOut">Android Touch Screen</h2> -->


                    <p class="text-center">
                        <img src="~~/assets/visuals/logo/scope-ambiance.svg"
                             v-intersect="intersectFadeInOut"
                             itemprop="model"
                             class="w-48 inline my-14"
                             alt="KNX and RF Smart Home Control" />
                    </p>

                    <div class="a6-knx mx-auto"
                         v-intersect="intersectFadeInOut"
                         v-lax="{ preset: 'parallax_y2' }">
                        <a6-knx-led class="px-5"
                                    itemprop="image" />

                        <div class="max-w-sm md:max-w-lg my-10 mx-auto">
                            <div class="text-2xl md:text-4xl font-light"
                                 itemprop="name">10" Touch Panel</div>
                            <h2 class="font-bold text-2xl md:text-4xl"
                                itemprop="category">KNX Integrated Gateway</h2>
                            <div class="text-lg"><code itemprop="model">FTR-IPM10.1.1</code></div>
                        </div>
                    </div>

                    <div class="grid grid-cols-3 md:grid-cols-6 gap-4 my-14 w-full max-w-sm md:max-w-6xl mx-auto"
                         v-intersect="intersectFadeInOut">
                        <div v-for="p in touchpanelPoints">
                            <img v-src="p.image"
                                 class="mx-auto w-10 md:w-16 mb-1"
                                 :alt="p.title" />
                            <div class="font-bold text-sm md:text-lg text-center whitespace-nowrap"
                                 v-html="p.title"></div>
                            <div class="font-light text-xs md:text-sm text-center"
                                 v-html="p.subtitle"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="ftr-ipzp"
                 itemscope
                 itemtype="https://schema.org/Product"
                 class="intercom text-white w-full md:aspect-[16/9] bg-cover bg-left bg-no-repeat relative flex flex-col-reverse md:flex-row items-center justify-center">
                <div class="basis-1/2">
                    <div class="mx-auto max-w-xl mt-4"
                         v-intersect="intersectFadeInOut">
                        <h2 class="font-bold text-2xl md:text-4xl"
                            itemprop="name">Apartment Outdoor Panel</h2>
                        <div class="md:text-lg"><code itemprop="model">FTR-IPZP.1.1</code></div>

                        <ol class="mt-10 md:text-2xl font-normal"
                            itemprop="description">
                            <li>7" TFT Screen</li>
                            <li>Android Operating System</li>
                            <li>Calling Apartment</li>
                            <li>Calling Security</li>
                            <li>Leaving Voice Notes</li>
                            <li>Calling Elevator to the ground level</li>
                            <li>MiFare Card and Password Entry</li>
                        </ol>

                        <div class="my-10">
                            <img src="~~/assets/products/a6-touch-panel/intercom-icons.svg"
                                 class="h-8 md:h-12"
                                 alt="Intercom Icons">
                        </div>
                    </div>
                </div>

                <div class="md:basis-1/2 md:h-full bg-cover bg-center bg-no-repeat flex flex-column items-start justify-center pt-14 h-96 w-full aspect-[3/4] md:aspect-auto"></div>
            </div>

            <div id="ftr-ipvzp"
                 itemscope
                 itemtype="https://schema.org/Product"
                 class="intercom-vzp text-white w-full aspect-[16/9] bg-cover bg-left bg-no-repeat relative flex flex-row items-center justify-center md:pt-14">
                <div class="basis-1/3"></div>
                <div class="basis-1/2">
                    <div class="md:max-w-xl w-full p-5"
                         style="background:rgba(0,0,0,0.5)"
                         v-intersect="intersectFadeInOut">
                        <h2 class="font-bold text-2xl md:text-4xl"
                            itemprop="name">Villa Outdoor Panel</h2>
                        <div class="md:text-lg"><code itemprop="model">FTR-IPVZP.1.1</code></div>

                        <ol class="mt-10 md:text-2xl font-normal"
                            itemprop="description">
                            <li>Android Operating System</li>
                            <li>Calling House</li>
                            <li>Calling Security</li>
                            <li>Leaving Voice Notes</li>
                            <li>MiFare Card Entry</li>
                        </ol>

                        <div class="mt-10">
                            <img src="~~/assets/products/a6-touch-panel/intercom-vzp-icons.svg"
                                 class="h-8 md:h-12"
                                 alt="KNX Villa Outdoor Panel">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </nuxt-layout>
</template>

<script setup lang="ts">
import { intersectFadeInOut } from "~~/helpers";

useHead({
    title: "Scope, Android Touch Screens",
    meta: [
        { name: "abstract", content: "Connect all devices to a single point, and control them from anywhere." },
        { name: "description", content: "Connect all devices to a single point, and control them from anywhere. Scope supports KNX and RF devices together." },
    ],
    link: [
    ]
})

const touchpanelPoints = computed(() => [
    {
        title: "Smart Home Control",
        subtitle: "Remote Access from the Internet",
        image: import("../../assets/products/a6-touch-panel/touch-panel-point-1.svg")
    },
    {
        title: "Alarm Control",
        subtitle: "Remote Access from the Internet",
        image: import("../../assets/products/a6-touch-panel/touch-panel-point-2.svg")
    },
    {
        title: "Elevator Call",
        subtitle: "Output/External Siren Output",
        image: import("../../assets/products/a6-touch-panel/touch-panel-point-3.svg")
    },
    {
        title: "IP Camera",
        subtitle: "Monitoring",
        image: import("../../assets/products/a6-touch-panel/touch-panel-point-4.svg")
    },
    {
        title: "Up to 40 Detectors",
        subtitle: "Wireless Alarm System",
        image: import("../../assets/products/a6-touch-panel/touch-panel-point-5.svg")
    },
    {
        title: "5 Input/Output",
        subtitle: "Wired Alarm System",
        image: import("../../assets/products/a6-touch-panel/touch-panel-point-6.svg")
    },
])
</script>

<style scoped lang="scss">
.header {
    background-image: url(~~/assets/products/a6-touch-panel/header-background.jpg);
}

.touch-panel {
    background-image: url(~~/assets/products/a6-touch-panel/touch-panel-background.jpg);
    background-attachment: fixed;

    & .a6-knx {
        max-width: 900px;
    }
}

.scope {
    background-image: url(~~/assets/products/a6-touch-panel/scope-room.jpg);

    &>div:first-child {
        background-image: url(~~/assets/products/a6-touch-panel/scope-wall.jpg);
    }
}

.intercom {
    background-image: url(~~/assets/products/a6-touch-panel/intercom-background.jpg);

    &>div:last-child {
        background-image: url(~~/assets/products/a6-touch-panel/intercom-wall.jpg);
    }
}

.intercom-vzp {
    background-image: url(~~/assets/products/a6-touch-panel/intercom-vzp-background.jpg);
    background-attachment: fixed;
}

@media (max-width:767px) {
    .intercom-vzp {
        background-position: -100px center !important;
    }
}
</style>