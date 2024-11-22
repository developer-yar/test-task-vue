<template>
  <p class="section-description">
    {{ text }}
  </p>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.section-description {
  font-family: "Gothic A1", serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625;
  color: var(--light-gray);
}
</style>
