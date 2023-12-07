<script setup>
import InputText from "../components/partials/InputText.vue"
import Select from "../components/partials/Select.vue"
import {computed, inject, ref} from "vue"

const $services = inject('provision_data')
const product = $services.product.value
const status = $services.status
const articleProduct = ref(product.article)
const titleProduct = ref(product.title)
const statusProduct = ref(product.status)
const attributes = ref(product.data)

const isDisabled = computed(() => {
  return articleProduct.value && titleProduct.value
})

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
  $services.productStore.editProduct(
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
            :statusProd="status"
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

    <button type="submit"
            class="button"
            :disabled="!isDisabled">
      Сохранить
    </button>
  </form>
</template>

<style scoped lang="scss">
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