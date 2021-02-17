import { $http } from 'boot/axios' 

const state = {
  trippingInResults: [],
  trippingOutResults: [],
  drillingResults: [],
  slideDrillingResults: [],
  backReamingResults: [],
    visible: false,
    showSimulatedReturnData: true,
    schematicDTO: {},
    holeSegmentLast:{},
    xMax: 1000.0,
    yMax: 1000.0,
    segmentPipeList: [],
    holeSegmentLabels: [],
    tubingSegmentLabels: [],
    sensitivityColumns: [
        { name: "sensitivity1", label: "Sensitivity 1", field: "", align: "left" }
    ],
    noOfSensitivities: 2,
    sensitivity: {
      name: "Sensitivity 1",
      typesOfHole: [ 
        {
          hole: "Casing",
          holeValues: [null, null, null, null, null]

        },
        {
          hole: "Open Hole",
          holeValues: [null, null, null, null, null]
        }
      ]
    },
    sensivities: [
        {
          name: "Sensitivity 1",
          columns: [
            { name: "casing", label: "Casing", field: "", align: "left" },
            { name: "openHole", label: "Open Hole", field: "", align: "left" }
          ],
          typesOfHole: [ 
            {
              id: "Tripping in",
              casing: null,
              openHole: null
            },
            {
              id: "Tripping out",
              casing: null,
              openHole: null
            },
            {
              id: "Rotating on bottom",
              casing: null,
              openHole: null
            },
            {
              id: "Slide drilling",
              casing: null,
              openHole: null
            },
            {
              id: "Back reaming",
              casing: null,
              openHole: null
            }
          ]
        }
    ],
    SensitivityDialog: false,
    incremetVisibility: false,
    isThreeVisible: false,
    isFourVisible: false,
    isFiveVisible: false,
    sensitivityResultsDTO: {}
  }

  const getters = {
    isFiveVisible(state){
      return state.isFiveVisible;
    },
    isFourVisible(state){
      return state.isFourVisible;
    },
    isThreeVisible(state){
      return state.isThreeVisible;
    },
    incremetVisibility(state){
      return state.incremetVisibility;
    },
    SensitivityDialog(state){
      return state.SensitivityDialog;
    },
    noOfSensitivities(state){
      return state.noOfSensitivities;
    },
    sensitivityColumns(state){
      return state.sensitivityColumns;
    },
    sensitivity(){
      return state.sensitivity;
    },
    sensivities(){
      return state.sensivities;
    },
    tubingSegmentLabels(state){
      return state.tubingSegmentLabels;
    },
    holeSegmentLabels(state){
      return state.holeSegmentLabels;
    },
   segmentPipeList(state){
      return state.segmentPipeList;
    },
    xMax(state){
      return state.xMax;
    },
    yMax(state){
      return state.yMax;
    },
    trippingInResults(state){
      return state.trippingInResults;
    },
    trippingOutResults(state){
      return state.trippingOutResults;
    },
    drillingResults(state){
      return state.drillingResults;
    },
    slideDrillingResults(state){
      return state.slideDrillingResults;
    },
    backReamingResults(state){
      return state.backReamingResults;
    },
    visible(state){
        return state.visible;
    },
    schematicDTO(state){
      return state.schematicDTO;
    },
    holeSegmentLast(state){
      return state.holeSegmentLast;
    }
}

const mutations = {
    showSensitivityDialog(state, payload){
      state.SensitivityDialog = payload;
      state.incremetVisibility = payload;
    },
    addSensitivity(state) {

        
    if(state.noOfSensitivities  < 5){
      state.noOfSensitivities++;

      switch(state.noOfSensitivities){
        case 2:
          state.isThreeVisible = false;
          state.isFourVisible = false;
          state.isFiveVisible = false;
          break;
        case 3:
          state.isThreeVisible = true;
          state.isFourVisible = false;
          state.isFiveVisible = false;
          break;
        case 4:
          state.isThreeVisible = true;
          state.isFourVisible = true;
          state.isFiveVisible = false;
          break;
        case 5:
          state.isThreeVisible = true;
          state.isFourVisible = true;
          state.isFiveVisible = true;
          break
      }
    }
        
    },
    removeSensitivity(state) {
      if(state.noOfSensitivities > 2)
      {
        state.noOfSensitivities--;
        switch(state.noOfSensitivities){
          case 2:
            state.isThreeVisible = false;
            state.isFourVisible = false;
            state.isFiveVisible = false;
            break;
          case 3:
            state.isThreeVisible = true;
            state.isFourVisible = false;
            state.isFiveVisible = false;
            break;
          case 4:
            state.isThreeVisible = true;
            state.isFourVisible = true;
            state.isFiveVisible = false;
            break;
          case 5:
            state.isThreeVisible = true;
            state.isFourVisible = true;
            state.isFiveVisible = true;
            break
        }
      }  

    },
    RunSensitivities(state, payload){
      console.log("Sensitivities", payload);
      state.sensitivityResultsDTO = payload;
    },
    RunSimulation(state, payload){
    console.log("PipeCalculatedVariables: ", payload)
    state.trippingInResults = payload.trippingInResults;
    state.trippingOutResults = payload.trippingOutResults;
    state.drillingResults = payload.drillingResults;
    state.slideDrillingResults = payload.slideDrillingResults;
    state.backReamingResults = payload.backReamingResults;
    state.visible = false;
    state.showSimulatedReturnData = true

  },
  DrawSchematic(state, payload){
    console.log("schematicDTO: ", payload)
    state.schematicDTO = payload;
    var nHoleSegments = state.schematicDTO.holeSegments.length;
    state.holeSegmentLast = state.schematicDTO.holeSegments[nHoleSegments-1];
    state.xMax = state.schematicDTO.xMax;
    state.yMax = state.schematicDTO.yMax;
    state.visible = false;
    state.showSimulatedReturnData = true
    //this.$router.push('/schematicView');
    
  },
  DrawPipeBuckledSections(state, payload){
    state.segmentPipeList = payload;
  },
  DrawHoleSegmentLabel(state, payload){
    state.holeSegmentLabels = payload;
  },
  DrawTubingSegmentLabel(state, payload){
    state.tubingSegmentLabels = payload;
  }

}

const actions = {
  RunSensitivities(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    context.state.visible = true;
    context.state.showSimulatedReturnData = false
    //this.$router.push('/simulationConsole');

    console.log("response: ", payload)

    return new Promise((resolve, reject) => {
       $http.post('Commons/RunSensitivities',
       {
        userId: payload.userId,
        designId: payload.designId,
        companyName: payload.companyName,
        noOfSensitivities: context.state.noOfSensitivities,
        sensitivityParameters: payload.sensitivityParameters
       }, config)
        .then(response => {

        console.log("response: ", response)

          context.commit('RunSensitivities', response.data)  
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true}); 
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Run sensitivity completed successfully",
            visibility: true
          }, {root:true});                 
            resolve(response)
            
        })
        .catch(error => {
          console.log("RunSimulation error")
          context.commit('dataImportStore/SetLoaderParameters', {
            showLoader: false,
            showImportView: true
          }, {root:true}); 
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Run sensitivities failed. Please check your data",
            visibility: true
          }, {root:true});  
          reject(error)
        })
    })
  },
RunSimulation(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    context.state.visible = true;
    context.state.showSimulatedReturnData = false
    //this.$router.push('/simulationConsole');

    console.log("response: ", payload)
    var ids = payload.designId.toString() + "&" + payload.userId.toString();

    return new Promise((resolve, reject) => {
       $http.get('Commons/RunSimulation/' + ids, config)
        .then(response => {

        console.log("response: ", response)

          context.commit('RunSimulation', response.data)  
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Torque and Drag simulation completed successfully",
            visibility: true
          }, {root:true});                
            resolve(response)
            
        })
        .catch(error => {
          console.log("RunSimulation error")
          context.state.visible = false;
          context.state.showSimulatedReturnData = true
          context.commit('authStore/setStatusMessageBarVisibility',  
          {
            actionMessage: "Torque and Drag simualtion failed",
            visibility: true
          }, {root:true});    
          reject(error)
        })
    })
  },
DrawSchematic(context, payload)
{
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }
    context.state.visible = true;
    context.state.showSimulatedReturnData = false
    
    //console.log("response: ", payload)
    //this.$router.push('/schematic');
    
    return new Promise((resolve, reject) => {
       $http.post('Commons/DrawSchematic', payload, config)
        .then(response => {

        //console.log("response: ", response)

          context.commit('DrawSchematic', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("DrawSchematic error")
          context.state.visible = false;
          context.state.showSimulatedReturnData = true
          reject(error)
        })
    })
  },
DrawPipeBuckledSections(context, payload)
{
  
    context.state.visible = true;
    context.state.showSimulatedReturnData = false
    
    //console.log("response: ", payload)
    //this.$router.push('/schematic');
    
    return new Promise((resolve, reject) => {
      $http.post('Commons/DrawPipeBuckledSections', payload)
        .then(response => {

        //console.log("response: ", response)

          context.commit('DrawPipeBuckledSections', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("DrawPipeBuckledSections error")
          context.state.visible = false;
          context.state.showSimulatedReturnData = true
          reject(error)
        })
    })
  },
  DrawHoleSegmentLabel(context, payload2)
  {
    let config = {
      headers: {
        tenantcode: payload2.companyName,
      }
    }
      context.state.visible = true;
      context.state.showSimulatedReturnData = false
      
      //console.log("response: ", payload)
      //this.$router.push('/schematic');
      
      return new Promise((resolve, reject) => {
        $http.post('Commons/DrawHoleSegmentLabel', payload2.payload, config)
          .then(response => {

          //console.log("response: ", response)

            context.commit('DrawHoleSegmentLabel', response.data)              
              resolve(response)
              
          })
          .catch(error => {
            console.log("DrawHoleSegmentLabel error")
            context.state.visible = false;
            context.state.showSimulatedReturnData = true
            reject(error)
          })
      })
    },
  DrawTubingSegmentLabel(context, payload2)
  {
    let config = {
      headers: {
        tenantcode: payload2.companyName,
      }
    }
      context.state.visible = true;
      context.state.showSimulatedReturnData = false
      
      //console.log("response: ", payload)
      //this.$router.push('/schematic');
      
      return new Promise((resolve, reject) => {
        $http.post('Commons/DrawTubingSegmentLabel', payload2.payload, config)
          .then(response => {

          //console.log("response: ", response)

            context.commit('DrawTubingSegmentLabel', response.data)              
              resolve(response)
              
          })
          .catch(error => {
            console.log("DrawTubingSegmentLabel error")
            context.state.visible = false;
            context.state.showSimulatedReturnData = true
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