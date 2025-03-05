import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { StickyTable } from '@planckdev/element-plus/directives'
import Router from './routes'


const app = createApp(App)

app.directive('StickyElTable', StickyTable)
app
.use(ElementPlus)
.use(Router)
.mount('#app')
