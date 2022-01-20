import { $http } from 'boot/axios' 

const state = {
    mudPVTs:[],
    fluid: {
        mudName: "",
        description: "",
        mudBaseType: "",
        baseFluid: "",
        rheologyModel: "",
        rheologyModelType: "",
        baseFannDialReading: "70",
        baseFannRPM: "300",
        fannDialReading: "130",
        fannRPM: "60"
    },
    fluidDescription: {
      mudName: "Please Enter Mud Name",
      description: "Please Enter Description",
      mudBaseType: "Please Enter Mud Base Type",
      baseFluid: "Please Enter Base Fluid",
      rheologyModel: "Please Enter Rheology Model",
      rheologyModelType: "Please Enter Rheology Model Type",
      baseFannDialReading: "Please Enter Base Fann Dial Reading",
      baseFannRPM: "Please Enter Base Fann RPM",
      fannDialReading: "Please Enter Fann Reading",
      fannRPM: "Please Enter Fann RPM",
      yieldPoint: "Please Enter Yield Point",
      reference: "Please Enter Reference",
      plasticViscoity: "Please Enter Plastic Viscoity",
      density: "Please Enter Density",
      pressure: "Please Enter Pressure",
      temperature: "Please Enter Temperature"
  },
    isImportDialogVisible: false,
  }

  const getters = {
    fluidDescription(state){
      return state.fluidDescription;
    },
    mudPVTs(state){
      return state.mudPVTs;
    },
    fluid(state){
      return state.fluid;
    },
    isImportDialogVisible(state){
      return state.isImportDialogVisible;
    }
}

const mutations = {
  GetFluid(state, payload){
    var keys = Object.keys(payload)
    if(keys.length > 0){
      state.fluid = payload;
      state.rheologyOne = "";
      state.rheologyTwo =  "";
      if(state.fluid.rheologyModelType == "Rheology"){
        state.rheologyOne = state.fluid.rheologyModelType;
      }else{
        state.rheologyTwo = state.fluid.rheologyModelType;
      }
    }
    
  },
  GetMudPVTs(state, payload){
    state.mudPVTs =  payload;
  },
  PostFluid(state, payload){
    state.fluid = payload;
  },
  SetisImportDialogVisible(state, payload){
    state.isImportDialogVisible = payload;
  },
  PostMudPVTs(state, payload){
    state.isImportDialogVisible = false;
  },
  SavePVTRecord(state, payload){
    state.mudPVTs.push(payload);
    console.log("mudPVTs: ", state.mudPVTs)
  },
  ClearMudPVTs(state){
    state.mudPVTs = [];
  },
  ClearFluid(state){
    state.fluid = {
      mudName: "",
      description: "",
      mudBaseType: "",
      baseFluid: "",
      rheologyModel: "",
      rheologyModelType: "",
      baseFannDialReading: "70",
      baseFannRPM: "300",
      fannDialReading: "130",
      fannRPM: "60"
    };
  }
}

const actions = {
  GetFluid(context, payload)
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

    //var ids = payload.designId.toString() + "&" + payload.userId.toString();

    return new Promise((resolve, reject) => {
  

       $http.get('Fluids/GetFluid/' + payload.designId)
        .then(response => {
            
          context.commit('GetFluid', response.data);
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});             
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetFluid error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          reject(error)
        })
    })
  },
  GetMudPVTs(context, payload)
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
    //var ids = payload.designId.toString() + "&" + payload.userId.toString();

    return new Promise((resolve, reject) => {
  

       $http.get('MudPVTs/GetMudPVTs/' + payload.designId)
        .then(response => {
            
          context.commit('GetMudPVTs', response.data);   
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});           
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetMudPVTs error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          reject(error)
        })
    })
  },
  PostFluid(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      },
      useCredentails: true
    }

    payload.fluid.baseFannDialReading = parseFloat(payload.fluid.baseFannDialReading);
    payload.fluid.baseFannRPM = parseFloat(payload.fluid.baseFannRPM);
    payload.fluid.fannDialReading = parseFloat(payload.fluid.fannDialReading);
    payload.fluid.fannRPM = parseFloat(payload.fluid.fannRPM);
    payload.fluid.userId = payload.userId;
    payload.fluid.designId = payload.designId;

    return new Promise((resolve, reject) => {
  

       $http.post('Fluids/PostFluid', payload.fluid)
        .then(response => {
            
          context.commit('PostFluid', response.data)  
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true}); 
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Fluid parameters saved successfully",
            visibility: true
          }, {root:true});             
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostFluid error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          reject(error)
        })
    })
  },
  PostMudPVTs(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      },
      useCredentails: true
    }

    state.mudPVTs = [];
    state.mudPVTs = payload.mudPVTs;
    
    return new Promise((resolve, reject) => {
  

       $http.post('MudPVTs/PostMudPVTs', payload)
        .then(response => {
            
          context.commit('PostMudPVTs', response.data)    
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true}); 
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Fluid PVT table saved successfully",
            visibility: true
          }, {root:true});             
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostMudPVTs error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true});
          reject(error)
        })
    })
  },
  ClearFluid(context, payload){
    context.commit('ClearFluid');
  },
  ClearMudPVTs(context, payload){
    context.commit('ClearMudPVTs');
  }

}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}