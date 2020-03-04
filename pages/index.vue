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
          :posts="posts.posts.results"
        />

        <h2
          v-if="posts.posts.results && posts.posts.total === posts.posts.results.length"
          class="endOfPosts"
        >
          F!ck, YOU'VE GOT ALL MY POSTS!
        </h2>

        <div
          v-if="posts.posts.results && !posts.isLoadingMore &&
            !(posts.posts.total === posts.posts.results.length)"
          class="btn btn--primary content-fit mg-auto mg-btn-top"
          @click="getMorePosts()"
        >
          see more
        </div>
      </div> <!-- end masonry -->
    </div> <!-- end masonry-wrap -->
  </section> <!-- s-content -->
</template>

<style>
</style>

<script>
import PostList from '../components/blog/Post/PostList';
import Loading from '../components/v-common/Loading';

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
      return this.$store.state.posts;
    },
  },
  created() {
    this.$store.dispatch('posts/getPosts');
  },
  methods: {
    getMorePosts() {
      this.postStep = this.postStep + 9;
      this.$store.dispatch('posts/getMorePosts', this.postStep);
    },
  },
};

</script>
