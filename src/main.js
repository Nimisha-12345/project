import Vue from 'vue'
import App from './App.vue'
import '@/assets/style.css'
import VueRouter from 'vue-router'
import Form from './components/Form.vue'
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
import search from './components/search.vue'

Vue.use(VueRouter);
const routes=[
  {path:'/', component:search},
  
  {path:'/form', component:Form}
]
const router= new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
