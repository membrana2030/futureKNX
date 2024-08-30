<template>
    <NuxtLayout>
        <div id="SystemDevice"
             v-if="item"
             class="bg-slate-900 w-full text-white flex flex-col md:flex-row justify-center bg-cover bg-no-repeat">
            <div class="container max-w-xs md:max-w-none my-24 mx-auto flex flex-col md:flex-row items-stretch md:justify-center py-20 md:py-0">
                <div class="md:basis-4/5 md:pt-14">
                    <system-device-item :item="item"
                                        class="items-center" />
                </div>

                <div class="md:basis-1/5 md:sticky md:pt-5 relative border-l-2 border-l-slate-600 bg-slate-800">
                    <div class="p-2 md:pr-8 md:fixed">
                        <nuxt-link class="text-xl"
                                   to="/knx-system-devices">System Devices</nuxt-link>

                        <client-only>
                            <ul class="text-sm">
                                <li v-for="d in SystemDevices.filter((d) => !/^knx ac/ig.test(d.title))"
                                    class="-ml-2 pl-4 border-l-2 transition-all my-2 hover:border-l-white"
                                    :class="(d.slug === item.slug ? 'border-l-slate-600 border-l-4' : 'border-l-transparent')">
                                    <nuxt-link :to="`/knx-system-devices/${d.slug}`"
                                               class="block hover:opacity-100"
                                               :class="(d.slug === item.slug ? 'opacity-100' : 'opacity-70')">
                                        <div v-html="d.title" />
                                        <small v-if="d.subtitle"
                                               v-html="d.subtitle" />
                                    </nuxt-link>
                                </li>

                                <!-- KNX AC Gateway -->
                                <li class="mt-10">
                                    KNX AC Gateways
                                <div v-for="d in SystemDevices.filter((d) => /^knx ac/ig.test(d.title))"
                                    class="-ml-2 pl-4 border-l-2 transition-all my-2 hover:border-l-white"
                                    :class="(d.slug === item.slug ? 'border-l-slate-600 border-l-4' : 'border-l-transparent')">
                                    <nuxt-link :to="`/knx-system-devices/${d.slug}`"
                                               class="block hover:opacity-100"
                                               :class="(d.slug === item.slug ? 'opacity-100' : 'opacity-70')">
                                        <div v-html="d.code.split('.')[0]" />
                                        <small v-if="d.subtitle"
                                               v-html="d.subtitle" />
                                    </nuxt-link>
                                </div>

                                </li>
                            </ul>
                        </client-only>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
const SystemDevices = useSystemDevices();
const $route = useRoute();
const $router = useRouter();

const item = computed<SystemDevice>(() => {
    const _item = SystemDevices.filter((d) => d.slug == $route.params.id);
    if (_item && _item[0]) return _item[0];
    else $router.push("/knx-system-devices");
});

useHead({
    title: item.value && item.value.title,
    meta: [
        { name: "abstract", content: "Manage lighting, curtains, blinds, unlocking, air conditioning, water, electricity and energy controls like a Maestro." },
        { name: "description", content: item.value && item.value.desription },
    ],
})
</script>

<style scoped lang="scss">
#SystemDevice {
    min-height: 75vh;
    background-image: url(~~/assets/products/system-devices/background.jpg);
}
</style>