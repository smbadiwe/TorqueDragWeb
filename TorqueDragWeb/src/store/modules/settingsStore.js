import { $http } from 'boot/axios' 

const state = {
    menuTabs:[
        {
          id:1,
          caption: "Inputs",
          isRibbonActive: false
        },
        {
          id:2,
          caption: "Home",
          isRibbonActive: false
        },
        {
          id:3,
          caption: "General Outputs",
          isRibbonActive: false
        },
        {
          id:4,
          caption: "Torque & Drag",
          isRibbonActive: false
        },
        {
          id:5,
          caption: "Hydraulics",
          isRibbonActive: false
        },
        {
          id:6,
          caption: "Well Control",
          isRibbonActive: false
        },
        {
          id:7,
          caption: "Surge & Swab",
          isRibbonActive: false
        },
        {
          id:8,
          caption: "Tubing Stress Analysis",
          isRibbonActive: false
        },
        {
            id:8,
            caption: "Cementing",
            isRibbonActive: false
          }
      ]
  }

  const getters = {
    menuTabs(state){
      return state.menuTabs;
    }
}

const mutations = {
    updatemenuTabs(state, payload){
        var i = payload.id;
        state.menuTabs[i].isRibbonActive = payload.isRibbonActive;
        //console.log('active menu tab: ', payload)
    }

}

const actions = {


}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}