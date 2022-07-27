<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  created(){
    console.log("ssssssssssssss")
    axios.get('http://localhost:9528/api/cgi-bin/login1').then(result =>{
      console.log("login:"+result)
    })
    axios.get('/api/cgi-bin/login2').then(result =>{
      console.log("login:"+result)
    })
    axios.get('http://localhost:8080/api/cgi-bin/login3').then(result =>{
      console.log("login:"+result)
    })
    axios.get('/appi/cgi-bin/login4').then(result =>{
      console.log("login:"+result)
    })
  }
}
</script>
