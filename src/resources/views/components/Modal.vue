<script setup>
import IconClose from "./icons/IconClose.vue";
import InputText from "./partials/InputText.vue";
import Select from "./partials/Select.vue";

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
        <form class="form">
          <InputText id="article"
                     label="Артикул"
                     name="article"/>

          <InputText id="title"
                     label="Название"
                     name="title"/>

          <Select label="Статус"/>

          <div class="attributes">
            <h4 class="attributes__title">Атрибуты</h4>


            <button type="button"
                    class="attributes__add-attribute"
            >
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

</style>