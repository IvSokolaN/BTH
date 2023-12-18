<script setup>
import IconClose from "./icons/IconClose.vue";

defineEmits(['close'])
</script>

<template>
  <div class="modal">
    <div class="modal__background"
         @click="$emit('close')"></div>

    <div class="modal__body">
      <div class="modal__header">
        <slot name="modal_header_create"/>
        <slot name="modal_header_update"/>
        <slot name="modal_header_show"/>

        <button type="button"
                @click="$emit('close')">
          <IconClose/>
        </button>
      </div>

      <slot name="modal_content"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../scss/blocks/modal";
</style>