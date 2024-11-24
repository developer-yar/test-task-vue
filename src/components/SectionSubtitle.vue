<template>
  <h1 class="section-subtitle">
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
.section-subtitle {
  font-family: "Gothic A1", serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.25;
  color: var(--dark-gray);
}
</style>
