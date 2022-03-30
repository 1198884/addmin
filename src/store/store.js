import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex)
import state from "../store/state"
import mutations from "./mutatios/mutatins";
import actions from "./actions/actions";
let store =new Vuex.Store({
    state,
    mutations,
    actions
})
export default store