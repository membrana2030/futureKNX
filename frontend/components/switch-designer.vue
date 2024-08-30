<template>
    <section class="fixed w-full h-full overflow-hidden">
        <div class="wrapper flex flex-col align-middle justify-center transition-colors duration-300 select-none"
             :style="`background-color: ${bgColors?.hex}`">

            <!-- #region Menu -->
            <div class="w-full fixed py-2 z-30 top-0 left-0 right-0 transition-opacity hover:opacity-100"
                 :class="[{ 'opacity-10': focusMode }]">
                <x-card class="container max-w-6xl mx-auto px-2 pt-2 pb-1">
                    <div class="flex flex-col sm:flex-row sm:gap-4 items-start">
                        <!-- Logo -->
                        <div class="flex flex-row w-full sm:w-auto sm:block">
                            <nuxt-link to="/"
                                       class="inline-block px-5">
                                <img class="h-8 sm:h-12"
                                     src="~~/assets/visuals/logo/future-knx.svg" />
                            </nuxt-link>

                            <div class="hidden sm:block">
                                <x-button size="sm"
                                          to="/"
                                          block
                                          ghost>
                                    <i class="fas fa-arrow-left"></i> Home Page
                                </x-button>
                            </div>

                            <!-- Select -->
                            <div class="flex-1 sm:hidden">
                                <x-select v-model="selectedMode"
                                          :options="layoutOptions" />
                            </div>
                        </div>


                        <!-- Layouts -->
                        <div class="overflow-hidden w-full">
                            <!-- Tabs -->
                            <x-tab-group grow
                                         size="xs"
                                         color="primary"
                                         variant="line"
                                         v-model="selectedMode"
                                         class="hidden sm:block">
                                <x-tab v-for="t in layoutOptions"
                                       v-bind="t" />

                                <x-tab>
                                    <template #tab>
                                        <x-toggle size="xs"
                                                  v-model="focusMode"
                                                  label="Focus Mode" />
                                    </template>
                                </x-tab>
                            </x-tab-group>

                            <div v-if="selectedMode == 'custom'"
                                 class="flex flex-row items-center justify-center gap-6 w-full my-3 h-10">
                                <div v-for="v, k in customLayouts"
                                     class="flex flex-row justify-center items-center">
                                    <button type="button"
                                            :class="[{ 'ring-2': designMode == k }, { 'hover:scale-125': designMode != k }]"
                                            class="p-2 relative scale-100 transition-transform"
                                            @click="designMode = k">
                                        <img :src="v"
                                             :alt="`${k} customizable KNX switch`"
                                             class="w-5 md:w-7 transition-transform"
                                             :class="[{ 'scale-125': designMode == k }]" />
                                    </button>
                                </div>
                            </div>

                            <div v-else-if="filteredlayouts"
                                 class="flex flex-1 flex-row gap-1 items-center justify-center overflow-y-hidden overflow-x-auto mt-1 md:gap-6">
                                <div v-for="(l, k) in filteredlayouts"
                                     class="inline-flex relative justify-center items-center h-14">
                                    <button type="button"
                                            :class="[{ 'ring-2': layoutKey == k }, { 'hover:scale-125': layoutKey != k }]"
                                            class="p-2 static scale-100 transition-transform"
                                            @click="layoutKey = k.toString()">
                                        <img v-src="l.icon"
                                             :alt="`${k} customizable KNX switch`"
                                             class="w-5 md:w-6 transition-transform"
                                             :class="[l.iconClass, { 'scale-125': layoutKey == k }]" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- Save Design as PDF -->
                        <div class="hidden sm:flex">
                            <x-button size="xs"
                                      @click="saveCapture"
                                      class="leading-tight text-nowrap">
                                <i class="fas fa-2x fa-cloud-download text-red-600" />
                                <x-divider class="my-2" />
                                <span class="font-normal">Save<br>Design<br>as PDF</span>
                            </x-button>
                        </div>
                    </div>
                </x-card>
            </div>
            <!-- #endregion -->

            <!-- #region Textures / Parts -->
            <div v-if="layout"
                 class="hidden container max-w-6xl md:flex flex-row-reverse items-center justify-between fixed z-30 pattern-wrapper transition-opacity hover:opacity-100"
                 :class="[{ 'opacity-10': focusMode }]">
                <div class="w-60 ">
                    <!-- Textures/Wall Color Card -->
                    <x-card class="p-2 shadow-lg shadow-black/50 bg-slate-100">
                        <x-tab-group grow
                                     v-model="colorsTab"
                                     class="h-full">
                            <x-tab label="Textures"
                                   value="textures">
                                <div class="flex flex-col gap-2">
                                    <div v-for="pattern in layout.colors"
                                         class="pattern-select relative"
                                         :class="[{ 'active': patternCache == pattern }]"
                                         @mouseenter="hoverColor = pattern"
                                         @mouseleave="hoverColor = ''">
                                        <button class="btn pattern h-9"
                                                :class="[pattern, { 'ring-2 ring-secondary-500': patternCache == pattern }]"
                                                @dragstart="dragStart($event, pattern)"
                                                @click="takeColor($event, pattern)"
                                                draggable="true"
                                                :title="textureNames[pattern]"></button>

                                        <x-button class="frame-color"
                                                  data-place="frame"
                                                  @click="catchPattern($event, 'frame')">FRAME</x-button>
                                        <x-button class="all-color"
                                                  data-place="full"
                                                  @click="catchPattern($event, 'full')">ALL</x-button>
                                    </div>
                                </div>
                            </x-tab>
                            <x-tab label="Wall Color"
                                   value="wall">
                                <div class=""
                                     style="height:432px;">
                                    <Sketch v-model="bgColors"
                                            :presetColors="paintPalette"
                                            class="mx-auto" />
                                </div>
                            </x-tab>
                        </x-tab-group>
                    </x-card>
                </div>

                <!-- Custom Parts -->
                <x-card :class="[{ 'opacity-100 scale-100': selectedMode == 'custom' }, { 'pointer-events-none hide opacity-0 scale-75': selectedMode != 'custom' }]"
                        class="w-60 p-2 shadow-lg shadow-black/50 h-full bg-slate-100 transition-all">

                    <x-tab-group grow
                                 v-model="fakeRef"
                                 class="mb-2">
                        <x-tab label="Button Parts"
                               value="fake" />
                    </x-tab-group>

                    <div class="grid grid-cols-2 grid-rows-5 gap-2">
                        <button type="button"
                                class="custom-button-1"
                                draggable="true"
                                :class="[patternCache, { 'ring-2 ring-secondary-700 dark:ring-secondary-200': partCache?.row == 1 && partCache?.col == 1 }]"
                                @click="catchPart(1, 1)"
                                @dragstart="dragStart($event, { row: 1, col: 1 })"></button>
                        <button type="button"
                                class="custom-button-3 row-span-2"
                                draggable="true"
                                :class="[patternCache, { 'ring-2 ring-secondary-700 dark:ring-secondary-200': partCache?.row == 2 && partCache?.col == 1 }]"
                                @click="catchPart(2, 1)"
                                @dragstart="dragStart($event, { row: 2, col: 1 })"></button>
                        <button type="button"
                                class="custom-button-2 col-span-2"
                                draggable="true"
                                :class="[patternCache, { 'ring-2 ring-secondary-700 dark:ring-secondary-200': partCache?.row == 1 && partCache?.col == 2 }]"
                                @click="catchPart(1, 2)"
                                @dragstart="dragStart($event, { row: 1, col: 2 })"></button>
                        <button type="button"
                                class="custom-button-4 col-span-2 row-span-2"
                                draggable="true"
                                :class="[patternCache, { 'ring-2 ring-secondary-700 dark:ring-secondary-200': partCache?.row == 2 && partCache?.col == 2 }]"
                                @click="catchPart(2, 2)"
                                @dragstart="dragStart($event, { row: 2, col: 2 })"></button>
                    </div>
                    <div class="flex flex-row gap-2 mt-4">
                        <div><i class="fas fa-info-circle text-blue-600"></i></div>
                        <div class="text-xs">Drag and drop parts over the device.</div>
                    </div>
                </x-card>
            </div>
            <!-- #endregion -->

            <div class="flex flex-row align-middle justify-center fixed">
                <div class="flex flex-col justify-center items-center relative">
                    <div id="key"
                         ref="elementKey"
                         v-if="layout"
                         class="layout"
                         data-place="frame"
                         :class="[colors.frame, layout?.class, layoutMode]"
                         @drop="dropZone($event)"
                         @dragover="dragOver($event)">
                        <div>
                            <div v-if="layoutMode == 'thermostat'"
                                 class="row-span-2 col-span-2 ghost"></div>

                            <div v-for="(btn, n) in (selectedMode == 'custom' ? customLayout.buttons() : parseButtonLayout(layout?.buttons))"
                                 :data-place="`button${n + 1}`"
                                 @drop="dropZone($event)"
                                 @dragover="dragOver($event)"
                                 @click="buttonAction($event, `button${n + 1}`, n + 1)"
                                 :class="[btn, colors[`button${n + 1}`], `part-${n + 1}`]"></div>
                        </div>
                    </div>
                    <div v-if="useModal"
                         class="mt-5 text-xs py-2 px-4 bg-slate-100 rounded border border-slate-300 transition-opacity hover:opacity-100"
                         :class="[{ 'opacity-30': focusMode }]">
                        <i class="text-blue-400 fas fa-info-circle mr-2"></i>
                        Tap the button to choose its <span v-if="selectedMode == 'custom'">shape and</span> color.
                    </div>
                </div>
            </div>
        </div>

        <div v-if="useModal"
             class="fixed left-5 top-auto bottom-5 right-5 flex flex-row gap-2">
            <div :class="[{ 'opacity-10': focusMode }]">
                <x-button size="xs"
                          @click="buttonAction($event, `frame`, 0)">Set Frame</x-button>
            </div>
            <div :class="[{ 'opacity-10': focusMode }]">
                <x-button size="xs"
                          @click="buttonAction($event, `all`, 0)">Set All</x-button>
            </div>
            <div :class="[{ 'opacity-10': focusMode }]">
                <x-button size="xs"
                          @click="saveCapture">Save PDF</x-button>
            </div>
            <x-spacer />
            <div>
                <x-toggle size="xs"
                          v-model="focusMode"
                          label="Focus Mode" />
            </div>
        </div>

        <x-modal v-model="textureModal"
                 :show-close="false"
                 :has-header="false"
                 :has-actions="true"
                 :fluid="true"
                 size="xs"
                 backdrop>
            <div v-if="selectedMode == 'custom' && modalButtonIndex > 0">
                <div class="text-md mb-2 border-b-2 border-b-secondary-400">Shape</div>
                <div class="grid grid-cols-2 grid-rows-5 gap-2 max-w-64 mx-auto mb-6">
                    <div class="custom-button-1"
                         :class="[modalTexture, { 'selected': modalShape.row == 1 && modalShape.col == 1 }]"
                         @click="modalShape = { row: 1, col: 1 }"></div>

                    <div class="custom-button-2 row-span-2"
                         :class="[modalTexture, { 'selected': modalShape.row == 2 && modalShape.col == 1 }]"
                         @click="modalShape = { row: 2, col: 1 }"></div>

                    <div class="custom-button-3 col-span-2"
                         :class="[modalTexture, { 'selected': modalShape.row == 1 && modalShape.col == 2 }]"
                         @click="modalShape = { row: 1, col: 2 }"></div>

                    <div class="custom-button-4 col-span-2 row-span-2"
                         :class="[modalTexture, { 'selected': modalShape.row == 2 && modalShape.col == 2 }]"
                         @click="modalShape = { row: 2, col: 2 }"></div>
                </div>
            </div>

            <div class="text-md mb-2 border-b-2 border-b-secondary-400">Color</div>
            <div class="grid grid-cols-3 gap-2">
                <div v-for="pattern in layout.colors"
                     class="relative rounded-lg shadow"
                     :class="[pattern, { 'ring-2 ring-blue-700': modalTexture == pattern }]">
                    <button class="pattern relative w-full h-9 rounded-lg"
                            :class="[pattern]"
                            :title="textureNames[pattern]"
                            @click="modalTexture = pattern"></button>
                </div>
            </div>

            <template #actions>
                <x-button size="sm"
                          color="red"
                          ghost
                          @click="textureModal = false">Cancel</x-button>
                <x-spacer />
                <x-button size="sm"
                          color="primary"
                          @click="buttonSet">SET</x-button>
            </template>
        </x-modal>
    </section>
</template>

<script setup
        lang="ts">
        import "drag-drop-touch/DragDropTouch";
        import html2canvas from "html2canvas";

        // @ts-ignore
        import dom2pdf from "dom-to-pdf";

        import icon_basic from "../assets/switches/layouts/basic.svg";
        import icon_long from "../assets/switches/layouts/long.svg";
        import icon_thermostat from "../assets/switches/layouts/thermostat.svg";

        const customLayouts = { "basic": icon_basic, "long": icon_long, "thermostat": icon_thermostat };

        const app = useNuxtApp();

        // #region Constant values
        const textureNames = ref<{ [key: string]: string }>({
            "polar-white": "Polar White",
            "royal-silver": "Royal Silver",
            "anthracite-gray": "Anthracite Gray",
            "meteor-black": "Meteor Black",
            "texture-black": "Texture Black",
            "pure-gold": "Pure Gold",
            "antique-copper": "Antique Copper",
            "antique-bronze": "Antique Bronze",
            "red-cherry": "Red Cherry",
            "green-leaf": "Green Leaf",
        })
        const textures = Object.keys(textureNames.value);
        const buttonCacheEmpty = {
            button1: { row: 1, col: 1 },
            button2: { row: 1, col: 1 },
            button3: { row: 1, col: 1 },
            button4: { row: 1, col: 1 },
            button5: { row: 1, col: 1 },
            button6: { row: 1, col: 1 },
            button7: { row: 1, col: 1 },
            button8: { row: 1, col: 1 },
            button9: { row: 1, col: 1 },
            button10: { row: 1, col: 1 },
            button11: { row: 1, col: 1 },
            button12: { row: 1, col: 1 },
        };
        const layoutOptions = ref([
            { value: "basic", label: "2-8 Buttons Switch" },
            { value: "long", label: "3-12 Button Switch" },
            { value: "thermostat", label: "2-8 Room Controller" },
            { value: "custom", label: "Design Your Self" }
        ])
        // #endregion

        // #region Layouts
        const basicLayouts = {
            "quadro": {
                "class": "quadro",
                "icon": import("~~/assets/switches/layouts/basic/0.svg"),
                "buttons": [
                    { row: 2, col: 1 },
                    { row: 2, col: 1 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 2, col: 1 },
                    { row: 2, col: 1 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "basic"
            },
            "doubleV": {
                "class": "double-v",
                "icon": import("~~/assets/switches/layouts/basic/2.svg"),
                "buttons": [
                    { row: 2, col: 2 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 2, col: 2 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "basic"
            },
            "lines": {
                "class": "lines",
                "icon": import("~~/assets/switches/layouts/basic/3.svg"),
                "buttons": [
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "basic"
            },
            "trio": {
                "class": "trio",
                "icon": import("~~/assets/switches/layouts/basic/1.svg"),
                "buttons": [
                    { row: 2, col: 1 },
                    { row: 2, col: 1 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 2, col: 2 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "basic"
            },
            "doubleLines": {
                "class": "double-lines",
                "icon": import("~~/assets/switches/layouts/basic/4.svg"),
                "buttons": [
                    { row: 2, col: 1 },
                    { row: 2, col: 1 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "basic"
            },
            "masonry": {
                "class": "masonry",
                "icon": import("~~/assets/switches/layouts/basic/5.svg"),
                "buttons": [
                    { row: 2, col: 1 },
                    { row: 1, col: 1 },
                    { row: 0, col: 0 },
                    { row: 1, col: 1 },
                    { row: 2, col: 2 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 }
                ],
                "colors": textures,
                "mode": "basic"
            },
            "masonryBrick": {
                "class": "masonry-brick",
                "icon": import("~~/assets/switches/layouts/basic/6.svg"),
                "buttons": [
                    { row: 1, col: 1 },
                    { row: 1, col: 1 },
                    { row: 1, col: 1 },
                    { row: 1, col: 1 },
                    { row: 2, col: 2 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "basic"
            },
            "masonryLines": {
                "class": "masonry-lines",
                "icon": import("~~/assets/switches/layouts/basic/7.svg"),
                "buttons": [
                    { row: 1, col: 1 },
                    { row: 2, col: 1 },
                    { row: 1, col: 1 },
                    { row: 0, col: 0 },
                    { row: 1, col: 1 },
                    { row: 2, col: 1 },
                    { row: 1, col: 1 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "basic"
            },
            "masonryGrand": {
                "class": "masonry-grand",
                "icon": import("~~/assets/switches/layouts/basic/8.svg"),
                "buttons": [
                    { row: 1, col: 1 },
                    { row: 1, col: 1 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "basic"
            },
        }
        const thermostatLayouts = {
            "thermQuadro": {
                "class": "therm quadro",
                "icon": import("~~/assets/switches/layouts/thermostat/0.svg"),
                "buttons": [
                    ...basicLayouts.quadro.buttons
                ],
                "colors": textures,
                "mode": "thermostat",
            },
            "thermDoubleV": {
                "class": "therm double-v",
                "icon": import("~~/assets/switches/layouts/thermostat/2.svg"),
                "buttons": [
                    ...basicLayouts.doubleV.buttons
                ],
                "colors": textures,
                "mode": "thermostat",
            },
            "thermLines": {
                "class": "therm lines",
                "icon": import("~~/assets/switches/layouts/thermostat/3.svg"),
                "buttons": [
                    ...basicLayouts.lines.buttons
                ],
                "colors": textures,
                "mode": "thermostat",
            },
            "thermTrio": {
                "class": "therm trio",
                "icon": import("~~/assets/switches/layouts/thermostat/1.svg"),
                "buttons": [
                    ...basicLayouts.trio.buttons
                ],
                "colors": textures,
                "mode": "thermostat",
            },
            "thermDoubleLines": {
                "class": "double-lines",
                "icon": import("~~/assets/switches/layouts/thermostat/4.svg"),
                "buttons": [
                    ...basicLayouts.doubleLines.buttons
                ],
                "colors": textures,
                "mode": "thermostat",
            },
            "thermMasonry": {
                "class": "therm masonry",
                "icon": import("~~/assets/switches/layouts/thermostat/5.svg"),
                "buttons": [
                    ...basicLayouts.masonry.buttons
                ],
                "colors": textures,
                "mode": "thermostat",
            },
            "thermMasonryBrick": {
                "class": "therm masonry-brick",
                "icon": import("~~/assets/switches/layouts/thermostat/6.svg"),
                "buttons": [
                    ...basicLayouts.masonryBrick.buttons
                ],
                "colors": textures,
                "mode": "thermostat",
            },
            "thermMasonryLines": {
                "class": "therm masonry-lines",
                "icon": import("~~/assets/switches/layouts/thermostat/7.svg"),
                "buttons": [
                    ...basicLayouts.masonryLines.buttons
                ],
                "colors": textures,
                "mode": "thermostat",
            },
            "thermMasonryGrand": {
                "class": "therm masonry-grand",
                "icon": import("~~/assets/switches/layouts/thermostat/8.svg"),
                "buttons": [
                    ...basicLayouts.masonryGrand.buttons
                ],
                "colors": textures,
                "mode": "thermostat",
            },
        }
        const longLayouts = {
            "m1": {
                "class": "m1",
                "icon": import("~~/assets/switches/layouts/long/1.svg"),
                "buttons": [
                    { row: 1, col: 1 },
                    { row: 2, col: 1 },
                    { row: 1, col: 1 },
                    { row: 0, col: 0 },
                    { row: 1, col: 1 },
                    { row: 2, col: 1 },
                    { row: 1, col: 1 },
                    { row: 0, col: 0 },
                    { row: 1, col: 1 },
                    { row: 2, col: 1 },
                    { row: 1, col: 1 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "long"
            },
            "m2": {
                "class": "m2",
                "icon": import("~~/assets/switches/layouts/long/2.svg"),
                "buttons": [
                    { row: 2, col: 1 },
                    { row: 2, col: 1 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 2, col: 1 },
                    { row: 2, col: 1 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 2, col: 1 },
                    { row: 2, col: 1 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "long"
            },
            "m3": {
                "class": "m3",
                "icon": import("~~/assets/switches/layouts/long/3.svg"),
                "buttons": [
                    { row: 2, col: 1 },
                    { row: 1, col: 1 },
                    { row: 0, col: 0 },
                    { row: 1, col: 1 },
                    { row: 1, col: 1 },
                    { row: 1, col: 1 },
                    { row: 1, col: 1 },
                    { row: 1, col: 1 },
                    { row: 2, col: 2 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "long"
            },
            "m4": {
                "class": "m4",
                "icon": import("~~/assets/switches/layouts/long/4.svg"),
                "buttons": [
                    { row: 2, col: 2 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 2, col: 1 },
                    { row: 1, col: 1 },
                    { row: 0, col: 0 },
                    { row: 1, col: 1 },
                    { row: 2, col: 2 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "long"
            },
            "m5": {
                "class": "m5",
                "icon": import("~~/assets/switches/layouts/long/5.svg"),
                "buttons": [
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 2, col: 1 },
                    { row: 2, col: 1 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "long"
            },
            "m6": {
                "class": "m6",
                "icon": import("~~/assets/switches/layouts/long/6.svg"),
                "buttons": [
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "long"
            },
            "m7": {
                "class": "m7",
                "icon": import("~~/assets/switches/layouts/long/7.svg"),
                "buttons": [
                    { row: 2, col: 2 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 2, col: 2 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 2, col: 2 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "long"
            },
            "m8": {
                "class": "m8",
                "icon": import("~~/assets/switches/layouts/long/8.svg"),
                "buttons": [
                    { row: 2, col: 1 },
                    { row: 2, col: 1 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 2, col: 1 },
                    { row: 2, col: 1 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 2, col: 2 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "long"
            },
            "m9": {
                "class": "m9",
                "icon": import("~~/assets/switches/layouts/long/9.svg"),
                "buttons": [
                    { row: 1, col: 1 },
                    { row: 1, col: 1 },
                    { row: 1, col: 1 },
                    { row: 1, col: 1 },
                    { row: 1, col: 1 },
                    { row: 1, col: 1 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                    { row: 1, col: 2 },
                    { row: 0, col: 0 },
                ],
                "colors": textures,
                "mode": "long"
            },
        }
        // #endregion

        // #region References
        const focusMode = ref(false);
        const textureModal = ref(false);
        const modalShape = ref<{ row: number, col: number }>({ row: 0, col: 0 });
        const modalTexture = ref("polar-white");
        const modalButtonIndex = ref(-1);
        const modalPlace = ref("");
        const fakeRef = ref("fake");
        const elementKey = ref<HTMLDivElement>();
        const patternCache = ref("polar-white");
        const partCache = ref<{ row: number, col: number } | undefined>();
        const hoverColor = ref("");
        const colorsTab = ref("textures");
        const patterns = ref([...textures]);
        const paintPalette = ref([
            '#000000', '#333333', '#4D4D4D', '#666666', '#808080', '#999999', '#B3B3B3', '#CCCCCC',
            '#FFFFFF', '#DDE1E3', '#F3F2ED', '#F0ECE1', '#AFD9D7', '#C0DAEB', '#E3C1B5', '#E392A1',
            '#A85658', '#8F705C', '#A06857', '#C9B197', '#FADAA7', '#6487AF', '#8C8FB2', '#32BECB',
            '#463442', '#36465F', '#0172B6', '#2A555B', '#588C75', '#00554F', '#AABFAC', '#FDA1FF',
        ]);
        const bgColors = ref({
            hex: "#FFFFFF"
        });
        const colors = ref<{ [key: string]: any }>({
            frame: patterns.value[0],
            button1: patterns.value[0],
            button2: patterns.value[0],
            button3: patterns.value[0],
            button4: patterns.value[0],
            button5: patterns.value[0],
            button6: patterns.value[0],
            button7: patterns.value[0],
            button8: patterns.value[0],
            button9: patterns.value[0],
            button10: patterns.value[0],
            button11: patterns.value[0],
            button12: patterns.value[0],
        });
        const buttonCache = ref<{ [key: string]: { row: number, col: number } }>({ ...buttonCacheEmpty });
        const selectedMode = ref<"basic" | "long" | "thermostat" | "custom">("basic");
        const designMode = ref<"basic" | "long" | "thermostat">("basic");
        const layoutKey = ref("quadro");
        const layouts = ref<{ [key: string]: any }>({
            basic: basicLayouts,
            long: longLayouts,
            thermostat: thermostatLayouts,
        });
        // #endregion

        // #region Computed
        const layoutMode = computed<"basic" | "long" | "thermostat" | "custom">(() => {
            if (selectedMode.value == "custom") return designMode.value;
            else return selectedMode.value;
        })
        const layoutSlotCount = computed<number>(() => layoutMode.value == "long" ? 12 : 8);
        const layout = computed(() => {
            if (selectedMode.value == "custom") return customLayout.value;
            else return layouts.value[layoutMode.value][layoutKey.value];
        });
        const customLayout = computed<{ [key: string]: any }>(() => {
            return {
                "class": "custom",
                "icon": import("~~/assets/switches/layouts/basic/0.svg"),
                "colors": textures,
                "buttons": () => {
                    let buttons = [];
                    let _counter = layoutSlotCount.value;
                    for (const k in buttonCache.value) {
                        const { row, col } = buttonCache.value[k];
                        const slotSize = row * col;
                        _counter -= slotSize;
                        if (slotSize > 0 && _counter >= 0) {
                            const _span = [];
                            if (row > 1) _span.push(`row-span-${row}`);
                            if (col > 1) _span.push(`col-span-${col}`);
                            buttons.push(_span.join(" "));
                        }
                        else if (slotSize == 0 && _counter >= 0) buttons.push("hidden");
                    }

                    return buttons;
                }
            }
        });
        const filteredlayouts = computed<{ [key: string]: any }>(() => {
            if (selectedMode.value == "custom") return undefined;
            return layouts.value[selectedMode.value];
        });
        const useModal = computed<boolean>(() => app.$getBreakPoint() == 'xs');
        // #endregion

        // #region Watchers
        watch(layoutMode, () => {
            if (!filteredlayouts.value) return;
            const k = Object.keys(filteredlayouts.value)[0];
            if (k) layoutKey.value = k;
        }, { immediate: true });
        // #endregion

        // #region Methods
        function parseButtonLayout(buttonLayout: { row: number, col: number }[]) {
            const _buttonLayout = [];
            let _counter = layoutSlotCount.value;
            for (const b in buttonLayout) {
                const { row, col } = buttonLayout[b];
                const slotSize = row * col;
                _counter -= slotSize;
                if (slotSize > 0 && _counter >= 0) {
                    const _span = [];
                    if (row > 1) _span.push(`row-span-${row}`);
                    if (col > 1) _span.push(`col-span-${col}`);
                    _buttonLayout.push(_span.join(" "));
                }
                else if (slotSize == 0 && _counter >= 0) {
                    _buttonLayout.push("hidden");
                }
            }
            return _buttonLayout;
        }

        function applySwitchParts(row: number, col: number, _place: string) {
            const slotCount = layoutSlotCount.value;
            const _keys = Object.keys(buttonCache.value);

            let _placeInt: number = parseInt(_place.replace(/\D/g, ""));

            // Double column control
            if (col == 2 && _placeInt > 1 && _placeInt % 2 == 0) _placeInt--;

            // Double row control
            if (row == 2 && _placeInt > slotCount - 2) row = 1;

            // Apply placeholder
            buttonCache.value[`button${_placeInt}`] = { row, col };

            let _placeIdx: number = _placeInt - 1;

            let _prev: any, _befr: any, _old: any;
            _keys.forEach((k, i) => {
                const _crnt = buttonCache.value[k];

                // Placed part
                if (i == _placeIdx) {
                    if (_prev && _prev.col == 1 && _prev.row == 2 && _crnt.col == 2) { _prev.row = 1; }
                    else if (_befr && _befr.col == 1 && _befr.row == 2 && _crnt.col == 2) { _befr.row = 1; }
                    else if (i > _keys.length - 2) {
                        console.log(i, _keys.length, _keys.length - 2);
                        _crnt.row = 1;
                    }
                }
                // Other parts
                else {
                    const _opt1 = _prev && _prev.col == 2 && (i + 1) % 2 == 0;
                    const _opt2 = _befr && _befr.row == 2;
                    const _opt3 = _old && _old.row == 2 && _old.col == 2;

                    if (_opt1 || _opt2 || _opt3) { _crnt.row = 0; _crnt.col = 0; }
                    else if (_prev && _prev.row == 2 && _prev.col == 1 && _crnt.col == 2) { _crnt.row = 1; _crnt.col = 1; }
                    else if (_crnt.col == 0) { _crnt.row = 1; _crnt.col = 1; }
                }

                if (_befr) _old = _befr;
                if (_prev) _befr = _prev;
                _prev = _crnt;
            });

            layout.value == customLayout;
            app.vueApp._instance?.proxy?.$forceUpdate();
        }

        function dragStart($event: any, pattern: any) {
            if (typeof pattern == "string") $event.dataTransfer.setData("pattern", pattern);
            else if (typeof pattern == "object") {
                const { row, col } = pattern;
                if (row > 0) $event.dataTransfer.setData("x-row", row);
                if (col > 0) $event.dataTransfer.setData("x-col", col);
            }
        }

        function dropZone($event: any) {
            let row: number = parseInt($event.dataTransfer?.getData("x-row"));
            let col: number = parseInt($event.dataTransfer?.getData("x-col"));

            const _pattern = $event.dataTransfer?.getData("pattern") || patternCache.value;
            const _place = $event.target?.getAttribute("data-place");
            if (_place == "full" && _pattern) {
                for (const k in colors.value) {
                    colors.value[k] = _pattern;
                }
            }
            else if (_place && _pattern && typeof _pattern == "string") colors.value[_place] = _pattern;

            if (row > 0 || col > 0) {
                applySwitchParts(row, col, _place);
            }
        }

        function dragOver($event: any) {
            $event.preventDefault();
        }

        function takeColor(_: any, pattern: any) {
            patternCache.value = pattern;
        }

        function buttonAction($event: Event, place?: string, n: number = -1) {
            if (!useModal.value) catchPattern($event);
            else if (n >= 0 && place) {
                modalButtonIndex.value = n;
                modalPlace.value = place;
                modalTexture.value = colors.value[place];

                if (place == "frame" || place == "all") {
                    modalShape.value = { row: 0, col: 0 };
                }
                else if (!buttonCache.value[place]) {
                    return;
                }
                else {
                    modalShape.value = selectedMode.value == 'custom' ? buttonCache.value[place] : layout.value.buttons[n];
                }

                textureModal.value = true;
            }
        }

        function buttonSet() {
            const { row, col } = modalShape.value;
            applySwitchParts(row, col, modalPlace.value);

            if (modalTexture.value && modalPlace.value == "all") {
                for (let k in colors.value) {
                    colors.value[k] = modalTexture.value;
                }
            }
            else if (modalTexture.value) {
                colors.value[modalPlace.value] = modalTexture.value;
            }
            textureModal.value = false;
        }

        function catchPattern($event: any, place?: string) {
            if (!$event?.target) return;

            const _place = place || $event.target?.getAttribute("data-place");
            if (partCache.value) {
                const { row, col } = partCache.value;
                applySwitchParts(row, col, _place);
            }

            if (patternCache.value) {
                const _pattern = patternCache.value;
                if (_place == "full" && _pattern) {
                    for (const k in colors.value) {
                        colors.value[k] = _pattern;
                    }
                }
                else if (_place && _pattern) colors.value[_place] = _pattern;
            }
        }

        function catchPart(row: number, col: number) {
            if (partCache.value?.row == row && partCache.value?.col == col) partCache.value = undefined;
            else partCache.value = { row, col }
        }

        function saveCapture() {
            if (!elementKey.value) return;

            fetch("/print-custom.html")
                .then(async (response) => {
                    const _src = await response.text();
                    const _dom = new DOMParser().parseFromString(_src, "text/html");

                    const _canvas = await html2canvas(elementKey.value as HTMLElement);
                    let _devimg = _canvas.toDataURL().replace(/\s/gm, "");

                    const _img = _dom.getElementById("ProductImage") as HTMLImageElement;
                    _img.src = _devimg;
                    _img.crossOrigin = "anonymous";

                    const _buttons = selectedMode.value == "custom" ? customLayout.value.buttons() : parseButtonLayout(layout.value.buttons);

                    // Frame Color
                    const _frame = textureNames.value[colors.value[`frame`]];

                    const _colors = [
                        `<tr><th>Frame Color</th><td>: ${_frame}</td></tr>`
                    ];

                    // Button Colors
                    let _n = 0;
                    for (let n in _buttons) {
                        if (_buttons[n] !== "hidden") {
                            const _color = textureNames.value[colors.value[`button${parseInt(n) + 1}`]];
                            _n++;
                            _colors.push(`<tr><th>Button ${_n}</th><td>: ${_color}</td></tr>`);
                        }
                    }

                    const _productSetup = _dom.getElementById("ProductSetup");
                    if (_productSetup) _productSetup.innerHTML = _colors.join("");

                    dom2pdf(_dom.documentElement, { filename: "output.pdf", overrideWidth: 960 }, () => {
                        console.log("done");
                    });
                });
        }
        // #endregion

        onMounted(() => {
            switch (location.hash.toLowerCase()) {
                case "#design-your-self":
                    selectedMode.value = "custom";
                    break;
            }
        });
</script>

<style scoped
       lang="scss">

    .vertical>div {
        flex-direction: column !important;
    }

    .wrapper {
        --radius: 3px;
        --model-width: 512px;

        --basic-height: var(--model-width);
        --long-height: calc(var(--model-width) * 1.472);
        --thermostat-height: calc(var(--model-width) * 1.472);

        --frame-width: calc(var(--model-width) * 0.012);
        --gap: calc(var(--model-width) * 0.011);

        --frame-diff: calc(var(--frame-width) * 2);
        --gap-diff: calc(var(--gap) * 2);

        --custom-button-w: 4rem;
        --custom-button-h: 2rem;


        display: inline-flex;
        align-items: center;
        justify-content: center;
        background-repeat: repeat;
        min-height: 100vh;
        width: 100%;

        background-color: #557eb4;
        background-image: url(~~/assets/visuals/texture/concrete-wall.png);
        background-position: center center;

        #key {
            @apply relative overflow-hidden shadow-lg shadow-black/50 m-0;

            width: var(--model-width);
            border-radius: var(--radius);
            padding: calc(var(--frame-width) + var(--gap));

            background-color: black;
            background-size: cover;

            &::before {
                @apply absolute z-0;
                content: " ";
                width: calc(100% - var(--frame-diff));
                height: calc(100% - var(--frame-diff));

                margin-top: calc(var(--frame-width));
                margin-left: calc(var(--frame-width));

                background-size: 100% 100%;
            }

            &>div {
                @apply relative grid grid-flow-row w-full h-full;
                gap: var(--gap);
                width: calc(100% - var(--frame-diff) - var(--gap-diff));
                height: calc(100% - var(--frame-diff) - var(--gap-diff));
                top: calc(var(--frame-width) + var(--gap));
                left: calc(var(--frame-width) + var(--gap));

                &>div {
                    position: relative;
                    border-radius: var(--radius);
                    background-size: var(--model-width);
                    background-repeat: no-repeat;

                    &.part-1 {
                        background-position: 0 20%;
                    }

                    &.part-2 {
                        background-position: 100% 20%;
                    }

                    &.part-3 {
                        background-position: 0 36%;
                    }

                    &.part-4 {
                        background-position: 100% 36%;
                    }

                    &.part-5 {
                        background-position: 0 52%;
                    }

                    &.part-6 {
                        background-position: 100% 52%;
                    }

                    &.part-7 {
                        background-position: 0 68%;
                    }

                    &.part-8 {
                        background-position: 100% 68%;
                    }

                    &.part-9 {
                        background-position: 0 84%;
                    }

                    &.part-10 {
                        background-position: 100% 84%;
                    }

                    &.part-11 {
                        background-position: 0 100%;
                    }

                    &.part-12 {
                        background-position: 100% 100%;
                    }
                }
            }

            // Buttons Grid
            &.basic {
                height: var(--basic-height);

                &::before {
                    background-image: url(~~/assets/switches/textures/background.png);
                }

                &>div {
                    @apply grid-rows-4 grid-cols-2;
                }
            }

            &.long {
                height: var(--long-height);

                &::before {
                    background-image: url(~~/assets/switches/textures/background-long.png);
                }

                &>div {
                    @apply grid-rows-6 grid-cols-2;
                }
            }

            &.thermostat {
                height: var(--thermostat-height);

                &::before {
                    background-image: url(~~/assets/switches/textures/background-thermostat.png);
                }

                &>div {
                    @apply grid-rows-6 grid-cols-2;
                }
            }
        }

        .layout {
            padding: calc(var(--pfix) + var(--gap)) !important;
            gap: var(--gap);
            grid-gap: var(--gap);
            border-radius: 7px;
            background-position: 0% 100%;

            .ghost {
                visibility: hidden !important;
                opacity: 0 !important;
            }

            &>div {
                border-radius: var(--radius) !important;
                overflow: hidden;
                position: relative;
                top: 0;
                left: 0;

                ::before {
                    pointer-events: none;
                    content: " ";
                    position: relative;
                }

                background-size: var(--model-width);
            }
        }

        /* #region Patterns */
        .pattern-wrapper {
            pointer-events: none;

            .x-card:not(.hide) {
                pointer-events: all;
            }
        }

        .pattern-select {
            @apply relative;

            button.btn.pattern {
                @apply inline-block w-full shadow-md shadow-slate-300 rounded px-2 overflow-hidden transition-all whitespace-nowrap;
                text-overflow: ellipsis;
            }

            &.active button.btn.pattern {
                @apply w-28;
            }

            .all-color,
            .frame-color {
                @apply text-xs h-9 font-light absolute transition-all -ml-10 my-0 opacity-0 p-2 overflow-hidden pointer-events-none;
            }

            &.active .frame-color {
                @apply ml-1 opacity-100 pointer-events-auto;
            }

            &.active .all-color {
                @apply ml-16 opacity-100 pointer-events-auto translate-x-1;
            }
        }

        .pattern {
            @apply font-light shadow-sm bg-center;
            background-size: var(--model-width);
        }

        /* #endregion */
    }

    .custom-button-1,
    .custom-button-2,
    .custom-button-3,
    .custom-button-4 {
        @apply inline-flex bg-slate-300 content-center items-center justify-center rounded shadow-md shadow-slate-400 border border-slate-200 text-xs;
        min-height: 3rem;
        text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.7);

        &.selected {
            @apply ring-2 ring-primary-400;
        }
    }


    @media (min-width:768px) and (max-width:1919px) {
        .wrapper {
            --model-width: 320px;

            --custom-button-w: 4rem;
            --custom-button-h: 2rem;
        }
    }

    @media (max-width:767px) {
        .wrapper {
            --model-width: 256px;
        }
    }
</style>