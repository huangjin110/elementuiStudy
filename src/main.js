import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import axios from '@/api/http'
import vueAxios from 'vue-axios'
import '@/assets/css/common.css'
import 'element-plus/dist/index.css'
import MyToast from '@/plugins/Toast'

// 自定义指令
import inputFilterMoney from '@/directives/inputFilterMoney'
// Utils
import { overTextDom } from '@/utils/utlis.js'

const app = createApp(App)


app.config.globalProperties.$overTextDom = overTextDom
app.config.productionTip = false
app.use(router)
app.use(vueAxios,axios)
app.use(ElementPlus).use(MyToast)
app.directive('inputFilter',inputFilterMoney)
app.mount('#app')
console.log('[ app ] >', app)
