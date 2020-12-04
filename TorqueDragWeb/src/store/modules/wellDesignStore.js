import { $http } from 'boot/axios' 

const state = {
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
    isCreateWellDesign: false
  }

const getters = {
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
    ShowCreateWellDesign(state){
      state.isCreateWellDesign = true
    },
    HideCreateWellDesign(state){
      state.isCreateWellDesign = false
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
      state.wellProjects = payload.wellProjects;  
      state.torqueDragDesigns = payload.torqueDragDesigns;
      state.SelectedTorqueDragDesign = state.torqueDragDesigns[0];
  },
  GetSelectedTorqueDragDesign(state, payload){
    state.SelectedTorqueDragDesign = payload;
    /* nlength= Object.keys(state.SelectedTorqueDragDesign).length;
    console.log("nlength: ", nlength)
    if(nlength > 0){
      var wellProject = null;

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
    } */
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
              
            context.commit('PostTorqueDragDesign', response.data)              
              resolve(response)
              
          })
          .catch(error => {
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
         $http.get('TorqueDragDesigns/GetTorqueDragDesigns', config)
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
    }


}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}