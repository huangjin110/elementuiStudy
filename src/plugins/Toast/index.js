import { createApp } from "vue"
import Toast from './index.vue'


export default {
    install: (app, options) => {


        app.component('MyToast', Toast)

        const div = document.createElement('div')

        div.setAttribute("id", "my-toast");

        let timer = null

        app.config.globalProperties.MyToast = (options) => {
            if (timer) {
                return
            }
            document.body.appendChild(div)

            if (typeof options === 'string') {
                options = {
                    text: options
                }
            }

            // createApp 第二个参数当作props传入

            const subApp = createApp(Toast, { ...options })

            subApp.mount('#my-toast')


            timer = setTimeout(() => {

                subApp.unmount('#my-toast')

                clearTimeout(timer)
                
                timer = null

            }, 5000)

        }
    }
} 