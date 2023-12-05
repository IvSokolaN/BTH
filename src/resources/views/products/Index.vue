<script setup>
import {ref} from "vue";
import AppLayout from "../components/layouts/AppLayout.vue";
import Modal from "../components/Modal.vue";
import CardProduct from "../components/CardProduct.vue";
import {useProductStore} from "../../js/stores/root.js";
import {storeToRefs} from "pinia";

const isModalVisible = ref(false);
const closeModal = () => isModalVisible.value = false;
const showModal = () => isModalVisible.value = true;

const productStore = useProductStore();
const getProducts = () => productStore.getProducts()
getProducts()
const {products, product} = storeToRefs(productStore)

// Card
const isModalCardVisible = ref(false)
const closeCardModal = () => isModalCardVisible.value = false
const showCardModal = () => isModalCardVisible.value = true

function showProduct(id) {
  productStore.getProduct(id)
  showCardModal()
}

function deleteProduct(id) {
  productStore.deleteProduct(id)
  closeCardModal()
}

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
            :key="product.id"
            @click="showProduct(product.id)">
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

    <!--     Card-->
    <Transition>
      <CardProduct
          v-if="isModalCardVisible"
          :product="product"
          @closeCard="closeCardModal()"
          @deleteProduct="deleteProduct(product.id)">
      </CardProduct>
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