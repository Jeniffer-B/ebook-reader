<template>
  <div>
    <MyNav />
    <div class="listBooks">
      <div class="tittle"><h2>Favoritos</h2></div>
      <FavBook v-for="book in currentUser.favList"
        :key="book.id"
        :book-id="book.id"
        :title="book.volumeInfo.title"
        :authors="getBookAuthors(book.volumeInfo)"
        :bookThumbnail="book.volumeInfo.imageLinks.thumbnail"
      />
    </div>
    <Footer />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import FavBook from '@/components/FavBook.vue'
import MyNav from '@/components/MyNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'FavoriteList',
  components: {
    MyNav,
    Footer,
    FavBook
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser"
    })
  },
  methods: {
    getBookAuthors(bookData) {
      if (bookData.authors === undefined) {
        return []
      }
      return bookData.authors
    }
  }
}
</script>
<style scoped>
  .listBooks{
    height:100vh;
    background-color: #ECECEC;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .tittle{
    width: 100%;
    height: auto;
    text-align: center;
  }
  h2{
    font-size: 1.5em;
    letter-spacing: 0.2em;
    padding: 2% 2%;
  }
</style>
