<script setup>
import {ref} from "vue";
import AppLayout from "../components/layouts/AppLayout.vue";
import Modal from "../components/Modal.vue";
import {useRootStore} from "../../js/stores/root.js";
import {storeToRefs} from "pinia";

const isModalVisible = ref(false);
const closeModal = () => isModalVisible.value = false;
const showModal = () => isModalVisible.value = true;

const rootStore = useRootStore();
const getProducts = () => rootStore.getProducts();
getProducts();
const {products} = storeToRefs(rootStore);
</script>

<template>
  <AppLayout>
    <div class="products">
      <table class="products__table table">
        <thead class="table__head">
        <tr>
          <th>Артикул</th>
          <th>Название</th>
          <th>Статус</th>
          <th>Атрибуты</th>
        </tr>
        </thead>
        <tbody class="table__body">
        <tr class="table__row"
            v-for="product in products"
            :key="product.id">
          <td>{{ product.article }}</td>
          <td>{{ product.title }}</td>
          <td>{{ product.status }}</td>
          <td>
            <p v-for="attribute in product.data"
               :key="attribute.id">
              {{ attribute.title }}: {{ attribute.value }}
            </p>
          </td>
        </tr>
        </tbody>
      </table>

      <button type="button"
              class="products__add button"
              @click="showModal()">
        Добавить
      </button>
    </div>

    <Transition>
      <Modal
          v-if="isModalVisible"
          @close="closeModal()"
          @updateProducts="getProducts()">
      </Modal>
    </Transition>
  </AppLayout>
</template>

<style scoped>
@import "../../scss/products.scss";

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>