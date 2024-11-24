<template>
  <section class="scroll" :id="id">
    <slot></slot>
  </section>
</template>

<script setup lang="ts">
interface Props {
  id: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/breakpoints.scss";

.scroll {
  @include for(desktop) {
    scroll-margin-block-start: var(--header-size-desktop);
  }

  @include for(tablet) {
    scroll-margin-block-start: var(--header-size-mobile);
  }
}
</style>
