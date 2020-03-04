<template>
  <!-- s-content
    ================================================== -->
  <section
    class="s-content s-content--narrow"
  >
    <article class="row format-standard">
      <div class="s-content__header col-full">
        <h1 class="s-content__header-title">
          {{ post.title }}
        </h1>

        <ul class="s-content__header-meta">
          <li class="date">
            {{ post.createdAt }}
          </li>

          <li class="cat">
            In

            <nuxt-link
              v-for="(tag, index) in post.tags"
              :key="index"
              :to="`/category/tag.name`"
            >
              {{ tag.name }}
            </nuxt-link>
          </li>
        </ul>
      </div> <!-- end s-content__header -->

      <div
        class="col-full s-content__main"
        v-html="post.content"
      /> <!-- end s-content__main -->
    </article>
  </section> <!-- s-content -->
</template>


<script>
export default {
  name: 'Post',
  computed: {
    post() {
      return this.$store.state.post.detailPost;
    },
  },
  created() {
    this.$store.dispatch('post/getDetailPost', this.$route.params.postId);
  },
  head() {
    return {
      title: `Bauer - ${this.post.title}`,
      meta: [
        {
          hid: this.$store.state.post.meta.hid,
          name: this.$store.state.post.meta.name,
          content: this.$store.state.post.meta.content,
        },
      ],
    };
  },
};
</script>
