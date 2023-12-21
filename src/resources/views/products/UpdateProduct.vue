<script setup>
import FormProduct from "../components/FormProduct.vue";
import {useUserStore} from "../../js/stores/users.js";
import {storeToRefs} from "pinia";

const userStore = useUserStore();
userStore.getUser();
const {isVisibleInputArticle} = storeToRefs(userStore);
</script>

<template>
  <FormProduct
      submitButtonText="Сохранить"
      is-update
      :is-visible-input-article="isVisibleInputArticle"
  />
</template>
