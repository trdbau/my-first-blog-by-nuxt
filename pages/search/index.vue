<template>
  <div class="header__search">
    <div
      role="search"
      method="get"
      class="header__search-form"
    >
      <label>
        <span class="hide-content">
          Search for:
        </span>

        <input
          v-model="keyword"
          type="search"
          class="search-field"
          placeholder="Type Keywords"
          value=""
          name="s"
          title="Search for:"
          autocomplete="off"
        >
      </label>

      <nuxt-link
        class="search-submit"
        :to="`/search/${keyword}`"
      >
        search
      </nuxt-link>
    </div>

    <div
      title="Close Search"
      class="header__overlay-close"
      @click="$router.go(-1)"
    >
      Close
    </div>
  </div> <!-- end header__search -->
</template>

<style>
</style>

<script>
export default {
  name: 'Search',
  data() {
    return {
      keyword: '',
    };
  },
};
</script>
