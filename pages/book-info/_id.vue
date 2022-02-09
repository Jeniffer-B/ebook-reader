<template>
  <div>
    <MyNav />
    <div v-if="selectedBook !== null">
      <strong>info libros completa</strong>
        <div class="bookImformation">
            {{selectedBook}}
        </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import MyNav from '@/components/MyNav.vue'
import Footer from '@/components/Footer.vue'
export default{
  name: 'bookInfo-Id',
  components: {
    MyNav,
    Footer
  },
  data() {
      return {
          selectedBook: null
      }
  },
  computed: {
    ...mapGetters({
      bookSearchResults: 'bookSearchResults'
    })
  },
  mounted() {
      if(this.$store.state.userLogged === false){
        this.redirectHome()
        alert('Debes acceder a tu cuenta para ver esta información')
      }
      if(this.$store.state.bookSearchResults === null){
        this.redirectHome()
      }
      this.selectedBook = this.$store.state.bookSearchResults.find(book => book.id === this.$route.params.id)
      if(this.selectedBook === null){
        this.redirectHome()
      }
  },
  methods: {
      redirectHome() {
        this.$router.push('/')
      }
  }
}
</script>
