<script setup>
import Sidebar from "../Sidebar.vue";
import Header from "../Header.vue";

let userName = "Иванов Иван Иванович";

</script>

<template>
  <Sidebar/>
  <main class="main">
    <Header :user-name="userName"/>
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
@import "../../../scss/main";
</style>