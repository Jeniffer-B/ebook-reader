<template>
  <div class="iconsNav">
    <div>
      <img src="../static/icons/libreta.png">
      <p>{{libraryText}}</p>
    </div>
    <div>
      <img src="../static/icons/contraseña.png">
      <p>{{loginText}}</p>
    </div>
    <div>
      <img src="../static/icons/user.png">
      <p>{{userText}}</p>
    </div>
  </div>
</template>
<script>
export default {
	name: 'IconsMenuNav',
	data() {
		return {
			libraryText: 'Biblioteca',
			loginText: 'Login',
			userText: 'Registrate'
		}	
	}
}
</script>
<style scoped>
	.iconsNav{
    display: inline-flex;
		align-items: center;
  }
	.iconsNav div{
		display: flex;
    align-items: center;
    margin-right: 1%;
	}
  .iconsNav img{
    max-width: 40px;
    margin: 5px;
  }
</style>
