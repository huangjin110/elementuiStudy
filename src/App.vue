<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<script>
import home from './views/home/index'
import login from './views/login/index'
export default {
  components:{
    home
  }
}
</script>

<style>

</style>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;;
  background: #ccc;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
