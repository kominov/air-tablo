<template>
<div class="body-table__wrapper">
  <div
    :class="{'admin': isAdmin}"
    class="body-table__row"
    :key="`row-${id}`"
    v-for="(item,id) in infoList">

    <input
      @blur="onUpdateDb(item)"
      :disabled='!isAdmin'
      v-model="item.date">

    <input
      @blur="onUpdateDb(item)"
      :disabled='!isAdmin'
      v-model="item.time">

    <input
      @blur="onUpdateDb(item)"
      class="flight_number"
      :disabled='!isAdmin'
      v-model="item.flight_number">

    <input
      @blur="onUpdateDb(item)"
      :disabled='!isAdmin'
      v-model="item.direction">

    <div
      class="delRow"
      v-if="isAdmin"
      @click="onDelRow(item)"
    >&#10008;</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BodyTable',
  data() {
    return {
      infoList: [],
    };
  },
  watch: {
    list: {
      handler() {
        this.infoList = this.list;
      },
      deep: true,
    },
  },
  emits: ['onUpdateDb', 'onDelRow'],

  mounted() {
    this.infoList = [...this.list];
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  },

  methods: {
    onUpdateDb(newValue) {
      this.$emit('onUpdateDb', newValue);
    },
    onDelRow(item) {
      this.$emit('onDelRow', item);
    },
  },

};
</script>

<style scoped lang="scss">
.body-table__wrapper{
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  &>div:nth-child(2n){
    background-color: #edecee;
  }
}
.body-table__row{
  display: flex;
  padding: 15px 0;

  & > *{
    width: calc(100%/4);
  }
  &.admin >*{
    width: calc(100%/5);
  }
  & input{
    border: none;
    background-color: inherit;
    padding: 0 16px;
    &:focus-visible{
      border: 1px solid black;
    }
  }

  &.admin input{
    border: 1px solid #b0cece;
  }
}

.flight_number{
text-transform: uppercase;
}
.delRow{
  color: red;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  justify-content: center;
}
</style>
