<script setup>
import InputText from "../components/partials/InputText.vue";
import Select from "../components/partials/Select.vue";
import {ref, inject} from 'vue'

const $services = inject('provision_data')
const attributes = ref([])
const articleProduct = ref(null)
const titleProduct = ref(null)
const statusProduct = ref('Доступен')

function removeAttributeItem(index) {
  attributes.value.splice(index, 1)
}

function addAttributeItem() {
  attributes.value.push({
    title: '',
    value: ''
  })
}

function submit() {
  $services.productStore.storeProduct(
      articleProduct.value,
      titleProduct.value,
      statusProduct.value,
      attributes.value
  )

  $services.closeModal()
}
</script>

<template>
  <form class="form"
        @submit.prevent="submit()">
    <InputText id="article"
               label="Артикул"
               v-model="articleProduct"/>

    <InputText id="title"
               label="Название"
               v-model="titleProduct"/>

    <Select label="Статус"
            v-model="statusProduct"/>

    <div class="attributes">
      <h4 class="attributes__title">Атрибуты</h4>

      <ul class="mt-[20px]"
          :class="{ 'mt-[0px]': attributes.length === 0 }">
        <li v-for="(attribute, index) in attributes"
            :key="index">
          <div class="attribute"
               :class="{ 'attribute--last': index === attributes.length - 1 }">
            <div class="attribute__input">
              <InputText :id="'attributeTitle_' + index"
                         label="Название"
                         v-model="attribute.title"/>
            </div>

            <div class="attribute__input">
              <InputText :id="'attributeValue_' + index"
                         label="Значение"
                         v-model="attribute.value"/>
            </div>

            <button class="attribute__delete-button"
                    type="button"
                    @click="removeAttributeItem(index)"></button>
          </div>
        </li>
      </ul>

      <button type="button"
              class="attributes__add-attribute"
              @click="addAttributeItem()">
        + Добавить атрибут
      </button>
    </div>

    <button type="submit" class="button">Добавить</button>
  </form>
</template>

<style lang="scss" scoped>
@import "../../scss/blocks/form.scss";
@import "../../scss/partials/_buttons.scss";

.attribute {
  @apply flex gap-[11px] justify-between items-center;

  // .attribute__input
  &__input {
    @apply flex flex-col w-full;
  }

  //.attribute__delete-button
  &__delete-button {
    @apply bg-recycle bg-no-repeat w-[10px] h-[11px] cursor-pointer p-[5px];
  }

  // .attribute--last
  &--last {
    @apply mb-0;
  }

  // .attribute--first
  &--first {
    @apply mt-[20px];
  }
}
</style>