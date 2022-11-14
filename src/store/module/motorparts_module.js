import axios from "axios"
 export const state = {
    motor : []
}
 export const getters = {
    get_motor : (state)=>state.motor
}
 export const mutations = {
    set_motor :(state,data) => state.motor = data
}
 export const actions = {
    async fetchMotor({commit}){
        try{
            var response = await axios.get("http://www.onwaymechanic.com/api/vendor/detail/janta-garage")
            console.warn(response.data.data)
            commit('set_motor',response.data.data)
        } catch(e){
            console.warn(e)
        }
    }
}
