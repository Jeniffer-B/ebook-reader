<template>
  <div class="listBg">
    <ResearchResults
      v-for="book in bookSearchResults"
      :key="book.id"
      :book="book"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ResearchResults from './ResearchResults.vue'
export default {
  name: 'FoundBooksList',
  components: {
    ResearchResults
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
