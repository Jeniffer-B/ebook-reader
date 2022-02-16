export const state = () => ({
  bookSearchQuery: null,
  bookSearchResults: null,
  totalResults: [],
  users: [],
  userLogged: false,
  userId: null
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
    newUser.favList = []
    newUser.readingList = []
    state.users.push(newUser)
    localStorage.setItem('users', JSON.stringify(state.users))
  },
  SET_USERS (state, users) {
    state.users = users
  },
  LOGIN_USER (state, userId) {
    state.userLogged = true
    state.userId = userId
  },
  ADD_FAV_BOOK (state, {id, list}) {
    state.users[state.userId][list].push(id)
    localStorage.setItem('users', JSON.stringify(state.users))
  }
}
export const getters = {
  bookSearchResults: state => state.bookSearchResults,
  isUserLoggedIn: state => state.userLogged,
  currentUser: state => {
    if (state.userId === null) {
      return null
    }
    return state.users[state.userId]
  }
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
          results = response.items
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
  loadLocalStorage ({ commit }) {
    let users = localStorage.getItem('users')
    if (users === null) {
      users = []
    } else {
      users = JSON.parse(users)
    }
    commit('SET_USERS', users)
  },
  loginUser ({ state, commit }, { loginUser, loginPassword }) {
    const userId = state.users.findIndex(user => user.user === loginUser && user.password === loginPassword)
    if (userId) {
      commit('LOGIN_USER', userId)
    }
  }
}
