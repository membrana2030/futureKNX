<template>
  <div>
    <client-only>
      <a
        href="https://static.futureknx.com/downloads/future-knx_catalog_en.pdf"
        download="Future-KNX Catalog"
        class="fixed top-10 right-10 inline-block z-50 transition-all border-2 border-slate-700 bg-slate-900 text-white text-sm rounded-xl shadow-none shadow-slate-900 hover:shadow-md hover:border-green-600 p-4"
      >
        <i class="fas fa-download mx-2"></i> Download PDF version
      </a>
      <div
        class="fixed left-0 top-0 w-screen h-screen bg-slate-600 flex flex-row items-center justify-center aspect-video"
      >
        <flipbook
          v-if="pages"
          ref="catalog"
          class="flipbook"
          :pages="pages"
          :zooms="[1]"
        >
          <button class="prev" @click="catalog.flipLeft">
            <i class="fas fa-chevron-left fa-4x"></i>
          </button>
          <button class="next" @click="catalog.flipRight">
            <i class="fas fa-chevron-right fa-4x"></i>
          </button>
        </flipbook>
      </div>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import Flipbook from "flipbook-vue";

const catalog = ref<Flipbook>();

const { pending, data: pages } = useAsyncData(async () => {
  let aa = await $fetch(
    `https://static.futureknx.com/catalog/future-knx_catalog_en/catalog.json`
  );
  if (Array.isArray(aa))
    aa = aa.map((a) =>
      a == null
        ? null
        : `https://static.futureknx.com/catalog/future-knx_catalog_en/${a}`
    );
  return aa;
});
</script>

<style scoped lang="scss">
.flipbook {
  width: 90vw;
  height: 90vh;

  .prev,
  .next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 9;
    opacity: 0.5;
    transition: opacity linear 300ms;

    &:hover {
      opacity: 1;
    }
  }

  .prev {
    left: 1rem;
  }

  .next {
    right: 1rem;
  }
}
</style>
