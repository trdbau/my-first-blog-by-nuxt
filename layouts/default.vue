<template>
  <div>
    <NavBar />
    <nuxt />
    <ExtraPost />
    <Foot />
    <Preloader />
  </div>
</template>

<style>
</style>
<script>
import Preloader from '../components/v-layout/Preloader';
import NavBar from '../components/v-layout/NavBar';
import Foot from '../components/v-layout/Foot';
import ExtraPost from '../components/blog/ExtraPost';

export default {
  components: {
    NavBar,
    Foot,
    Preloader,
    ExtraPost,
  },
  created() {
    this.$store.dispatch('categories/getCategories');
  },
};
</script>
