<template>
  <div>
    <MyNav />
    <div>
      <strong>info libros completa</strong>
        <div class="bookImformation">
   
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
  computed: {
    ...mapGetters({
      bookSearchResults: 'bookSearchResults'
    })
  },
  mounted() {
      debugger
  }
  }
</script>
