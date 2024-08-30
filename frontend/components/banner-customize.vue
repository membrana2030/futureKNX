<template>
    <div class="banner-customize w-full px-5 md:h-auto md:aspect-[100/28] flex flex-row items-center">
        <div class="w-1/2 md:w-1/4 max-w-xl md:ml-16 py-5">
            <img src="~~/assets/visuals/art-and-smart.svg"
                 alt="Art & Smart"
                 class="w-full" />

            <nuxt-link to="/knx-switches/customize#design-your-self"
                       target="_blank">
                <img src="~~/assets/visuals/design-your-self.svg"
                     alt="Design your self"
                     class="mt-6 md:mt-10 center animate__animated animate__infinite animate__headShake h-8 s:12 lg:h-16" />
            </nuxt-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
.banner-customize {
    @apply bg-cover;
    background-image: url('~~/assets/visuals/customize-banner.webp');
    background-position: 55% 50%;
}</style>