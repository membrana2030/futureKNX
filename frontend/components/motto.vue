<template>
    <component :is="tag"
               class="tags font-light block">
        It is about making it
        <strong class="font-black mx-1 text-left"
                v-html="tags.join('<br />')">
        </strong>
    </component>
</template>


<script setup lang="ts">

const props = withDefaults(defineProps<{
    tag?: string
}>(), {
    tag: "div"
});

const tags = computed(() => ["innovated", "functional", "contrast", "simple", "smart", "innovated"])

</script>

<style scoped lang="scss">
.tags {
    position: relative;
    line-height: 3.4rem;
    height: 3.4rem;
    overflow: hidden;

    &>strong {
        vertical-align: top;
        display: inline-block;
        position: relative;
        top: 0;

        animation: tag-flip 5s infinite;
    }
}

@keyframes tag-flip {
    0% {
        top: 0rem;
    }

    5% {
        top: -3.4rem;
    }

    20% {
        top: -3.4rem;
    }

    25% {
        top: -6.8rem;
    }

    40% {
        top: -6.8rem;
    }

    45% {
        top: -10.2rem;
    }

    60% {
        top: -10.2rem;
    }

    65% {
        top: -13.6rem;
    }

    80% {
        top: -13.6rem;
    }

    85% {
        top: -17rem;
    }

    100% {
        top: -17rem;
    }
}
</style>