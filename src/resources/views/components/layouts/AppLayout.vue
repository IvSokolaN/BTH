<script setup>
import Sidebar from "../Sidebar.vue";
import Header from "../Header.vue";

defineProps({
  title: {
    type: String,
    required: true
  }
})
const userName = "Иванов Иван Иванович";

</script>

<template>
  <Sidebar/>
  <main class="main">
    <Header
        :user-name="userName"
        :title="title"
    />
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
@import "../../../scss/main";
</style>