import Vue from "vue";
import App from "./App.vue";
// 引入图表插件
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";
import myplugin from "./plugins/myplugin"
Vue.prototype.$echarts = echarts
Vue.use(myplugin) //封装插件
Vue.use(ElementUI);
Vue.config.productionTip = false;
import "./style/index.css" //全局样式
import store from "./store/store";
// 拦截ajax
if(process.env.NODE_ENV==='development'){
  require("./mock")
}
let vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
console.log(vm)