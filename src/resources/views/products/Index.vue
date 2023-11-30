<script setup>
import AppLayout from "../components/layouts/AppLayout.vue";

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
            <p>Цвет: черный</p>
          </td>
        </tr>
        <tr>
          <td>456</td>
          <td>name</td>
          <td>status</td>
          <td>attributes</td>
        </tr>
        </tbody>
      </table>

      <button type="button"
              class="products__add button"
              @click="showModal">
        Добавить
      </button>
    </div>
  </AppLayout>
</template>

<style scoped>
@import "../../scss/products.scss";
</style>