<template>
  <article class="col-block popular__post">
    <nuxt-link
      :to="`/post/${url}`"
      class="popular__thumb"
    >
      <img
        :src="image"
        alt=""
      >
    </nuxt-link>
    <h5>
      <nuxt-link :to="`/post/${url}`">
        {{ title }}
      </nuxt-link>
    </h5>
    <section class="popular__meta">
      <span class="popular__author">
        <span>By</span> <a href="#0">
          {{ author }}
        </a>
      </span>
      <span class="popular__date">
        <span>on</span> <time datetime="2017-12-19">
          {{ time }}
        </time>
      </span>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ExtraPostItem',
  props: {
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    author: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
};
</script>
