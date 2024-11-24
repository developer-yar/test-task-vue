<template>
  <h1 class="section-title">
    {{ text }}
  </h1>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.section-title {
  font-family: "Gothic A1", serif;
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.25;
  color: var(--dark-gray);
}
</style>
