<template>
  <div class="navHome">
    <h1 class="text-4xl">
      eBook
    </h1>
    <div class="navspace" />
    <IconsMenuNav />
  </div>
</template>

<script>
import IconsMenuNav from '../components/IconsMenuNav.vue'
export default {
  name: 'MyNav',
  components: {
    IconsMenuNav
  }
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
</style>
