<script setup>
import {ref} from "vue";
import {useUserStore} from "../../js/stores/users.js";

const userStore = useUserStore();
const email = ref('admin@asd.asd');
const password = ref('123123123');

function login() {
  userStore.login(email.value, password.value);
}
</script>

<template>
  <form class="flex flex-col gap-4 m-auto"
        @submit.prevent="login">
    <div>
      password for any account: 123123123
    </div>

    <select name="email"
            id="email"
            class="p-4"
            v-model="email">
      <option value="admin@asd.asd" selected>admin@asd.asd</option>
      <option value="user@user.mail">user@user.mail</option>
    </select>

    <input type="password"
           placeholder="password"
           class="p-4"
           v-model="password">

    <button type="submit" class="p-4 bg-blue-500 text-white">Sign In</button>
  </form>
</template>
