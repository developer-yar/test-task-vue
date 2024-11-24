<template>
  <p class="label">{{ text }}</p>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.label {
  color: var(--white);
  font-family: "Gothic A1", serif;
  font-size: 1rem;
  font-weight: 400;
}
</style>
