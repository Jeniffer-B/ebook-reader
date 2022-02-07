<template>
  <div class="bodyContainer">
    <div class="containerImg">
      <img
        v-if="!book.imageLinks"
        src="https://books.google.es/googlebooks/images/no_cover_thumb.gif"
        alt="no-cover"
      />
      <img v-else :src="book.imageLinks.thumbnail" alt="book-cover" />
    </div>
    <div class="bookImformation">
      <h1>{{ book.title }}</h1>
      <p>{{ book.authors[0]}}</p>
    </div> 
  </div>
</template>
<script>
export default {
    name: 'BookInfoCard',
    props: {
      book: Object
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
  /* .card-content{
    
  } */
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
