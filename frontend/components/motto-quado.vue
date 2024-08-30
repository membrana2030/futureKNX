<template>
    <component :is="tag"
               class="tags">
        <div>Quado</div>
        <div class="flip">
            <div v-for="t in tags"
                 v-html="t"></div>
        </div>
    </component>
</template>


<script setup lang="ts">
const props = withDefaults(defineProps<{
    tag?: string
}>(), {
    tag: "div"
});

const tags = computed(() => ["Prestige", "Luxe", "Deluxe", "Prestige"]);
</script>

<style scoped lang="scss">
.tags {
    @apply relative overflow-hidden flex flex-row gap-2 font-black text-4xl md:text-7xl h-12 mt-20 md:mt-0 md:h-20;

    .flip {
        @apply relative flex flex-col gap-2 md:gap-6 font-normal mt-0;
        animation: tag-flip 5s infinite;
    }

}

@keyframes tag-flip {
    0% {
        @apply -mt-0;
    }
    30% {
        @apply -mt-0;
    }

    35% {
        @apply -mt-12 md:-mt-24;
    }
    65% {
        @apply -mt-12 md:-mt-24;
    }

    70% {
        @apply -mt-24 md:-mt-48;
    }
    95% {
        @apply -mt-24 md:-mt-48;
    }
    100% {
        @apply -mt-36 md:-mt-72;
    }

}
</style>