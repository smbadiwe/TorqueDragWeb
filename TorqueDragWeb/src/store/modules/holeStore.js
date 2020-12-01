import { $http } from 'boot/axios' 

const state = {
    holeSections:[],
    isImportDialogVisible: false,
    holeSection: {}
  }

  const getters = {
    holeSections(state){
      return state.holeSections;
    },
    isImportDialogVisible(state){
      return state.isImportDialogVisible;
    },
    holeSection(state){
      return state.holeSection;
    }
}

const mutations = {
  PostHoleSections(state){
    state.isImportDialogVisible = false;
  },
  PostHoleSection(state, payload){
    state.holeSection = payload;
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
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    return new Promise((resolve, reject) => {
  

       $http.post('HoleSections/GetHoleSections', payload, config)
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
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }
    return new Promise((resolve, reject) => {
  

       $http.post('HoleSections/PostHoleSection', payload, config)
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
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    state.holeSections = [];
    state.holeSections = payload.holeSections;

    return new Promise((resolve, reject) => {
  
      console.log("payload: ", payload)
       $http.post('HoleSections/PostHoleSections', payload, config)
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