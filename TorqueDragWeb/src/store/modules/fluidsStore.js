import { $http } from 'boot/axios' 

const state = {
    mudPVTs:[]
  }

  const getters = {
    mudPVTs(state){
      return state.mudPVTs;
    }
}

const mutations = {

}

const actions = {


}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}