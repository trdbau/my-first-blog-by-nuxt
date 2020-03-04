<template>
  <!-- s-content
    ================================================== -->
  <section class="s-content">
    <div class="row masonry-wrap">
      <div class="masonry">
        <div class="grid-sizer" />

        <Loading
          v-if="posts.isLoading"
          class="mg-auto"
        />

        <PostList
          v-else
          :posts="posts.postsByCategory.results"
        />

        <div
          class="btn btn--primary content-fit mg-auto mg-btn-top"
          @click="getMorePostsByCategory()"
        >
          see more
        </div>
      </div> <!-- end masonry -->
    </div> <!-- end masonry-wrap -->
  </section> <!-- s-content -->
</template>

<style scoped>
</style>

<script>
import PostList from '../../components/blog/Post/PostList';
import Loading from '../../components/v-common/Loading';

export default {
  name: 'Home',
  components: {
    PostList,
    Loading,
  },
  data() {
    return {
      postStep: 0,
    };
  },
  computed: {
    posts() {
      return this.$store.state.category;
    },
  },
  created() {
    this.$store.dispatch('category/getPostsByCategory', this.$route.params.id);
  },
  methods: {
    getMorePostsByCategory() {
      this.postStep = this.postStep + 9;
      this.$store.dispatch('category/getMorePostsByCategory', this.$route.params.id, this.postStep);
    },
  },
};

</script>
