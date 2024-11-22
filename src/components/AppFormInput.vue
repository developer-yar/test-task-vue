<template>
  <input
    class="input"
    :id="id"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="handleInput($event)"
  />
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
  id?: string;
  name?: string;
  placeholder?: string;
  type?: string;
}
defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const handleInput = ($event: Event) => {
  emit("update:modelValue", ($event.target as HTMLInputElement).value);
};
</script>

<style lang="scss" scoped>
.input {
  inline-size: 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: var(--pale-white);

  &,
  &::placeholder {
    color: var(--beige);
    font-family: "Gothic A1", serif;
    font-size: 1rem;
    line-height: 1.25;
  }
}
</style>
