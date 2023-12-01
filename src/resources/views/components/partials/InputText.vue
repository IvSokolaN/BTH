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
  name: {
    type: String,
    required: true
  },
})
</script>

<template>
  <label :for="id">{{ label }}</label>
  <input type="text" :name="name" :id="id" class="form__input">
</template>

<style scoped lang="scss">
.form__input {
  @apply p-2 mt-[8px] mb-[13px] rounded-[5px] h-[30px] text-black;
  &--no-marginBottom {
    @apply mb-0;
  }
}
</style>