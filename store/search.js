/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  isLoading: false,
  response: {
    isShow: false,
    message: '',
    type: ''
  },
  postsByKeyword: [],
  total: 0
})

export const actions = {
  async getPostsByKeyword({ commit }, keyword) {
    try {
      const Obj = {
        title: {
          $likeLower: `%${keyword}%`
        }
      }

      const data = await fetch(
        `/api/v1/posts?filter=${encodeURI(JSON.stringify(Obj))}`
      )

      const postsByKeyword = await data.json()

      commit('getPostsByKeywordPending')
      commit('getPostsByKeywordSuccess', postsByKeyword)
    } catch (error) {
      commit('getPostsByKeywordFailed', error)
    }
  }
}

export const mutations = {
  getPostsByKeywordSuccess(state, posts) {
    state.response = {
      isShow: false,
      type: 'success',
      message: 'get posts by keyword success'
    }

    setTimeout(() => {
      state.isLoading = false
    }, 1000)

    state.postsByKeyword = posts.results
    state.total = posts.total
  },
  getPostsByKeywordFailed(state, error) {
    state.response = {
      isShow: true,
      type: 'danger',
      message: error
    }

    state.isLoading = false
  },
  getPostsByKeywordPending(state) {
    state.isLoading = true
  }
}
