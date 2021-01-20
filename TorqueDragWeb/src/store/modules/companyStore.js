import { $http } from 'boot/axios'
import { stat } from 'fs';

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

      return new Promise((resolve, reject) => {
        console.log(payload)
         $http.post('Companies/PostCompany', payload)
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

      return new Promise((resolve, reject) => {
     
         $http.get('Companies/GetCompanies')
          .then(response => {
              
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