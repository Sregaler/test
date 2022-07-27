<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created(){
    console.log("ssssssssssssss")
    axios.get('http://localhost:8081/api/cgi-bin/login1').then(result =>{
      console.log("login:"+result)
    })
    axios.get('/api/cgi-bin/login2').then(result =>{
      console.log("login:"+result)
    })
    axios.get('http://localhost:8888/api/cgi-bin/login3').then(result =>{
      console.log("login:"+result)
    })
    axios.get('/appi/cgi-bin/login4').then(result =>{
      console.log("login:"+result)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
