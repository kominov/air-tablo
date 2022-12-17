<template>
<div class="navbar__root">
  <div class="container">
    <h1 class="h1">Онлайн-табло</h1>
    <div class="navbar__root-bottom">
      <div class="btn-wrapper">
        <div
          @click="setCurrentPage('departure')"
          :class="{'active-link':currentPage==='departure'}"
          >вылет</div>
        <div
          @click="setCurrentPage('arrival')"
          :class="{'active-link':currentPage==='arrival'}"
          >прилет</div>
      </div>
      <div @click="onSetAdmin" class="btn">
        {{isAdmin ? 'Права пользователя':'Права Администратора'}}</div>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin;
    },

    currentPage() {
      return this.$store.getters.currentPage;
    },
  },

  methods: {
    onSetAdmin() {
      this.$store.commit('onSetAdmin', !this.isAdmin);
    },

    setCurrentPage(page) {
      this.$store.commit('onChangePage', page);
    },
  },
};
</script>

<style scoped lang="scss">
.navbar__root{
  height: 400px;
  background-color: #0098db;
}
.h1{
  padding-top: 40px;
  padding-bottom: 60px;
  font-size: 80px;
  font-weight: 400;
  color: white;
}

.btn-wrapper{
  box-shadow: inset 0 0 0 1px;
  position: relative;
  display: inline-flex;
  border-radius: 6px;
  border: 1px solid #fff;
  color: #fff;
  vertical-align: middle;
  overflow: hidden;
  min-height: 40px;

  & > div{
    padding: 9px 40px;
    color: white;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: all .25s;
    cursor: pointer;

    &:hover{
      transition: all .25s;
      background-color: white;
      color: #0098db;
    }

    &.active-link{
      background-color: white;
      color: #0098db;
    }
  }
}
.navbar__root-bottom{
  display: flex;
  align-items: center;
  justify-content: space-between;

}
</style>
