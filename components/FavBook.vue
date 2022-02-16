<template>
  <div class="bodyContainer" @click="openbookInfo">
    <div class="containerImg">
      <img
        v-if="!book-thumbnail"
        src="https://books.google.es/googlebooks/images/no_cover_thumb.gif"
        alt="no-cover"
      >
      <img v-else :src="bookThumbnail" alt="book-cover">
    </div>
    <div class="bookImformation">
      <p><strong>{{ title }}</strong></p>
      <p>{{ bookAuthors }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'FavBook',
  props: {
    bookId: String,
    book: Object,
    title: String,
    authors: Array,
    bookThumbnail: Image
  },
  methods: {
    openbookInfo () {
      this.$router.push(`/book-info/${this.bookId}`)
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
    align-content: center;
    justify-content: center;
    box-shadow: 0 15px 30px 1px rgba(209, 190, 190, 0.31);
    background: #D1CEE1;
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
    height: auto;
    width: 35%;
    margin: 2% 2%;
  }
  .containerImg{
    width: 20%;
    margin: 2% 2%
  }
  .containerImg img{
    width: 150px;
    height: auto;
  }
  .bookImformation{
    margin: 2% 2%;
    width: 40%;
    justify-content: center;
  }
  .bookImformation p{
    margin: 5% 2%;
  }
  @media (max-width: 800px) {
    .bodyContainer{
      width: 80%;
    }
    .containerImg{
    width: 30%;
  }
  }
</style>
