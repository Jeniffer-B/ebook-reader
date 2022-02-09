<template>
  <div>
    <MyNav />
    <div class="formContainer">
      <div v-if="this.submitUser === false">
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
    width: 40%;
    height: auto;
    background-color: #FBEAFF;
  }
  .formBox{
    display: flex;
    justify-content: center;
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
