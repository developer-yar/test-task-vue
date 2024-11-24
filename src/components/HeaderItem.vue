<template>
  <a :href="id" :class="['link', { link_active: isActive }]">{{ title }}</a>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  title: string;
  isActive: boolean;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.link {
  font-family: "Roboto", serif;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.1666;
  text-transform: uppercase;
  color: var(--dark-gray);
  text-shadow: 0 0 0 transparent;

  &_active {
    color: var(--violet);
    text-shadow: 0 0 1px var(--violet);
  }
}
</style>
