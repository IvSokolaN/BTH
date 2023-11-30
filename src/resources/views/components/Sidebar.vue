<script setup>
import {RouterLink} from 'vue-router'

</script>

<template>
  <aside class="sidebar">
    <div class="sidebar__header">
      <div class="sidebar__logo">
        <RouterLink to="/" class="underline text-3xl text-green-500 p-5">
<!--            TODO change path to logo-->
          <img src="{{ asset('storage/images/logo.png') }}"
               alt="Логотип Enterprise Resource Planning"
               width="53px">
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