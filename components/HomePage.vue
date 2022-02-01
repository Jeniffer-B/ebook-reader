<template>
  <div class="max-h-full">
    <MyNav />
    <div class="bgImg">
      <div>
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
      <ul>
        <li></li>
      </ul>
    </div>
    <Footer />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import MyNav from '../components/MyNav.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'HomePage',
  components: {
    MyNav,
    Footer
  },
  computed: {
    bookTitle: {
      get () {
        return this.$store.state.title
      },
      set (value) {
        this.$store.commit('SEARCH_BY_TITTLE', value)
      }
    },
    ...mapActions({
      SEARCH_BY_TITTLE: 'SEARCH_BY_TITTLE'
    })
  },
  methods: {
    openBookInfo () {
      const searckBook = document.getElementById('searchInput').value
      if (this.$store.state.title === searckBook) {
        return this.$store.dispatch('SEARCH_BY_TITTLE')
      } else {
        window.alert('libro no encontrado')
      }
    }
  }
}
</script>
<style scoped>
  .bgImg{
    background-image: url('https://images.pexels.com/photos/2228557/pexels-photo-2228557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;
    background-repeat:   no-repeat;
    background-position: center center;
    width: 100%;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bgImg div {
    width: 50%;
    height: 100px;
    display: flex;
  }
  .searchInput{
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
</style>
