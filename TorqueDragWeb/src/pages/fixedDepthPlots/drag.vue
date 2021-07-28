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
					<q-space />
					<q-btn
                    flat
                    dense
                    round
                    size="md"
                    :icon="dynamicIcon"
                    aria-label="Menu"
                    @click="toggleTable"
                    />
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
			dynamicIcon: "table_chart"

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
        createChart() {
			var context = this;
			var sensitivityResultsDTO = this.$store.getters['simulationStore/sensitivityResultsDTO'];
			var simulationResultsDTOs = sensitivityResultsDTO.simulationResultsDTOs;
			var j = 0;
			var length;
			var M = 1000.0;
			var i = 0;
			var simulationResultsDTOsCount = simulationResultsDTOs.length;
			var data  = [];
			var helicalBuckling = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
					color: 'rgb(55, 128, 191)',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Helical Buckling',
			}

			var sinusoidalBuckling = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
					color: 'rgb(55, 128, 191)',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Sinusoidal Buckling',
			}

			//for(j = simulationResultsDTOsCount-1; j >= 0; j--)
			//for(j = 0; j < simulationResultsDTOsCount; j++)
			for(j = 0; j < simulationResultsDTOsCount; j++){

				var simulationResultsDTO = simulationResultsDTOs[j];

				var trippingInResults =  simulationResultsDTO.trippingInResults;
				var trippingOutResults =  simulationResultsDTO.trippingOutResults;
				var drillingResults =  simulationResultsDTO.drillingResults;
				var slideDrillingResults =  simulationResultsDTO.slideDrillingResults;
				var backReamingResults =  simulationResultsDTO.backReamingResults;
				var rotatingOffBottomResults = simulationResultsDTO.rotatingOffBottomResults;

				var isTrippingInChecked =  simulationResultsDTO.isTrippingInChecked;
				var isTrippingOutChecked =  simulationResultsDTO.isTrippingOutChecked;
				var isRotatingOnBottomChecked =  simulationResultsDTO.isRotatingOnBottomChecked;
				var isSlideDrillingChecked =  simulationResultsDTO.isSlideDrillingChecked;
				var isBackReamingChecked =  simulationResultsDTO.isBackReamingChecked;
				var isRotatingOffBottomChecked =  simulationResultsDTO.isRotatingOffBottomChecked;
				//console.log("isRotatingOffBottomChecked", isRotatingOffBottomChecked)

				var trippingIn = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
					width: 3,
					color: 'green'
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Tripping In',
				fill: 'tonexty'
				}
				//tonexty tozeroy tonextx tozerox
				if(j == 0)trippingIn.fill = 'none'
				else trippingIn.fill = 'tonexty'
			var trippingOut = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Tripping Out',
			}

			if(j == 0)trippingOut.fill = 'none'
				else trippingOut.fill = 'tonexty'

			var rotatingOnBottom = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Rotating On Bottom',
			}

			if(j == 0)rotatingOnBottom.fill = 'none'
				else rotatingOnBottom.fill = 'tonexty'

			var slideDrilling = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Slide Drilling',
			}

			if(j == 0)slideDrilling.fill = 'none'
				else slideDrilling.fill = 'tonexty'

			var backReaming = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Back Reaming',
			}

			if(j == 0)backReaming.fill = 'none'
				else backReaming.fill = 'tonexty'

			var rotatingOffBottom = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Rotating Off Bottom',
			}

			if(j == 0)rotatingOffBottom.fill = 'none'
				else rotatingOffBottom.fill = 'tonexty'

				length = trippingInResults.length;
				
				for(i = 0; i < length; i++){
					var md = trippingInResults[i].bottomMeasuredDepth;

					trippingIn.x.push(trippingInResults[i].totalDrag/M);
					trippingIn.y.push(md);
				}


				//console.log("tension: ", trippingIn.x);

				//trippingIn.line.color = 'rgb(243, 81, 45)';
				trippingIn.name = 'Tripping In ' + (j+1).toString();
				trippingIn.actualName =  'trippingIn' + (j+1).toString();
				if(isTrippingInChecked == true){
					//data = [...data, context.trippingIn]
					data.push(trippingIn)
				}
				

				length = trippingOutResults.length;
				for(i = 0; i < length; i++){
					var md = trippingOutResults[i].bottomMeasuredDepth;

					trippingOut.x.push(trippingOutResults[i].totalDrag/M);
					trippingOut.y.push(md);
				}

				//trippingOut.line.color = 'rgb(132, 218, 23)'
				trippingOut.name = 'Tripping Out ' + (j+1).toString();
				trippingOut.actualName =  'trippingOut' + (j+1).toString();
				if(isTrippingOutChecked == true){
					//data = [...data, context.trippingOut]
					data.push(trippingOut)
				}

				length = drillingResults.length;
				for(i = 0; i < length; i++){
					var md = drillingResults[i].bottomMeasuredDepth;

					rotatingOnBottom.x.push(drillingResults[i].totalDrag/M);
					rotatingOnBottom.y.push(md);
				}

				//rotatingOnBottom.line.color = 'rgb(40, 204, 164)'
				rotatingOnBottom.name = 'Rotating On Bottom ' + (j+1).toString();
				rotatingOnBottom.actualName =  'rotatingOnBottom' + (j+1).toString();
				if(isRotatingOnBottomChecked == true){
					//data = [...data, context.rotatingOnBottom]
					data.push(rotatingOnBottom)
				}

				
				length = rotatingOffBottomResults.length;
				for(i = 0; i < length; i++){
					var md = rotatingOffBottomResults[i].bottomMeasuredDepth;

					rotatingOffBottom.x.push(rotatingOffBottomResults[i].totalDrag/M);
					rotatingOffBottom.y.push(md);
				}

				//rotatingOnBottom.line.color = 'rgb(40, 204, 164)'
				rotatingOffBottom.name = 'Rotating Off Bottom ' + (j+1).toString();
				rotatingOffBottom.actualName =  'rotatingOffBottom' + (j+1).toString();
				if(isRotatingOffBottomChecked == true){
					//data = [...data, context.rotatingOnBottom]
					data.push(rotatingOffBottom)
				}

				length = slideDrillingResults.length;
				for(i = 0; i < length; i++){
					var md = slideDrillingResults[i].bottomMeasuredDepth;

					slideDrilling.x.push(slideDrillingResults[i].totalDrag/M);
					slideDrilling.y.push(md);
				}

				//slideDrilling.line.color = 'rgb(24, 61, 213)'
				slideDrilling.name = 'Slide Drilling ' + (j+1).toString();
				slideDrilling.actualName =  'slideDrilling' + (j+1).toString();
				if(isSlideDrillingChecked == true){
					//data = [...data, context.slideDrilling]
					data.push(slideDrilling)
				}

				length = backReamingResults.length;
				for(i = 0; i < length; i++){
					var md = backReamingResults[i].bottomMeasuredDepth;

					backReaming.x.push(backReamingResults[i].totalDrag/M);
					backReaming.y.push(md);
				}

				//backReaming.line.color = 'rgb(227, 67, 94)'
				backReaming.name = 'Back Reaming ' + (j+1).toString();
				backReaming.actualName =  'backReaming' + (j+1).toString();
				if(isBackReamingChecked == true){
					//data = [...data, context.backReaming]
					data.push(backReaming)
				}
				
	
			}


			var tableData = {
				data,
				xAxisData: {
					actualName:"measuredDepth",
					name: "Measured Depth",
					unit: "ft"
				},
				yAxisData: {
					unit: "klb"
				},
				excelFileName: "Drag.csv",
				tableTitle: "Drag",
				isReversed: true
			}

			this.$store.commit('simulationStore/setCustomColumns', tableData);
			this.$store.commit('simulationStore/setCustomTable', tableData);
			this.$store.commit('simulationStore/setExcelFileName', tableData);
			this.$store.commit('simulationStore/setTableTitle', tableData);

			var layout = { 
				showlegend: true,
				title: 'Drag Plot',
				height: 900,
				xaxis: {
					title: 'Drag (Klb)',
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
					tickformat: ",.0f",
					showgrid: true,
					zeroline: true,
					showline: true,
					mirror: 'ticks',
					gridcolor: '#bdbdbd',
					gridwidth: 2,
					zerolinecolor: '#969696',
					zerolinewidth: 4,
					linecolor: '#636363',
					linewidth: 4,
					autotick: true,
    				ticks: 'outside',
					tickwidth: 2
				},
				yaxis: { 
					autorange: "reversed",
					title: 'Measured Depth (ft)',
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
					tickformat: ",.0f",
					showgrid: true,
					zeroline: true,
					showline: true,
					mirror: 'ticks',
					gridcolor: '#bdbdbd',
					gridwidth: 2,
					zerolinecolor: '#969696',
					zerolinewidth: 4,
					linecolor: '#636363',
					linewidth: 4,
					autotick: false,
    				ticks: 'outside',
					tick0: 0,
					dtick: 500,
					ticklen: 8,
					tickwidth: 2
				 	} 
				};
			var config = {responsive: true}
			console.log("data: ", data)
			Plotly.newPlot('myDiv', data, layout, config);
			
		},
		reFreshPlot(){
			var context = this;
			context.isTable = false;
			context.createChart();
		}
    },
    mounted() {
        var context = this;
		context.createChart();
		
    }
}
</script>