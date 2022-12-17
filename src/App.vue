<template>
  <div id="app">
    <NavBar />
    <div class="container">
      <router-view/>
    </div>

  </div>
</template>
<script>
import NavBar from '@/components/common/NavBar.vue';

export default {
  components: { NavBar },
};
</script>
