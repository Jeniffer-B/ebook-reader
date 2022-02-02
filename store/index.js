export const state = () => ({
  bookSearchQuery: '',
  bookSearchResults: null
})

export const mutations = {
  SET_BOOK_SEARCH_QUERY (state, book) {
    state.bookSearchQuery = book
  },
  SET_BOOK_SEARCH_RESULTS(state, results) {
    state.bookSearchResults = results
  }
}
export const getters = {
  bookSearchResults: state => state.bookSearchResults
}
export const actions = {
  async getBooksByTitle ({commit, state}) {
    let books
    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${state.bookSearchQuery}`)
      .then(response => response.json())
      .then(response => {
        books = response.items.map(book => book.volumeInfo)
        commit('SET_BOOK_SEARCH_RESULTS', books)
      }
    );          
    
  }
}
