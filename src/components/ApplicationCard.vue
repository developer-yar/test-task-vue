<template>
  <figure class="application">
    <img
      class="application__image"
      :src="image"
      :alt="caption"
      loading="lazy"
    />
    <figcaption class="application__caption">
      <SectionLabelText :text="caption" />
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { IApplicationCardItem } from "@/models/IApplicationCardItem";
import SectionLabelText from "@/components/SectionLabelText.vue";

const props = defineProps<IApplicationCardItem>();

const caption = computed(() => `App ${props.id}`);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/breakpoints.scss";

.application {
  &__image {
    aspect-ratio: 2/1;
    object-fit: cover;
    inline-size: 100%;
  }
  &__caption {
    padding-block: 10px;
    background-color: var(--dark-gray);
    text-align: center;
  }
}
</style>
