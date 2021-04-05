<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-link to='/header'>Home</router-link>
    <router-link to='/form'>Form</router-link> -->
    <Header />
    <search />
    <Footer />
    
    <router-view></router-view>
    
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import search from './components/search'
import Footer from './components/Footer'





export default {
  name: 'App',
  components: {
    // HelloWorld
    Header,
    search,
    Footer, 
    
    
  
  }
}
    
</script>


