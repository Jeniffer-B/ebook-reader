<template>
  <div class="bodyContainer" v-on:click="openbookInfo">
    <div class="containerImg">
      <img
        v-if="!book.volumeInfo.imageLinks"
        src="https://books.google.es/googlebooks/images/no_cover_thumb.gif"
        alt="no-cover"
      >
      <img v-else :src="book.volumeInfo.imageLinks.thumbnail" alt="book-cover">
    </div>
    <div class="bookImformation">
      <h1>{{ book.volumeInfo.title }}</h1>
      <p>{{ bookAuthors }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BookInfoCard',
  props: {
    book: Object
  },
  computed: {
    bookAuthors () {
      if (this.book.volumeInfo.authors.length === 0) {
        return []
      }
      return this.book.volumeInfo.authors.join(', ')
    }
  },
  methods:{
    openbookInfo() {
      this.$router.push(`/book-info/${this.book.id}`)
    },
     ...mapGetters({
      bookSearchResults: 'bookSearchResults'
    })
  }
}
</script>
<style scoped>
  .bodyContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0 15px 30px 1px rgba(209, 190, 190, 0.31);
    background: rgba(255, 255, 255, 0.90);
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
    height: auto;
    width: 45%;
    margin: 2% 2%;
  }
  .containerImg{
    width: 20%;
  }
  .containerImg img{
    width: 150px;
    height: auto;
    margin: 0.5%;
  }
  .bookImformation{
    margin: 2% 2%;
  }
  .bookImformation p{
    margin: 2% 2%;
  }
</style>
