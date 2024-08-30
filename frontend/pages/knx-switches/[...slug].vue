<template>
    <nuxt-layout navigation-theme="dark">
        <section id="KNXSwitches">
            <div class="switches-header w-full md:aspect-[16/9] md:flex md:flex-row md:items-stretch">
                <div class="container px-5 mx-auto flex flex-col md:flex-row md:items-stretch md:justify-center overflow-hidden">
                    <div class="md:basis-1/2 md:self-center">
                        <!-- <h1 class="mt-20 md:mt-10 text-4xl md:text-7xl font-light mb-5">The new <br />KNX <br />Metal <br />Switches</h1> -->
                        <motto-quado />
                        <p class="md:text-xl">
                            High end finished button solutions, different color combinations are full of visual impact in the living space. It will not overwhelm the guests, neither be oppressed by the space and can be versatile in any space style.
                        </p>
                        <p class="text-sm md:text-base">
                            Master both the 8 push-button function with the temperature set and thermostat logic as well as the rocker function. Available in 2/4/6/8 button configurations
                            Everything at home is waiting for your instruction.
                        </p>

                        <img src="../../assets/visuals/switches-header-colors.webp"
                             alt="Future KNX Customizable Switch"
                             class="w-full md:hidden">
                    </div>
                    <div class="hidden md:basis-1/2 md:flex md:flex-row md:justify-center bg-contain bg-center bg-no-repeat"
                         v-bg-image="import(`../../assets/visuals/switches-header-colors.webp`)">
                        <!-- <nuxt-picture src="/visuals/switches-header-colors.png" ../assests/visuals/switches-header-colors.png
                                      class="max-w-4xl max-h-full mx-auto"></nuxt-picture> -->
                    </div>
                </div>
            </div>

            <client-only>
                <div class="switches-navigation w-full min-h-screen md:min-h-auto md:aspect-[16/8] flex flex-row align-middle justify-center snap-start">
                    <!-- <div class="grid grid-rows-1 grid-cols-4 gap-4 mx-auto w-full max-w-6xl"> -->
                    <div class="grid grid-cols-2 md:grid-cols-4 md:items-center justify-center gap-4 mx-auto w-full max-w-xs md:max-w-4xl">
                        <div class="flex items-end">
                            <elements-link-box class="double-serie animate__animated"
                                               to="/knx-switches/double-series"
                                               :background-image="import(`../../assets/visuals/link-box/switches-double-serie.webp`)"
                                               v-smooth-scroll
                                               v-intersect="{ false: ['animate__fadeOut'], true: ['animate__fadeIn'] }">
                                Double Series
                            </elements-link-box>
                        </div>
                        <div class="flex items-end md:pt-14">
                            <elements-link-box class="quado-serie animate__animated delay-300"
                                               to="/knx-switches/quado-series"
                                               :background-image="import(`../../assets/visuals/link-box/switches-quado-serie.webp`)"
                                               v-smooth-scroll
                                               v-intersect="{ false: ['animate__fadeOut'], true: ['animate__fadeIn'] }">
                                Quado Series
                            </elements-link-box>
                        </div>
                        <div>
                            <elements-link-box class="quado-line animate__animated delay-1000"
                                               to="/knx-switches/quado-line"
                                               :background-image="import(`../../assets/visuals/link-box/switches-quado-line.webp`)"
                                               v-smooth-scroll
                                               v-intersect="{ false: ['animate__fadeOut'], true: ['animate__fadeIn'] }">
                                Quado Line Series
                            </elements-link-box>
                        </div>
                        <div class="md:pt-14">
                            <elements-link-box class="stay-trendy animate__animated delay-700"
                                               to="/knx-switches/customize"
                                               :background-image="import(`../../assets/visuals/link-box/switches-stay-trendy.webp`)"
                                               v-smooth-scroll
                                               v-intersect="{ false: ['animate__fadeOut'], true: ['animate__fadeIn'] }">
                                Your Space <br /> Your Style
                            </elements-link-box>
                        </div>
                    </div>
                </div>

                <product-sample v-for="(sample, k, $index) in switchSamples"
                                :id="sample.slug"
                                :product="sample"
                                :reversed="(Number($index) % 2 == 0) ? false : true"
                                class="w-full md:aspect-[16/9] snap-start" />

                <banner-customize />
            </client-only>
        </section>
    </nuxt-layout>
</template>

<script setup lang="ts">

useHead({
    title: "Customizable KNX Switches",
    meta: [
        { name: "abstract", content: "High-end finished button solutions, different color combinations are full of visual impact in the living space." },
        { name: "description", content: "High-end finished button solutions, different color combinations are full of visual impact in the living space." },
    ],
})

const switchSamples = computed<{ [key: string]: ProductSample }>(() => ({
    "double": {
        _: import.meta.glob("../../assets/products/switches/double-serie/*"),
        "slug": "double-series",
        "base": "../../assets/products/switches/double-serie",
        "background": import("../../assets/products/switches/double-serie/background.jpg"),
        "samples": [
            import("../../assets/products/switches/double-serie/sample-00.jpg"),
            import("../../assets/products/switches/double-serie/sample-01.jpg"),
            import("../../assets/products/switches/double-serie/sample-02.jpg"),
            import("../../assets/products/switches/double-serie/sample-03.jpg"),
            import("../../assets/products/switches/double-serie/sample-04.jpg"),
        ],
        "title": "Double Series",
        "subtitle": "Metal Switches",
        "motto": "Making your space more beautiful, easier and more comfortable",
        "theme": "dark",
        /* "content": [
            `The new KNX Double Metal Switches master both the push-button function as well as the rocker function.`,
            `The rocker function of the Standard version enables additional control possibilities compared to the push-button function, such as dimming lamps.
                Among other things, the push-button function in the Universal version enables full-surface operation.`
        ] */
    },
    "quado": {
        "slug": "quado-series",
        "base": "../../assets/products/switches/quado-serie",
        "background": import("../../assets/products/switches/quado-serie/background.jpg"),
        "samples": [
            import("../../assets/products/switches/quado-serie/sample-00.jpg"),
            import("../../assets/products/switches/quado-serie/sample-01.jpg"),
            import("../../assets/products/switches/quado-serie/sample-02.jpg"),
            import("../../assets/products/switches/quado-serie/sample-03.jpg"),
            import("../../assets/products/switches/quado-serie/sample-04.jpg"),
        ],
        "title": "Quado Series",
        "subtitle": "Metal Switches",
        "motto": "Perfection on quality, design and innovation",
        "theme": "dark",
        /* "content": [
            `The new KNX Quado Metal Switches master both the push-button function as well as the rocker function.`,
            `The rocker function of the Standard version enables additional control possibilities compared to the push-button function, such as dimming lamps.
                Among other things, the push-button function in the Universal version enables full-surface operation.`
        ] */
    },
    "quado-line": {
        "slug": "quado-line",
        "base": "../../assets/products/switches/quado-line",
        "background": import("../../assets/products/switches/quado-line/background.jpg"),
        "samples": [
            import("../../assets/products/switches/quado-line/sample-00.jpg"),
            import("../../assets/products/switches/quado-line/sample-01.jpg"),
            import("../../assets/products/switches/quado-line/sample-02.jpg"),
            import("../../assets/products/switches/quado-line/sample-03.jpg"),
            import("../../assets/products/switches/quado-line/sample-04.jpg"),
        ],
        "title": "Quado Line Series",
        "subtitle": "Metal Switches",
        "motto": "Handmade-Manufactur high-quality aerospace aluminum materials",
        /* "content": [
            `The new KNX Quado Line Metal Switches master both the push-button function as well as the rocker function.`,
            `The rocker function of the Standard version enables additional control possibilities compared to the push-button function, such as dimming lamps.
                Among other things, the push-button function in the Universal version enables full-surface operation.`
        ] */
    },
}))
</script>

<style scoped lang="scss">
.switches-header {
    background-image: url(~~/assets/visuals/switches-header-background.jpg);
}

.switches-header,
.switches-navigation {
    background-position: 50% 50%;
    background-size: cover;
}

.switches-navigation {
    background-image: url(~~/assets/visuals/switches-navigation-background.jpg);
}
</style>