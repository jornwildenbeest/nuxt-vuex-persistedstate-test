export const state = () => ({
  isLoggedIn: false
})

export const mutations = {
  login (state, { isLoggedIn }) {
    state.isLoggedIn = isLoggedIn
  }
}

export const actions = {
  login ({ state, commit, dispatch, getters }) {
    commit('login', { isLoggedIn: true })
  },
  logout ({ state, commit, dispatch, getters }) {
    commit('login', { isLoggedIn: false })
  }
}

export const getters = {
  // determine if the user is authenticated based on the presence of the access token
  isAuthenticated: (state) => {
    return state.isLoggedIn
  }
}
