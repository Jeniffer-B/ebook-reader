<template>
  <div class="listBg">
    <BookInfoCard  
      v-for="book in bookSearchResults"
      :key="book.id"
      :book="book" 
    /> 
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import BookInfoCard from '../components/BookInfoCard.vue'
export default {
  name: 'FoundBooksList',
  components: {
      BookInfoCard
  },
  computed: {
    ...mapGetters({
      bookSearchResults: 'bookSearchResults'
    }) 
  }
}
</script>
<style scoped>
  .listBg{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
  }
</style>
