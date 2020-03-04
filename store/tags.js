/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
export const state = () => ({
  isLoading: false,
  response: {
    isShow: false,
    type: '',
    message: '',
  },
  tags: {},
});

export const actions = {
  async getTags({ commit }) {
    try {
      const data = await fetch('');

      const tags = await data.json();

      commit('getTagsPending');
      commit('getTagsSuccess', tags);
    } catch (error) {
      commit('getTagsFailed', error);
    }
  },
};

export const mutations = {
  getTagsSuccess(state, tags) {
    state.response = {
      isShow: false,
      type: 'success',
      message: 'get tags success',
    };
    state.isLoading = false;
    state.tags = tags;
  },
  getTagsFailed(state, error) {
    state.response = {
      isShow: true,
      type: 'danger',
      message: error,
    };
    state.isLoading = false;
  },
  getTagsPending(state) {
    state.isLoading = true;
  },
};
