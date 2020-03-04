/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  isLoading: false,
  response: {
    isShow: false,
    message: '',
    type: ''
  },
  categories: []
})

export const actions = {
  async getCategories({ commit }) {
    try {
      const data = await fetch('/api/v1/categories?offset=0')

      const categories = await data.json()

      commit('getCategoriesPending')
      commit('getCategoriesSuccess', categories)
    } catch (error) {
      commit('getCategoriesFailed', error)
    }
  }
}

export const mutations = {
  getCategoriesSuccess(state, categories) {
    state.response = {
      isShow: false,
      type: 'success',
      message: 'load categories success'
    }

    state.categories = categories
    state.isLoading = false
  },

  getCategoriesFailed(state, error) {
    state.response = {
      isShow: true,
      type: 'danger',
      message: error
    }

    state.isLoading = false
  },

  getCategoriesPending(state) {
    state.isLoading = true
  }
}
