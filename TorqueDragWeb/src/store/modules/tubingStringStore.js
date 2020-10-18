import { $http } from 'boot/axios' 

const state = {
    pipes:[]
  }

  const getters = {
    pipes(state){
      return state.pipes;
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