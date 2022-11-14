import axios from "axios"
 export const state = {
    nearby : []
}
 export const getters = {
    get_nearby : (state)=>state.nearby
}
 export const mutations = {
    set_nearby :(state,data) => state.nearby = data
}
 export const actions = {
    async fetchNearby({commit}){
        try{
            var response = await axios.get("http://www.onwaymechanic.com/api/nearbysearch?lat=26.2&long=87.5&shopname=workshop&address=&=&services=2")
            console.warn(response.data.data)
            commit('set_nearby',response.data.data)
        } catch(e){
            console.warn(e)
        }
    }
}
