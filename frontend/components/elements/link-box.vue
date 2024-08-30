<template>
    <nuxt-link tag="a"
               class="link-box bg-cover bg-center w-full mx-auto rounded-xl border-solid border-slate-300 transition-all duration-200 md:aspect-[3/4]"
               :class="[aspect]"
               v-bg-image="backgroundImage">


        <div class="p-3 text-white font-bold text-x"
             v-if="title"
             v-html="title"></div>
        <div class="p-3 text-white font-bold text-xl"
             v-else>
            <slot />
        </div>
    </nuxt-link>
</template>

<script setup lang="ts">

/* const $img = useImage(); */

const props = defineProps<{
    backgroundImage?: string | Promise<any>,
    title?: string,
    wide?: boolean
}>();

const backgroundImage = computed(() => props.backgroundImage);
const title = computed(() => props.title);
const aspect = computed(() => props.wide ? 'aspect-[16/10.2]' : 'aspect-[3/4]');
</script>

<style scoped lang="scss">
.link-box {
    overflow: hidden;
    transform: translate(0, 0);
    box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
    border-width: 1px;
    border-style: inset;

    &:hover {
        box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.7);
    }

    &,
    &>div {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        text-align: left;
    }

    &>div {
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.7) 75%, #000 100%);
        background-position-y: 0%;
        background-size: 100% 150%;
        transition: background-position-y linear 300ms, padding-bottom linear 200ms;
    }

    &:hover>div {
        background-position-y: 50%;
        padding-bottom: 1rem;
    }
}
</style>