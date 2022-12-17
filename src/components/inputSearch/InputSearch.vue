<template>
  <input
    @input="onSearch"
    v-model="searchStr"
    class="input__search"
    placeholder="Введите город или номер рейсп"
    type="text">
</template>

<script>
export default {
  name: 'InputSearch',
  emits: ['onSearch'],
  data() {
    return {
      searchStr: '',
    };
  },
  methods: {
    onSearch() {
      this.$emit('onSearch', this.searchStr);
    },
  },
};
</script>

<style scoped lang="scss">
.input__search {
  width: 100%;
  margin-bottom: 30px;
  padding: 10px;

&:focus-visible {
   outline: none;
 }
}
</style>
