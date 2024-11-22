<template>
  <button :class="['button', buttonType]">{{ text }}</button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  text: string;
  type?: "filled" | "outlined";
}

const props = withDefaults(defineProps<Props>(), { type: "filled" });

const buttonType = computed(() => `button_${props.type}`);
</script>

<style lang="scss" scoped>
.button {
  inline-size: 200px;
  block-size: 40px;
  border-radius: 10px;

  font-family: Gothic A1;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.25;

  &_filled {
    background-color: var(--violet);
    color: var(--white);
  }

  &_outlined {
    border: 1px solid var(--violet);
    color: var(--dark-gray);
  }
}
</style>
