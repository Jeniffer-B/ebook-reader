<template>
  <div>
    <MyNav />
    <div class="listBooks">
      <p>Favoritos</p>
    </div>
    <Footer />
  </div>
</template>
<script>
import MyNav from '@/components/MyNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'FavoriteList',
  components: {
    MyNav,
    Footer
  }
}
</script>
