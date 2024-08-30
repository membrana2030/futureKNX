<template>
    <div class="app-carousel">
        <div ref="carouselElement"
             class="carousel-container">
            <div class="shadow"></div>
            <div v-for="(item, i) in items"
                 class="carousel-item"
                 :class="`carousel-item-${visibles.indexOf(i) + 1}`"
                 :data-index="i + 1">
                <img :src="item"
                     width="300"
                     height="606"
                     class="w-full h-auto"
                     alt="Future KNX IOT Application" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { imgCarousel } from "~~/helpers"

/* const $img = useImage(); */
const carouselElement = ref<HTMLElement>();

const inView = ref<number[]>();
const items = ref<string[]>();

const visibles = computed(() => {
    return inView.value.filter((_, i) => (i < 5));
})

watch(items, (_items) => {
    const _inView = [];
    if (_items) for (let i = 0; i < _items.length; i++) {
        _inView.push(i);
    }
    inView.value = _inView;
}, { deep: true, immediate: true });

function next() {
    inView.value.push(inView.value.shift());

    setTimeout(next, 5000);
}

onMounted(() => {
    const { modifiers, options } = imgCarousel;

    const _promises = [
        import("../assets/visuals/app-carousel/1.webp"),
        import("../assets/visuals/app-carousel/2.webp"),
        import("../assets/visuals/app-carousel/3.webp"),
        import("../assets/visuals/app-carousel/4.webp"),
        import("../assets/visuals/app-carousel/5.webp"),
    ]

    Promise.all(_promises)
        .then((results) => {
            //const _images = results.map((m) => $img(m.default, modifiers, options));
            const _images = results.map((m) => m.default);
            items.value = _images;
            console.log(_images);
            next();
        })
})
</script>

<style scoped lang="scss">
/* carousel styles */
.app-carousel {
    --carousel-height: 500px;
    --carousel-width: 800px;
    --carousel-item-height: 150px;
    --carousel-item-width: 150px;

    width: 100%;
    max-width: calc(var(--carousel-width) * 2);
    overflow: hidden;

    .shadow {
        z-index: 9;
        width: var(--carousel-item-width);
        height: 200%;
        position: absolute;
        margin: 50% 50%;
        transform: translate(-50%, 36%);
        box-shadow: 0 0 100px 50px black;
        z-index: 2;
    }
}

.carousel-container {
    align-items: center;
    display: flex;
    min-height: var(--carousel-height);
    margin: 0 auto;
    max-width: var(--carousel-width);
    position: relative;
}

.carousel-item {
    height: var(--carousel-item-height);
    opacity: 0;
    position: absolute;
    transform: translate(-50%, -85%);
    transition: all 0.3s ease-in-out;
    width: var(--carousel-item-width);
    z-index: 0;
}

.carousel-item-0,
.carousel-item-1 {
    left: 15%;
    opacity: 1;
    width: var(--carousel-item-width);
}

.carousel-item-0 {
    opacity: 0;
}

.carousel-item-2,
.carousel-item-4 {
    opacity: 1;
    width: calc(var(--carousel-item-width) * 1.5);
    z-index: 1;
    margin-top: calc(var(--carousel-height) - calc(var(--carousel-item-width) * 1.5));
    filter: blur(1px);
}

.carousel-item-2 {
    left: 30%;
}

.carousel-item-3 {
    opacity: 1;
    left: 50%;
    width: calc(var(--carousel-item-width) * 2);
    z-index: 2;
    position: relative;

}

.carousel-item-4 {
    left: 70%;
}

.carousel-item-5 {
    left: 85%;
    opacity: 1;
}

.carousel-item-0,
.carousel-item-1,
.carousel-item-5 {
    margin-top: calc(var(--carousel-height) - var(--carousel-item-width));
    filter: blur(3px);
}


@media (max-width: 767px) {
    .app-carousel {
        transform: scale(0.7) translateY(20%);
    }
}
</style>