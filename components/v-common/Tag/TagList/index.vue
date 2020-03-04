<template>
  <div class="row bottom tags-wrap">
    <div class="col-full tags">
      <h3>Tags</h3>
      <div class="tagcloud">
        <TagItem
          v-for="tag in tags"
          :key="tag._id"
          :name="tag.name"
          :slug="tag.slug"
        />
      </div> <!-- end tagcloud -->
    </div> <!-- end tags -->
  </div> <!-- end tags-wrap -->
</template>

<script>
import TagItem from '../TagItem';

export default {
  name: 'TagList',
  components: {
    TagItem,
  },
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
