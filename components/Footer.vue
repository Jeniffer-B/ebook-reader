<template>
  <footer>
    <ul>
      <li>Diseñado por Jeniffer B.</li>
      <li>IT Academy 2022.</li>
      <li>Iconos e imagenes sin derechos de autor.</li>
    </ul>
  </footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
  footer{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D5D5D3;
    height: 100px;
  }
  ul{
    list-style: none;
  }
  li{
    display: inline;
    padding: 20px;
  }
</style>
