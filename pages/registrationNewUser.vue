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
          <form class="myform" @submit.prevent="submitNewUserForm">
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
      this.$router.push('/loginForm')
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
    height:100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #ECECEC;
  }
  .textInformationNewUser{
    width: 30%;
    height: auto;
    border-right: #d8918d 3px solid;
  }
  .textInformationNewUser p{
    padding: 2% 2%;
    margin: 1% 1%;
    text-align: justify;
  }
  .formContainer{
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .formBox{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 2% 2%;
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
  button {
    background-color: #eee;
    border: none;
    font-size: 1rem;
    width: 80%;
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
    .newUserContainerBox{
      flex-direction: column;
    }
    .textInformationNewUser{
    width: 90%;
    height: auto;
    font-size: 1em;
    border-bottom: #d8918d 3px solid;
  }
  .textInformationNewUser p{
    padding: 2% 2%;
    margin: 1% 1%;
    text-align: justify;
  }
  .formContainer{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 4% 2%;
  }
  input{
    width: 100%;
    height: 40px;
    padding: 2% 2%;
    margin: 2% 2%;
  }
  button {
    height: 30px;
  }

  }
</style>
