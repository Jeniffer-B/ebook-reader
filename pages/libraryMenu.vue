<template>
  <div>
    <MyNav />
    <div>
      <h2>Mi libreria</h2>
      <div class="containerLibrary">
        <div class="favoritos">
          <h2>FAVORITOS</h2>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import MyNav from '@/components/MyNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'LibraryMenu',
  components: {
    MyNav,
    Footer
  }
}
</script>
<style scoped>
  .containerLibrary{
    width: 100%;
    height: 600px;
  }
  .favoritos{
    width: 25%;
    height: 70%;
    background-color: cadetblue;
  }
</style>
