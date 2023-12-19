<script setup>
import FormProduct from "../components/FormProduct.vue";

const isAdmin = false

</script>

<template>
  <FormProduct
      submitButtonText="Сохранить"
      is-update
      :is-admin="isAdmin"
  />
</template>
