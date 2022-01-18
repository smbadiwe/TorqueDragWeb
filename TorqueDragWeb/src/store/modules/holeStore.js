import { $http } from 'boot/axios' 

const state = {
    holeSections:[],
    isImportDialogVisible: false,
    holeSection: {},
    holeSectionDescriptions: {
      outerDiameter: "PLease Enter Outer Diameter",
      innerDiameter: "PLease Enter Inner Diameter",
      weight: "PLease Enter Outer Weight",
      top: "PLease Enter Top MD",
      bottom: "PLease Enter Bottom MD",
      frictionFactor: "PLease Enter Friction Factor"
    }
  }

  const getters = {
    holeSectionDescriptions(state){
      return state.holeSectionDescriptions;
    },
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
  },
  SaveHoleSectionTable(state, payload){
    state.holeSections.push(payload);
    console.log("holeSections: ", state.holeSections)
  }

}

const actions = {
  GetHoleSections(context, payload)
  {
    context.commit('dataImportStore/SetLoaderParameters', {
      showLoader: true,
      showImportView: false
    }, {root:true});
    state.holeSections = [];
    let config = {
      headers: {
        tenantcode: payload.companyName,
      },
      useCredentails: true
    }

    //var ids = payload.designId.toString() + "&" + payload.userId.toString();

    return new Promise((resolve, reject) => {
  

       $http.get('HoleSections/GetHoleSections/' + payload.designId, config)
        .then(response => {
            
          context.commit('GetHoleSections', response.data)  
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});            
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetHoleSections error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          reject(error)
        })
    })
  },
  PostHoleSection(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      },
      useCredentails: true
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
      },
      useCredentails: true
    }

    state.holeSections = [];
    state.holeSections = payload.holeSections;

    return new Promise((resolve, reject) => {
  
      console.log("payload: ", payload)
       $http.post('HoleSections/PostHoleSections', payload, config)
        .then(response => {
            
          context.commit('PostHoleSections', response.data)  
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Hole sections parameters saved successfully",
            visibility: true
          }, {root:true});    

            resolve(response)
            
        })
        .catch(error => {
          console.log("PostHoleSections error")
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