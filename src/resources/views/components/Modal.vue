<script setup>
import IconClose from "./icons/IconClose.vue";
import InputText from "./partials/InputText.vue";
import Select from "./partials/Select.vue";
import {ref} from 'vue'

const attributes = ref([])

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

  console.log(attributes.value)
}
</script>

<template>
  <div class="modal">
    <div class="modal__background"
         @click="$emit('close')"></div>

    <div class="modal__body">
      <div class="modal__header">
        <h3>Добавить продукт</h3>

        <button type="button"
                @click="$emit('close')">
          <IconClose/>
        </button>
      </div>

      <div>
        <form class="form"
              @submit.prevent="submit()">
          <InputText id="article"
                     label="Артикул"
                     name="article"/>

          <InputText id="title"
                     label="Название"
                     name="title"/>

          <Select label="Статус"/>

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
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../../scss/blocks/modal";
@import "../../scss/blocks/form";
@import "../../scss/partials/buttons";

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