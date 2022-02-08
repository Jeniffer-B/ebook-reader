<template>
  <div>
    <MyNav />
    <div>
      <h2>Mi libreria</h2>
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
