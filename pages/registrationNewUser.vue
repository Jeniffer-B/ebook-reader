<template>
  <div>
    <MyNav />
    <div class="newUserContainerBox">
      <div class="textInformationNewUser">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi soluta quis eos, unde,
          adipisci voluptatibus explicabo corporis sed architecto cupiditate debitis, optio voluptas
          laudantium recusandae delectus esse corrupti deleniti aliquid.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi soluta quis eos, unde,
          adipisci voluptatibus explicabo corporis sed architecto cupiditate debitis, optio voluptas
          laudantium recusandae delectus esse corrupti deleniti aliquid.
        </p>
      </div>
      <div class="formContainer">
        <div v-if="formIsValid === false">
          <strong>El formulario tiene algun error!</strong>
        </div>
        <div v-if="formIsValid === true">
          <strong>Usuario creado correctamente!</strong>
        </div>
        <div class="formBox">
          <form id="myform" @submit.prevent="submitNewUserForm">
            <div>
              <input
                v-model="name"
                type="text"
                required="required"
                :nombre="'Nombre'"
                placeholder="Nombre"
              >
            </div>
            <div>
              <input
                v-model="subName"
                type="text"
                required="required"
                :nombre="'Apellidos'"
                placeholder="Apellidos"
              >
            </div>
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
                v-model="email"
                type="email"
                required="required"
                :nombre="'Email'"
                placeholder="Email"
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
            <div>
              <input
                v-model="confirmPassword"
                type="password"
                required="required"
                :nombre="'ConfirmarContraseña'"
                placeholder="Confirmar contraseña"
              >
            </div>
            <button
              type="submit"
              value="newUser"
            >
              Crear cuenta
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  name: 'RegistrationNewUser',
  data () {
    return {
      name: '',
      subName: '',
      user: '',
      email: '',
      password: '',
      confirmPassword: '',
      formIsValid: null,
      isActive: true,
      hasError: false
    }
  },
  computed: {

  },
  methods: {
    submitNewUserForm () {
      const newUser = {
        name: this.name,
        subName: this.subName,
        user: this.user,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      }
      this.validateNewUserForm(newUser)
      if (this.formIsValid !== false) {
        this.formIsValid = true
      }
      if (this.formIsValid === true) {
        this.createNewUser(newUser)
      }
    },
    createNewUser (newUser) {
      this.$store.dispatch('registeredUser', newUser)
      console.log(newUser)
    },
    validateNewUserForm (newUser) {
      this.validateName(newUser.name)
      this.validateSubname(newUser.subName)
      this.validateUsername(newUser.user)
      this.validateEmail(newUser.email)
      this.validatePassword(newUser.password)
      this.validateConfirmPassword(newUser.confirmPassword, newUser.password)
    },
    validateName (name) {
      if (name.length < 4) {
        this.formIsValid = false
      }
    },
    validateSubname (subName) {
      if (subName.length < 4) {
        this.formIsValid = false
      }
    },
    validateUsername (user) {
      if (user.length < 5) {
        this.formIsValid = false
      }
    },
    validateEmail (email) {
      const regEx = /\S+@\S+\.\S+/
      if (regEx.test(email) === false) {
        this.formIsValid = false
      }
    },
    validatePassword (password) {
      const regExp = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
      if (regExp.test(password) === false) {
        this.formIsValid = false
      }
    },
    validateConfirmPassword (password, confirmPassword) {
      if (confirmPassword !== password) {
        this.formIsValid = false
      }
    }
  }
}
</script>
<style scoped>
  .newUserContainerBox{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 5%;
    height: 650px;
  }
  .textInformationNewUser{
    width: 40%;
    height: auto;
  }
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
  form{
    margin: 5% 5%;
    width: 50%;
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
