<template>
  <div>
    <MyNav />
    <div class="formContainer">
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
      password: ''
    }
  },
  methods: {
    redirectNewUser () {
      this.$router.push('/registrationNewUser')
    },
    submitUser () {
      // debugger
      this.loginUser()
    },
    loginUser () {
      if (this.$store.state.users.find(user => user.user === this.user && user.password === this.password)) {
        console.log('usuario' + ' ' + this.user + ' ' + ' logeado')
        this.$store.state.userLogged = true
      } else {
        alert('usurio no encontrado')
      }
    }
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
