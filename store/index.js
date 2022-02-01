export const state = () => ({
  title: '',
  books: null
})
export const mutations = {
  SEARCH_BY_TITTLE (state, book) {
    state.title = book
  }
}
// export const getters = {
// }
// export const actions = {
//   async getBooksByTitle (state) {
//     let books
//     fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${state.state.title}`)
//       .then(response => response.json())
//       .then(books = response.items.map(book => book.volumeInfo))
//     state.books.push(books)
//     console.log(books)
//   }
// }
