<template>
  <div class="row masonry-wrap">
    <div class="masonry">
      <div class="grid-sizer" />

      <PostItem
        v-for="post in posts"
        :key="post._id"
        :title="post.title"
        :description="post.description"
        :created-at="post.createdAt"
        :slug="post.slug"
        :post-type="post.postType"
        :tags="post.tags"
        :image="post.images"
        :category="post.categoryName"
        :content="post.content"
      />
    </div> <!-- end masonry -->
  </div> <!-- end masonry-wrap -->
</template>

<script>
import PostItem from '../PostItem';

export default {
  name: 'PostList',
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
