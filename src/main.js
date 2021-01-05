import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import vueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/common.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vueAxios,axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
