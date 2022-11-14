import axios from "axios"
 export const state = {
    repair : []
}
 export const getters = {
    get_repair : (state)=>state.repair
}
 export const mutations = {
    set_repair :(state,data) => state.repair = data
}
 export const actions = {
    async fetchRepair({commit}){
        try{
            var response = await axios.get("http://www.onwaymechanic.com/api/vendor?per_page=5")
            console.warn(response.data.data)
            commit('set_repair',response.data.data)
        } catch(e){
            console.warn(e)
        }
    }
}
