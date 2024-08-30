<template>
    <nuxt-layout>
        <section class="knx-thermostat text-white">
            <div class="thermostat-switch flex flex-col md:flex-row md:items-stretch w-full md:aspect-[16/8] bg-cover bg-no-repeat snap-start">
                <div class="md:basis-1/3 bg-cover bg-center bg-no-repeat self-stretch"></div>
                <div class="md:basis-2/3 md:self-center">
                    <div class="w-full max-w-xs py-20 md:py-0 md:max-w-2xl mx-auto">
                        <h1 class="text-4xl">The New<br /> KNX Metal<br /> Thermostat + Switch</h1>
                        <p>It works in harmony with the air conditioning system. Learns and applies. In this way, it saves energy.</p>

                        <div class="mt-14">
                            <img src="~~/assets/visuals/logo/thermo-set.svg"
                                 class="h-10"
                                 alt="Future KNX Thermostat" />
                        </div>
                    </div>
                </div>
            </div>

            <product-sample :product="quadroThermostat"
                            id="quadro"
                            sample-class="shadow-black shadow-xl"
                            sample-active-class="shadow-black shadow-lg"
                            sample-thumbnail-class="shadow-black shadow-md"
                            class="w-full min-h-screen md:min-h-min md:aspect-[16/8] snap-start">

                <elements-color-box />
            </product-sample>

            <div id="glass"
                 class="thermostat-glass flex flex-col md:flex-row w-full md:items-stretch md:aspect-[16/9] bg-cover bg-no-repeat snap-start">
                <div class="md:basis-1/3 bg-cover bg-center bg-no-repeat aspect-square w-full md:w-auto md:aspect-auto md:self-stretch"></div>
                <div class="md:basis-2/3 md:self-center"
                     v-intersect="intersectFadeInOut">
                    <div class="w-full max-w-xs md:max-w-2xl mx-auto py-10 md:py-0">
                        <h1 class="text-3xl md:text-5xl"><span class="font-black">Glass</span><span class="font-normal">Thermostat</span></h1>
                        <!-- <h2 class="text-3xl font-light">Metal Switches + Thermostat</h2> -->
                        <p>It works in harmony with the air conditioning system. Learns and applies. In this way, it saves energy.</p>

                        <div class="mt-14">
                            <img src="~~/assets/visuals/logo/thermo-set.svg"
                                 class="h-10"
                                 alt="Future KNX Thermostat" />
                        </div>

                        <div class="mt-10 md:mt-28 flex flex-row items-center gap-10">
                            <img src="~~/assets/visuals/logo/energy-saver.svg"
                                 class="h-10 md:h-20"
                                 alt="Energy Saver" />

                            <img src="~~/assets/visuals/logo/multi-touch.svg"
                                 class="h-10 md:h-20 p-1"
                                 alt="Multi-Touch KNX Switch Control" />
                        </div>
                    </div>
                </div>
            </div>

            <product-sample :product="multiTouch"
                            sample-class="shadow-slate-700 shadow-lg haloist"
                            sample-active-class="shadow-black shadow-lg"
                            sample-thumbnail-class="shadow-black shadow-md"
                            class="w-full min-h-screen md:min-h-min md:aspect-[16/8] multitouch-custom snap-start">
            </product-sample>
        </section>
    </nuxt-layout>
</template>


<script setup lang="ts">
import { intersectFadeInOut } from "~~/helpers";

useHead({
    title: "KNX Thermostat + Switch",
    meta: [
        { name: "abstract", content: "It works in harmony with the air conditioning system." },
        { name: "description", content: "KNX Room Controller has a touch screen for temperature control, thermostat logic, and 8 buttons for switching, sensing, dimming, and blinds control." },
    ],
})


const quadroThermostat = computed(() => ({
    "hash": "quadro-thermostat",
    "base": "/products/thermostat/quadro-serie",
    "background": import("../../assets/products/thermostat/quadro-serie/background.jpg"),
    "samples": [
        import("../../assets/products/thermostat/quadro-serie/sample-00.jpg"),
        import("../../assets/products/thermostat/quadro-serie/sample-01.jpg"),
        import("../../assets/products/thermostat/quadro-serie/sample-02.jpg")
    ],
    "title": `Quadro<span class="font-normal">Thermostat</span>`,
    "subtitle": "Metal Switch + Thermostat",
    "content": [
        "The lighting, temperature and blinds can be controlled centrally with the KNX room controller. The device has touch screen for temperature control and 8 buttons for switching, sensing, dimming and blinds control."
    ]
}));
const multiTouch = computed(() => ({
    "hash": "multitouch-custom",
    "base": "/products/thermostat/multi-touch",
    "background": import("../../assets/products/thermostat/multi-touch/x-background.jpg"),
    "samples": [
        import("../../assets/products/thermostat/multi-touch/sample-00.jpg"),
        import("../../assets/products/thermostat/multi-touch/sample-01.jpg"),
        import("../../assets/products/thermostat/multi-touch/sample-02.jpg"),
        import("../../assets/products/thermostat/multi-touch/sample-03.jpg"),
        import("../../assets/products/thermostat/multi-touch/sample-04.jpg"),
        import("../../assets/products/thermostat/multi-touch/sample-05.jpg"),
        import("../../assets/products/thermostat/multi-touch/sample-06.jpg"),
    ],
    "title": `<span class="font-normal">The new<br/>KNX Glass<br/>Thermostat Switch</span>`,
    "content": [
        "The lighting, temperature and blinds can be controlled centrally by KNX room controller. The device has touch screen fortemperature control and 8 buttons for switching, sensing, dimming and blinds control."
    ]
}));
</script>


<style lang="scss">
.thermostat-switch {
    background-image: url(~~/assets/visuals/thermostat-switch/thermostat-switch-room.jpg);

    &>div:first-child {
        background-image: url(~~/assets/visuals/thermostat-switch/thermostat-switch-wall.jpg);
    }
}

.thermostat-quadro {
    background-image: url(~~/assets/visuals/thermostat-switch/thermostat-switch-wall.jpg);
}

.thermostat-glass {
    background-image: url(~~/assets/products/thermostat/multi-touch/multi-touch-room.jpg);

    &>div:first-child {
        background-image: url(~~/assets/products/thermostat/multi-touch/multi-touch-wall.jpg);
    }
}

.multitouch-custom {
    background: #63686F !important;
    background-image: url(~~/assets/visuals/texture/concrete-wall.png);
}

.haloist {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    width: auto !important;
    max-height: 600px;

    &::before,
    &::after {
        content: " ";
        position: absolute;
        background-color: blue;
        width: 10px;
        height: 80%;
        filter: blur(43px);
        box-shadow: 0 0 50px blue;
        z-index: -1;
    }

    &::before {
        left: 0;
    }

    &::after {
        right: 0;
    }
}
</style>