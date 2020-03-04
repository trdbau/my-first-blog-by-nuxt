<template>
  <section class="s-extra">
    <div class="row top">
      <div class="col-eight md-six tab-full popular">
        <h3>Popular Posts</h3>

        <ExtraPostList :extra-posts="extraPosts" />
      </div> <!-- end popular -->

      <div class="col-four md-six tab-full about">
        <h3>About Bauer</h3>

        <p>
          Bauer iz a Blog by Bau and his friends.
          <br>
          Bauer's theme is copied from col-fourlib
        </p>

        <ul class="about__social">
          <li>
            <a href="#0">
              <i
                class="fab fa-facebook-f"
                aria-hidden="true"
              />
            </a>
          </li>
          <li>
            <a href="#0">
              <i
                class="fab fa-instagram"
                aria-hidden="true"
              />
            </a>
          </li>
        </ul> <!-- end header__social -->
      </div> <!-- end about -->
    </div> <!-- end row -->

    <TagList
      id="categories"
      :tags="tags"
    />
  </section> <!-- end s-extra -->
</template>

<script>
import ExtraPostList from './ExtraPostList';
import TagList from '../../v-common/Tag/TagList';
import faker from '~/seeding';

export default {
  name: 'ExtraPost',
  components: {
    ExtraPostList,
    TagList,
  },
  computed: {
    tags() {
      return faker.tags;
    },
    extraPosts() {
      return faker.extraPosts;
    },
  },
};
</script>
