import { $http } from 'boot/axios' 

const state = {
    holeSections:[],
    isImportDialogVisible: false
  }

  const getters = {
    holeSections(state){
      return state.holeSections;
    },
    isImportDialogVisible(state){
      return state.isImportDialogVisible;
    }
}

const mutations = {
  PostHoleSection(state){
    state.isImportDialogVisible = false;
  },
  SetisImportDialogVisible(state, payload){
    state.isImportDialogVisible = payload;
  },
  GetHoleSections(state, payload){
    state.holeSections = payload;
  }

}

const actions = {
  GetHoleSections(context, payload)
  {
    state.holeSections = [];

    return new Promise((resolve, reject) => {
  

       $http.post('HoleSections/GetHoleSections', payload)
        .then(response => {
            
          context.commit('GetHoleSections', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetHoleSections error")
          reject(error)
        })
    })
  },
  PostHoleSection(context, payload)
  {

    return new Promise((resolve, reject) => {
  

       $http.post('HoleSections/PostHoleSection', payload)
        .then(response => {
            
          context.commit('PostHoleSection', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostHoleSection error")
          reject(error)
        })
    })
  },
  PostHoleSections(context, payload)
  {
    state.holeSections = [];

    return new Promise((resolve, reject) => {
  

       $http.post('HoleSections/PostHoleSections', payload)
        .then(response => {
            
          context.commit('PostHoleSections', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostHoleSections error")
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