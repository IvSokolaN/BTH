<script setup>
import InputText from "../components/partials/InputText.vue"
import Select from "../components/partials/Select.vue"
import {inject, computed, reactive} from 'vue'

const $services = inject('provision_data')
const store = $services.productStore
const status = $services.status
const errors = $services.errorsValidation
const form = reactive({
  article: '',
  title: '',
  status: 'available',
  data: [],
})

const isDisabled = computed(() => {
  return form.article && form.title
})

function removeAttributeItem(index) {
  form.data.splice(index, 1)
}

function addAttributeItem() {
  form.data.push({
    title: '',
    value: ''
  })
}

function submit() {
  const unsubscribeOnActionStore = store.$onAction(({after, store}) => {
    after(() => {
      if (Object.keys(store.errorsValidation).length === 0) {
        $services.closeModal()
      }
    })
  })

  store.storeProduct(form)
  unsubscribeOnActionStore()
}
</script>

<template>
  <form class="form" novalidate
        @submit.prevent="submit()">
    <div class="mb-[13px] flex flex-col">
      <InputText id="article"
                 label="Артикул"
                 :class="{ 'form__input_error': errors.article }"
                 v-model="form.article"/>
      <p v-if="errors.article"
         class="mt-2 text-red-500">
        {{ errors.article[0] }}
      </p>
    </div>

    <div class="mb-[13px] flex flex-col">
      <InputText id="title"
                 label="Название"
                 :class="{ 'form__input_error': errors.title }"
                 v-model="form.title"/>
      <p v-if="errors.title"
         class="mt-2 text-red-500">
        {{ errors.title[0] }}
      </p>
    </div>


    <Select label="Статус"
            :statusProd="status"
            v-model="form.status"/>

    <div class="attributes">
      <h4 class="attributes__title">Атрибуты</h4>

      <ul class="mt-[20px]"
          :class="{ 'mt-[0px]': form.data.length === 0 }">
        <li v-for="(attribute, index) in form.data"
            :key="index">
          <div class="attribute"
               :class="{ 'attribute--last': index === form.data.length - 1 }">
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
      Добавить
    </button>
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