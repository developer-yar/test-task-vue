<template>
  <label class="label">{{ label }}</label>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  text: string;
  required?: boolean;
}
const props = withDefaults(defineProps<Props>(), { required: false });

const label = computed(() => `${props.text} ${props.required ? "*" : ""}`);
</script>

<style lang="scss" scoped>
.label {
  font-family: "Gothic A1", serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--dark-gray);
}
</style>
