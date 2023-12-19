<script setup>
import {ref} from "vue";

const email = ref('admin@asd.asd')
const password = ref('123123123')

function login() {
  console.log(email.value, password.value)
}
</script>

<template>
  <form class="flex flex-col gap-4 m-auto"
        @submit.prevent="login">
    <input type="email"
           placeholder="E-mail"
           class="p-4"
           v-model="email">
    <input type="password"
           placeholder="password"
           class="p-4"
           v-model="password">
    <button type="submit" class="p-4 bg-blue-500 text-white">Sign In</button>
  </form>
</template>

<style scoped lang="scss">

</style>