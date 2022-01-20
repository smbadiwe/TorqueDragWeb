import { $http } from 'boot/axios' 

const state = {
    datum:{
      datumName: "",
      datumElevation: "",
      groundElevation: "",
      wellHeadElevation: "",
      airGap: ""
    },
    selectedInputTab: 'Datum',
    isInput: false,
    datums: [],
    datumNames: [],
    selectedDatum: {},
    datumDescriptions: {
      datumName: "Please Enter Datum Name",
      datumElevation: "Please Enter Datum Elevation",
      groundElevation: "Please Enter Ground Elevation",
      wellHeadElevation: "Please Enter WellHead Elevation",
      airGap: "Please Enter Air Gap"
    }

  }

  const getters = {
    datumDescriptions(state){
      return state.datumDescriptions;
    },
    datum(state){
      return state.datum;
    },
    datums(state){
      return state.datums;
    },
    datumNames(state){
      return state.datumNames;
    },
    selectedDatum(state){
      return state.selectedDatum;
    }
}

const mutations = {
  PostDatum(state, payload){
    state.datum = payload;
  },
  GetSelecteDatum(state, payload) { 
    state.datum = payload;
  },
  GetDatums(state, payload){
    console.log('payload: ', payload);
    state.datums = payload;
    state.datumNames = [];
    var i = 0;
    var nCount = state.datums.length;
    if(nCount > 0)
    state.selectedDatum = state.datums[0];
    state.datum = state.datums[0];
    console.log("state.datum: ", state.datum)
    for(i = 0; i < nCount; i++){
      state.datumNames.push(state.datums[i].datumName);
    }
  },
  onDatumSelectionChanged(state, payload){

     var i = 0;
    var nCount = state.datums.length;
    for(i = 0; i < nCount; i++){
      if(payload == state.datums[i].datumName){
        state.selectedDatum = state.datums[i];
        console.log('state.selectedDatum: ', state.selectedDatum );
        break;
      }
    } 
  },
  ClearDatums(state){
    state.datums = [];
  }

}

const actions = {

  PostDatum(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      },
      useCredentails: true
    }

    return new Promise((resolve, reject) => {
      console.log("seen")
      console.log(payload);
       $http.post('Datums/PostDatum', payload, config)
        .then(response => {
            
          context.commit('PostDatum', response.data) 
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true}); 
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Datum saved successfully",
            visibility: true
          }, {root:true});  
          
          var payload2 = {
            companyName: payload.companyName,
            designId: payload.designId,
            userId: payload.userId
        }
          context.dispatch('GetDatums', payload2);
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostDatum error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          reject(error)
        })
    })
  },
  GetDatums(context, payload)
  {
    context.commit('dataImportStore/SetLoaderParameters', {
      showLoader: true,
      showImportView: false
    }, {root:true});

    let config = {
      headers: {
        tenantcode: payload.companyName,
      },
      useCredentails: true
    }

    //var ids = payload.designId.toString() + "&" + payload.userId.toString();

    return new Promise((resolve, reject) => {
      console.log("seen")
      console.log(payload);
       $http.get('Datums/GetDatums/' + payload.designId, config)
        .then(response => {
            
          context.commit('GetDatums', response.data)
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});              
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetTorqueDragDesigns error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          reject(error)
        })
    })
  },
  ClearDatums(context, payload){
    context.commit('ClearDatums');
  }

}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}