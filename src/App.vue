<template>
  <section class="app">
    <appHeader />
    <router-view />
    <section v-if="isLoading">loading...</section>
  </section>
</template>

<script>
import appHeader from "./components/app-header.vue";
export default {
  created() {
    // this.$store.dispatch('loadBoards')
    // this.$store.dispatch('loadUsers')
  },
  components: {
    appHeader,
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
};
</script>
