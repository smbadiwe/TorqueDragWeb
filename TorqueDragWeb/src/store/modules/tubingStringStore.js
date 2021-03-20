import { $http } from 'boot/axios' 

const state = {
    pipes:[],
    isImportDialogVisible: false,
    pipe: {},
    drillBit: {}
  }

  const getters = {
    drillBit(state){
      return state.drillBit;
    },
    pipes(state){
      return state.pipes;
    },
    isImportDialogVisible(state){
      return state.isImportDialogVisible;
    },
    pipe(state){
      return state.pipe;
    }
}

const mutations = {
  PostPipe(state, payload){
    state.pipe = payload;
  },
  PostPipes(state){
    state.isImportDialogVisible = false;
  },
  GetPipes(state, payload){
    state.pipes = payload;
  },
  GetDrillBit(state, payload){
    state.drillBit = payload;
  },
  SetisImportDialogVisible(state, payload){
    state.isImportDialogVisible = payload;
  },
  SaveTubingStringTable(state, payload){
    state.pipes.push(payload);
    console.log("pipes: ", state.pipes)
  }

}

const actions = {
  PostPipes(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    state.pipes = [];
    state.pipes = payload.pipes;

    return new Promise((resolve, reject) => {
  

       $http.post('Pipes/PostPipes', payload, config)
        .then(response => {
            
          context.commit('PostPipes', response.data)  
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Tubing strings saved successfully",
            visibility: true
          }, {root:true});    

            resolve(response)
            
        })
        .catch(error => {
          console.log("PostPipes error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Tubing strings failed to save. Please check your data",
            visibility: true
          }, {root:true});    
          reject(error)
        })
    })
  },
  PostDrillBit(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    state.drillBit = [];
    state.drillBit = payload.drillBit;

    payload.drillBit.bitSize = parseFloat(payload.drillBit.bitSize);
    payload.drillBit.numberOfBitNozzles = parseFloat(payload.drillBit.numberOfBitNozzles);
    payload.drillBit.dischargeCoefficient = parseFloat(payload.drillBit.dischargeCoefficient);
    payload.drillBit.designId = payload.designId;
    payload.drillBit.userId = payload.userId;

    return new Promise((resolve, reject) => {
  

       $http.post('DrillBits/PostDrillBit', payload, config)
        .then(response => {
            
          context.commit('PostDrillBit', response.data)  
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Drill bit saved successfully",
            visibility: true
          }, {root:true});    

            resolve(response)
            
        })
        .catch(error => {
          console.log("PostDrillBit error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Drill bit failed to save. Please check your data",
            visibility: true
          }, {root:true});    
          reject(error)
        })
    })
  },
  PostPipe(context, payload)
  {

    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }
    return new Promise((resolve, reject) => {
  

       $http.post('Pipes/PostPipe', payload, config)
        .then(response => {
            
          context.commit('PostPipe', response.data)  

            resolve(response)
            
        })
        .catch(error => {
          console.log("PostPipe error")
          reject(error)
        })
    })
  },
  GetPipes(context, payload)
  {
    context.commit('dataImportStore/SetLoaderParameters', {
      showLoader: true,
      showImportView: false
    }, {root:true});
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    state.pipes = [];

    var ids = payload.designId.toString() + "&" + payload.userId.toString();

    return new Promise((resolve, reject) => {
  

       $http.get('Pipes/GetPipes/' + ids, config)
        .then(response => {
            
          context.commit('GetPipes', response.data)  
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});            
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetPipes error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          reject(error)
        })
    })
  },
  GetDrillBit(context, payload)
  {
    context.commit('dataImportStore/SetLoaderParameters', {
      showLoader: true,
      showImportView: false
    }, {root:true});
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    state.drillBit = {};

    var ids = payload.designId.toString() + "&" + payload.userId.toString();

    return new Promise((resolve, reject) => {
  

       $http.get('DrillBits/GetDrillBit/' + ids, config)
        .then(response => {
            
          context.commit('GetDrillBit', response.data)  
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});            
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetDrillBit error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
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