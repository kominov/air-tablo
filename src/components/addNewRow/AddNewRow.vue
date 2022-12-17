<template>
  <div class="add-new-row__wrapper">
    <div
      class="add-new-row__row"
     >
      <input
        placeholder="введите дату"
        v-model="newRow.date">

      <input
        placeholder="введите время"
        v-model="newRow.time">

      <input
        placeholder="введите рейс"
        v-model="newRow.flight_number">

      <input
        placeholder="введите город"
        v-model="newRow.direction">

      <div
        class="btn"
        @click="onAddRow()"
      >Добавить</div>
    </div>
  </div>
</template>

<script>
const initForm = {
  date: '',
  time: '',
  direction: '',
  flight_number: '',
};
export default {
  name: 'AddNewRow',
  data() {
    return {
      newRow: initForm,
    };
  },

  emits: ['onAddRow'],

  computed: {
    onValidateForm() {
      let isValid = true;
      Object.entries(this.newRow).forEach(([key, value]) => {
        if (!value) isValid = false;
      });

      return isValid;
    },
  },

  methods: {
    onAddRow() {
      if (this.onValidateForm) {
        this.$emit('onAddRow', this.newRow);
        this.clearForm();
      }
    },

    clearForm() {
      this.newRow.date = '';
      this.newRow.time = '';
      this.newRow.direction = '';
      this.newRow.flight_number = '';
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
  }
}

</style>
