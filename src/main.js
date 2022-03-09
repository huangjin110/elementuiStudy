import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from '@/api/http'
import vueAxios from 'vue-axios'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/common.css'

// 自定义指令
import inputFilterMoney from '@/directives/inputFilterMoney'
// Utils
import { overTextDom } from '@/utils/utlis.js'

Vue.config.productionTip = false
Vue.prototype.overTextDom = overTextDom
Vue.use(ElementUI)
Vue.use(vueAxios,axios)

// 注册自定义指令
Vue.directive('inputFilter',inputFilterMoney)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
