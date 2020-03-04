<template>
  <ul class="header__nav">
    <NavItem
      v-for="nav in navs"
      :key="nav._id"
      :name="nav.name"
      :slug="nav.slug"
      :children="nav.children"
      :has-children="nav.hasChildren"
      :class="{ current: ($nuxt.$route.name == 'index')&&(nav.name == 'home') }"
    />
  </ul> <!-- end header__nav -->
</template>

<script>
import NavItem from '../NavItem';
import faker from '~/seeding';

export default {
  name: 'NavList',
  components: {
    NavItem,
  },
  computed: {
    navs() {
      return faker.navs;
    },
  },
};
</script>
