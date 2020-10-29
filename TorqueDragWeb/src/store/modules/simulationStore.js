import { $http } from 'boot/axios' 

const state = {
    PipeCalculatedVariables: [],
    visible: false,
    showSimulatedReturnData: true
  }

  const getters = {
    PipeCalculatedVariables(state){
      return state.PipeCalculatedVariables;
    },
    visible(state){
        return state.visible;
    }
}

const mutations = {
    RunSimulation(state, payload){
    console.log("PipeCalculatedVariables: ", payload)
    state.PipeCalculatedVariables = payload;
    state.visible = false;
    state.showSimulatedReturnData = true

  }

}

const actions = {

RunSimulation(context, payload)
  {
    context.state.visible = true;
    context.state.showSimulatedReturnData = false
    this.$router.push('/simulationConsole');

    console.log("response: ", payload)

    return new Promise((resolve, reject) => {
       $http.post('Commons/RunSimulation', payload)
        .then(response => {

        console.log("response: ", response)

          context.commit('RunSimulation', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("RunSimulation error")
          context.state.visible = false;
          context.state.showSimulatedReturnData = true
          reject(error)
        })
    })
  }

}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}