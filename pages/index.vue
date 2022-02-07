<template>
  <div>
    <MyNav />
    <HomePage />
    <Footer />
  </div>
</template>
<script>
import MyNav from '../components/MyNav.vue'
import Footer from '../components/Footer.vue'
import HomePage from '../components/HomePage.vue'
export default {
  name: 'IndexPage',
  components: {
    HomePage,
    MyNav,
    Footer
  }
}
</script>
