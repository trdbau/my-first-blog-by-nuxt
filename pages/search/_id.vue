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
          :posts="posts"
        />

        <h2
          v-if="$nuxt.$store.state.search.total === posts.length"
          class="endOfPosts"
        >
          F!ck, YOU'VE GOT ALL MY POSTS!
        </h2>

        <div
          v-else
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
import PostList from '../../components/blog/Post/PostList';
import Loading from '../../components/v-common/Loading';

export default {
  name: 'SearchById',
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
      return this.$store.state.search.postsByKeyword;
    },
  },
  created() {
    this.$store.dispatch('search/getPostsByKeyword', this.$route.params.id);
  },
  methods: {
    getMorePosts() {
      this.postStep = this.postStep + 9;
      this.$store.dispatch('posts/getMorePosts', this.postStep);
    },
  },
};

</script>
