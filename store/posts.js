/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  isLoading: false,
  isLoadingMore: false,
  response: {
    isShow: false,
    message: '',
    type: ''
  },
  posts: {}
})

export const actions = {
  async getPosts({ commit }) {
    try {
      const data = await fetch('/api/v1/posts?limit=9&offset=0')

      const posts = await data.json()

      commit('getPostsPending')
      commit('getPostsSuccess', posts)
    } catch (error) {
      commit('getPostsFailed', error)
    }
  },

  async getMorePosts({ commit }, number) {
    try {
      const data = await fetch(`/api/v1/posts?limit=9&offset=${number}`)

      const posts = await data.json()

      commit('getMorePostsPending')
      commit('getMorePostsSuccess', posts)
    } catch (error) {
      commit('getPostsFailed', error)
    }
  }
}

export const mutations = {
  getPostsSuccess(state, posts) {
    state.response = {
      isShow: false,
      type: 'success',
      message: 'get all posts success'
    }
    state.posts = posts

    setTimeout(() => {
      state.isLoading = false
    }, 1000)
  },

  getMorePostsSuccess(state, posts) {
    state.response = {
      isShow: false,
      type: 'success',
      message: 'get all posts success'
    }

    state.posts.results = state.posts.results.concat(posts.results)

    setTimeout(() => {
      state.isLoadingMore = false
    }, 1000)
  },

  getPostsFailed(state, error) {
    state.response = {
      isShow: true,
      type: 'danger',
      message: error
    }

    setTimeout(() => {
      state.isLoading = false
      state.isLoadingMore = false
    }, 1000)
  },

  getPostsPending(state) {
    state.isLoading = true
  },

  getMorePostsPending(state) {
    state.isLoadingMore = true
  }
}
