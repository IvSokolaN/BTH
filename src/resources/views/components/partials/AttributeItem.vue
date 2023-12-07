<script setup>
import {ref} from "vue";
import InputText from "./InputText.vue";

defineEmits([
'remove'
])

</script>

<template>
  <li>
    <div class="attribute">
      <div class="attribute__input">
        <InputText :id="'attributeTitle_' + index"
                   :name="'attributeTitle_' + index"
                   label="Название"
                   :value="attribute.title"/>
      </div>

      <div class="attribute__input">
        <InputText :id="'attributeTitle_' + index"
                   :name="'attributeValue_' + index"
                   label="Значение"
                   :value="attribute.value"/>
      </div>

      <!--                  <button class="attribute__delete-button" @click="$emit('close')"></button>-->
      <button class="attribute__delete-button"
              type="button"
              @click="$emit('remove')"></button>
    </div>
  </li>

  <!--  <div class="attribute"-->
  <!--       v-for="attribute in attributes">-->
<!--  <div class="attribute">-->
<!--    <div class="attribute__input">-->
<!--      <InputText id="attributeTitle"-->
<!--                 name="attributeTitle"-->
<!--                 label="Название"/>-->
<!--    </div>-->

<!--    <div class="attribute__input">-->
<!--      <InputText id="attributeValue"-->
<!--                 name="attributeValue"-->
<!--                 label="Значение"/>-->
<!--    </div>-->

<!--    <button class="attribute__delete-button" @click="$emit('close')"></button>-->
<!--  </div>-->
</template>

<style scoped lang="scss">
.attribute {
  @apply flex gap-[11px] justify-between items-center first-of-type:mt-[20px] mb-[13px] last-of-type:mb-0;

  // .attribute__input
  &__input {
    @apply flex flex-col w-full;
  }

  //.attribute__delete-button
  &__delete-button {
    @apply bg-recycle bg-no-repeat w-[10px] h-[11px] cursor-pointer p-[5px];
  }
}
</style>