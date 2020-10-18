import { $http } from 'boot/axios' 

const state = {
    deviationSurveys:[]
  }

  const getters = {
    deviationSurveys(state){
      return state.deviationSurveys;
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