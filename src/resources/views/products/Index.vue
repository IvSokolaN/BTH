<script setup>
import {ref} from "vue";
import AppLayout from "../components/layouts/AppLayout.vue";
import Modal from "../components/Modal.vue";

const isModalVisible = ref(false);

const closeModal = () => isModalVisible.value = false;
const showModal = () => isModalVisible.value = true;

function getProducts() {
  axios.get('/api/products')
      .then(res => {
        console.log(res.data)
      })
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
        <tr class="table__row">
          <td>mtokb2</td>
          <td>MTOK-B2/216-1KT3645-K</td>
          <td>Доступен</td>
          <td>
            <p>Цвет: черный</p>
            <p>Цвет: Lorem </p>
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
          @close="closeModal()">
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