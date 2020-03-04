<template>
  <div class="block-1-2 block-m-full popular__posts">
    <ExtraPostItem
      v-for="extraPost in extraPosts"
      :key="extraPost._id"
      :image="extraPost.image"
      :title="extraPost.title"
      :description="extraPost.description"
      :author="extraPost.author"
      :time="extraPost.time"
    />
  </div> <!-- end popular_posts -->
</template>

<script>
import ExtraPostItem from '../ExtraPostItem';

export default {
  name: 'ExtraPostList',
  components: {
    ExtraPostItem,
  },
  props: {
    extraPosts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
