import { $http } from 'boot/axios' 

const state = {
    operation: {
        isTrippingInChecked: false,
        trippingInSpeed : null,
        trippingInRPM : null,
        isTrippingOutChecked : false,
        trippingOutSpeed : null,
        trippingOutRPM : null,
        isRotatingOnBottomChecked : false,
        isSlideDrillingChecked : false,
        weightOnBit : null,
        torqueAtBit : null,
        isBackReamingChecked: false,
        isRotatingOffBottomChecked : false,
        isUserDefinedOperationsChecked : false,
        isHookLoad : false,
        isWeightOnBit : false,
        isIDHMTrippingInChecked : false,
        weightOnBitIDHM : null,
        hookLoadIDHM : null,
        isIDHMTrippingOutChecked: false,
        isIDHMRotatingChecked : false
    }
  }

  const getters = {
    operation(state){
        return state.operation;
    }
}

const mutations = {
  PostOperation(state, payload){
    state.operation = payload;
  },
  GetOperation(state, payload){
    state.operation = payload;
  }

}

const actions = {
  GetOperation(context, payload)
  {

    return new Promise((resolve, reject) => {
  

       $http.post('Operations/GetOperation', payload)
        .then(response => {
            
          context.commit('GetOperation', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetOperation error")
          reject(error)
        })
    })
  },
  PostOperation(context, payload)
  {

    return new Promise((resolve, reject) => {
  

       $http.post('Operations/PostOperation', payload)
        .then(response => {
            
          context.commit('PostOperation', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostOperation error")
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