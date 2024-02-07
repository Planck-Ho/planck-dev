import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routes'
import StickyTablePlugin from '@/plugins/stickyTable'

createApp(App).use(StickyTablePlugin).use(router).use(ElementPlus).mount('#app')
