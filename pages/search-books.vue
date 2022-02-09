<template>
  <div>
    <MyNav />
    <div class="containerNav">
      <Search />
    </div>
    <!-- <div
      v-if="this.$store.totalResults === 0 || this.$store.bookSearchQuery === null"
    >
      Libro no encontrado
    </div> -->
    <FoundBooksList />
    <Footer />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import MyNav from '../components/MyNav.vue'
import Footer from '../components/Footer.vue'
import Search from '../components/Search.vue'
import FoundBooksList from '../components/FoundBooksList.vue'
export default {
  name: 'IndexPage',
  components: {
    MyNav,
    Search,
    FoundBooksList,
    Footer
  },
  mounted () {
    if (typeof this.bookSearchQuery === typeof '') {
      this.getBooksByTitle()
    }
  },
  methods: {
    ...mapActions({
      getBooksByTitle: 'getBooksByTitle'
    }),
    ...mapGetters({
      bookSearchResults: 'bookSearchResults'
    }),
    ...mapGetters({
      totalResults: 'totalResults'
    })
  }
}
</script>
<style scoped>

</style>
