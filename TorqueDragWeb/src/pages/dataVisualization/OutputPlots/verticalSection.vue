<template>
  <div>
	   <div class="row">
            <q-bar class="col-12 q-pa-sm row bg-secondary" >
                 <q-btn
                    flat
                    dense
                    round
                    size="md"
                    icon="refresh"
                    aria-label="Menu"
                    @click="reFreshPlot"
                    />
					<q-btn
                    flat
                    dense
                    round
                    size="md"
                    :icon="dynamicIcon"
                    aria-label="Menu"
                    @click="toggleTable"
                    />
                    <q-space />
                    <q-btn-dropdown color="primary" :label="selectedYVariable">
                    <q-list>
                        <q-item 
                        v-for="variableName in variableNames" :key="variableName"
                        clickable v-close-popup @click="onItemClick(variableName)">
                        <q-item-section>
                            <q-item-label>{{ variableName }}</q-item-label>
                        </q-item-section>
                        </q-item>

                    </q-list>
                    </q-btn-dropdown>
            </q-bar>
        </div>

		<div class="row">
			<div v-if="isTable">
				<chartToTable></chartToTable>
			</div>
			<div 
			v-else
			id="myDiv" class="col-12 bg-accent">

			</div>
		</div>
  </div>
</template>

<script>
import Plotly from 'plotly.js-dist'
import chartToTable from "pages/fixedDepthPlots/chartToTable.vue"

export default {
	components:{
		chartToTable
	},
    data(){
        return {
			isTable: false,
            dynamicIcon: "table_view",
            selectedYVariable: "",
            variableNames: ["Measured Depth",
                                "True Vertical Depth",
                                "Inclination",
                                "Azimuth",
                                "Vertical Section",
                                "Dogleg Severity",
                                "North/South",
                                "East/West"]

        }
    },
    methods:{
		toggleTable(){
			var context = this;
			
			if(context.isTable == true){
				context.isTable = false;
				context.dynamicIcon = "table_chart";
				console.log("dynamicIcon: ", context.dynamicIcon)
				//context.reFreshPlot();
			}else{
				context.isTable = true
				context.dynamicIcon = "table_chart";
				console.log("dynamicIcon: ", context.dynamicIcon)
				//context.reFreshPlot();
				

			}
		},
        createChart(selectedYName) {
			var context = this;
            var deviationSurveys = this.$store.getters['wellPathStore/deviationSurveys'];
            //console.log("deviationSurveys: ", deviationSurveys)
			var j = 0;
			var length;
			var M = 1000.0;
			var i = 0;
			var data  = [];
			var series = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
					color: 'rgb(55, 128, 191)',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
                name: '',
                actualName: ''
            }
            

                length = deviationSurveys.length;
                var yUnit = ""
                var isReversed = false;
                var reversed = ""
                
               switch (selectedYName) {
                        case "Measured Depth":
                          series.name = "Measured Depth";
                          series.actualName = "measuredDepth";
                            yUnit = "ft";
                            isReversed = true;
                            reversed = "reversed";
                            for(i = 0; i < length; i++){
                                series.y.push(deviationSurveys[i].measuredDepth);
                                series.x.push(deviationSurveys[i].verticalSection);
                            }
                          break;

                        case "True Vertical Depth":
                          series.name = "True Vertical Depth";
                          series.actualName = "trueVerticalDepth";
                          isReversed = true;
                          reversed = "reversed";
                          yUnit = "ft"
                          for(i = 0; i < length; i++){
                                series.y.push(deviationSurveys[i].trueVerticalDepth);
                                series.x.push(deviationSurveys[i].verticalSection);
                            }
                          break;

                        case "Inclination":;
                          series.name = "Inclination";
                          series.actualName = "inclination";
                          yUnit = "degrees"
                          for(i = 0; i < length; i++){
                                series.y.push(deviationSurveys[i].inclination);
                                series.x.push(deviationSurveys[i].verticalSection);
                            }
                          break;

                        case "Azimuth":
                          series.name = "Azimuth";
                          series.actualName = "azimuth";
                          yUnit = "degrees"
                          for(i = 0; i < length; i++){
                                series.y.push(deviationSurveys[i].azimuth);
                                series.x.push(deviationSurveys[i].verticalSection);
                            }
                          break;

                        case "Vertical Section":
                          series.name = "Vertical Section";
                          series.actualName = "verticalSection";
                          yUnit = "ft"
                          for(i = 0; i < length; i++){
                                series.y.push(deviationSurveys[i].verticalSection);
                                series.x.push(deviationSurveys[i].verticalSection);
                            }
                          break;
                        case "North/South":
                          series.name = "North/South";
                          series.actualName = "northSouth";
                          yUnit = "ft"
                          for(i = 0; i < length; i++){
                                series.y.push(deviationSurveys[i].northSouth);
                                series.x.push(deviationSurveys[i].verticalSection);
                            }
                          break;
                        case "East/West":
                          series.name = "East/West";
                          series.actualName = "eastWest";
                          yUnit = "ft"
                          for(i = 0; i < length; i++){
                                series.y.push(deviationSurveys[i].eastWest);
                                series.x.push(deviationSurveys[i].verticalSection);
                            }
                          break;
                          case "Dogleg Severity":
                          series.name = "Dogleg Severity";
                          series.actualName = "doglegSeverity";
                          yUnit = "deg/ft"
                          for(i = 0; i < length; i++){
                                series.y.push(deviationSurveys[i].doglegSeverity);
                                series.x.push(deviationSurveys[i].verticalSection);
                            }
                          break;
                  }

                  data.push(series)
                
                var tableData = {
				data,
				xAxisData: {
					actualName:"verticalSection",
					name: "Vertical Section",
					unit: "ft"
				},
				yAxisData: {
					unit: yUnit
				},
				excelFileName: "Vertical Section.csv",
				tableTitle: "Vertical Section",
				isReversed: false
            }
            

            console.log("data: ", data)
			this.$store.commit('simulationStore/setCustomColumns', tableData);
			this.$store.commit('simulationStore/setCustomTable', tableData);
			this.$store.commit('simulationStore/setExcelFileName', tableData);
			this.$store.commit('simulationStore/setTableTitle', tableData);

			var layout = { 
				showlegend: true,
				title: 'Vertical Section Plot',
				height: 900,
				xaxis: {
					title: tableData.xAxisData.name + " (" + tableData.xAxisData.unit + ")",
					titlefont: {
					family: 'Arial, sans-serif',
					size: 14,
					color: 'black'
					},
					showticklabels: true,
					tickangle: 'auto',
					tickfont: {
					family: 'Old Standard TT, serif',
					size: 14,
					color: 'black'
					},
					showgrid: true,
					zeroline: true,
					showline: true,
					mirror: 'ticks',
					gridcolor: '#bdbdbd',
					gridwidth: 2,
					zerolinecolor: '#969696',
					zerolinewidth: 4,
					linecolor: '#636363',
					linewidth: 4
				},
				yaxis: { 
					autorange: reversed,
					title: series.name + " (" + yUnit + ")",
					titlefont: {
					family: 'Arial, sans-serif',
					size: 14,
					color: 'black'
					},
					showticklabels: true,
					tickangle: 45,
					tickfont: {
						family: 'Old Standard TT, serif',
						size: 14,
						color: 'black'
						},
					showgrid: true,
					zeroline: true,
					showline: true,
					mirror: 'ticks',
					gridcolor: '#bdbdbd',
					gridwidth: 2,
					zerolinecolor: '#969696',
					zerolinewidth: 4,
					linecolor: '#636363',
					linewidth: 4
				 	} 
				};
			var config = {responsive: true}
			Plotly.newPlot('myDiv', data, layout, config);
		},
		reFreshPlot(){
			var context = this;
            context.isTable = false;
            context.selectedYVariable = "Measured Depth";
            var yVariable = context.selectedYVariable ;
			context.createChart(yVariable);
        },
          onItemClick (yVariable) {
            var context = this;
            context.createChart(yVariable)
        }
    },
    mounted() {
        var context = this;
        context.selectedYVariable = "Measured Depth";
            var yVariable = context.selectedYVariable ;
		context.createChart(yVariable);
    }
}
</script>