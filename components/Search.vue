<template>
  <div class="containerInput">
    <input
      id="searchInput"
      v-model="bookTitle"
      type="text"
      placeholder="Busca por el título (mínimo 4 carácteres)"
      class="searchInput border-2 shadow-2xl"
    >
    <button
      @click="openBookInfo"
    >
      Buscar libro
    </button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  name: 'Search',
  computed: {
    bookTitle: {
      get () {
        return this.$store.state.bookSearchQuery
      },
      set (value) {
        this.setBookSearchQuery(value)
      }
    }
  },
  methods: {
    ...mapMutations({
      setBookSearchQuery: 'SET_BOOK_SEARCH_QUERY'
    }),
    ...mapActions({
      getBooksByTitle: 'getBooksByTitle'
    }),
    openBookInfo () {
      this.getBooksByTitle()
    }
  }
}
</script>
<style scoped>
  .containerInput{
    width: 70%;
    display: flex;
    margin: 5% 2%;
    justify-content: center;
    align-items: center;
  }
  #searchInput{
    min-width: 50%;
    width: 100%;
    height: 60px;
    border-radius: 20px;
    text-align: center;
  }
  button {
    background-color: #eee;
    border: none;
    font-size: 1rem;
    width: 10em;
    height: 3em;
    margin: 0.5%;
    border-radius: 1rem;
    color:#d8918d;
    box-shadow: 0 0.4rem #dfd9d9;
    cursor: pointer;
  }

  button:active {
    color: white;
    box-shadow: 0 0.2rem #dfd9d9;
    transform: translateY(0.2rem);
  }

  button:hover:not(:disabled) {
    background: #D5B1AF;
    color: white;
    text-shadow: 0 0.1rem #bcb4b4;
  }

  button:disabled {
    cursor: auto;
    color: grey;
  }
   @media (max-width: 800px) {
     .containerInput{
       display: flex;
       flex-direction: column;
     }
      button{
        margin-top: 5%;
      }
   }
</style>
