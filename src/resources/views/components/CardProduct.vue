<script setup xmlns="http://www.w3.org/1999/html">
import IconClose from "./icons/IconClose.vue";
import IconTrash from "./icons/IconTrash.vue";
import IconPencil from "./icons/IconPencil.vue";

defineProps({
  product: {
    type: Object,
    required: true
  }
})
defineEmits(['closeCard', 'deleteProduct'])

</script>

<template>
  <div class="modal">
    <div class="modal__background"
         @click="$emit('closeCard')"></div>

    <div class="modal__body">
      <div class="modal__header">
        <h3>{{ product.title }}</h3>

        <div class="flex ml-auto mr-[6px] gap-[2px]">
          <button type="button"
                  class="modal__button">
            <IconPencil/>
          </button>

          <button type="button"
                  class="modal__button"
                  @click="$emit('deleteProduct')">
            <IconTrash/>
          </button>
        </div>

        <button type="button"
                @click="$emit('closeCard')">
          <IconClose/>
        </button>
      </div>

      <div class="modal__content">
        <p>Артикул</p>
        <p>{{ product.article }}</p>
        <p>Название</p>
        <p>{{ product.title }}</p>
        <p>Статус</p>
        <p>{{ product.status }}</p>
        <p>Атрибуты</p>
        <div>
          <p v-for="attribute in product.data">
            {{ attribute.title }}: {{ attribute.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../scss/blocks/modal";
@import "../../scss/products";

</style>