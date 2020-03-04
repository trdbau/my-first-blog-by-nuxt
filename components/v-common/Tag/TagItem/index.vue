<template>
  <nuxt-link :to="slug">
    {{ name }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'TagItem',
  props: {
    name: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
  },
};
</script>
