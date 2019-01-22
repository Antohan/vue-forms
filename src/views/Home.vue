<template>
  <div class="home">
    <app-form />
  </div>
</template>

<script>
// @ is an alias to /src
import AppForm from '@/components/AppForm.vue';

export default {
  name: 'home',
  components: {
    AppForm,
  },
};
</script>

<style scoped>
.home {
  background-color: #ccc;
  height: 100vh;
}
</style>
