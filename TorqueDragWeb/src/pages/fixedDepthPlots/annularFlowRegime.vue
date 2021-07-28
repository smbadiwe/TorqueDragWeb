<template>
  <div>
	   <div class="row bg-secondary">
            <q-bar class="col-12 q-pa-sm" >
                 <q-btn
                    flat
                    dense
                    round
                    size="md"
                    icon="refresh"
                    aria-label="Menu"
                    @click="reFreshPlot"
                    />
					<q-space />
					<div class="q-pa-sm">
						Select Operational Pump Rate (gpm): 
					</div>
					<div class="q-pa-sm">
						<select style="width:100%;"
						class="text-center bg-positive text-accent"
						name="NameOfPumpRate" 
						id="" 
						v-on:change="onPumpRateSelectionChanged($event)">
							<option
							v-for="pumpFlow in rigDTO.pumpFlowRate" :key="pumpFlow">
							{{ pumpFlow }}
							</option>
						</select>
					</div>
            </q-bar>
        </div>

		<div class="row">
			<div id="myDiv" class="col-12 bg-accent">

			</div>
		</div>
  </div>
</template>

<script>
import Plotly from 'plotly.js-dist'

export default {
	computed:{
		rigDTO(){
            return this.$store.getters['simulationStore/rigDTOSurgeSwab'];
        }
	},
    data(){
        return {
			rateSelectedIndex: 0

        }
    },
    methods:{
		onPumpRateSelectionChanged(e){
			 var context = this;
        	//var id = e.target.value;
            //var name = e.target.options[e.target.options.selectedIndex].text;
            //console.log('id ', id );
            //console.log('name ',name );
            context.rateSelectedIndex = e.target.options.selectedIndex;
            context.createChart();
		},
        createChart() {
			var context = this;
            var rigDTO = this.$store.getters['simulationStore/rigDTOSurgeSwab'];
            var surgeSwabSensitivityDTO = this.$store.getters['simulationStore/surgeSwabSensitivityDTO'];
           // console.log("surgeSwabSensitivityDTO", surgeSwabSensitivityDTO)
			var j = 0;
			var M = 1000.0;
			var i = 0;
			var simulationResultsDTOsCount = surgeSwabSensitivityDTO.length;
			var data  = [];
            
            var annulusReynoldsNumber = {
				x: [],
				y: [],
				stackgroup: "one",
				line:{
					shape: 'spline',
					//color: 'rgb(55, 128, 191)',
    				//width: 3
				},
				//mode: 'lines',
				//type: 'scatter',
				name: 'Annulus FLow Regime',
			}

			
            //console.log("simulationResultsDTOsCount", simulationResultsDTOsCount)
            j = context.rateSelectedIndex;
			//for(j = 0; j < simulationResultsDTOsCount; j++){


				var surgeSwabResults =  surgeSwabSensitivityDTO[j].surgeSwabResults;
				
                var surgeSwabResultsLength = surgeSwabResults.length;

                for(i = 1; i < surgeSwabResultsLength; i++){

                    annulusReynoldsNumber.x.push(surgeSwabResults[i].annulusReynoldsNumber);
                    annulusReynoldsNumber.y.push(surgeSwabResults[i].bottomMeasuredDepth);
                }
	
			//}

            annulusReynoldsNumber.line.color = 'blue'

            data.push(annulusReynoldsNumber)
			console.log("data: ", data);
			
			var layout = { 
				showlegend: true,
				title: '',
				height: 900,
				xaxis: {
					title: 'Fluid Reynolds Number',
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
                    autorange: "reversed",
					title: 'Distance Along String (ft)',
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
			context.createChart();
		}
    },
    mounted() {
        var context = this;
		context.createChart();
		
    }
}
</script>