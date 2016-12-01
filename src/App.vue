<template>
  <div id="app">
      <h2>todos</h2>
    <router-view></router-view>
  </div>
</template>

<script>
    import firstcomponent from './components/firstComponent.vue';
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            firstcomponent
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    
    a {
        color: #42b983;
    }
    *{
      margin:0;
      padding: 0;
    }
</style>