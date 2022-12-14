import { https } from "./services";

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
  },
  ClearHoleSections(state){
    state.holeSections = [];
  }

}

const actions = {
  GetHoleSections(context, payload)
  {

    context.commit('dataImportStore/SetLoaderParameters', {
      showLoader: true,
      showImportView: false
    }, {root:true});

    context.commit("ClearHoleSections");

    let config = {
      headers: {
        tenantcode: payload.companyName,
      },
      useCredentails: true
    }

    return new Promise((resolve, reject) => {
  

       https().get('HoleSections/GetHoleSections/' + payload.designId, config)
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
  

       https().post('HoleSections/PostHoleSection', payload, config)
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


    context.commit('GetHoleSections', payload.holeSections)  

    return new Promise((resolve, reject) => {
  
      console.log("payload: ", payload)
       https().post('HoleSections/PostHoleSections', payload, config)
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
  },
  ClearHoleSections(context, payload){
    context.commit('ClearHoleSections');
  }


}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}