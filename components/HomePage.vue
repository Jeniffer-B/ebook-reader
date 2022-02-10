<template>
  <div class="max-h-full bgImg">
    <div class="containerInput">
      <input
        id="searchInput"
        v-model="searchQuery"
        type="text"
        placeholder="Busca por el título (mínimo 4 carácteres)"
        class="searchInput border-2 shadow-2xl"
      >
      <button
        @click="homePageButtonClickEvent"
      >
        Buscar libro
      </button>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
import Search from '../components/Search.vue'
export default {
  name: 'HomePage',
  components: {
    Search
  },
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    ...mapMutations({
      setBookSearchQuery: 'SET_BOOK_SEARCH_QUERY'
    }),
    ...mapActions({
      getBooksByTitle: 'getBooksByTitle'
    }),
    homePageButtonClickEvent () {
      if (this.searchQuery === '') {
        window.alert('Por favor introduzca un título para la búsqueda')
      } else {
        this.setBookSearchQuery(this.searchQuery)
        this.$router.push('/search-books')
        this.getBooksByTitle()
      }
    }
  }
}
</script>
<style scoped>
  .bgImg {
    background-image: url('https://images.pexels.com/photos/2228557/pexels-photo-2228557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;
    background-repeat:   no-repeat;
    background-position: center center;
    width: 100%;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .containerInput {
    width: 50%;
    height: 100px;
    display: flex;
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
  @media (max-width: 800px){
    .containerInput{
      flex-direction: column;
      width: 90%;
      align-items: center;
      justify-content: center;
    }
  }
</style>
