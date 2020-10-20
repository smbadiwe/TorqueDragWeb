import { $http } from 'boot/axios' 

const state = {
    datum:{},
    selectedInputTab: 'Datum',
    isInput: false,
    datums: [],
    datumNames: [],
    selectedDatum: {}
  }

  const getters = {
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
    state.datums = payload;
    state.datumNames = [];
    var i = 0;
    var nCount = state.datums.length;
    if(nCount > 0)
    state.selectedDatum = state.datums[0];
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
  }

}

const actions = {

  PostDatum(context, payload)
  {
    return new Promise((resolve, reject) => {
      console.log("seen")
      console.log(payload);
       $http.post('Datums/PostDatum', payload)
        .then(response => {
            
          context.commit('PostDatum', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostDatum error")
          reject(error)
        })
    })
  },
  GetDatums(context, payload)
  {
    return new Promise((resolve, reject) => {
      console.log("seen")
      console.log(payload);
       $http.post('Datums/GetDatums',  {
          companyDBConnectionString: payload
       })
        .then(response => {
            
          context.commit('GetDatums', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetTorqueDragDesigns error")
          reject(error)
        })
    })
  },
  GetSelecteDatum(context, payload)
  {
      context.state.Account.base64String =  context.state.base64String;
      context.state.Account.contributor_Id = payload;
    return new Promise((resolve, reject) => {
      console.log("seen")
       $http.post('Accounts/OffPlatformPayment', context.state.Account)
        .then(response => {
            
          context.commit('OffPlatformPayment', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          alert("Confirmation of payment was unsuccesful. Please try again")
          console.log("payment error")
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