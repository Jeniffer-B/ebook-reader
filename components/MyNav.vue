<template>
  <div class="navHome">
    <h1 class="text-4xl">
      eBook
    </h1>
    <div class="navspace" />
    <div class="iconsNav">
      <img src="../static/icons/libreta.png">
      <p>Mi librería</p>
    </div>
    <div class="iconsNav">
      <img src="../static/icons/contraseña.png">
      <p>Login</p>
    </div>
    <div class="iconsNav">
      <img src="../static/icons/user.png">
      <p>Registrate</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyNav'
}
</script>
<style scoped>
  .navHome{
    display: flex;
    justify-content: flex-end;
    padding: 1% 3%;
    background-color: #D5B1AF;
  }
  .navspace{
    flex-grow: 8;
  }
  .iconsNav{
    display: flex;
    align-items: center;
    margin-right: 1%;
  }
  .iconsNav img{
    max-width: 40px;
    margin: 5px;
  }
</style>
