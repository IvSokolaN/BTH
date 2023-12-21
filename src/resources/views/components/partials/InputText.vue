<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  modelValue: {
    required: true
  }
});

defineEmits(['update:modelValue']);
</script>

<template>
  <label :for="id">{{ label }}</label>
  <input type="text"
         class="form__input"
         :class="$attrs.class"
         :id="id"
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)">
</template>

<style scoped lang="scss">
.form__input {
  @apply p-2 mt-[8px] rounded-[5px] h-[30px] text-black;
  // form__input_error
  &_error {
    @apply bg-red-100;
  }
}
</style>