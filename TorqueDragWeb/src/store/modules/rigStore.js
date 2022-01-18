import { $http } from 'boot/axios' 

const state = {
    rig: {
        highPumpPressure: null,
        lowPumpPressure: null,
        flowRateHighPumpPressure: null,
        flowRateLowPumpPressure: null,
        flowExponent: "0.9",
        pumpEfficiency: null,
        maxAllowableSurfacePressure: null,
        maxHorsePower: null,
        minimumFlowRate: null,
        surfaceSystemConstant: null
    }
}

const getters = {
    rig(state){
        return state.rig;
    }
}

const mutations = {
  GetRig(state, payload){
    var keys = Object.keys(payload);
    console.log(keys);
    if(keys.length > 0){
      state.rig = payload;
    }
    
  },
}

const actions = {
  GetRig(context, payload)
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

    context.state.rig = {};

    //var ids = payload.designId.toString() + "&" + payload.userId.toString();

    return new Promise((resolve, reject) => {
  

       $http.get('Rigs/GetRig/' + payload.designId)
        .then(response => {
            
          context.commit('GetRig', response.data)  
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});            
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetRig error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          reject(error)
        })
    })
  },
  PostRig(context, payload)
    {
      let config = {
        headers: {
          tenantcode: payload.companyName,
        },
        useCredentails: true
      }
  
      return new Promise((resolve, reject) => {
    
        var newPayload = {
          companyName: payload.companyName,
          designId: payload.designId,
          userId: payload.userId,
          highPumpPressure : parseFloat(context.state.rig.highPumpPressure),
          lowPumpPressure : parseFloat(context.state.rig.lowPumpPressure),
          flowRateHighPumpPressure : parseFloat(context.state.rig.flowRateHighPumpPressure),
          flowRateLowPumpPressure : parseFloat(context.state.rig.flowRateLowPumpPressure),
          flowExponent : parseFloat(context.state.rig.flowExponent),
          pumpEfficiency:  parseFloat(context.state.rig.pumpEfficiency),
          maxAllowableSurfacePressure: parseFloat(context.state.rig.maxAllowableSurfacePressure),
          maxHorsePower : parseFloat(context.state.rig.maxHorsePower),
          minimumFlowRate : parseFloat(context.state.rig.minimumFlowRate),
          surfaceSystemConstant: parseFloat(context.state.rig.surfaceSystemConstant)
      }
        console.log("context.state.rig:", context.state.rig)
         $http.post('Rigs/PostRig', newPayload)
          .then(response => {
              
            console.log('PostRig', response.data)  
            context.commit('dataImportStore/SetLoaderParameters', {
              showLoader: false,
              showImportView: true
            }, {root:true});
            context.commit('authStore/setStatusMessageBarVisibility',  
            {
              actionMessage: "rig data saved successfully",
              visibility: true
            }, {root:true});                
              resolve(response)
              
          })
          .catch(error => {
            context.commit('dataImportStore/SetLoaderParameters', {
              showLoader: false,
              showImportView: true
            }, {root:true});
            context.commit('authStore/setStatusMessageBarVisibility',  
            {
              actionMessage: "failed to save rig data",
              visibility: true
            }, {root:true}); 
            console.log("PostRig error")
            reject(error)
          })
      })
    },
    calculateFlowExponent(context, payload){
      let config = {
        headers: {
          tenantcode: payload.companyName,
        },
        useCredentails: true
      }

      context.state.rig.highPumpPressure = parseFloat(context.state.rig.highPumpPressure);
      context.state.rig.lowPumpPressure = parseFloat(context.state.rig.lowPumpPressure);
      context.state.rig.flowRateHighPumpPressure = parseFloat(context.state.rig.flowRateHighPumpPressure);
      context.state.rig.flowRateLowPumpPressure = parseFloat(context.state.rig.flowRateLowPumpPressure);
      context.state.rig.flowExponent = parseFloat(context.state.rig.flowExponent);
      context.state.rig.pumpEfficiency =  parseFloat(context.state.rig.pumpEfficiency);
      context.state.rig.maxAllowableSurfacePressure =  parseFloat(context.state.rig.maxAllowableSurfacePressure);
      context.state.rig.maxHorsePower =  parseFloat(context.state.rig.maxHorsePower);
      context.state.rig.minimumFlowRate =  parseFloat(context.state.rig.minimumFlowRate);
      context.state.rig.surfaceSystemConstant =  parseFloat(context.state.rig.surfaceSystemConstant);
      

      var newPayload = {
        companyName: payload.companyName,
        designId: payload.designId,
        userId: payload.userId,
        rig: context.state.rig
      }
  
      return new Promise((resolve, reject) => {
    

        console.log("context.state.rig:", context.state.rig);
        $http.post('Commons/calculateFlowExponent', newPayload, config)
          .then(response => {
            console.log("response.data: ", response.data);
            context.state.rig.flowExponent = response.data.flowExponent; 
            console.log("flowExponent: ", context.state.rig.flowExponent); 
            context.commit('dataImportStore/SetLoaderParameters', {
              showLoader: false,
              showImportView: true
            }, {root:true});
            context.commit('authStore/setStatusMessageBarVisibility',  
            {
              actionMessage: "flow exponent estimated successfully",
              visibility: true
            }, {root:true});                
              resolve(response)
              
          })
          .catch(error => {
            context.commit('dataImportStore/SetLoaderParameters', {
              showLoader: false,
              showImportView: true
            }, {root:true});
            context.commit('authStore/setStatusMessageBarVisibility',  
            {
              actionMessage: "flow exponent estimatation failed",
              visibility: true
            }, {root:true}); 
            console.log("PostRig error")
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