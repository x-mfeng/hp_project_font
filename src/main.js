// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import '@/icons' // icon
import '@/styles/index.scss' // global css

import store from './store';
import '@/permission'; // permission control
// 自定义表格工具组件
import RightToolbar from "@/components/RightToolbar";

Vue.use(ElementUI)

Vue.config.productionTip = false
// 全局方法挂载
Vue.component('RightToolbar', RightToolbar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
