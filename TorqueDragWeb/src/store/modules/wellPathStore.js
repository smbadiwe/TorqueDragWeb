import { $http } from 'boot/axios' 
import { copy } from "boot/utils";
import { devCalcParams } from 'boot/devSurveyManager'

const state = {
    deviationSurveys:[],
    isImportDialogVisible: false,
    layout: {
      showlegend: true,
      title: "Gas Rate",
      height: 900,
      xaxis: {
        title: "",
        titlefont: {
          family: "Arial, sans-serif",
          size: 14,
          color: "black"
        },
        showticklabels: true,
        tickangle: "auto",
        tickfont: {
          family: "Old Standard TT, serif",
          size: 14,
          color: "black"
        },
        showgrid: true,
        showline: true,
        mirror: "ticks",
        gridcolor: "#bdbdbd",
        gridwidth: 2,
        zerolinecolor: "#969696",
        zerolinewidth: 4,
        linecolor: "#636363",
        linewidth: 4
      },
      yaxis: {
        autorange: "reversed",
        title: "Gas Rate (MMScf)",
        titlefont: {
          family: "Arial, sans-serif",
          size: 14,
          color: "black"
        },
        showticklabels: true,
        tickangle: 45,
        tickfont: {
          family: "Old Standard TT, serif",
          size: 14,
          color: "black"
        },
        showgrid: true,
        showline: true,
        mirror: "ticks",
        gridcolor: "#bdbdbd",
        gridwidth: 2,
        zerolinewidth: 0,
        linecolor: "#636363",
        linewidth: 4
      }
    },
    seriesCollection: [],
    selectedVariable: "Measured Depth",
    seriesStore: []
  }

  const getters = {
    deviationSurveys(state){
      return state.deviationSurveys;
    },
    isImportDialogVisible(state){
      return state.isImportDialogVisible;
    },
    layout(state){
      return state.layout;
    },
    seriesCollection(state){
      return state.seriesCollection;
    },
    selectedVariable(state){
      return state.selectedVariable;
    },
    seriesStore(state){
      return state.seriesStore;
    }
}

const mutations = {
  PostDeviationSurvey(state){
    //console.log("payload.previewSurveyData: ", payload.previewSurveyData)
    state.isImportDialogVisible = false;
  },
  SetisImportDialogVisible(state, payload){
    state.isImportDialogVisible = payload;
  },
  GetDeviationSurveys(state, payload){
    state.deviationSurveys = payload;
  }
}

const actions = {
  PostDeviationSurvey(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }

    state.deviationSurveys = [];
    state.deviationSurveys = payload.deviationSurveys;
    console.log("trueVerticalDepth1: ", state.deviationSurveys[1].trueVerticalDepth)
    if( state.deviationSurveys[1].trueVerticalDepth == 0){
      devCalcParams.calculateDevParams(state.deviationSurveys);
      state.deviationSurveys = devCalcParams.deviationSurveys;
      payload.deviationSurveys = state.deviationSurveys;
    }
    

    

    return new Promise((resolve, reject) => {
  

       $http.post('DeviationSurveys/PostDeviationSurvey', payload, config)
        .then(response => {
            
          context.commit('PostDeviationSurvey', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("PostDeviationSurvey error")
          reject(error)
        })
    })
  },
  GetDeviationSurveys(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }
    
    state.deviationSurveys = [];
    var ids = payload.designId.toString() + "&" + payload.userId.toString();

    return new Promise((resolve, reject) => {
  

       $http.get('DeviationSurveys/GetDeviationSurveys/' + ids, config)
        .then(response => {

          console.log("response.data:", response.data)
          //devCalcParams.calculateDevParams(response.data)
          //console.log("DevCalcParams.DevParams: ", devCalcParams.deviationSurveys)
            
          context.commit('GetDeviationSurveys', response.data)              
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetDeviationSurveys error")
          reject(error)
        })
    })
  },
  LoadDevSurveySeriesCollection(context, payload)
  {
    let config = {
      headers: {
        tenantcode: payload.companyName,
      }
    }
    
    context.state.deviationSurveys = [];
    context.state.seriesStore =[]
    context.state.seriesCollection =[]
    var ids = payload.designId.toString() + "&" + payload.userId.toString();
 
    return new Promise((resolve, reject) => {
  

       $http.get('DeviationSurveys/GetDeviationSurveys/' + ids, config)
        .then(response => {

          
          context.state.deviationSurveys = response.data;
          console.log("deviationSurveys:", response.data);
            
          var j = 0, i = 0;

          var variableNames =  ["Measured Depth",
                                "True Vertical Depth",
                                "Inclination",
                                "Azimuth",
                                "Vertical Section",
                                "Dogleg Severity",
                                "North/South",
                                "East/West"]

              var length = context.state.deviationSurveys.length;
              var variableNamesCount = variableNames.length;
              var xvalue = 0;
              var xaxisTitle = "";
            
              for (i = 0; i < variableNamesCount; i++) {
                if(payload.xVariableName != variableNames[i]) 
                {

                var series = {
                  x: [],
                  y: [],
                  name: variableNames[i],
                  yaxisTitle: ""
                };

                  for (j = 0; j < length; j++) {
                      
                      switch(payload.xVariableName) {
                        case "Measured Depth":
                          xvalue = context.state.deviationSurveys[j].measuredDepth;
                          xaxisTitle = "Measured Depth (ft)";
                          series.x.push(xvalue);
                          break;
                        case "True Vertical Depth":
                          xvalue = context.state.deviationSurveys[j].trueVerticalDepth;
                          xaxisTitle = "True Vertical Depth (ft)";
                          series.x.push(xvalue);
                          break;
                        case "Inclination":
                          xvalue = context.state.deviationSurveys[j].inclination;
                          xaxisTitle = "Inclination (deg)";
                          series.x.push(xvalue);
                          break;
                        case "Azimuth":
                          xvalue = context.state.deviationSurveys[j].azimuth;
                          xaxisTitle = "Azimuth (deg)";
                          series.x.push(xvalue);
                          break;
                        case "Vertical Section":
                          xvalue = context.state.deviationSurveys[j].verticalSection;
                          xaxisTitle = "Vertical Section (ft)";
                          series.x.push(xvalue);
                          break;
                        case "Dogleg Severity":
                          xvalue = context.state.deviationSurveys[j].doglegSeverity;
                          xaxisTitle = "Dogleg Severity (deg/100ft)";
                          series.x.push(xvalue);
                          break;
                        case "North/South":
                          xvalue = context.state.deviationSurveys[j].northSouth;
                          xaxisTitle = "North/South (ft)";
                          series.x.push(xvalue);
                          break;
                        case "East/West":
                          xvalue = context.state.deviationSurveys[j].eastWest;
                          xaxisTitle = "East/West (ft)";
                          context.state.layout.yaxis.autorange = "";
                          series.x.push(xvalue);
                          break;
                      }
                      


                      switch (variableNames[i]) {
                        case "Measured Depth":
                          series.y.push(context.state.deviationSurveys[j].measuredDepth);
                          series.yaxisTitle = "Measured Depth (ft)";
                          break;

                        case "True Vertical Depth":
                          series.y.push(context.state.deviationSurveys[j].trueVerticalDepth);
                          series.yaxisTitle = "True Vertical Depth (ft)";
                          break;

                        case "Inclination":
                          series.y.push(context.state.deviationSurveys[j].inclination);
                          series.yaxisTitle = "Inclination (deg)";
                          break;

                        case "Azimuth":
                          series.y.push(context.state.deviationSurveys[j].azimuth);
                          series.yaxisTitle = "Azimuth (deg)";
                          break;

                        case "Vertical Section":
                          series.y.push(context.state.deviationSurveys[j].verticalSection);
                          series.yaxisTitle = "Vertical Section (ft)";
                          break;
                        case "North/South":
                          series.y.push(context.state.deviationSurveys[j].northSouth);
                          series.yaxisTitle = "North/South (ft)";
                          break;
                        case "East/West":
                          series.y.push(context.state.deviationSurveys[j].eastWest);
                          series.yaxisTitle = "East/West (ft)";
                          break;
                      }
                  }

                  context.state.seriesStore.push(copy(series));
                }
                }

                

                var series1 = {
                  x: context.state.seriesStore[0].x,
                  y: context.state.seriesStore[0].y,
                  line: {
                    shape: "spline"
                  },
                  mode: "lines",
                  type: "scatter",
                  name: payload.xVariableName
                };

                context.state.layout.xaxis.title = xaxisTitle;
                context.state.layout.yaxis.title = context.state.seriesStore[0].yaxisTitle;
                context.state.layout.title = "";
                context.state.seriesCollection.push(copy(series1));

                
              console.log("series: ", series1);
              context.dispatch('chartStore/SetChartData',  {
                layout: context.state.layout,
                seriesCollection: context.state.seriesCollection,
                seriesStore: context.state.seriesStore,
                xVariableName: payload.xVariableName,
                chartId: payload.chartId
              }, {root:true})                
            resolve(response)
            
        })
        .catch(error => {
          console.log("GetDeviationSurveys error")
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