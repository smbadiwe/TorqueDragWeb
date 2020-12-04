import { $http } from 'boot/axios' 

const state = {
    operation: {
        isTrippingInChecked: false,
        trippingInSpeed : 0,
        trippingInRPM : 0,
        isTrippingOutChecked : false,
        trippingOutSpeed : 0,
        trippingOutRPM : 0,
        isRotatingOnBottomChecked : false,
        isSlideDrillingChecked : false,
        weightOnBit : 0,
        torqueAtBit : 0,
        isBackReamingChecked: false,
        isRotatingOffBottomChecked : false,
        isUserDefinedOperationsChecked : false,
        isHookLoad : false,
        isWeightOnBit : false,
        isIDHMTrippingInChecked : false,
        weightOnBitIDHM : 0,
        hookLoadIDHM : 0,
        isIDHMTrippingOutChecked: false,
        isIDHMRotatingChecked : false,
        tripSpeedBackReam: 0,
        tripRPMBackReam: 0
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
    console.log(payload)
    state.operation = payload;
  }

}

const actions = {
  GetOperation(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }
    return new Promise((resolve, reject) => {
  

       $http.get('Operations/GetOperation/' + payload.designId, config)
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
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

  
    payload.operation.trippingInSpeed = parseFloat(payload.operation.trippingInSpeed);
    payload.operation.trippingInRPM = parseFloat(payload.operation.trippingInRPM);
    payload.operation.trippingOutSpeed = parseFloat(payload.operation.trippingOutSpeed);
    payload.operation.trippingOutRPM = parseFloat(payload.operation.trippingOutRPM);
    payload.operation.weightOnBit = parseFloat(payload.operation.weightOnBit);
    payload.operation.torqueAtBit = parseFloat(payload.operation.torqueAtBit);
    payload.operation.weightOnBitIDHM = parseFloat(payload.operation.weightOnBitIDHM);
    payload.operation.hookLoadIDHM = parseFloat(payload.operation.hookLoadIDHM);
    payload.operation.tripSpeedBackReam = parseFloat(payload.operation.tripSpeedBackReam)
    payload.operation.tripRPMBackReam = parseFloat(payload.operation.tripRPMBackReam)

    return new Promise((resolve, reject) => {
  
      
       $http.post('Operations/PostOperation', payload, config)
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