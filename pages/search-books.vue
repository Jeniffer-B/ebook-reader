<template>
  <div>
    <MyNav />
    <Search />
    <FoundBooksList />
    <Footer />
  </div>
</template>
<script>
import MyNav from '../components/MyNav.vue'
import Footer from '../components/Footer.vue'
import Search from '../components/Search.vue'
import FoundBooksList from '../components/FoundBooksList.vue'
import {mapActions} from 'vuex'
export default {
  name: 'IndexPage',
  components: {
    FoundBooksList,
    MyNav,
    Footer,
    Search
  },
  mounted() {
      this.getBooksByTitle()
  },
  methods: {
      ...mapActions({
        getBooksByTitle: 'getBooksByTitle'
      }),
  }
}
</script>

