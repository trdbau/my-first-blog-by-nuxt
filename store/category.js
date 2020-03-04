/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  isLoading: false,
  isLoadingMore: false,
  response: {
    isShow: false,
    type: '',
    message: ''
  },
  postsByCategory: []
})

export const actions = {
  async getPostsByCategory({ commit }, id) {
    try {
      const data = await fetch(
        `/api/v1/posts?limit=9&offset=0&filter=%7B%22categoryId%22%3A${id}%7D`
      )

      const posts = await data.json()

      commit('getPostsByCategoryPending')
      commit('getPostsByCategorySuccess', posts)
    } catch (error) {
      commit('getPostsByCategoryFailed', error)
    }
  },

  async getMorePostsByCategory({ commit }, id, number) {
    try {
      const data = await fetch(
        `/api/v1/posts?limit=9&offset=${number}&filter=%7B%22categoryId%22%3A${id}%7D`
      )

      const posts = await data.json()

      commit('getMorePostsByCategoryPending')
      commit('getMorePostsByCategorySuccess', posts)
    } catch (error) {
      commit('getMorePostsByCategoryFailed', error)
    }
  }
}

export const mutations = {
  getPostsByCategorySuccess(state, posts) {
    state.response = {
      isShow: false,
      type: 'success',
      message: 'get posts by category success'
    }
    state.postsByCategory = posts

    setTimeout(() => {
      state.isLoading = false
    }, 1000)
  },

  getMorePostsByCategorySuccess(state, posts) {
    state.response = {
      isShow: false,
      type: 'success',
      message: 'get more posts by category success'
    }
    state.postsByCategory.results = state.postsByCategory.results.concat(
      posts.results
    )

    setTimeout(() => {
      state.isLoadingMore = false
    }, 1000)
  },

  getPostsByCategoryFailed(state, error) {
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

  getPostsByCategoryPending(state) {
    state.isLoading = true
  },
  getMorePostsByCategoryPending(state) {
    state.isLoadingMore = true
  }
}
