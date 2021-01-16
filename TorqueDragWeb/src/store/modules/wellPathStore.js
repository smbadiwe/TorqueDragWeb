import { $http } from 'boot/axios' 
import { devCalcParams } from 'boot/devSurveyManager'

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
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    state.deviationSurveys = [];
    state.deviationSurveys = payload.deviationSurveys;
    devCalcParams.calculateDevParams(state.deviationSurveys);
    state.deviationSurveys = devCalcParams.deviationSurveys;
    payload.deviationSurveys = state.deviationSurveys;

    return new Promise((resolve, reject) => {
  

       $http.post('DeviationSurveys/PostDeviationSurvey', payload, config)
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
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }
    
    state.deviationSurveys = [];

    return new Promise((resolve, reject) => {
  

       $http.get('DeviationSurveys/GetDeviationSurveys/' + payload.designId, config)
        .then(response => {

          console.log("response.data:", response.data)
          //devCalcParams.calculateDevParams(response.data)
          //console.log("DevCalcParams.DevParams: ", devCalcParams.deviationSurveys)
            
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