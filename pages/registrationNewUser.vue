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
      <div class="formBox">
        <form @submit.prevent="createNewUser">
          <div>
            <input
              v-model="name"
              :nombre="'Nombre'"
              :state="validationState"
              placeholder="Nombre"
            >
          </div>
          <div>
            <input
              v-model="subName"
              :nombre="'Apellidos'"
              :state="validationState"
              placeholder="Apellidos"
            >
          </div>
          <div>
            <input
              v-model="user"
              :nombre="'Usuario'"
              :state="validationState"
              placeholder="usuario"
            >
          </div>
          <div>
            <input
              v-model="email"
              :nombre="'Email'"
              :state="validationState"
              placeholder="Email"
            >
          </div>
          <div>
            <input
              v-model="password"
              :nombre="'Contraseña'"
              :state="validationState"
              placeholder="Contraseña"
            >
          </div>
          <div>
            <input
              v-model="confirmPassword"
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
      validationState: null
    }
  },
  methods: {
    createNewUser () {
      const newUser = {
        nombre: this.name,
        apellidos: this.subName,
        email: this.email,
        password: this.password
      }
      debugger
    }
  }
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
