<script setup>
import {RouterLink, useRoute} from 'vue-router'

defineProps({
  userName: {
    type: String,
    required: true
  },
});
const route = useRoute()

</script>

<template>
  <header class="header">
    <div class="header__title">
      <RouterLink :to="route.fullPath" class="breadcrumbs__item breadcrumbs__item--active">Продукты</RouterLink>
    </div>

    <div class="header__user">
      <p>{{ userName }}</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../../scss/header.scss";
</style>