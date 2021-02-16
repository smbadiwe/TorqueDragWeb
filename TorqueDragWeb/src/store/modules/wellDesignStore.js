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
      state.wellProjects = payload.companies;  
      state.torqueDragDesigns = payload.torqueDragDesigns;
      state.torqueDragMostRecentDesigns = payload.torqueDragMostRecentDesigns;
      state.SelectedTorqueDragDesign = state.torqueDragDesigns[0];
  },
  GetSelectedTorqueDragDesign(state, payload){
    state.SelectedTorqueDragDesign = payload;
    console.log(state.SelectedTorqueDragDesign)
  },
  GetListsofData(state){
    var nlength= Object.keys(state.SelectedTorqueDragDesign).length;
    if(nlength == 0){
      var nCount = state.torqueDragDesigns.length;
      if(nCount > 0){
        state.SelectedTorqueDragDesign = state.torqueDragDesigns[0];
      }
    }

    nlength= Object.keys(state.SelectedTorqueDragDesign).length;
    console.log("nlength: ", nlength)
    if(nlength > 0){
      var wellProject = state.wellProjects[0];
      var field = wellProject.children[0];
      var well = field.children[0];
      var wellbore = well.children[0];
      var wellDesign = wellbore.children[0];
      state.projectNames =[]
      state.fieldNames =[]
      state.wellNames =[]
      state.wellboreNames =[]
      state.wellDesignNames =[]
      state.wellCases = []
      var i = 0;
      for(i = 0; i < state.wellProjects.length; i++){
        state.projectNames.push(state.wellProjects[i].label)
      }

      for(i = 0; i < wellProject.children.length; i++){
        state.fieldNames.push(wellProject.children[i].label)
      }

      for(i = 0; i < field.children.length; i++){
        state.wellNames.push(field.children[i].label)
      }

      for(i = 0; i < well.children.length; i++){
        state.wellboreNames.push(well.children[i].label)
      }

      for(i = 0; i < wellbore.children.length; i++){
        state.wellDesignNames.push(wellbore.children[i].label)
      }

      for(i = 0; i < wellDesign.children.length; i++){
        state.wellCases.push(wellDesign.children[i].label)
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

  }

}

const actions = {

    PostTorqueDragDesign(context, payload)
    {
      let config = {
        headers: {
          tenantcode: payload.companyName,
        }
      }

      return new Promise((resolve, reject) => {
        console.log(payload)
         $http.post('TorqueDragDesigns/PostTorqueDragDesign', payload, config)
          .then(response => {
              
            context.commit('PostTorqueDragDesign', response.data);
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
            console.log("PostTorqueDragDesign error")
            reject(error)
          })
      })
    },
    PostSelectedWellDesign(context, payload)
    {
      let config = {
        headers: {
          tenantcode: payload.companyName,
        }
      }

      return new Promise((resolve, reject) => {
        console.log(payload)
         $http.post('TorqueDragDesigns/PostSelectedWellDesign', {
          wellCaseId: payload.wellCaseId,
          torqueDragDesigns: context.state.torqueDragDesigns
         }, config)
          .then(response => {
              
            context.commit('GetSelectedTorqueDragDesign', response.data);
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
      let config = {
        headers: {
          tenantcode: payload.identity.companyName,
        }
      }

      return new Promise((resolve, reject) => {
        console.log("seen")
        console.log(payload);
         $http.get('TorqueDragDesigns/GetWellDesignsByUserId/' + payload.identity.id, config)
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
        }
      }

      return new Promise((resolve, reject) => {
        console.log("seen")
        console.log(payload);
         $http.get('TorqueDragDesigns/DeleteTorqueDragDesign/' + payload.uniqueId, config)
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
      //console.log("GetselectedSheetHeader")
      context.state.SelectedTorqueDragDesign = payload;
        var i = 0;
        var nCount = context.state.torqueDragMostRecentDesigns.length;
        for(i = 0; i < nCount; i++){
            if(context.state.torqueDragMostRecentDesigns[i].uniqueId == context.state.SelectedTorqueDragDesign.uniqueId){
              context.state.torqueDragMostRecentDesigns[i].isSelected = true;
            }else{
              context.state.torqueDragMostRecentDesigns[i].isSelected = false;
            }
        }

        context.commit('authStore/setStatusMessageBarVisibility',  
            {
              actionMessage: context.state.SelectedTorqueDragDesign.designName + " selected",
              visibility: true
            }, 
            {root:true});
        //console.log("state.selectedSheetHeader:", state.selectedSheetHeader);
    },


}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}