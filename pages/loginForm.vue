<template>
  <div class="loginContainer">
    <MyNav />
    <div class="formContainer">
      <div v-if="this.validUser === false">
        <strong>Usuario no encontrado!</strong>
      </div>
      <div class="formBox">
        <form class="myform" @submit.prevent="submitUser">
          <h2 class="text-2xl">Loging</h2>
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
          <div class="buttonContainer">
            <button
              type="submit"
              value="userLogin"
            >
              Login
          </button>
          </div>
          <div class="buttonContainer">
            <p>¿No tienes cuenta? Regístrate!</p>
            <button
              type="submit"
              @click="redirectNewUser"
            >
              Crear cuenta
            </button>
          </div>
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
  .loginContainer {
    justify-content: center;
    align-items: center;
    background-color: #ECECEC;
  }
  .formContainer{
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center; 
  }
  .formBox{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: auto;
    padding: 2% 2%;
    margin: 2% 2%;
    border-radius: 66px;
    background: #d5b1af;
    box-shadow:  20px 20px 66px #b39b9b,
                -20px -20px 66px #ffffff;
  }
  .myform , 
  .myform div {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  input{
    width: 100%;
    height: 60px;
    padding: 4% 4%;
    margin: 4% 4%;
    border-radius: 2%;
  }
  .buttonContainer{
    margin: 1% 1%;
  }
  button {
    background-color: #eee;
    border: none;
    font-size: 1rem;
    width: 100%;
    height: 50px;
    margin: 0.5%;
    border-radius: 1rem;
    color:#d8918d;
    box-shadow: 0 0.4rem #dfd9d9;
    cursor: pointer;
  }

  button:active {
    color: white;
    box-shadow: 0 0.2rem #dfd9d9;
    transform: translateY(0.2rem);
  }

  button:hover:not(:disabled) {
    background: #BB7E91;
    color: white;
    text-shadow: 0 0.1rem #bcb4b4;
  }

  button:disabled {
    cursor: auto;
    color: grey;
  }
  @media (max-width: 800px) {
    .formBox {
      width: 80%;
    }
    input{
      height: 40px;
    }
  }
</style>
