<template>
    <button @click="show=!show"
            class="flex flex-row items-center align-center">
        <icon-360 :fill="fill"
                  class="w-10" />
        <slot />
    </button>
    <div class="fixed inset-0 z-20 overflow-hidden transition-all ease-out duration-300 p-2"
         v-if="show">
        <div class="fixed inset-0 z-30 overflow-hidden bg-gray-500 dark:bg-black transition-all ease-out duration-300 opacity-30 dark:opacity-70"></div>
        <button class="absolute z-50 top-8 right-10 rounded-full w-10 ring-2 ring-blue aspect-square bg-gray-600 font-bold text-xl text-white"
                @click.prevent="closeModal">&times;</button>
        <div class="relative z-40 overflow-auto bg-white rounded shadow w-full h-full p-0 m-0 inset-0">
            <viewer-3d camera-controls
                       ios-src="/usdz/ftrps640.usdz"
                       src="/usdz/ftrps640.glb"
                       class="w-full h-full">

                <button slot="ar-button"
                        id="ar-button">
                    View in your space
                </button>

            </viewer-3d>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    fill?: any
}>();

const show = ref(false);

function closeModal() {
    show.value = false;
}
</script>
