import { $http } from 'boot/axios' 

const state = {
    torqueDragDesign:{},
    torqueDragDesigns: [],
    SelectedTorqueDragDesign: {}
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
    }
}

const mutations = {
    PostTorqueDragDesign(state, payload){
        state.torqueDragDesign = payload;
  },
  GetTorqueDragDesigns(state, payload){
      state.torqueDragDesigns = payload;
      var isEmpty = true;
      for(var prop in state.SelectedTorqueDragDesign) {
        if(state.SelectedTorqueDragDesign.hasOwnProperty(prop))
        {
            isEmpty = false;
            break;
        }

    }
        console.log("GetTorqueDragDesigns")
      if(state.torqueDragDesigns.length > 0){
        if(isEmpty == true){
            state.torqueDragDesigns[0].isSelected = true;
            state.SelectedTorqueDragDesign = state.torqueDragDesigns[0];
        }else{
            state.SelectedTorqueDragDesign.isSelected = true;
             var i = 0;
            var nCount = state.torqueDragDesigns.length;
            for(i = 0; i < nCount; i++){
                if(state.torqueDragDesigns[i].designName == state.SelectedTorqueDragDesign.designName){
                    state.torqueDragDesigns[i].isSelected = true;
                }else{
                    state.torqueDragDesigns[i].isSelected = false;
                }
            }
        }
        
      }
  },
  GetSelectedTorqueDragDesign(state, payload){
    console.log("GetSelectedTorqueDragDesign")
    state.SelectedTorqueDragDesign = payload;
    var i = 0;
    var nCount = state.torqueDragDesigns.length;
    for(i = 0; i < nCount; i++){
        if(state.torqueDragDesigns[i].designName == state.SelectedTorqueDragDesign.designName){
            state.torqueDragDesigns[i].isSelected = true;
        }else{
            state.torqueDragDesigns[i].isSelected = false;
        }
    }
    console.log("state.SelectedTorqueDragDesign:", state.SelectedTorqueDragDesign);
}

}

const actions = {

    PostTorqueDragDesign(context, payload)
    {
      return new Promise((resolve, reject) => {
        console.log(payload)
         $http.post('TorqueDragDesigns/PostTorqueDragDesign', payload)
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
      return new Promise((resolve, reject) => {
        console.log("seen")
        console.log(payload);
         $http.post('TorqueDragDesigns/GetTorqueDragDesigns',  {
            companyDBConnectionString: payload
         })
          .then(response => {
              
            context.commit('GetTorqueDragDesigns', response.data)              
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