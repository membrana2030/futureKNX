<template>
    <div>
        <nav class="top-navigation fixed z-40 w-full py-2 md:py-4"
             v-scroll-behavior="{ size: 100, true: ['behavior', 'text-black', 'bg-white', 'md:bg-transparent'], false: [navigationTheme] }">
            <div class="container relative mx-auto flex flex-row items-center gap-10 px-4 pb-3 pt-5 md:rounded-md transition-all duration-300">
                <nuxt-link to="/"
                           class="logo"
                           :class="[{ 'hide-logo': hideLogo }]">
                    <img src="~~/assets/visuals/logo/future-knx.svg" />
                </nuxt-link>

                <div class="grow"></div>
                <div v-for="link in nav"
                     class="text-sm hidden sm:inline-block">

                    <a v-if="link.items"
                       href="javascript:;"
                       @click="megaMenu = !megaMenu"
                       class="opacity-30 transition-opacity duration-200 hover:opacity-100">{{ link.innerHTML }}</a>
                    <nuxt-link v-else
                               v-bind="link"
                               class="opacity-30 transition-opacity duration-200 hover:opacity-100 whitespace-nowrap relative z-50"></nuxt-link>
                </div>

                <div class="mega-menu"
                     :class="[{ 'show': megaMenu }]"
                     v-for="link, $index in nav.filter((n) => n.items)"
                     :id="`mega-${$index}`"
                     @click="megaMenu = false"
                     @mouseover="overMega"
                     @mouseleave="leaveMega">
                    <div class="relative block leading-6">
                        <div class="flex flex-row bg-white text-black shadow-lg gap-4 p-0 rounded">
                            <nuxt-link to="/catalog"
                                       target="blank"
                                       class="basis-2/6 mega-frame bg-contain bg-left-top flex flex-row items-end justify-center">
                                <div class="w-full text-white bg-slate-700 px-5 py-3 text-center">
                                    <i class="fas fa-download pr-4"></i> View &amp; Download the Catalog
                                </div>
                            </nuxt-link>
                            <div class="basis-4/6 grid grid-cols-3 grid-flow-row gap-4 p-4">
                                <div v-for="sublink in link.items">
                                    <nuxt-link v-bind="sublink"
                                               class="font-bold whitespace-nowrap opacity-50 transition-opacity duration-200 hover:opacity-100" />

                                    <nuxt-link v-for="product in sublink.items"
                                               v-bind="product"
                                               class="block whitespace-nowrap font-light opacity-70 transition-opacity duration-200 hover:opacity-100 border-l-2 pl-2 border-green-50 hover:border-green-400 hover:text-[#016aad]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <slot name="navigation" />

                <button class="md:hidden -my-4 cursor-pointer"
                        aria-label="menu"
                        title="Menu"
                        @click="drawer = !drawer">
                    <i class="fas fa-bars fa-2x"></i>
                </button>
            </div>
        </nav>

        <client-only>
            <x-drawer v-model="drawer"
                      id="Drawer"
                      to="body"
                      position="left"
                      class="dark text-white">
                <template #header>
                    <div class="py-5 mx-auto border-b-2 border-slate-600 w-full">
                        <img src="~~/assets/visuals/logo/future-knx-light.svg"
                             class="h-10 mx-auto"
                             alt="Future KNX - www.futureknx.com" />
                    </div>
                </template>

                <div class="pl-4 pr-2 pt-2 pb-10 text-sm">
                    <div v-for="link in nav">
                        <div v-if="link.items">
                            <!-- <div class="py-1"
                             v-bind="{...link, to: undefined, items:undefined}"></div> -->

                            <div v-for="(sublink, $index) in link.items">
                                <nuxt-link class="block py-1"
                                           :class="[{ 'mt-4': $index > 0 }]"
                                           v-bind="{ ...sublink, items: undefined }"></nuxt-link>
                                <nuxt-link v-for="product in sublink.items"
                                           v-bind="product"
                                           class="block py-1 pl-4 font-light transition-opacity opacity-60 hover:opacity-100"
                                           @click="drawer = false" />
                            </div>
                        </div>
                        <nuxt-link v-else
                                   v-bind="link"
                                   class="block py-1 mb-1 w-full h-8 transition-opacity opacity-60 hover:opacity-100"
                                   @click="drawer = false" />

                    </div>
                </div>
            </x-drawer>
        </client-only>

        <!-- Popup -->
        <nuxt-link to="/catalog"
                   v-scroll-behavior="{ size: 300, true: ['translate-x-10', 'md:translate-x-0'] }"
                   target="blank"
                   class="fixed transition-all rounded-l-xl duration-200 z-20 w-6 md:w-8 aspect-auto overflow-hidden hover:w-44 md:hover:w-56 top-24 right-0 shadow-xl">
            <div class="aspect-auto w-44 md:w-56">
                <img src="~~/assets/visuals/popup-catalog.webp"
                     width="224"
                     height="341"
                     class="w-full h-auto"
                     alt="View and Download Catalogs">
            </div>
        </nuxt-link>

        <slot />


        <section class="contact-splitter md:h-3 md:bg-green-700">
            <div class="container flex flex-col p-5 md:items-center md:justify-center mx-auto w-full bg-white md:relative md:z-20 shadow-2xl md:shadow-black md:flex-row md:rounded-md">

                <div class="md:basis-2/4">
                    <h2 class="text-3xl md:text-4xl font-light">All you <strong>need</strong> is <strong>here</strong></h2>
                </div>

                <div class="md:basis-1/4 my-5 md:my-0">
                    <h3 class="text-xl md:text-2xl font-black text-slate-900">Ready for a next project?</h3>
                    <div class="text-sm font-light text-slate-800">Let's build tomorrow together...</div>
                </div>

                <div class="md:basis-1/4 text-center md:text-right">
                    <x-button color="blue"
                              tag="a"
                              type="link"
                              to="/about-us"
                              class="shadow-sm">CONTACT</x-button>
                </div>
            </div>
        </section>

        <footer class="bg-slate-800 text-white text-sm pt-24 pb-14 shadow-inner-xl shadow-black">
            <div class="flex flex-col px-4 md:flex-row  container mx-auto">
                <!-- Newsletter -->
                <div class="md:basis-3/6">
                    <h4 class="text-2xl font-light mb-5">Never miss out a moment</h4>
                    <x-form ref="SubscribeForm"
                            :disabled="isBusy"
                            :auto-focus="false"
                            @submit="subscribeEmail">
                        <!-- Contact Name -->
                        <div class="mb-1">
                            <x-input type="text"
                                     placeholder="Contact Name"
                                     size="md"
                                     class="max-w-full w-full md:w-96"
                                     v-model="subscribeData.name"
                                     outlined />
                        </div>

                        <!-- Email -->
                        <div class="mb-1">
                            <x-input type="email"
                                     placeholder="Enter e-mail"
                                     size="md"
                                     class="max-w-full w-full md:w-96"
                                     :rules="[rules.isRequired, rules.isEmail]"
                                     v-model="subscribeData.email"
                                     outlined />
                        </div>

                        <div class="my-2 flex flex-row max-w-full w-full md:w-96">
                            <div class="basis-1/3">
                                <div v-if="subscribed"
                                     class="my-2 text-green-200 text-xs">
                                    <i class="fas fa-check-circle float-left fa-2x mx-2 mt-1"></i>
                                    Thank you for your attention.
                                </div>
                                <a v-else
                                   href="#blocked"
                                   class="text-xs transition-opacity duration-200 opacity-50 hover:opacity-100">Unsubscribe</a>
                            </div>
                            <div class="basis-2/3 text-right">
                                <x-button type="submit"
                                          size="sm"
                                          :loading="isBusy"
                                          outlined>Subscribe</x-button>
                            </div>
                        </div>
                    </x-form>
                </div>

                <div class="md:basis-1/6">
                    <h5 class="text-lg font-light mb-1 mt-4 sm:mt-0">Go fast...</h5>
                    <ul>
                        <li v-for="link in nav.filter((l) => l.to)">
                            <nuxt-link v-bind="link"
                                       class="block text-xs py-1 pl-4 transition-opacity duration-200 opacity-50 hover:opacity-100" />
                        </li>
                    </ul>
                </div>
                <div class="md:basis-1/6">
                    <h5 class="text-lg font-light mb-1 mt-4 sm:mt-0">Don't miss it!..</h5>
                    <ul>
                        <li v-for="link in dontMiss">
                            <nuxt-link v-bind="link"
                                       class="block text-xs py-1 pl-4 transition-opacity duration-200 opacity-50 hover:opacity-100" />
                        </li>
                    </ul>
                </div>
                <div class="md:basis-1/6">
                    <h5 class="text-lg font-light mb-1 mt-4 sm:mt-0">Social Channels</h5>
                    <ul>
                        <li v-for="link in social">
                            <nuxt-link v-bind="link"
                                       class="block text-xs py-1 pl-4 transition-opacity duration-200 opacity-50 hover:opacity-100" />
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

        <div class="md:hidden py-2 block bg-slate-700 text-white font-extralight text-xs text-center"
             itemscope
             itemtype="https://schema.org/Organization">
            &copy;2022 &mdash; <span itemprop="name">Future KNX</span>
        </div>
        <div class="bg-slate-900 text-white py-2 font-extralight text-xs text-center"
             itemscope
             itemtype="https://schema.org/Organization">
            <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
                <div class="py-2 md:py-0"
                     itemprop="memberOf">
                    <a href="https://www.knx.org"
                       target="_blank"
                       rel="noopener"
                       class="transition-all opacity-60 hover:opacity-100 flex flex-row gap-2 items-baseline">
                        <img src="~~/assets/visuals/logo/knx-logo.svg"
                             width="42"
                             height="20"
                             alt="KNX Logo"
                             class="h-5 w-auto"><span class="hidden">KNX</span> <span class="align-text-bottom">MEMBER since <strong>2014</strong></span>
                    </a>
                </div>

                <div class="hidden md:block">
                    &copy;2022 Copyright <span itemprop="name">Future KNX</span> &mdash; <a href="https://www.futureknx.com"
                       itemprop="url">www.futureknx.com</a>
                </div>

                <div class="py-2 md:py-0">
                    <nuxt-link to="/cookie-policy"
                               class="transition-all opacity-60 hover:opacity-100"
                               target="_blank"
                               rel="noopener">Cookie Policy</nuxt-link>
                    <span class="mx-5 opacity-20">&mdash;</span>
                    <nuxt-link to="/terms-conditions"
                               class="transition-all opacity-60 hover:opacity-100"
                               target="_blank"
                               rel="noopener">Terms &amp; Conditions</nuxt-link>
                </div>
            </div>
        </div>

        <CookieControl locale="en">
            <template #cookie>
                <span>AAA</span>
            </template>
        </CookieControl>
    </div>
</template>


<script setup
        lang="ts">
        import { XForm } from '@indielayer/ui';

        import { nav, social, dontMiss } from "~~/helpers/sitemap";

        const props = defineProps<{
            hideLogo?: false,
            navigationTheme?: "light" | "dark"
        }>();

        const route = useRoute();

        const SubscribeForm = ref<typeof XForm>();
        const isBusy = ref(false);
        const drawer = ref(false);
        const megaMenu = ref(false);

        const rules = useRules();

        const subscribed = ref(false);
        const subscribeData = ref({
            name: "",
            email: ""
        })

        const navigationTheme = computed<string>(() => {
            return props.navigationTheme == "dark" ? "text-black" : "text-white";
        })

        function subscribeEmail(isValid: any) {
            console.log("subscribe", isValid);
            if (isValid) {
                isBusy.value = true;
                subscribe(subscribeData.value)
                    .then(() => {
                        subscribed.value = true;
                    })
                    .finally(() => {
                        isBusy.value = false;
                    })
            }
        }

        let megaTimeout: any;
        function overMega() {
            if (megaTimeout) clearTimeout(megaTimeout);
        }

        function leaveMega() {
            if (megaTimeout) clearTimeout(megaTimeout);
            megaTimeout = setTimeout(() => {
                megaMenu.value = false;
            }, 1000);
        }

        onMounted(() => {
            const _slug = route.params?.slug as string[];
            console.log("[slug]", _slug);

            if (_slug) {
                setTimeout(() => {
                    const slug = Array.isArray(_slug) ? _slug.pop() : _slug;
                    const _target = document.getElementById(slug as string);
                    if (_target) _target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
                }, 1000);
            }
        })
</script>

<style lang="scss">
.top-navigation {

    &,
    & .logo,
    & .logo>img {
        transition: all ease-out 300ms;
    }

    &>div {
        background-color: rgba(255, 255, 255, 0);
    }

    .logo {
        width: 150px;
    }

    .logo>img {
        position: relative;
        height: 32px;
        width: auto;
        margin-top: -0.6rem;
        transform: scale(1.3);
    }

    &:not(.behavior) .hide-logo {
        @apply opacity-0;
    }

    &.behavior {

        &>div {
            background-color: rgba(255, 255, 255, 1);
        }

        .logo>img {
            transform: scale(1);
        }
    }

    .mega-frame {
        background-image: url(~~/assets/visuals/catalogue-mega.jpg);
    }
}

section.contact-splitter {
    strong {
        font-weight: 900;
    }
}

footer {
    .x-input input {
        background: transparent !important;
        border-radius: 0 !important;
        color: #fff;
    }

    .x-button {
        background: transparent !important;
        color: #fff !important;
        border-radius: 0;
        font-weight: 300;
    }
}

.mega-menu {
    @apply block w-auto bg-slate-50 absolute top-16 right-0 float-right z-50 overflow-clip rounded shadow-xl shadow-black/50 transition-all;

    &:not(.show) {
        @apply opacity-0 pointer-events-none;
    }

    &.show {
        @apply opacity-100 delay-100;
    }
}

@media (min-width: 768px) {
    .top-navigation {
        &.behavior {
            &>div {
                box-shadow: 0 1px 15px 0 rgba(0, 0, 0, 0.3);
            }
        }
    }

    section.contact-splitter {
        background: rgb(45, 168, 77);
        background: -moz-linear-gradient(90deg,
                rgba(45, 168, 77, 1) 0%,
                rgba(6, 107, 179, 1) 100%);
        background: -webkit-linear-gradient(90deg,
                rgba(45, 168, 77, 1) 0%,
                rgba(6, 107, 179, 1) 100%);
        background: linear-gradient(90deg, rgba(45, 168, 77, 1) 0%, rgba(6, 107, 179, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2da84d", endColorstr="#066bb3", GradientType=1);

        &>div {
            transform: translateY(-30%);
        }

    }
}
</style>