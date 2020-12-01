import { $http } from 'boot/axios' 

const state = {
    PipeCalculatedVariables: [],
    visible: false,
    showSimulatedReturnData: true,
    schematicDTO: {},
    holeSegmentLast:{},
    xMax: 1000.0,
    yMax: 1000.0
  }

  const getters = {
    xMax(state){
      return state.xMax;
    },
    yMax(state){
      return state.yMax;
    },
    PipeCalculatedVariables(state){
      return state.PipeCalculatedVariables;
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
    RunSimulation(state, payload){
    console.log("PipeCalculatedVariables: ", payload)
    state.PipeCalculatedVariables = payload;
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
    this.$router.push('/schematicView');
    

  }

}

const actions = {

RunSimulation(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    context.state.visible = true;
    context.state.showSimulatedReturnData = false
    this.$router.push('/simulationConsole');

    console.log("response: ", payload)

    return new Promise((resolve, reject) => {
       $http.post('Commons/RunSimulation', payload, config)
        .then(response => {

        console.log("response: ", response)

          context.commit('RunSimulation', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("RunSimulation error")
          context.state.visible = false;
          context.state.showSimulatedReturnData = true
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
  }

}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}