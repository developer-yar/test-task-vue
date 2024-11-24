<template>
  <header class="header">
    <div class="header__body">
      <HeaderLogo />
      <HeaderMenu />
    </div>
  </header>
</template>

<script setup lang="ts">
import HeaderLogo from "@/components/HeaderLogo.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/breakpoints.scss";

.header {
  background-color: var(--white);
  position: sticky;
  inset: 0 auto auto 0;

  &__body {
    inline-size: 100%;
    max-inline-size: 1280px;
    margin: auto;
    display: flex;
    justify-content: space-between;

    @include for(desktop) {
      block-size: var(--header-size-desktop);
      align-items: center;
      padding-inline: 20px;
    }

    @include for(tablet) {
      block-size: var(--header-size-mobile);
      gap: 32px;
    }
  }
}
</style>
