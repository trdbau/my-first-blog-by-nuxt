<template>
  <li :class="{ 'has-children': hasChildren, current: name == $nuxt.$route.name }">
    <nuxt-link
      :to="slug"
      :title="name"
    >
      {{ name }}
    </nuxt-link>
    <ul
      v-if="hasChildren"
      class="sub-menu"
    >
      <li
        v-for="category in categories"
        :key="category.id"
      >
        <nuxt-link :to="`/category/${category.id}`">
          {{ category.name }}
        </nuxt-link>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    hasChildren: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    categories() {
      return this.$store.state.categories.categories.results;
    },
  },
};
</script>
