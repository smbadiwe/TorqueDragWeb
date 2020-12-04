import { $http } from 'boot/axios' 

const state = {
    mudPVTs:[],
    fluid: {
        mudName: "",
        description: "",
        mudBaseType: "",
        baseFluid: "",
        rheologyModel: "",
        rheologyModelType: ""
    },
    isImportDialogVisible: false,
  }

  const getters = {
    mudPVTs(state){
      return state.mudPVTs;
    },
    fluid(state){
      return state.fluid;
    },
    isImportDialogVisible(state){
      return state.isImportDialogVisible;
    }
}

const mutations = {
  GetFluid(state, payload){
    state.fluid = payload;
    state.rheologyOne = "";
    state.rheologyTwo =  "";
    if(state.fluid.rheologyModelType == "Rheology"){
      state.rheologyOne = state.fluid.rheologyModelType;
    }else{
      state.rheologyTwo = state.fluid.rheologyModelType;
    }
  },
  GetMudPVTs(state, payload){
    state.mudPVTs =  payload;
  },
  PostFluid(state, payload){
    state.fluid = payload;
  },
  SetisImportDialogVisible(state, payload){
    state.isImportDialogVisible = payload;
  },
  PostMudPVTs(state, payload){
    state.isImportDialogVisible = false;
  }
}

const actions = {
  GetFluid(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    return new Promise((resolve, reject) => {
  

       $http.get('Fluids/GetFluid/' + payload.designId, config)
        .then(response => {
            
          context.commit('GetFluid', response.data);
          context.dispatch('GetMudPVTs', payload);              
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetFluid error")
          reject(error)
        })
    })
  },
  GetMudPVTs(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    return new Promise((resolve, reject) => {
  

       $http.get('MudPVTs/GetMudPVTs/' + payload.designId, config)
        .then(response => {
            
          context.commit('GetMudPVTs', response.data);              
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetMudPVTs error")
          reject(error)
        })
    })
  },
  PostFluid(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    return new Promise((resolve, reject) => {
  

       $http.post('Fluids/PostFluid', payload, config)
        .then(response => {
            
          context.commit('PostFluid', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostFluid error")
          reject(error)
        })
    })
  },
  PostMudPVTs(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    state.mudPVTs = [];
    state.mudPVTs = payload.mudPVTs;

    return new Promise((resolve, reject) => {
  

       $http.post('MudPVTs/PostMudPVTs', payload, config)
        .then(response => {
            
          context.commit('PostMudPVTs', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostMudPVTs error")
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