<template>
  <div
    :class="['menu-toggle-btn', { 'menu-toggle-btn_opened': isOpened }]"
    @click="toggle"
  >
    <span></span>
  </div>
  <nav class="menu">
    <HeaderItem
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :isActive="isActive(item.id)"
      @click="setIsActive(item.id)"
    />
  </nav>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import HeaderItem from "@/components/HeaderItem.vue";
import { IPageSection } from "@/models/IPageSection";

const items: IPageSection[] = [
  { id: "#home", title: "Home" },
  { id: "#about-us", title: "About us" },
  { id: "#frameworks", title: "Frameworks" },
  { id: "#applications", title: "Applications" },
  { id: "#contact-us", title: "Contact us" },
];

const activeItem = ref<string>("#home");

const isActive = (id: string): boolean => activeItem.value === id;
const setIsActive = (id: string): void => {
  activeItem.value = id;
};

const isOpened = ref<boolean>(false);

const toggle = (): void => {
  isOpened.value = !isOpened.value;
};

const closeMenu = () => {
  if (document.documentElement.clientWidth > 991 && isOpened.value) {
    isOpened.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", closeMenu);
});

onUnmounted(() => {
  window.removeEventListener("resize", closeMenu);
});
</script>

<style lang="scss" scoped>
@use "sass:math";
@import "@/assets/styles/mixins/breakpoints.scss";

$menuHeight: 20px;
$lineHeight: 4px;
$transition: math.div($menuHeight - $lineHeight, 2);

.menu-toggle-btn {
  @include for(desktop) {
    display: none;
  }
  @include for(tablet) {
    display: block;
  }
  position: relative;
  inline-size: 32px;
  block-size: $menuHeight;
  cursor: pointer;

  span,
  &::before,
  &::after {
    position: absolute;
    content: "";
    inline-size: 100%;
    block-size: $lineHeight;
    background-color: var(--violet);
    border-radius: 4px;
  }

  &::before,
  &::after {
    inline-size: 100%;
    transition: transform 0.25s ease-out;
  }

  &::before {
    inset-block-start: 0;
  }

  span {
    inset-block-start: 50%;
    transform: translateY(-50%);
  }

  &::after {
    inset-block-end: 0;
  }

  &_opened span {
    display: none;
  }

  &_opened {
    &::before {
      inset-block-start: $transition;
      transform: rotate(45deg);
    }

    &::after {
      inset-block-end: $transition;
      transform: rotate(-45deg);
    }
  }
}

.menu-toggle-btn_opened + .menu {
  @include for(tablet) {
    display: flex;
    inset-inline-start: 0;
  }
}

.menu {
  display: flex;

  @include for(desktop) {
    gap: 32px;
  }

  @include for(tablet) {
    gap: 16px;

    flex-direction: column;
    position: absolute;
    inset-block-start: var(--header-size-mobile);
    inset-inline-start: -100vw;
    z-index: -2;
    background-color: var(--white);
    inline-size: 50vw;
    block-size: calc(100vh - var(--header-size-mobile));
    padding: 32px;
    transition: all 0.25s ease-out;
  }
}
</style>
