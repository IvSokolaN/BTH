<script setup>
import {ref} from "vue";

defineProps({
  label: {
    type: String,
    required: true
  },
})

const statusList = ref(false)
const status = ref('Доступен')

function closeStatusList(val) {
  statusList.value = false
  status.value = val
}

</script>

<template>
  <div class="status-container">
    <label>
      {{ label }}
    </label>
    <button type="button"
            class="form__select"
            :class="{ 'form__select--open': statusList }"
            @click="statusList = !statusList">
      {{ status }}
    </button>

    <ul class="select"
        v-if="statusList">
      <li class="select__item"
          :class="{ 'select__item--selected': status === 'Доступен' }"
          @click="closeStatusList('Доступен')">
        Доступен
      </li>

      <li class="select__item"
          :class="{ 'select__item--selected': status === 'Недоступен' }"
          @click="closeStatusList('Недоступен')">
        Недоступен
      </li>
    </ul>


  </div>
</template>

<style scoped lang="scss">
.form__select {
  @apply rounded-t-[5px] rounded-b-[5px] mt-[8px] mb-0 bg-white w-full text-left bg-expand-down bg-no-repeat bg-right text-[#1a202c] text-[11px] p-[9px] h-[30px];
  &--open {
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

  // .select__item
  &__item {
    @apply p-[9px] border-t cursor-pointer;

    // .select__item--selected
    &--selected {
      @apply bg-[#50A9FC] last:rounded-b-[5px];
    }

    &:hover {
      @apply bg-blue-300 last:rounded-b-[5px];
    }
  }
}
</style>