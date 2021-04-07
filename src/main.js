import Vue from 'vue'
import App from './App.vue'
import '@/assets/style.css'
import VueRouter from 'vue-router'

// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
import Layout from './components/Layout'

Vue.use(VueRouter);
const routes=[
  {path:'/', component:Layout}

]
const router= new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
