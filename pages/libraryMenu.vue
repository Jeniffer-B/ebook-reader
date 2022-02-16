<template>
  <div>
    <MyNav />
    <div>
      <div class="containerLibrary">
        <h2 class="text-2xl">
          <strong> Libreria</strong>
        </h2>
        <div class="sectionContainer">
          <div class="bookcategory favoritos" @click="openFavoriteList">
            <p class="text-2xl">
              FAVORITOS
            </p>
          </div>
          <div class="bookcategory leyendo" @click="openReadingList">
            <p class="text-2xl">
              LEYENDO
            </p>
          </div>
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
  },
  mounted () {
    if (this.$store.state.userLogged === false) {
      this.$router.push('/loginForm')
      alert('Debes acceder a tu cuenta para ver esta información')
    }
  },
  methods: {
    openFavoriteList () {
      this.$router.push('/favoriteList')
    },
    openReadingList () {
      this.$router.push('/readingList')
    }
  }
}
</script>
<style scoped>
  .containerLibrary{
    height:100vh;
    display: flex;
    flex-direction: column;
    background-color: #ECECEC;
  }
  h2{
    text-align: center;
    letter-spacing: 0.3em;
    margin: 3% 3%;
  }
  .sectionContainer{
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .bookcategory{
    margin: 0 5%;
    width: 20%;
    height: 50%;
    border-radius: 1px;
    box-shadow:  8px 8px 12px #D1CEE1,
                 -8px -8px 12px #ECECEC;
  }
  .bookcategory p{
    margin: 25% 2%;
    text-align: center;
    letter-spacing: 0.2em;
    color: #fff;
  }
  .favoritos{
    background-color: #5E7F7E;
  }
  .leyendo{
    background-color: #81989E ;
  }
  @media (max-width: 800px){
    .sectionContainer{
      flex-direction: column;
    }
    .bookcategory{
      margin: 0 1%;
      width: 50%;
      height: 20%;
    }
  }
</style>
