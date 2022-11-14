import axios from "axios"
 export const state = {
    garage : []
}
 export const getters = {
    get_garage : (state)=>state.garage
}
 export const mutations = {
    set_garage :(state,data) => state.garage = data
}
 export const actions = {
    async fetchGarage({commit}){
        try{
            var response = await axios.get("http://www.onwaymechanic.com/api/category")
            console.warn(response.data.data)
            commit('set_garage',response.data.data)
        } catch(e){
            console.warn(e)
        }
    }
}
