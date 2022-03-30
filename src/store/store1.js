import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex) //在vue应用中安装vuex
let store = new Vuex.Store({
state:{count:0},//存放数据
// state:{num:0},
mutations:{
    //用户提交的方法
    increment(state,payload){
        console.log(payload)
        state.count =state.count+payload
        
    },
    decrement(state,payload){
        state.count=state.count -payload
    }
},
actions:{
    asyncincrement(context,payload){
        console.log(payload)
        // 存放异步的提交mutation
    // 每一个action的第一个参数是上下文对象
        setTimeout(function(){
            context.commit("increment",payload)
        },2000)
    }
}
})
export default store