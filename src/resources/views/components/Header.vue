<script setup>
import {RouterLink, useRoute} from 'vue-router';

defineProps({
  userName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
const route = useRoute();

</script>

<template>
  <header class="header">
    <div class="header__title">
      <RouterLink
          class="breadcrumbs__item breadcrumbs__item--active"
          :to="route.fullPath">
        {{ title }}
      </RouterLink>
    </div>

    <div class="header__user">
      <p>{{ userName }}</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../../scss/header.scss";
</style>