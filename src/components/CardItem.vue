<template>
  <div class="block">
    <img class="block__image" :src="image" alt="image" loading="lazy" />
    <div class="block__text">
      <SectionSubtitle class="block__title" :text="title" />
      <SectionDescription class="block__description" :text="description" />
      <AppButton :text="buttonText" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppButton from "@/components/AppButton.vue";
import SectionDescription from "@/components/SectionDescription.vue";
import SectionSubtitle from "@/components/SectionSubtitle.vue";
import { ICardItem } from "@/models/ICardItem";

defineProps<ICardItem>();
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/background.scss";
@import "@/assets/styles/mixins/breakpoints.scss";

.block {
  @include for(desktop) {
    display: grid;
    grid-template-columns: 0.57fr 0.43fr;
    align-items: center;
  }

  @include for(phone) {
    grid-template-columns: 1fr;
  }

  &__image {
    inline-size: 100%;
    object-fit: cover;

    @include for(desktop) {
      aspect-ratio: 15/10;
    }

    @include for(phone) {
      aspect-ratio: 2/1;
    }
  }

  &__text {
    padding: 20px;

    @include for(phone) {
      text-align: center;
    }
  }

  &__title {
    margin-block-end: 16px;
  }

  &__description {
    margin-block-end: 16px;
  }
}
</style>
