/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  isLoading: false,
  response: {
    type: '',
    message: '',
    isShow: false
  },
  detailPost: {},
  meta: {
    hid: '',
    name: '',
    content: ''
  }
})

export const actions = {
  async getDetailPost({ commit }, slug) {
    try {
      const data = await fetch(
        `/api/v1/posts?filter=%7B%22slug%22%3A%20%22${slug}%22%7D`
      )

      const post = await data.json()

      commit('getDetailPostPending')
      commit('getDetailPostSuccess', post)
      commit('get')
    } catch (error) {
      commit('getDetailPostFailed', error)
    }
  }
}

export const mutations = {
  getDetailPostSuccess(state, post) {
    state.response = {
      isShow: false,
      type: 'success',
      message: 'get detail post success'
    }

    setTimeout(() => {
      state.isLoading = false
    }, 1000)

    ;[state.detailPost] = post.results
    state.meta = {
      hid: post.results[0].meta.hid,
      name: post.results[0].meta.name,
      content: post.results[0].meta.content
    }
  },
  getDetailPostFailed(state, error) {
    state.response = {
      isShow: true,
      type: 'danger',
      message: error
    }

    setTimeout(() => {
      state.isLoading = false
    }, 1000)
  },
  getDetailPostPending(state) {
    state.isLoading = true
  }
}
