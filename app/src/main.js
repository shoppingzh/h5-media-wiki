import { createApp } from 'vue'

import ant from './plugins/ant-design'
import './plugins/tailwindcss'

import App from './App.vue'
import router from './router'

import './styles/index.less'

createApp(App)
  .use(router)
  .use(ant)
  .mount('#app')
