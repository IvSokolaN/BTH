<script setup>
import InputText from "../components/partials/InputText.vue"
import Select from "../components/partials/Select.vue"
import {inject, computed, reactive} from 'vue'

const props = defineProps({
  submitButtonText: {
    type: String,
    default: 'Добавить'
  },
  isUpdate: {
    type: Boolean,
    default: false
  }
})

const $services = inject('provision_data')
const store = $services.productStore
const product = $services.product.value
const status = $services.status
const errors = $services.errorsValidation
const form = reactive({
  article: props.isUpdate ? product.article : '',
  title: props.isUpdate ? product.title : '',
  status: props.isUpdate ? product.status : 'available',
  data: props.isUpdate ? product.data : [],
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

  props.isUpdate ? store.updateProduct(form) : store.storeProduct(form)

  unsubscribeOnActionStore()
}
</script>

<template>
  <form class="form"
        @submit.prevent="submit()">
    <div class="form__row">
      <InputText id="article"
                 label="Артикул"
                 :class="{ 'form__input_error': errors.article }"
                 v-model="form.article"/>
      <p v-if="errors.article"
         class="form__input_error-message">
        {{ errors.article[0] }}
      </p>
    </div>

    <div class="form__row">
      <InputText id="title"
                 label="Название"
                 :class="{ 'form__input_error': errors.title }"
                 v-model="form.title"/>
      <p v-if="errors.title"
         class="form__input_error-message">
        {{ errors.title[0] }}
      </p>
    </div>

    <Select label="Статус"
            :statusProd="status"
            v-model="form.status"/>

    <div class="attributes">
      <h4 class="attributes__title">Атрибуты</h4>

      <ul class="attributes__body"
          :class="{ 'attributes__body_no-data': form.data.length === 0 }">
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
      {{ submitButtonText }}
    </button>
  </form>
</template>

<style scoped lang="scss">
@import "../../scss/blocks/form.scss";
@import "../../scss/partials/_buttons.scss";
</style>