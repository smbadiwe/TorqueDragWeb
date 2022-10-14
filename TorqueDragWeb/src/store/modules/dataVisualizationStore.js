
const state = {
    isDataVisualization: false,
    listOfData: [],
    seriesNames: []
    
  }

const getters = {
    isDataVisualization(state){
        return state.isDataVisualization;
    },
    listOfData(state){
        return state.listOfData;
    },
    seriesNames(state){
        return state.seriesNames;
    } 
}

const mutations = {
    setIsDataVisualization(state, payload){
        state.isDataVisualization = payload;
    }

}

const actions = {
    GetListOfData(context, payload){
        context.state.listOfData = [];
        context.state.seriesNames = [];
        
        var i = 0;
        var j = 0;
        var simulationResult = payload.simulationResults[0];
        var variables = Object.keys(simulationResult);
        var length = variables.length;
        var lengthJ = payload.simulationResults.length;
        let check = false;
        let  VariableName = "";
        for(i = 0; i < length; i++){

            switch(variables[i]){
                case "pipeOuterArea":
                    check = true;
                    VariableName = "Pipe Outer Area";
                break;
                case "pipeInnerArea":
                    check = true;
                    VariableName = "Pipe Inner Area";
                break;
                case "pipeTotalWeight":
                    check = true;
                    VariableName = "Pipe Total Weight";
                break;
            }

            if(check == true){
                let series =  {
                    x: [],
                    y: [],
                    line:{
                        shape: 'spline'
                    },
                    mode: 'lines',
                    type: 'scatter',
                    name: VariableName,
                }

                context.state.listOfData.push(series);
                context.state.seriesNames.push(context.state.listOfData[ii].name);
            }
            
                
            
        }
        for(j = 0; j < lengthJ; j++){
            for(i = 0; i < length; i++){

                let y = payload.simulationResults[j].bottomMeasuredDepth/0.3048;    

                switch(variables[i]){
                    case "pipeOuterArea":
                        context.state.listOfData[i].x.push(payload.simulationResults[i].pipeOuterArea);
                        context.state.listOfData[i].y.push(y); 
                    break;
                    case "pipeInnerArea":
                        context.state.listOfData[i].x.push(payload.simulationResults[i].pipeInnerArea);
                        context.state.listOfData[i].y.push(y); 
                    break;
                    case "pipeTotalWeight":
                        context.state.listOfData[i].x.push(payload.simulationResults[i].pipeTotalWeight);
                        context.state.listOfData[i].y.push(y); 
                    break;
                }    
                
            }
        }

         //let ii = 0;
 

		/* for(i = 0; i < length; i++){
            ii = 0;

            let y = payload.simulationResults[i].bottomMeasuredDepth/0.3048;

            ii++;
			context.state.listOfData[ii].x.push(payload.simulationResults[i].pipeOuterArea);
            context.state.listOfData[ii].y.push(y);          
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].pipeInnerArea);
            context.state.listOfData[ii].y.push(y);        
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].pipeTotalWeight);
            context.state.listOfData[ii].y.push(y);         
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].buoyancyWeight);
            context.state.listOfData[ii].y.push(y);   
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].tensileStrength);
            context.state.listOfData[ii].y.push(y);
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].bottomInclination);
            context.state.listOfData[ii].y.push(y);
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].bottomAzimuth);
            context.state.listOfData[ii].y.push(y);
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].dogLegSeverity);
            context.state.listOfData[ii].y.push(y);
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].tensionBottomOfPipeTripOut);
            context.state.listOfData[ii].y.push(y);
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].normalForce);
            context.state.listOfData[ii].y.push(y);
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].tensionTopOfPipeTripOut);
            context.state.listOfData[ii].y.push(y);
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].totalDrag);
            context.state.listOfData[ii].y.push(y);
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].trippinOutHookeLoadAtJoint);
            context.state.listOfData[ii].y.push(y);
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].torqueBottomTripOut);
            context.state.listOfData[ii].y.push(y);
            ii++;
            context.state.listOfData[ii].x.push(payload.simulationResults[i].torqueTopTripInOut);
			context.state.listOfData[ii].y.push(y);
		} */
    }

}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}