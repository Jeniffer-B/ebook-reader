<template>
  <div class="loginContainer">
    <MyNav />
    <div class="formContainer">
      <div v-if="this.validUser === false">
        <strong>Usuario no encontrado!</strong>
      </div>
      <div class="formBox">
        <form id="myform" @submit.prevent="submitUser">
          <div>
            <input
              v-model="user"
              type="text"
              required="required"
              minlength="5"
              :nombre="'Usuario'"
              placeholder="usuario"
            >
          </div>
          <div>
            <input
              v-model="password"
              type="password"
              required="required"
              autocomplete="new-password"
              :nombre="'Contraseña'"
              placeholder="Contraseña"
            >
          </div>
          <button
            type="submit"
            value="userLogin"
          >
            Login
          </button>
          <button
            type="submit"
            @click="redirectNewUser"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import MyNav from '@/components/MyNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'LoginForm',
  components: {
    MyNav,
    Footer
  },
  data () {
    return {
      user: '',
      password: '',
      validUser: null,
    }
  },
  mounted() {
    this.loadLocalStorage()
  },
  methods: {
    redirectNewUser () {
      this.$router.push('/registrationNewUser')
    },
    submitUser () {
      this.loginUser({loginUser: this.user, loginPassword: this.password})
      // if(this.$store.userLogged === false) {
      //   this.validUser = false
      // } else {
      //   this.validUser = true
      // }
      const logeduser = {
        user: this.user,
        password: this.password
      }
    },
    ...mapActions([
      "loadLocalStorage",
      "loginUser"
    ])
  }
}
</script>
<style scoped>
  .formContainer{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 700px; 
  }
  .formBox{
    display: flex;
    justify-content: center;
    width: 40%;
    padding: 3% 3%;
    background-color: #FBEAFF;
  }
  input{
    width: 100%;
    height: 40px;
    padding: 4% 4%;
    margin: 2% 2%;
    border-bottom: #000 2px solid;
  }
  button{
    background-color: cadetblue;
  }
</style>
