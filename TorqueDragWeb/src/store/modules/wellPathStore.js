import { $http } from 'boot/axios' 

const state = {
    deviationSurveys:[],
    isImportDialogVisible: false
  }

  const getters = {
    deviationSurveys(state){
      return state.deviationSurveys;
    },
    isImportDialogVisible(state){
      return state.isImportDialogVisible;
    }
}

const mutations = {
  PostDeviationSurvey(state){
    //console.log("payload.previewSurveyData: ", payload.previewSurveyData)
    state.isImportDialogVisible = false;
  },
  SetisImportDialogVisible(state, payload){
    state.isImportDialogVisible = payload;
  },
  GetDeviationSurveys(state, payload){
    state.deviationSurveys = payload;
  }

}

const actions = {
  PostDeviationSurvey(context, payload)
  {
    state.deviationSurveys = [];
    state.deviationSurveys = payload.deviationSurveys;

    return new Promise((resolve, reject) => {
  

       $http.post('DeviationSurveys/PostDeviationSurvey', {
        deviationSurveys: payload.deviationSurveys,
        companyDBConnectionString: payload.companyDBConnectionString
      })
        .then(response => {
            
          context.commit('PostDeviationSurvey', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostDeviationSurvey error")
          reject(error)
        })
    })
  },
  GetDeviationSurveys(context, payload)
  {
    state.deviationSurveys = [];

    return new Promise((resolve, reject) => {
  

       $http.post('DeviationSurveys/GetDeviationSurveys', payload)
        .then(response => {
            
          context.commit('GetDeviationSurveys', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetDeviationSurveys error")
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