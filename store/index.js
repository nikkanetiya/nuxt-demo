import items from './items.json'

export const state = () => ({
  items: items
})

export const mutations = {
  setItems(state, items) {
    state.items = items
  }
}

export const getters = {
  //
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    commit('setItems', items)
  }
}
