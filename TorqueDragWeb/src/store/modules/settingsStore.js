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
      ],
    common: {
        activeFluid: "",
        startMeasuredDepth: null,
        endMeasuredDepth: null,
        stepSize: null,
        seaWaterDensity: null,
        courseLength: null,
        youngsModulus: null,
        blockWeight: null,
        percentOfYield: null,
        bucklingLimitFactor: 1.0
    },
    isFromDB: false,
    tabCaption: 'Datum Details'
  }

  const getters = {
    menuTabs(state){
      return state.menuTabs;
    },
    common(state){
      return state.common;
    },
    isFromDB(state){
      return state.isFromDB;
    },
    tabCaption(state){
      return state.tabCaption;
    }
}

const mutations = {
    updatemenuTabs(state, payload){
        var i = payload.id;
        state.menuTabs[i].isRibbonActive = payload.isRibbonActive;
        //console.log('active menu tab: ', payload)
    },
    GetCommon(state, payload){
      var payloadLength = Object.keys(payload).length;
      if(payloadLength <= 0){
        console.log("state.common is empty: ", payload)
      }else{
        console.log("state.common is not empty: ", payload)
        state.common = payload;
      }
      
      state.isFromDB = true;
    },
    PostCommon(state, payload){
      state.common = payload;
    },
    GetTabCaption(state, payload){
      state.tabCaption = payload;
    }

}

const actions = {
  GetCommon(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }
    var ids = payload.designId.toString() + "&" + payload.userId.toString();
    return new Promise((resolve, reject) => {
  
      
       $http.get('Commons/GetCommon/'+ ids, config)
        .then(response => {
            
          context.commit('GetCommon', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetCommon error")
          reject(error)
        })
    })
  },
  PostCommon(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    return new Promise((resolve, reject) => {
  
      var newPayload = {
        companyName: payload.companyName,
        designId: payload.designId,
        common: {
                    activeFluid: context.activeFluid,
                    startMeasuredDepth : parseFloat(context.state.common.startMeasuredDepth),
                    endMeasuredDepth : parseFloat(context.state.common.endMeasuredDepth),
                    stepSize : parseFloat(context.state.common.stepSize),
                    seaWaterDensity : parseFloat(context.state.common.seaWaterDensity),
                    courseLength : parseFloat(context.state.common.courseLength),
                    youngsModulus : parseFloat(context.state.common.youngsModulus),
                    blockWeight:  parseFloat(context.state.common.blockWeight),
                    percentOfYield: parseFloat(context.state.common.percentOfYield),
                    bucklingLimitFactor: parseFloat(context.state.common.bucklingLimitFactor),
                    designId: payload.designId,
                    userId: payload.userId
                }

    }
      console.log("context.state.common:", context.state.common)
       $http.post('Commons/PostCommon', newPayload, config)
        .then(response => {
            
          context.commit('PostCommon', response.data)  
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Run parameters saved successfully",
            visibility: true
          }, {root:true});                
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostCommon error")
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