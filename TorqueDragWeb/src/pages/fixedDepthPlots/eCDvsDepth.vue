<template>
  <div>
	   <div class="row">
            <q-bar class="col-12 q-pa-sm bg-secondary" >
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
            var hydraulicSensitivityDTO = this.$store.getters['simulationStore/surgeSwabSensitivityDTO'];
            console.log("hydraulicSensitivityDTO", hydraulicSensitivityDTO)
			var j = 0;
			var M = 1000.0;
			var i = 0;
			var simulationResultsDTOsCount = hydraulicSensitivityDTO.length;
			var data  = [];
			var annulus = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
					color: 'rgb(55, 128, 191)',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Annulus',
            }
            

			
            //console.log("simulationResultsDTOsCount", simulationResultsDTOsCount)
            j = context.rateSelectedIndex
			//for(j = 0; j < simulationResultsDTOsCount; j++){


				var hydraulicsResults =  hydraulicSensitivityDTO[j].surgeSwabResults;
				
				var hydraulicsResultsLength = hydraulicsResults.length;
				
				

                for(i = 0; i < hydraulicsResultsLength; i++){

                    annulus.x.push(hydraulicsResults[i].equivalentCirculatingDensity);
                    annulus.y.push(hydraulicsResults[i].bottomMeasuredDepth);

				}
				
				//annulus.x.push(rigDTO.mudDensity);
                //annulus.y.push(0);
	
			//}

            annulus.line.color = 'blue'

            data.push(annulus)

			console.log("data: ", data);
			
			var layout = { 
				showlegend: true,
				title: '',
				height: 900,
				xaxis: {
					title: 'ECD (ppg)',
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