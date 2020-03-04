<template>
  <!-- pageheader
    ================================================== -->
  <section class="s-pageheader s-pageheader--home">
    <header class="header">
      <div class="header__content row">
        <div class="header__logo">
          <nuxt-link
            class="logo"
            to="/"
          >
            <img
              src="/images/logo.svg"
              alt="Homepage"
            >
          </nuxt-link>
        </div> <!-- end header__logo -->

        <ul class="header__social">
          <li>
            <nuxt-link to="#0">
              <i
                class="fab fa-facebook-f"
                aria-hidden="true"
              />
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="#0">
              <i
                class="fab fa-instagram"
                aria-hidden="true"
              />
            </nuxt-link>
          </li>
        </ul> <!-- end header__social -->

        <nuxt-link
          class="header__search-trigger"
          to="/search"
        />

        <nuxt-link
          class="header__toggle-menu"
          to="#0"
          title="Menu"
        >
          <span>Menu</span>
        </nuxt-link>

        <nav class="header__nav-wrap">
          <h2 class="header__nav-heading h6">
            Site Navigation
          </h2>

          <NavList />

          <nuxt-link
            to="#0"
            title="Close Menu"
            class="header__overlay-close close-mobile-menu"
          >
            Close
          </nuxt-link>
        </nav> <!-- end header__nav-wrap -->
      </div> <!-- header-content -->
    </header> <!-- header -->
  </section> <!-- end s-pageheader -->
</template>

<style>
</style>

<script>
import NavList from './NavList';

export default {
  name: 'BaseNavbar',
  components: {
    NavList,
  },
};
</script>
