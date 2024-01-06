<script setup>
import {ref} from "vue";

defineProps({
  label: {
    type: String,
    required: true
  },
  statusProd: {
    type: Object,
    required: true
  },
  modelValue: {
    type: String,
  }
})
const emit = defineEmits(['update:modelValue']);

const isStatusListOpened = ref(false);

function closeStatusList(val) {
  isStatusListOpened.value = false;
  emit('update:modelValue', val);
}
</script>

<template>
  <div class="status-container">
    <label>
      {{ label }}
    </label>
    <button type="button"
            class="form__select"
            :class="{ 'form__select_open': isStatusListOpened }"
            @click="isStatusListOpened = !isStatusListOpened">
      {{ statusProd[modelValue] }}
    </button>

    <ul class="select"
        v-if="isStatusListOpened">
      <li class="select__item"
          :class="{ 'select__item_selected': modelValue === 'available' }"
          @click="closeStatusList('available')">
        Доступен
      </li>

      <li class="select__item"
          :class="{ 'select__item_selected': modelValue === 'unavailable' }"
          @click="closeStatusList('unavailable')">
        Недоступен
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.form__select {
  @apply rounded-t-[5px] rounded-b-[5px] mt-[8px] mb-0 bg-white w-full text-left
  bg-expand-down bg-no-repeat bg-right text-[#1a202c] text-[11px] p-[9px] h-[30px];

  // .form__select_open
  &_open {
    @apply rounded-b-[0px];
  }
}

.status-container {
  @apply flex flex-col relative;
}

.select {
  @apply absolute w-full top-full z-10 rounded-b-[5px] bg-white text-[#1a202c];

  &.active {
    @apply block;
  }

  //.select__item
  &__item {
    @apply p-[9px] border-t cursor-pointer;

    // .select__item_selected
    &_selected {
      @apply bg-[#50A9FC] last:rounded-b-[5px];
    }

    &:hover {
      @apply bg-blue-300 last:rounded-b-[5px];
    }
  }
}
</style>