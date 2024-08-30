<template>
    <div class="flex flex-row inset-0 h-20">
        <div v-for="(texture, $index) in textures">
            <div class="color-box block w-8 overflow-hidden m-1 aspect-square bg-no-repeat bg-center bg-contiain rounded-sm shadow-black shadow-md transition-all duration-200 hover:w-20"
                 v-bg-image="texture.image"
                 :class="(texture.dark ? 'text-white': 'text-black')">

                <div class="flex items-end justify-start w-20 p-1 overflow-hidden aspect-square">
                    <span class="text-xs"
                          v-html="texture.title.split(' ').join('<br/>')"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

type Texture = {
    [key: string]: any,
    name: string,
    title: string,
    image: string | Promise<any>,
    dark?: boolean,
}

const props = defineProps<{
    colors?: String[]
}>();


const dark = true;
const Textures = computed<Texture[]>(() => [
    {
        name: "anthracite-gray",
        title: "Anthracite Gray",
        image: import('../../assets/visuals/color-box/anthracite-gray.jpg'),
    },
    {
        name: "antique-bronze",
        title: "Antique Bronze",
        image: import('../../assets/visuals/color-box/antique-bronze.jpg'),
        dark,
    },
    {
        name: "antique-copper",
        title: "Antique Copper",
        image: import('../../assets/visuals/color-box/antique-copper.jpg'),
        dark,
    },
    {
        name: "green-leaf",
        title: "Green Leaf",
        image: import('../../assets/visuals/color-box/green-leaf.jpg'),
    },
    {
        name: "meteor-black",
        title: "Meteor Black",
        image: import('../../assets/visuals/color-box/meteor-black.jpg'),
        dark,
    },
    {
        name: "polar-white",
        title: "Polar White",
        image: import('../../assets/visuals/color-box/polar-white.jpg'),
    },
    {
        name: "red-cherry",
        title: "Red Cherry",
        image: import('../../assets/visuals/color-box/red-cherry.jpg'),
        dark,
    },
    {
        name: "royal-silver",
        title: "Royal Silver",
        image: import('../../assets/visuals/color-box/royal-silver.jpg'),
    },
    {
        name: "pure-gold",
        title: "Pure Gold",
        image: import('../../assets/visuals/color-box/pure-gold.jpg'),
    },
    {
        name: "texture-black",
        title: "Texture Black",
        image: import('../../assets/visuals/color-box/texture-black.jpg'),
        dark,
    },
]);

const textureNames = computed<string[]>(() => {
    if (props.colors) return props.colors;

    const _names = [];
    Textures.value.forEach((texture) => _names.push(texture.name));
    return _names;
});

const textures = computed<Texture[]>(() => {
    const _names = textureNames.value;
    return Textures.value.filter((texture) => (_names.indexOf(texture.name) >= 0));
})

</script>