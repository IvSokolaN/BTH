<script setup>
import {inject} from "vue";

const $services = inject('provision_data');
const product = $services.product;
const status = $services.status;
</script>

<template>
  <div class="modal__content">
    <p>Артикул</p>
    <p>{{ product.article }}</p>
    <p>Название</p>
    <p>{{ product.title }}</p>
    <p>Статус</p>
    <p>{{ status[product.status] }}</p>
    <p>Атрибуты</p>
    <div>
      <p v-for="attribute in product.data">
        {{ attribute.title }}: {{ attribute.value }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal__content {
  @apply grid grid-cols-[max-content_1fr] gap-x-[28px] gap-y-[18px] text-[11px];
  & > p {
    @apply odd:text-white odd:text-opacity-70;
  }
}
</style>