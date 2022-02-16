<template>
  <div class="idContainer">
    <MyNav />
    <div class="selectBookContainer">
      <div v-if="selectedBook !== null">
        <div class="containerImg">
          <img
            v-if="!selectedBook.volumeInfo.imageLinks"
            src="https://books.google.es/googlebooks/images/no_cover_thumb.gif"
            alt="no-cover"
          >
          <img v-else :src="selectedBook.volumeInfo.imageLinks.thumbnail" alt="book-cover">
        </div>
        <div class="title">
          {{ selectedBook.volumeInfo.title }}
        </div>
        <div class="bookImformation">
          <div> <strong>Autor:</strong> {{ bookAuthors }}</div>
          <div><strong>Editorial:</strong> {{ selectedBook.volumeInfo.publisher }}</div>
          <div><strong>Fecha de publicación:</strong> {{ selectedBook.volumeInfo.publishedDate }}</div>
          <div>
            <strong>Sinopsis:</strong>
          </div>
          <div class="bookDescription">
            {{ selectedBook.volumeInfo.description }}
          </div>
          <div class="selectLibrary">
            <strong>Añadir a mi biblioteca</strong>
            <select v-model="selected">
              <option disabled value="">
                Selecciona estante
              </option>
              <option value="favList">Favoritos</option>
              <option value="readingList">Leyendo</option>
            </select>
            <span>Seleccionado: {{ selected }}</span>
            <button
              @click="selectBook"
            >
                Select
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import MyNav from '@/components/MyNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'BookInfoId',
  components: {
    MyNav,
    Footer
  },
  data () {
    return {
      selectedBook: null,
      selected: ''
    }
  },
  computed: {
    bookAuthors () {
      if (this.selectedBook.volumeInfo.authors.length === 0) {
        return []
      }
      return this.selectedBook.volumeInfo.authors.join(', ')
    },
    ...mapGetters({
      bookSearchResults: 'bookSearchResults'
    })
  },
  mounted () {
    if (this.$store.state.userLogged === false) {
      this.redirectHome()
      alert('Debes acceder a tu cuenta para ver esta información')
    }
    if (this.$store.state.bookSearchResults === null) {
      this.redirectHome()
    }
    this.selectedBook = this.$store.state.bookSearchResults.find(book => book.id === this.$route.params.id)
    if (this.selectedBook === null) {
      this.redirectHome()
    }
  },
  methods: {
    ...mapMutations({
      addFavBook: "ADD_FAV_BOOK"
    }),
    redirectHome () {
      this.$router.push('/')
    },
    selectBook () {
      // debugger
      this.addFavBook({id: this.selectedBook, list: this.selected})
    }
  }
}
</script>
<style scoped>
  .selectBookContainer{
    display: flex;
    background-color: #ECECEC;
  }
  .containerImg{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3% 5%;
    padding: 2% 2%;
    border-bottom: #000 3px solid;
  }
  .title{
    text-align: center;
    font-size: 2em;
  }
  .titleItems{
    font-size: 2em;
  }
  .bookImformation{
    height:100vh;
    display: flex;
    flex-direction: column;
    margin: 2% 5%;
     padding: 2% 2%;
  }
  .bookImformation div {
    margin: 1% 3%;
  }
  .bookDescription{
    text-align: justify;
    padding: 0 3%;
  }
  .selectLibrary{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
