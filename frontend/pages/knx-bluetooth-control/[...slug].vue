<template>
    <nuxt-layout>
        <section class=" text-white">
            <div id="mobile-app"
                 class="knx-mobile-controller flex flex-row items-end md:items-center min-h-screen md:h-auto md:aspect-[16/9] w-full bg-cover bg-center bg-no-repeat snap-start">
                <div class="items-center flex flex-col md:flex-row md:max-w-7xl mx-auto">
                    <div class="md:basis-1/2">
                        <div class="w-full max-w-sm  md:max-w-2xl mx-auto">
                            <img src="~~/assets/visuals/logo/iot-devices.svg"
                                 class="w-40 my-20 md:-mt-20"
                                 alt="KNX Bluetooth IOT Devices" />
                            <h1 class="text-4xl font-black">KNX-Bluetooth Mobile App</h1>
                            <code class="text-xl">FTR-MAP.1.1</code>
                            <p>The KNX Bluetooth Mobile App is a unique solution for enhancing KNX capabilities. It lets you control KNX devices via your phone, connect KNXBLE Gateway and integrate IFTTT devices and scenes all in one app.</p>

                            <div class="flex flex-row my-8 gap-5">
                                <a href="https://apps.apple.com/tr/app/future-knx/id6443512256"
                                   target="_blank"
                                   rel="noopener"><img src="~~/assets/visuals/logo/apple-store.svg"
                                         class="h-10 md:h-12"
                                         alt="Future KNX IOT App available on the iPhone - Apple App Store"></a>

                                <a href="https://play.google.com/store/apps/details?id=com.aypro.knxiotapp"
                                   target="blank"
                                   rel="noopener"><img src="~~/assets/visuals/logo/google-play.svg"
                                         class="h-10 md:h-12"
                                         alt="Future KNX IOT App available on the Android - Google Play Store"></a>
                            </div>

                        </div>
                    </div>
                    <div class="md:basis-1/2">
                        <img src="~~/assets/products/iot/mobile-controller-header.webp"
                             class="w-full max-w-xl md:max-w-3xl"
                             alt="Future KNX IOT App" />
                    </div>
                </div>
            </div>

            <div id="remote"
                 class="bluetooth-remote flex flex-col md:flex-row items-center md:aspect-[16/9] w-full bg-cover bg-no-repeat snap-start"
                 itemscope
                 itemtype="https://schema.org/Product">
                <div class="md:basis-1/3 flex bg-cover bg-center bg-no-repeat w-full  md:h-full items-center justify-center">
                    <img src="~~/assets/products/iot/bluetooth-remote-controller.webp"
                         class="max-h-96 md:max-h-full m-auto"
                         alt="Future KNX Bluetooth Retome Controller"
                         itemprop="image" />
                </div>
                <div class="md:basis-2/3"
                     v-intersect="intersectFadeInOut">
                    <div class="w-full max-w-xs md:max-w-2xl mx-auto">
                        <h1 class="text-2xl mt-10 md:text-4xl md:font-black"
                            itemprop="name">KNX-Bluetooth Remote</h1>
                        <code class="text-xl"
                              itemprop="model">FTR-RMT.1.1</code>
                        <!-- <h2 class="text-3xl font-light">Metal Switches + Thermostat</h2> -->
                        <p itemprop="description">The KNX Bluetooth Remote is an excellent device for controlling domestic switching devices with its versatile features. 12 long press and 12 short press functions, users have flexibility in managing various operations such as turning devices on or off, dimming lights, controlling curtains, and activating scene functions. Configured it using ETS6 software. Overall, valuable tool for home automation user for efficient and flexible control over their smart devices.</p>

                        <img src="~~/assets/visuals/logo/remote-control-icons.svg"
                             class="w-full md:w-auto md:h-10 my-10"
                             alt="Future KNX Bluetooth Remote Controller Icons" />
                    </div>
                </div>
            </div>

            <div id="gateway"
                 class="knx-bluetooth-gateway flex flex-col-reverse md:flex-row items-center aspect-[16/9] w-full bg-cover bg-center bg-no-repeat snap-start">
                <div class="basis-1/2"
                     itemscope
                     itemtype="https://schema.org/Product">
                    <div class="w-full max-w-xs md:max-w-xl mx-auto">
                        <h1 class="text-2xl md:text-4xl md:font-black"
                            itemprop="name">KNX-Bluetooth Gateway</h1>
                        <code class="text-xl"
                              itemprop="name">FTR-KNXBLE.1.1</code>
                        <p itemprop="description">KNX Bluetooth Gateway is a compact gateway with 255 freely configurable channels (KNX data points). The device allows easy integration of
                            <span class="whitespace-nowrap">Mobile Application (<code>FTR-MAP.1.1</code>)</span> and <span class="whitespace-nowrap">Bluetooth Remote (<code>FTR-RMT.1.1</code>)</span> devices supporting the Bluetooth protocol ito KNX project.
                        </p>

                        <div class="my-14">
                            <img src="~~/assets/visuals/logo/thermo-set.svg"
                                 class="w-full md:w-auto md:h-10"
                                 alt="KNX Thermostat" />
                        </div>
                    </div>
                </div>
                <div class="basis-1/2">
                    <img src="~~/assets/products/iot/knx-bluetooth-gateway.webp"
                         itemprop="image"
                         class="w-full max-w-xl md:max-w-3xl"
                         alt="Future KNX Bluetooth Gateway" />
                </div>
            </div>

            <div class="knx-bluetooth-devices relative flex flex-row items-end md:items-end aspect-square md:min-h-auto md:aspect-[16/9] w-full bg-cover bg-center bg-norepeat snap-start">
                <div class="bg-contain bg-bottom bg-no-repeat aspect-video w-full h-full md:h-auto flex flex-row items-start">
                    <div class="container w-max-xs md:w-max-xl mx-auto h-full">
                        <h2 class="text-center text-2xl md:text-6xl mt-14">Find Your Comfort <br /> <small>with FUTURE IOT</small></h2>
                    </div>
                </div>
            </div>
        </section>
    </nuxt-layout>
</template>

<script setup lang="ts">
import { intersectFadeInOut } from "~~/helpers";

useHead({
    title: "KNX-Bluetooth",
    meta: [
        { name: "abstract", content: "The KNX Bluetooth Gateway is a compact gateway with 255 freely configurable KNX data points." },
        { name: "description", content: "The KNX Bluetooth Gateway is a compact gateway with 255 freely configurable KNX data points. The device allows easy integration of remote devices supporting the Bluetooth protocol into KNX project." },
    ],
    link: [
    ]
})

</script>

<style scoped lang="scss">
.knx-mobile-controller {
    background-image: url(~~/assets/products/iot/mobile-controller-background.jpg);
}

.bluetooth-remote {
    background-image: url(~~/assets/products/iot/bluetooth-remote-background.jpg);

    &>div:first-child {
        background-image: url(~~/assets/products/iot/bluetooth-remote-wall.jpg);
    }
}

.knx-bluetooth-gateway {
    background-image: url(~~/assets/products/iot/knx-bluetooth-gateway-background.jpg);
}

.knx-bluetooth-devices {
    background-image: url(~~/assets/products/iot/iot-devices-room.jpg);

    &>div:first-child {
        background-image: url(~~/assets/products/iot/iot-devices.webp);
    }
}
</style>