import { $http } from 'boot/axios' 
import { copy } from "boot/utils";
import { devCalcParams } from 'boot/devSurveyManager'

const state = {
    deviationSurveys:[],
    isImportDialogVisible: false,
    layout: {
      showlegend: true,
      title: "Gas Rate",
      height: 1000,
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
        zerolinecolor: "#969696",
        zerolinewidth: 4,
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

    return new Promise((resolve, reject) => {
  

       $http.get('DeviationSurveys/GetDeviationSurveys/' + payload.designId, config)
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

    return new Promise((resolve, reject) => {
  

       $http.get('DeviationSurveys/GetDeviationSurveys/' + payload.designId, config)
        .then(response => {

          
          context.state.deviationSurveys = response.data;
          console.log("deviationSurveys:", response.data);
            
          var j = 0, i = 0;

          var variableNames =  ["Measured Depth",
                                "True Vertical Depth",
                                "Inclination",
                                "Azimuth",
                                "Vertical Section"]

              var length = context.state.deviationSurveys.length;
              var variableNamesCount = variableNames.length;

            
              for (i = 0; i < variableNamesCount; i++) {

                var series = {
                  x: [],
                  y: [],
                  name: variableNames[i],
                  yaxisTitle: ""
                };

                  for (j = 0; j < length; j++) {

                      var doglegSeverity = context.state.deviationSurveys[j].doglegSeverity;
                      series.x.push(doglegSeverity);
                      


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
                      }
                  }

                  context.state.seriesStore.push(copy(series));
                }

                

                var series1 = {
                  x: context.state.seriesStore[0].x,
                  y: context.state.seriesStore[0].y,
                  line: {
                    shape: "spline"
                  },
                  mode: "lines",
                  type: "scatter",
                  name: "Dogleg Severity"
                };

                context.state.layout.xaxis.title = "Dogleg Severity (deg/100ft)";
                context.state.layout.yaxis.title = context.state.seriesStore[0].yaxisTitle;
                context.state.layout.title = "";
                context.state.seriesCollection.push(copy(series1));

              context.dispatch('chartStore/SetChartData',  {
                layout: context.state.layout,
                seriesCollection: context.state.seriesCollection,
                seriesStore: context.state.seriesStore
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