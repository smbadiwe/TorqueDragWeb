import { $http } from 'boot/axios' 

const state = {
    siteNames: [],
    externalcompanyNames: [],
    torqueDragDesign:{},
    torqueDragDesigns: [],
    SelectedTorqueDragDesign: {},
    projectNames: [],
    fieldNames: [],
    wellNames: [],
    wellboreNames: [],
    wellDesignNames: [],
    wellCases: [],
    wellProjects: [],
    selected: null,
    isCreateWellDesign: false,
    isWellExplorer: false,
    caption: "DP Well Engineering",
    torqueDragMostRecentDesigns: []
  }

const getters = {
  torqueDragMostRecentDesigns(state){
    return state.torqueDragMostRecentDesigns;
  },
  caption(state){
    return state.caption;
  },
  externalcompanyNames(state){
    return state.externalcompanyNames;
  },
  siteNames(state){
    return state.siteNames;
  },
    isWellExplorer(state){
      return state.isWellExplorer;
    },
    torqueDragDesign(state){
      return state.torqueDragDesign;
    },
    torqueDragDesigns(state){
        return state.torqueDragDesigns;
    },
    SelectedTorqueDragDesign(state){
        return state.SelectedTorqueDragDesign;
    },
    projectNames(state){
      return state.projectNames;
    },
    fieldNames(state){
      return state.fieldNames;
    },
    wellNames(state){
      return state.wellNames;
    },
    wellboreNames(state){
      return state.wellboreNames;
    },
    wellDesignNames(state){
      return state.wellDesignNames;
    },
    wellProjects(state){
      return state.wellProjects;
    },
    wellCases(state){
      return state.wellCases;
    },
    isCreateWellDesign(state){
      return state.isCreateWellDesign;
    }
}

const mutations = {
    SetIsWellExplorer(state, payload){
      state.isWellExplorer =  payload;
    },
    SetCreateWellDesign(state, payload){
      state.isCreateWellDesign = payload
    },
    PostTorqueDragDesign(state, payload){
        state.torqueDragDesign = payload.torqueDragDesign;
        if(payload.info == "No well data"){
          alert("No well data");
        }

        if(payload.info == "Well case already exists"){
          alert("Well case already exists");
        }

        state.isCreateWellDesign = false
  },
  GetTorqueDragDesigns(state, payload){
    console.log("payload: ", payload)
      state.wellProjects = payload.Companies;  
      state.torqueDragDesigns = payload.torqueDragDesigns;
      state.torqueDragMostRecentDesigns = payload.torqueDragMostRecentDesigns;
      state.SelectedTorqueDragDesign = state.torqueDragDesigns[0];
      console.log("state.wellProjects: ", state.wellProjects)
  },
  GetSelectedTorqueDragDesign(state, payload){
    state.SelectedTorqueDragDesign = payload;
    console.log(state.SelectedTorqueDragDesign)
  },
  GetListsofData(state){
    if(state.SelectedTorqueDragDesign !== undefined){

      var nlength= Object.keys(state.SelectedTorqueDragDesign).length;
      if(nlength == 0){
        var nCount = state.torqueDragDesigns.length;
        if(nCount > 0){
          state.SelectedTorqueDragDesign = state.torqueDragDesigns[0];
        }
      }

      nlength= Object.keys(state.SelectedTorqueDragDesign).length;
      console.log("state.wellProjects: ", state.wellProjects)
      if(nlength > 0){
        var wellProject = state.wellProjects[0];
        var field = wellProject.children[0];
        var well = field.children[0];
        var wellbore = well.children[0];
        //var wellDesign = wellbore.children[0];
        //var wellCase = wellDesign.children[0];

        state.projectNames = wellProject.children.map((row) => {
          return row.label
        });
        state.fieldNames = field.children.map((row) => {
          return row.label
        });

        state.wellNames = well.children.map((row) => {
          return row.label
        });
        state.wellboreNames = wellbore.children.map((row) => {
          return row.label
        });

      /*  state.wellDesignNames = wellDesign.children.map((row) => {
          return row.label
        });

        state.wellCases = wellCase.children.map((row) => {
          return row.label
        }); */
      
      }
    }


  },
  GetListsofProjectName(state, payload){

      var wellProject = null;
      state.projectNames =[]
      state.fieldNames =[]
      state.wellNames =[]
      state.wellboreNames =[]
      state.wellDesignNames =[]
      state.wellCases = []
      var i = 0;
      var checkproject = fasle;
      for(i = 0; i < state.wellProjects.length; i++){
        if(payload == state.wellProjects[i].label){
          checkproject =  true;
          wellProject = state.wellProjects[i];
          break;
        }
      }

      if(checkproject == true){
        for(i = 0; i < wellProject.children.length; i++){
          state.fieldNames.push(wellProject.children[i].label)
        }
      }

  },
  GetSelectedDesign(state, payload){
    state.SelectedTorqueDragDesign = payload.SelectedTorqueDragDesign;
    var i = 0;
    var nCount = state.torqueDragMostRecentDesigns.length;
    for(i = 0; i < nCount; i++){
        if(state.torqueDragMostRecentDesigns[i].uniqueId == state.SelectedTorqueDragDesign.uniqueId){
          state.torqueDragMostRecentDesigns[i].isSelected = true;
        }else{
          state.torqueDragMostRecentDesigns[i].isSelected = false;
        }
    }

    state.caption ="DP Well Engineering (" +  state.SelectedTorqueDragDesign.designName + ")";

  }

}

const actions = {

    PostTorqueDragDesign(context, payload)
    {
      let config = {
        headers: {
          tenantcode: payload.companyName,
        },
        useCredentails: true
      }

      return new Promise((resolve, reject) => {
        console.log(payload)
         $http.post('torqueDragDesigns/PostTorqueDragDesign', payload, config)
          .then(response => {
              
            console.log("response.data: ", response.data)
            context.commit('PostTorqueDragDesign', response.data);
            context.state.caption = "DP Well Engineering" +  " (" + payload.designName + ")";
            context.dispatch('GetTorqueDragDesigns',  {
              companyName: payload.companyName,
              id: payload.torqueDragDesign.userId
            })
            context.commit('dataImportStore/SetLoaderParameters', {
              showLoader: false,
              showImportView: true
            }, {root:true});
            context.commit('authStore/setStatusMessageBarVisibility',  
            {
              actionMessage: response.data.info,
              visibility: true
            }, 
            {root:true});
            //              
              resolve(response)
              
          })
          .catch(error => {
            context.commit('dataImportStore/SetLoaderParameters', {
              showLoader: false,
              showImportView: true
            }, {root:true});
            context.commit('authStore/setStatusMessageBarVisibility',  
            {
              actionMessage: `Error encountered during saving ${payload.designName}`,
              visibility: true
            }, 
            {root:true});
            console.log("PostTorqueDragDesign error")
            context.state.caption = "DP Well Engineering" +  " (" + payload.designName + ")";
            reject(error)
          })
      })
    },
    PostSelectedWellDesign(context, payload)
    {
      let config = {
        headers: {
          tenantcode: payload.companyName,
        },
        useCredentails: true
      }

      var i = 0;
      var count = context.state.torqueDragDesigns.length;
            for(i = 0; i < count; i++){
                if(payload.wellCaseId == context.state.torqueDragDesigns[i].wellCaseId)
                {
                  context.state.SelectedTorqueDragDesign =  context.state.torqueDragDesigns[i];
                  break;
                }
            }

      return new Promise((resolve, reject) => {
        console.log(payload)
         $http.post('torqueDragDesigns/PostSelectedWellDesign', {
          wellCaseId: payload.wellCaseId,
          torqueDragDesigns: context.state.torqueDragDesigns
         }, config)
          .then(response => {
              
            context.commit('GetSelectedTorqueDragDesign', response.data);
            var payload2 = {
              companyName: payload.companyName,
              designId: context.state.SelectedTorqueDragDesign.id,
              userId: context.state.SelectedTorqueDragDesign.userId
          }
            context.dispatch('datumStore/GetDatums', payload2, {root:true});
            context.dispatch('fluidsStore/GetFluid', payload2, {root:true});
            context.dispatch('holeStore/GetHoleSections', payload2, {root:true});
            context.dispatch('operationsStore/GetOperation', payload2, {root:true});
            context.dispatch('settingsStore/GetCommon', payload2, {root:true});
            context.dispatch('tubingStringStore/GetPipes', payload2, {root:true});
            context.dispatch('wellPathStore/GetDeviationSurveys', payload2, {root:true});
            context.dispatch('tubingStringStore/GetDrillBit', payload2, {root:true});
            context.dispatch('rigStore/GetRig', payload2, {root:true});
            context.state.caption ="DP Well Engineering (" + response.data.designName + ")";
            context.commit('dataImportStore/SetLoaderParameters', {
              showLoader: false,
              showImportView: true
            }, {root:true});
            context.commit('authStore/setStatusMessageBarVisibility',  
            {
              actionMessage: response.data.designName + " selected",
              visibility: true
            }, 
            {root:true});
            //              
              resolve(response)
              
          })
          .catch(error => {
            context.commit('dataImportStore/SetLoaderParameters', {
              showLoader: false,
              showImportView: true
            }, {root:true});
            console.log("PostTorqueDragDesign error")
            reject(error)
          })
      })
    },
    GetTorqueDragDesigns(context, payload)
    {
      console.log("payload: ", payload);
      let config = {
        headers: {
          tenantcode: payload.companyName,
        },
        useCredentails: true
      }

      return new Promise((resolve, reject) => {
        console.log("seen")
        console.log(payload); 
         $http.get('torqueDragDesigns/GetWellDesignsByUserId/' + payload.id)
          .then(response => {
              
            context.commit('GetTorqueDragDesigns', response.data)
            context.commit('GetListsofData');              
              resolve(response)
              
          })
          .catch(error => {
            console.log("GetTorqueDragDesigns error")
            reject(error)
          })
      })
    },
    DeleteTorqueDragDesign(context, payload){
      let config = {
        headers: {
          tenantcode: payload.companyName,
        },
        useCredentails: true
      }

      return new Promise((resolve, reject) => {
        console.log("seen")
        console.log(payload);
         $http.get('torqueDragDesigns/DeleteTorqueDragDesign/' + payload.uniqueId, config)
          .then(response => {
              
            context.commit('DeleteTorqueDragDesign', response.data);
            context.commit('authStore/setStatusMessageBarVisibility',  
            {
              actionMessage: response.info,
              visibility: true
            }, 
            {root:true});

              resolve(response)
              
          })
          .catch(error => {
            console.log("GetTorqueDragDesigns error")
            reject(error)
          })
      })
    },
    GetSelectedTorqueDragDesign(context, payload){

        context.commit("GetSelectedDesign", payload)
        var payload2 = {
          companyName: payload.companyName,
          designId: payload.designId,
          userId: payload.userId
      }
      
        context.dispatch('simulationStore/ClearSimulationStore', {}, {root:true})
        context.dispatch('datumStore/ClearDatums', {}, {root:true});
        context.dispatch('wellPathStore/ClearDeviationSurveys', {}, {root:true});
        context.dispatch('holeStore/ClearHoleSections', {}, {root:true});
        context.dispatch('tubingStringStore/ClearPipes', {}, {root:true});
        context.dispatch('tubingStringStore/ClearDrillBit', {}, {root:true});
        context.dispatch('rigStore/ClearRig', {}, {root:true});
        context.dispatch('operationsStore/ClearOperation', {}, {root:true});
        context.dispatch('fluidsStore/ClearFluid', {}, {root:true});
        context.dispatch('fluidsStore/ClearMudPVTs', {}, {root:true});
        context.dispatch('settingsStore/clearAnalysisSettings', {}, {root:true});
        
      
        
        context.dispatch('datumStore/GetDatums', payload2, {root:true});
        context.dispatch('wellPathStore/GetDeviationSurveys', payload2, {root:true});
        context.dispatch('holeStore/GetHoleSections', payload2, {root:true});
        context.dispatch('tubingStringStore/GetPipes', payload2, {root:true});
        context.dispatch('tubingStringStore/GetDrillBit', payload2, {root:true});
        context.dispatch('rigStore/GetRig', payload2, {root:true});
        context.dispatch('operationsStore/GetOperation', payload2, {root:true});
        context.dispatch('fluidsStore/GetFluid', payload2, {root:true});
        context.dispatch('fluidsStore/GetMudPVTs', payload, {root:true}); 
        context.dispatch('settingsStore/GetCommon', payload2, {root:true});
        context.dispatch('simulationStore/GetSensitivityParameters', payload2, {root:true});
       
        
        


        context.commit('authStore/setStatusMessageBarVisibility',  
            {
              actionMessage: context.state.SelectedTorqueDragDesign.designName + " selected",
              visibility: true
            }, 
            {root:true});
        //console.log("state.selectedSheetHeader:", state.selectedSheetHeader);
    },
    PostAllData(context, payload)
    {
      //payload.allInputsDTO.datum.designId = payload.designId;
      //payload.allInputsDTO.datum.userId = payload.userId;

      context.dispatch('datumStore/PostDatum', {
        companyName: payload.companyName,
        designId: payload.designId,
        userId: payload.userId,
        datum:  payload.allInputsDTO.datum
      }, {root:true});

      context.dispatch('fluidsStore/PostFluid', {
          companyName: payload.companyName,
          designId: payload.designId,
          userId: payload.userId,
          fluid: payload.allInputsDTO.fluid
      }, {root:true});

      context.dispatch('holeStore/PostHoleSections', {
          companyName: payload.companyName,
          designId: payload.designId,
          userId: payload.userId,
          holeSections: payload.allInputsDTO.holeSections
      }, {root:true});

      context.dispatch('operationsStore/PostOperation', {
          companyName: payload.companyName,
          designId: payload.designId,
          userId: payload.userId,
          operation: payload.allInputsDTO.operation
      }, {root:true});

      context.dispatch('settingsStore/PostCommon', {
          companyName: payload.companyName,
          designId: payload.designId,
          userId: payload.userId,
          common: payload.allInputsDTO.common

      }, {root:true});


      context.dispatch('tubingStringStore/PostPipes', {
          companyName: payload.companyName,
          designId: payload.designId,
          userId: payload.userId,
          pipes: payload.allInputsDTO.pipes

      }, {root:true});

      context.dispatch('wellPathStore/PostDeviationSurvey', {
          companyName: payload.companyName,
          designId: payload.designId,
          userId: payload.userId,
          deviationSurveys: payload.allInputsDTO.deviationSurveys,

      }, {root:true});

      context.dispatch('tubingStringStore/PostDrillBit', {
          companyName: payload.companyName,
          designId: payload.designId,
          userId: payload.userId,
          drillBit: payload.allInputsDTO.drillBit,

      }, {root:true});

      context.dispatch('rigStore/PostRig', {
        companyName: payload.companyName,
        designId: payload.designId,
        userId: payload.userId,
        rig: payload.allInputsDTO.rig,

    }, {root:true});

    }


}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}