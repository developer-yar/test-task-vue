<template>
  <p class="error">{{ text }}</p>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.error {
  color: var(--red);
  font-family: "Gothic A1", serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
}
</style>
