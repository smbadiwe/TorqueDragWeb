import { $http } from 'boot/axios' 

const state = {
    datum:{},
    selectedInputTab: 'Datum',
    isInput: false
  }

  const getters = {
    datum(state){
      return state.datum;
    }
}

const mutations = {
  GetSelecteDatum(state, payload) { 
    state.datum = payload;
  }

}

const actions = {

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