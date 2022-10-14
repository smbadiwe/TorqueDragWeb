import { $http } from "boot/axios";

const state =  {
    company: {},
    companies: []

}

const getters = {
    company(state){
      return state.company;
    },
    companies(state){
      return state.companies;
    }
}

const mutations = {
    createCompany(state, payload){
        state.company = payload;
        alert("Company succesfully registered")
    },
    GetCompanies(state, payload){
      state.companies = payload;
    }

}

const actions = {
    createCompany(context, payload)
    {
      let config = {
        useCredentails: false
      }

      return new Promise((resolve, reject) => {
        console.log(payload)
         $http.post('Companies/PostCompany', payload, config)
          .then(response => {
              
            context.commit('createCompany', response.data)              
              resolve(response)
              
          })
          .catch(error => {
            console.log("createCompany error")
            reject(error)
          })
      })
    },
    GetCompanies(context)
    {
      let config = {
        useCredentails: false
      }

      return new Promise((resolve, reject) => {
     
         $http.get('Companies/GetCompanies')
          .then(response => {
              console.log("response: ", response)
            context.commit('GetCompanies', response.data)              
              resolve(response)
              
          })
          .catch(error => {
            console.log("GetCompanies error")
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