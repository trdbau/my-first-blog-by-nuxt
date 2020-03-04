<template>
  <div
    :class="`format-${postType}`"
    class="masonry__brick entry"
    data-aos="fade-up"
  >
    <div class="entry__thumb">
      <nuxt-link
        v-if="postType === 'standard'"
        :to="`/post/${slug}`"
        class="entry__thumb-link"
      >
        <img
          :src="image"
          :alt="title"
        >
      </nuxt-link>

      <blockquote v-else>
        <p>
          {{ content }}
        </p>

        <cite>Dieter Rams</cite>
      </blockquote>
    </div>

    <div
      v-if="postType === 'standard'"
      class="entry__text"
    >
      <div class="entry__header">
        <div class="entry__date">
          {{ createdAt }}
        </div>
        <h3 class="entry__title">
          <nuxt-link
            :to="`/post/${slug}`"
          >
            {{ title }}
          </nuxt-link>
        </h3>
      </div>
      <div class="entry__excerpt">
        <p>
          {{ description }}
        </p>
      </div>
      <div class="entry__meta">
        <span class="entry__meta-links">
          <nuxt-link
            :to="`category/${category}`"
          >
            {{ category }}
          </nuxt-link>
        </span>
      </div>
    </div>
  </div> <!-- end div -->
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    description: {
      type: String,
      default: '',
    },
    createdAt: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: () => [],
    },
    postType: {
      type: String,
      default: 'standard',
      validator(value) {
        const checker = ['standard', 'quote'];
        return checker.indexOf(value) !== -1;
      },
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
  },
};

</script>
