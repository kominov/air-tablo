<template>
  <div class="add-new-row__wrapper">
    <div
      class="add-new-row__row"
     >
      <input
        placeholder="введите дату"
        v-model.trim="newRow.date">

      <input
        placeholder="введите время"
        v-model.trim="newRow.time">

      <input
        placeholder="введите рейс"
        v-model.trim="newRow.flight_number">

      <input
        placeholder="введите город"
        v-model.trim="newRow.direction">

      <button
        class="btn"
        type="button"
        :disabled="!isFormValid"
        @click="onAddRow"
      >Добавить</button>
    </div>
  </div>
</template>

<script>
const createInitialForm = () => ({
  date: '',
  time: '',
  direction: '',
  flight_number: '',
});

export default {
  name: 'AddNewRow',
  data() {
    return {
      newRow: createInitialForm(),
    };
  },

  emits: ['onAddRow'],

  computed: {
    isFormValid() {
      return Object.values(this.newRow).every((value) => value && value.trim());
    },
  },

  methods: {
    onAddRow() {
      if (!this.isFormValid) {
        return;
      }

      this.$emit('onAddRow', {
        ...this.newRow,
        flight_number: this.newRow.flight_number.toUpperCase(),
      });
      this.clearForm();
    },

    clearForm() {
      this.newRow = createInitialForm();
    },
  },

};
</script>

<style scoped lang="scss">
.add-new-row__wrapper{
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  &>div:nth-child(2n){
    background-color: #edecee;
  }
}
.add-new-row__row{
  display: flex;
  padding: 15px 0;

  & > *{
    width: calc(100%/5);
  }

  & >*:not(:last-child){
    margin-right: 10px;
  }

  & input{
    border: 1px solid black;
    background-color: #d7e3e3;
    padding: 0 16px;
    font-size: 18px;
    line-height: 22px;
    &:focus-visible{
      border: 1px solid black;
    }
  }

  & .btn{
    border: 2px solid #0098db;
    color: #0098db;
    background-color: #fff;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

</style>
