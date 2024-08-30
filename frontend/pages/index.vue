 <template>
    <nuxt-layout navigation-theme="dark" :hide-logo="true">
        <div class="header-parallax w-full md:aspect-[16/9] flex flex-row items-center justify-center bg-cover">
            <scroll-parallax direction="y"
                             :speed="0.6">
                <img src="~~/assets/visuals/logo/future-knx.svg"
                     class="logo w-auto h-auto -translate-y-24 xs:-translate-x-0"
                     alt="Future KNX - www.futureknx.com"
                     width="541"
                     height="187" />

                <motto tag="h1"
                       class="text-xl md:text-4xl pl-4  -translate-y-24 xs:-translate-x-0" />

            </scroll-parallax>
        </div>

        <banner-customize />

        <div class="screen-parallax w-full px-5 md:h-auto md:aspect-[16/9] flex flex-row items-center justify-center bg-cover">
            <scroll-parallax class="flex w-full"
                             direction="y"
                             :speed="0.2"
                             v-intersect="{ true: ['intersected'] }">
                <a6-knx-led-labeled class="screen w-full mx-auto"></a6-knx-led-labeled>
            </scroll-parallax>
        </div>

        <div class="app-parallax w-full bg-cover relative z-10">
            <div class="w-full text-center">
                <div class="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-5 px-4 mx-auto max-w-6xl py-32">
                    <client-only>
                        <div v-for="(linkBox, $index) in linkBoxes"
                             :class="[(($index % 2 == 0) ? 'md:pt-14' : ''), { 'col-span-2': $index == 1 }, { 'md:col-span-1': $index == 1 }]">
                            <elements-link-box v-bind="linkBox"
                                               class="animate__animated delay-1000"
                                               :wide="$index == 1"
                                               v-intersect="intersectFadeInOut">
                            </elements-link-box>
                        </div>
                    </client-only>
                </div>
            </div>
        </div>

        <div class="relative">
            <client-only>
                <iframe v-if="ready"
                        v-scroll-behavior="{ size: 300, true: ['md:visible', 'md:hide'] }"
                        class="w-full pointer-events-none aspect-[30/11]"
                        src="https://www.youtube-nocookie.com/embed/videoseries?controls=0&list=PLdz6pW-i0k66bZ7fPvzvJ4ZfX4Q0BDZT4&autoplay=1&playsinline=1&mute=1&loop=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>
            </client-only>
        </div>

        <div class="app-parallax flex flex-col items-end justify-center bg-bottom bg-cover">
            <div class="text-center w-full mx-auto">
                <h2 class="text-2xl md:text-5xl text-white my-20">Take it easy, simple, smart...</h2>

                <app-carousel class="app-carousel mx-auto" />
            </div>
        </div>
    </nuxt-layout>
</template>

<script setup lang="ts">
import ScrollParallax from "vue3-parallax/src/components/ScrollParallax.vue";
import { intersectFadeInOut } from "~~/helpers";

useHead({
    meta: [
        { name: "description", content: "Completely customizable KNX switches. KNX integrated gateway 10 and 7 inch touch panel controllers. KNX power supply, actuator, and interfaces." },
    ],
})

const promo = ref<HTMLVideoElement>();
const ready = ref(false)

const linkBoxes = ref([
    {
        to: "/integrated-knx-gateway",
        backgroundImage: import("../assets/visuals/link-box/home-scope-ambiance.webp"),
        title: "Integrated KNX Gateway"
    },
    {
        to: "/knx-switches",
        backgroundImage: import("../assets/visuals/link-box/home-switches.webp"),
        title: "The New KNX Switches"
    },
    {
        to: "/knx-thermostat",
        backgroundImage: import("../assets/visuals/link-box/home-thermostat.webp"),
        title: `New Generation<span class="font-light text-sm">Thermostat Switches</span>`
    },
    {
        to: "/knx-system-devices",
        backgroundImage: import("../assets/visuals/link-box/home-system-devices.webp"),
        title: "System Devices"
    },
    {
        to: "/knx-bluetooth-control",
        backgroundImage: import("../assets/visuals/link-box/home-iot-devices.webp"),
        title: "KNX-Bluetooth Control"
    },
])

onMounted(() => {
    ready.value = true;
})
</script>

<style scoped lang="scss">
.header-parallax {
    background-image: url(~~/assets/visuals/header-background.jpg);
    overflow: hidden;
}

.screen-parallax {
    flex-direction: row;
    background-color: black;
    background-image: url(~~/assets/products/a6-touch-panel/touch-panel-background.jpg);

    box-shadow: 0 0 150px rgba(0, 0, 0, 0.3) inset;

    &>div {
        position: relative;
        margin-top: -30%;
    }
}

.app-parallax {
    background-image: url(~~/assets/visuals/app-carousel/background.jpg);
}

@media (max-width: 767px) {
    .header-parallax {
        height: 100vh;
        background-position: 100% 50%;

        .logo {
            width: 50vw;
            margin: auto;
        }
    }

    .screen-parallax {
        min-height: 50vh;

        .screen {
            margin-top: 0%;
            transform: translate(0, -50%);
        }
    }
}
</style>
