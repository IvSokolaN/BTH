<script setup>
import {RouterLink} from 'vue-router';

</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__header">
      <div class="sidebar__logo">
        <RouterLink to="/" class="sidebar__logo-link">
          <img src="/public/img/logo.png"
               alt="Логотип Enterprise Resource Planning"
               width="53">
        </RouterLink>
      </div>

      <p class="sidebar__text">Enterprise<br> Resource<br> Planning</p>
    </div>

    <nav class="sidebar__menu menu">
      <ul class="menu__list">
        <li class="menu__item">
          <RouterLink :to="{ name: 'products.index' }">Продукты</RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style lang="scss" scoped>
@import "../../scss/sidebar.scss";
</style>