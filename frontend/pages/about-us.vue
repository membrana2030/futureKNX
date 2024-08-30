<template>
    <nuxt-layout>
        <header class="relative bg-black pt-24">
            <div class="w-full aspect-[30/11] overflow-hidden flex items-center justify-center">
                <iframe x-width="560"
                        x-height="315"
                        class="w-full pointer-events-none aspect-video"
                        src="https://www.youtube-nocookie.com/embed/videoseries?controls=0&list=PLdz6pW-i0k67Vk-4ZlrmmJm_c_uy67uj9&autoplay=1&playsinline=1&mute=1&loop=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"></iframe>
            </div>
        </header>
        <section class="flex flex-col h-full bg-black text-white pb-44">
            <div class="container flex flex-col md:flex-row items-start mx-auto my-14 px-5">
                <div class="md:basis-1/2">
                    <h1 class="text-2xl font-light">We know it's not just about delivering a <q class="font-normal">nice</q> production.<br />
                        It's about delivering the never before seen.</h1>

                    <motto class="tex-3xl md:text-4xl my-10 mx-auto" />

                    <p class="text-xl">We know <strong>Less is more</strong></p>
                    <p class="text-xl">It's about <strong>you</strong> settings the bar for others.</p>
                </div>
                <div class="md:basis-1/2 text-center">
                    <x-form @submit="submitContact"
                            :disabled="sending">
                        <h3 class="text-xl font-light text-left mt-10 md:mt-0">
                            Let's build tomorrow <strong class="font-black">together</strong>...
                        </h3>
                        <div class="grid md:grid-cols-2 gap-2">
                            <div>
                                <x-input type="text"
                                         :rules="[rules.isRequired]"
                                         label="Full Name"
                                         class="w-full"
                                         v-model="formData.name" />
                            </div>

                            <div>
                                <x-input type="text"
                                         label="Company"
                                         class="w-full"
                                         v-model="formData.company" />
                            </div>

                            <div>
                                <x-input type="email"
                                         :rules="[rules.isRequired, rules.isEmail]"
                                         label="E-mail"
                                         class="w-full"
                                         v-model="formData.email" />
                            </div>

                            <div>
                                <x-input type="tel"
                                         label="Phone Number"
                                         class="w-full"
                                         v-model="formData.phoneNumber" />
                            </div>
                            <div class="col-span-2">
                                <x-textarea class="w-full border-2"
                                            v-model="formData.text" />
                            </div>
                            <div class="align-middle text-left">
                                <p v-if="sent"
                                   class="max-w-xs my-0 py-0 -mt-1"><i class="fas fa-check-circle text-2xl mt-2 float-left text-green-600 mx-2 "></i> The form has been successfully submitted.</p>
                            </div>
                            <div>
                                <x-button block
                                          :loading="sending"
                                          type="submit">Send</x-button>
                            </div>
                        </div>
                    </x-form>
                </div>
            </div>
        </section>
    </nuxt-layout>
</template>

<script setup lang="ts">

useHead({
    meta: [
        { name: "description", content: "We know it's not just about delivering a nice production. It's about delivering the never before seen." },
        { name: "keywords", content: "knx gateway, knx switch, knx thermostat, knx system devices, knx bluetooth control, knx remote, knx power supply, knx actuator, knx interface, ets 4, ets 5, ets 6, knx mobile app" },
    ],
})

const emptyData = {
    name: "",
    company: "",
    email: "",
    phoneNumber: "",
    text: ""
};

const rules = useRules();
const formData = ref({ ...emptyData })
const sending = ref(false);
const sent = ref(false);

function submitContact(isValid) {
    if (!isValid) return;
    else {
        sending.value = true;
        const html = Object.keys(formData.value).map((k) => `<p><strong>${k}:</strong>${formData.value[k]}</p>`).join("");
        const text = Object.keys(formData.value).map((k) => `${k}: ${formData.value[k]}`).join("\r\n");
        $fetch("https://api.aypro.com/sendmail", {
            method: "POST",
            body: {
                subject: "Contact Form",
                html,
                text
            }
        })
            .then((info) => {
                console.log("send-form", info);
                formData.value = { ...emptyData }
                sent.value = true;
            })
            .finally(() => sending.value = false);
    }
}
</script>

<style scoped lang="scss">
video {
    pointer-events: none !important;
}
</style>