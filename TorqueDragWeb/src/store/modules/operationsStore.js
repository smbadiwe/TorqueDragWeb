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
        tripRPMBackReam: 0,
        torqueAtBitDrillingOperation: 0,
        torqueAtBitBackReaming: 0,
        overpullBackReaming: 0
    },
    operationDescriptions: {
      trippingInSpeed : "Please Enter Tripping In Speed",
      trippingInRPM : "Please Enter Tripping In RPM",
      trippingOutSpeed : "Please Enter Tripping Out Speed",
      trippingOutRPM : "Please Enter Tripping Out RPM",
      weightOnBit : "Please Enter Weight On Bit",
      torqueAtBit : "Please Enter Torque At Bit",
      weightOnBitIDHM : "Please Enter Weight On Bit",
      hookLoadIDHM : "Please Enter Hooke Load",
      tripSpeedBackReam: "Please Enter Tripping Speed",
      tripRPMBackReam: "Please Enter Tripping RPM",
      torqueAtBitDrillingOperation: "Please Enter Torque At Bit",
      torqueAtBitBackReaming: "Please Enter Torque At Bit",
      overpullBackReaming: "Please Enter Over Pull",
  },
    operationNames: ["No Operation", "Tripping In", "Tripping Out", "Rotating On Bottom", 
    "Slide Drilling", "Back reaming", "Rotating Off Bottom"]
  }

  const getters = {
    operationDescriptions(state){
      return state.operationDescriptions
    },
    operation(state){
        return state.operation;
    },
    operationNames(state){
      return state.operationNames;
    }
}

const mutations = {
  PostOperation(state, payload){
    state.operation = payload;
  },
  GetOperation(state, payload){
    //console.log(payload)
    state.operation = payload;
  },
  ClearOperation(state){
    state.operation = {
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
      tripRPMBackReam: 0,
      torqueAtBitDrillingOperation: 0,
      torqueAtBitBackReaming: 0,
      overpullBackReaming: 0
    };
  }

}

const actions = {
  GetOperation(context, payload)
  {
    var token = sessionStorage.getItem("token") 
  $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

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
  

       $http.get('Operations/GetOperation/' + payload.designId, config)
        .then(response => {
            
          context.commit('GetOperation', response.data)   
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});           
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetOperation error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          reject(error)
        })
    })
  },
  PostOperation(context, payload)
  {
    var token = sessionStorage.getItem("token") 
  $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  
    let config = {
      headers: {
        tenantcode: payload.companyName,
      },
      useCredentails: true
    }

    console.log("payload.operation: ", payload.operation)
    
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
    payload.operation.torqueAtBitDrillingOperation = parseFloat(payload.operation.torqueAtBitDrillingOperation)
    payload.operation.torqueAtBitBackReaming = parseFloat(payload.operation.torqueAtBitBackReaming)
    payload.operation.overpullBackReaming = parseFloat(payload.operation.overpullBackReaming)
    payload.operation.userId = payload.userId;
    payload.operation.designId = payload.designId;

    

    return new Promise((resolve, reject) => {
  
      
       $http.post('Operations/PostOperation', payload.operation, config)
        .then(response => {
            
          context.commit('PostOperation', response.data)    
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});  
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Operation parameters saved successfully",
            visibility: true
          }, {root:true});            
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostOperation error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Operation parameters failed to save. Please check your data",
            visibility: true
          }, {root:true});    
          reject(error)
        })
    })
  },
  ClearOperation(context, payload){
    context.commit('ClearOperation');
  }


}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}