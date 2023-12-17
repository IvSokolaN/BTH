<script setup>
import {ref, provide} from "vue"
import AppLayout from "../components/layouts/AppLayout.vue"
import Modal from "../components/Modal.vue"
import IconTrash from "../components/icons/IconTrash.vue";
import IconPencil from "../components/icons/IconPencil.vue";
import ShowProduct from "./ShowProduct.vue"
import CreateProduct from "./CreateProduct.vue";
import EditProduct from "./EditProduct.vue";
import {useProductStore} from "../../js/stores/root.js"
import {storeToRefs} from "pinia"

const isModalVisible = ref(false)
const productStore = useProductStore()
const getProducts = () => productStore.getProducts()
getProducts()
const {products, product, status, errorsValidation} = storeToRefs(productStore)
const _provision_data = {
  "productStore": productStore,
  "product": product,
  "status": status,
  "closeModal": closeModal,
  "errorsValidation": errorsValidation,
}
provide("provision_data", _provision_data)

const currentBody = ref('CreateProduct')
const modalBodies = {
  ShowProduct,
  CreateProduct,
  EditProduct
}

function closeModal() {
  isModalVisible.value = false
  document.body.classList.remove('lock')
}

function showModal(type) {
  isModalVisible.value = true
  currentBody.value = type
  document.body.classList.add('lock')
}

function showProduct(id) {
  productStore.getProduct(id)
  showModal('ShowProduct')
}

function deleteProduct(id) {
  productStore.deleteProduct(id)
  closeModal()
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
          <td>{{ status[product.status] }}</td>
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
              @click="showModal('CreateProduct')">
        Добавить
      </button>
    </div>

    <Transition>
      <Modal
          v-if="isModalVisible"
          @close="closeModal()">
        <template v-if="currentBody === 'CreateProduct'" #modal_header_create>
          <h3>Добавить продукт</h3>
        </template>

        <template v-else-if="currentBody === 'EditProduct'" #modal_header_edit>
          <h3>Редактировать {{ product.title }}</h3>
        </template>

        <template v-else #modal_header_show>
          <h3>{{ product.title }}</h3>

          <div class="flex ml-auto mr-[6px] gap-[2px]">
            <button type="button"
                    class="modal__button"
                    @click="showModal('EditProduct')">
              <IconPencil/>
            </button>

            <button type="button"
                    class="modal__button"
                    @click="deleteProduct(product.id)">
              <IconTrash/>
            </button>
          </div>
        </template>

        <template #modal_content>
          <component :is="modalBodies[currentBody]"/>
        </template>
      </Modal>
    </Transition>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import "../../scss/products.scss";
@import "../../scss/blocks/modal";

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>