<template>
  <div class="newUseContainerBox">
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
      <div v-if="submitted === true">
        <strong>usuario creado!</strong>
      </div>
      <div class="formBox">
        <form @submit.prevent="createNewUser">
          <div>
            <input
              v-model="name"
              type="text"
              required="required"
              :nombre="'Nombre'"
              :class="{'input-invalid': nameInput.isInvalid}"
              placeholder="Nombre"
            >
          </div>
          <div>
            <input
              v-model="subName"
              type="text"
              required="required"
              :nombre="'Apellidos'"
              :class="{'input-invalid': subName.isInvalid}"
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
            <p
              v-if="confirmPassword === !password"
            >
              La contraseña no coincide
            </p>
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
</template>
<script>
export default {
  name: 'RegistrationNewUser',
  data () {
    return {
      nameInput: {
        value: '',
      },
      name: '',
      subName: '',
      user: '',
      email: '',
      password: '',
      confirmPassword: '',
      submitted: false,
    }
  },
  computed: {
    
  },
  methods: {
    createNewUser () {
      const newUser = {
        nombre: this.name,
        apellidos: this.subName,
        usuario: this.user,
        email: this.email,
        password: this.password
      }
      this.validateNewUserForm(newUser)
    }, 
    validateNewUserForm(newUser) {
      this.validateName(newUser.nombre)
      this.validateSubname(newUser.apellidos)
      this.validateSubname(newUser.usuario)
      this.validateEmail(newUser.email)
      this.validatePassword(newUser.password)
    },
    validateName(name) {
      console.log(`validated name ${name}`)
    },
    validateSubname(subname) {
      console.log(`validated name ${subname}`)
    },
    validateUsername(username) {
      console.log(`validated name ${username}`)
    },
    validateEmail(email) {
      console.log(`validated name ${email}`)
    },
    validatePassword(password) {
      let regExp = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
      regExp.test(this.password)
      console.log(`validated name ${password}`)
    }
  },   
}
</script>
<style scoped>
  .newUseContainerBox{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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
