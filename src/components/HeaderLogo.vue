<template>
  <a href="#home" class="logo" />
</template>

<style lang="scss" scoped>
@import "@/assets/styles/mixins/background.scss";
@import "@/assets/styles/mixins/breakpoints.scss";

.logo {
  @include background("@/assets/logo.png", $size: contain);
  aspect-ratio: 197/38;

  @include for(desktop) {
    inline-size: 197px;
  }

  @include for(tablet) {
    inline-size: 150px;
  }
  cursor: pointer;
}
</style>
