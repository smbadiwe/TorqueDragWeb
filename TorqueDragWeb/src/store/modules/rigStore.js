import { $http } from 'boot/axios' 

const state = {
    rig: {
        highPumpPressure: null,
        lowPumpPressure: null,
        flowRateHighPumpPressure: null,
        flowRateLowPumpPressure: null,
        flowExponent: 1.75,
        pumpEfficiency: null,
        maxAllowableSurfacePressure: null,
        maxHorsePower: null,
        minimumFlowRate: null,
        surfaceSystemConstant: null
    },
    bitLosses: {
      nozzleArea: 0,
      lowPressureDropThroughBit: 0,
      highPressureDropThroughBit: 0
    },
    isBitPressureLossesCorrect: false,
    flowExponentMessage: "",
    rigDescriptions: {
      highPumpPressure: "Please Enter High Pump Pressure",
      lowPumpPressure: "Please Enter Low Pump Pressure",
      flowRateHighPumpPressure: "Please Enter Flow Rate for High Pump Pressure",
      flowRateLowPumpPressure: "Please Enter Flow Rate for Low Pump Pressure",
      flowExponent: "Please Enter Flow Exponent",
      pumpEfficiency: "Please Enter Pump Efficiency",
      maxAllowableSurfacePressure: "Please Enter Max. Allowable Surface Pressure",
      maxHorsePower: "Please Enter Max Horse Power",
      minimumFlowRate: "Please Enter Minimum Flow Rate",
      surfaceSystemConstant: "Please Enter Surface System Constant",
  }
}

const getters = {
  rigDescriptions(state){
    return state.rigDescriptions;
  },
  flowExponentMessage(state){
    return state.flowExponentMessage
  },
  isBitPressureLossesCorrect(state){
    return state.isBitPressureLossesCorrect;
  },
  bitLosses(state){
    return state.bitLosses;
  },
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

    var ids = payload.designId.toString() + "&" + payload.userId.toString();

    return new Promise((resolve, reject) => {
  

       $http.get('Rig/GetRig/' + ids, config)
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
          rig: {
            highPumpPressure : parseFloat(context.state.rig.highPumpPressure),
            lowPumpPressure : parseFloat(context.state.rig.lowPumpPressure),
            flowRateHighPumpPressure : parseFloat(context.state.rig.flowRateHighPumpPressure),
            flowRateLowPumpPressure : parseFloat(context.state.rig.flowRateLowPumpPressure),
            flowExponent : parseFloat(context.state.rig.flowExponent),
            pumpEfficiency:  parseFloat(context.state.rig.pumpEfficiency),
            maxAllowableSurfacePressure: parseFloat(context.state.rig.maxAllowableSurfacePressure),
            maxHorsePower : parseFloat(context.state.rig.maxHorsePower),
            minimumFlowRate : parseFloat(context.state.rig.minimumFlowRate),
            surfaceSystemConstant: parseFloat(context.state.rig.surfaceSystemConstant),
            designId: payload.designId,
            userId: payload.userId
        }

      }
        console.log("context.state.rig:", context.state.rig)
         $http.post('Rig/PostRig', newPayload, config)
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
            console.log("calculateFlowExponent error: ", error)
            reject(error)
          })
      })
    },
    calculatePressureLosses(context, payload){
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
        $http.post('Commons/calculatePressureLosses', newPayload, config)
          .then(response => {
            console.log("response.data: ", response.data);
            context.state.bitLosses.nozzleArea = response.data.nozzleArea;
            context.state.bitLosses.lowPressureDropThroughBit = response.data.lowPressureDropThroughBit;
            context.state.bitLosses.highPressureDropThroughBit = response.data.highPressureDropThroughBit;
            if(context.state.rig.highPumpPressure <
              context.state.bitLosses.highPressureDropThroughBit ||
              context.state.rig.lowPumpPressure <
              context.state.bitLosses.lowPressureDropThroughBit){
                context.state.isBitPressureLossesCorrect = false;
                context.state.flowExponentMessage = "Flow exponent is not a number. Check your input";
              }else{
                context.state.isBitPressureLossesCorrect = true;
                context.state.flowExponentMessage = "Flow exponent is correct. Click calculate to see result";
              }
            
            console.log("bitLosses: ", context.state.bitLosses); 
            context.commit('dataImportStore/SetLoaderParameters', {
              showLoader: false,
              showImportView: true
            }, {root:true});
            context.commit('authStore/setStatusMessageBarVisibility',  
            {
              actionMessage: "bit pressure lossess estimated successfully",
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
              actionMessage: "bit pressure lossess estimatation failed",
              visibility: true
            }, {root:true}); 
            console.log("calculatePressureLosses error: ", error)
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