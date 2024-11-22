<template>
  <div :class="['framework', dir]">
    <img class="framework__image" :src="image" :alt="alt" loading="lazy" />
    <div class="framework__text">
      <SectionSubtitle class="framework__title" :text="title" />
      <SectionDescription class="framework__description" :text="description" />
      <div class="framework__buttons">
        <AppButton text="Read more" type="filled" />
        <AppButton text="Webinar" type="outlined" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import AppButton from "@/components/AppButton.vue";
import SectionDescription from "@/components/SectionDescription.vue";
import SectionSubtitle from "@/components/SectionSubtitle.vue";
import { IFrameworkItem } from "@/models/IFrameworkItem";

const props = defineProps<IFrameworkItem>();

const dir = computed(() => `framework_${props.direction}`);
const alt = computed(() => `${props.title} framework image`);
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/background.scss";
@import "@/assets/styles/mixins/breakpoints.scss";

.framework {
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0px 5px 10px 0px #0000000d;
  inline-size: 100%;

  @include for(desktop) {
    gap: 32px;
  }

  @include for(tablet) {
    align-items: center;
  }

  @include for(phone) {
    gap: 16px;
  }

  &_left-to-right {
    @include for(desktop) {
      flex-direction: row;
    }
  }

  &_left-to-right &__image {
    @include for(desktop) {
      border-radius: 10px 0 0 10px;
    }
    @include for(tablet) {
      border-radius: 0;
    }
  }

  &_right-to-left {
    @include for(desktop) {
      flex-direction: row-reverse;
    }
  }

  &_left-to-right,
  &_right-to-left {
    @include for(tablet) {
      flex-direction: column;
    }
  }

  &_right-to-left &__image {
    @include for(desktop) {
      border-radius: 0 10px 10px 0;
    }
    @include for(tablet) {
      border-radius: 0;
    }
  }

  &__image {
    inline-size: 100%;
    object-fit: cover;

    @include for(desktop) {
      aspect-ratio: 54/35;
    }

    @include for(tablet) {
      aspect-ratio: 16/9;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;

    @include for(desktop) {
      max-inline-size: 588px;
      padding: 26px 12px;
    }

    @include for(tablet) {
      max-inline-size: 100%;
      padding: 16px;
    }
  }

  &__title {
    margin-block-end: 10px;
  }

  &__description {
    margin-block-end: 20px;
  }

  &__buttons {
    margin-block-start: auto;

    display: flex;
    flex-wrap: wrap;

    @include for(desktop) {
      gap: 23px;
    }

    @include for(tablet) {
      gap: 11.5px;
    }
  }
}
</style>
