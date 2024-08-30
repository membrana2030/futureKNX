<template>
    <div class="model-wrapper"
         :class="[{ expanded }]">
        <model-viewer ref="treeDModel"
                      class="viewer-3d flex-1 h-full w-full"
                      touch-action="none"
                      reveal="manual"
                      environment-image="legacy"
                      :exposure="0.8"
                      disable-tap
                      ar
                      ar-modes="webxr scene-viewer quick-look magic-leap"
                      ar-scale="auto"
                      x-shadow-intensity="2"
                      x-shadow-softness="1"
                      :camera-orbit="props.cameraOrbit"
                      :camera-target="props.cameraTarget"
                      camera-controls
                      scale="0.5 0.5 0.5"
                      :minimum-render-scale="1"
                      :render-scale="1"
                      :model-cache-size="50"
                      :src="pathGLB"
                      :ios-src="pathUSDZ"
                      @progress="modelLoading"
                      @load="modelLoaded">

            <div slot="poster"
                 v-if="!loading"
                 v-bg-image="props.poster"
                 class="w-full h-full bg-contain bg-center bg-no-repeat absolute flex items-end justify-center">
                <x-button size="sm"
                          class="flex-row items-center shadow-xl shadow-slate-900"
                          @click="loadModel">
                    <div class="flex flex-row items-center gap-4">
                        <icon-360 class="h-6"
                                  fill="rgb(0,0,0)" />
                        <span class="font-light">Load 3D Model</span>
                    </div>
                </x-button>
            </div>

            <div slot="progress-bar">
                <x-progress v-if="loading"
                            :percentage="percentage"
                            color="green" />
            </div>

            <!-- <div slot="poster"
             v-bg-image="props.poster"
             class="w-full h-full bg-contain bg-center bg-no-repeat" /> -->

            <div slot="ar-button">
                <x-button v-if="modelReady"
                          size="sm"
                          id="ar-button"
                          rounded>
                    <i class="fa-brands fa-unity"></i>
                </x-button>
            </div>
        </model-viewer>
        <x-button v-if="modelReady"
                  class="inline-block absolute"
                  :class="[{ 'top-5 right-5': !expanded }, { 'top-5 right-10': expanded }]"
                  size="xs"
                  :icon="expanded ? `xmark` : `expand`"
                  @click="toggleExpand" style="position: absolute;">
        </x-button>
    </div>
</template>

<script setup lang="ts">
import "@google/model-viewer/dist/model-viewer.min.js";

const props = withDefaults(defineProps<{
    modelName: string,
    poster: Promise<any> | string,
    cameraOrbit?: string,
    cameraTarget?: string,
}>(), {
    cameraOrbit: "0 0 0",
    cameraTarget: "0 0 0",
});

const loading = ref(false);
const percentage = ref(0);
const modelReady = ref(false);
const expanded = ref(false);

const treeDModel = ref<any>(null);
const pathGLB = computed(() => `https://static.futureknx.com/3d-models/${props.modelName}.glb`);
const pathUSDZ = computed(() => `https://static.futureknx.com/3d-models/${props.modelName}.usdz`);

function modelLoading($event: any) {
    console.log(">", $event.detail.totalProgress);
    percentage.value = Math.round($event.detail.totalProgress * 100)
    loading.value = percentage.value < 100;
}

function modelLoaded($event: any) {
    console.log("model-loaded", $event);
    setTimeout(() => {
        loading.value = false;
        percentage.value = 0;
        modelReady.value = true;
    }, 100);
}

function toggleExpand() {
    expanded.value = !expanded.value;
}

function loadModel() {
    treeDModel.value?.dismissPoster();
}
</script>

<style scoped lang="scss">
.model-wrapper {
    @apply relative bg-slate-300/0;

    &.expanded {
        @apply fixed w-screen h-screen left-0 top-0 right-0 bottom-0 transition-all bg-slate-500/100 z-50;
    }
}
</style>