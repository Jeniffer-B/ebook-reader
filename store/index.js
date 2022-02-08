export const state = () => ({
  bookSearchQuery: null,
  bookSearchResults: null,
  totalResults: [],
  users: [],
  userLogged: false
})

export const mutations = {
  SET_BOOK_SEARCH_QUERY (state, book) {
    state.bookSearchQuery = book
  },
  SET_BOOK_SEARCH_RESULTS (state, results) {
    state.bookSearchResults = results
  },
  SET_TOTAL_BOOKS_RESEARCH (state, totalResults) {
    state.totalResults = totalResults
  },
  ADD_USER (state, newUser) {
    state.users.push(newUser)
    localStorage.setItem('users', JSON.stringify(state.users))
  },
  SET_USERS (state, users) {
    state.users = users
  },
  LOGIN_USER (state) {
    state.userLogged = true
  }
}
export const getters = {
  bookSearchResults: state => state.bookSearchResults,
  isUserLoggedIn: state => state.userLogged
}
export const actions = {
  async getBooksByTitle ({ commit, state }) {
    if (state.bookSearchQuery === null) {
      console.error('search query is empty')
      return
    }
    let results
    let totalResults
    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${state.bookSearchQuery}`)
      .then(response => response.json())
      .then((response) => {
        totalResults = response.totalItems
        if (totalResults === 0) {
          window.alert(`No hay resultados buscando por: "${state.bookSearchQuery}"`)
          results = []
        } else {
          results = response.items.map(book => book.volumeInfo)
        }
        commit('SET_BOOK_SEARCH_RESULTS', results)
      })
  },
  getUsers ({ commit }) {
    const users = JSON.parse(localStorage.getItem('users'))
    commit('SET_USERS', users)
  },
  isUserLoggedIn ({ state }, user) {
    return state.users.includes(user)
  },
  registeredUser ({ commit }, newUser) {
    commit('ADD_USER', newUser)
  },
  login ({ commit, dispatch, state }, { user, password }) {
    if (dispatch('isUserLoggedIn', user)) {
      const user = state.usuarios.find(user => user.user === user)
      if (user.password === password) {
        commit('LOGIN_USER')
      }
    }
  }
}
