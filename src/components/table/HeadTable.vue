<template>
<div
  :class="{'admin': isAdmin}"
  class="table-head__wrapper">
  <div>Дата</div>
  <div>Время по расписанию</div>
  <div>№ рейса</div>
  <div>Направление</div>
  <div
    class="delRow"
    v-if="isAdmin">Удалить</div>
</div>
</template>

<script>
export default {
  name: 'HeadTable',
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
  },
};
</script>

<style scoped lang="scss">
.table-head__wrapper{
  display: flex;
  background-color: #d7e3e3;
  padding: 15px 0;
  border-radius: 5px;
  color: #212121;
  text-decoration: none;
  font-weight: 300;
  font-size: 16px;

  & >div{
    width: calc(100%/4);
    padding: 0 15px;
  }
  &.admin >div{
    width: calc(100%/5);
  }
}
.delRow{
  display: flex;
  justify-content: center;
}
</style>
