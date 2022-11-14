import Vue from 'vue'
import Vuex from 'vuex'
import  * as nearby from './module/nearby_module'
import * as repair from './module/repair_module'
import * as garage from './module/garage_module'
import * as motor from './module/motorparts_module'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    nearby,
    repair,
    garage,
    motor
  }
})


