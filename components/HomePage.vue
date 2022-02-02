<template>
  <div class="max-h-full bgImg">
    <Search />
    <div
      v-for="book in bookSearchResults"
      :key="book.title"
      class="bookInfo"
    >
      <p>
        {{book.title}}
      </p>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import Search from '../components/Search.vue'
export default {
  name: 'HomePage',
  components: {
    Search
  },
  computed: {
    ...mapGetters({
      bookSearchResults: 'bookSearchResults'
    }) 
  }
}
</script>
<style scoped>
  .bgImg {
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
</style>
