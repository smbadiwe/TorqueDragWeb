<template>
  <div id="myDiv" class="bg-accent" >
  </div>
</template>

<script>
import Plotly from 'plotly.js-dist'

export default {
    data(){
        return {
			trace1: {
				x: [1, 2, 3, 4],
				y: [10, 15, 13, 17],
				mode: 'markers',
				type: 'scatter'
				},
			trace2: {
				x: [2, 3, 4, 5],
				y: [16, 5, 11, 9],
				line:{
					shape: 'spline'
				},
				mode: 'lines',
				type: 'scatter'
				},
			trace3: {
				x: [1, 2, 3, 4],
				y: [12, 9, 15, 12],
				mode: 'lines+markers',
				type: 'scatter'
				}

        }
    },
    methods:{
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

			for(j = 0; j < simulationResultsDTOsCount; j++){

				var simulationResultsDTO = simulationResultsDTOs[j];

				var trippingInResults =  simulationResultsDTO.trippingInResults;
				var trippingOutResults =  simulationResultsDTO.trippingOutResults;
				var drillingResults =  simulationResultsDTO.drillingResults;
				var slideDrillingResults =  simulationResultsDTO.slideDrillingResults;
				var backReamingResults =  simulationResultsDTO.backReamingResults;

				var isTrippingInChecked =  simulationResultsDTO.isTrippingInChecked;
				var isTrippingOutChecked =  simulationResultsDTO.isTrippingOutChecked;
				var isRotatingOnBottomChecked =  simulationResultsDTO.isRotatingOnBottomChecked;
				var isSlideDrillingChecked =  simulationResultsDTO.isSlideDrillingChecked;
				var isBackReamingChecked =  simulationResultsDTO.isBackReamingChecked;

				var trippingIn = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
					color: 'rgb(55, 128, 191)',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Tripping In',
				} 
			var trippingOut = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
					color: 'rgb(55, 128, 191)',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Tripping Out',
			}

			var rotatingOnBottom = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
					color: 'rgb(55, 128, 191)',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Rotating On Bottom',
			}

			var slideDrilling = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
					color: 'rgb(55, 128, 191)',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Slide Drilling',
			}

			var backReaming = {
				x: [],
				y: [],
				line:{
					shape: 'spline',
					color: 'rgb(55, 128, 191)',
    				width: 3
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Back Reaming',
			}

				length = trippingInResults.length;
				
				
				for(i = 0; i < length; i++){
					var md = trippingInResults[i].bottomMeasuredDepth;

					trippingIn.x.push(trippingInResults[i].tensionBottomOfPipe/M);
					trippingIn.y.push(md);
				}

				console.log("tension: ", trippingIn.x);

				trippingIn.line.color = 'rgb(243, 81, 45)';
				trippingIn.name = 'Tripping In ' + (j+1).toString();
				if(isTrippingInChecked == true){
					//data = [...data, context.trippingIn]
					data.push(trippingIn)
				}
				

				length = trippingOutResults.length;
				for(i = 0; i < length; i++){
					var md = trippingOutResults[i].bottomMeasuredDepth;

					trippingOut.x.push(trippingOutResults[i].tensionBottomOfPipe/M);
					trippingOut.y.push(md);
				}

				trippingOut.line.color = 'rgb(132, 218, 23)'
				trippingOut.name = 'Tripping Out ' + (j+1).toString();
				if(isTrippingOutChecked == true){
					//data = [...data, context.trippingOut]
					data.push(trippingOut)
				}

				length = drillingResults.length;
				for(i = 0; i < length; i++){
					var md = drillingResults[i].bottomMeasuredDepth;

					rotatingOnBottom.x.push(drillingResults[i].tensionBottomOfPipe/M);
					rotatingOnBottom.y.push(md);
				}

				rotatingOnBottom.line.color = 'rgb(40, 204, 164)'
				rotatingOnBottom.name = 'Rotating On Bottom ' + (j+1).toString();
				if(isRotatingOnBottomChecked == true){
					//data = [...data, context.rotatingOnBottom]
					data.push(rotatingOnBottom)
				}

				length = slideDrillingResults.length;
				for(i = 0; i < length; i++){
					var md = slideDrillingResults[i].bottomMeasuredDepth;

					slideDrilling.x.push(slideDrillingResults[i].tensionBottomOfPipe/M);
					slideDrilling.y.push(md);
				}

				slideDrilling.line.color = 'rgb(24, 61, 213)'
				slideDrilling.name = 'Slide Drilling ' + (j+1).toString();
				if(isSlideDrillingChecked == true){
					//data = [...data, context.slideDrilling]
					data.push(slideDrilling)
				}

				length = backReamingResults.length;
				for(i = 0; i < length; i++){
					var md = backReamingResults[i].bottomMeasuredDepth;

					backReaming.x.push(backReamingResults[i].tensionBottomOfPipe/M);
					backReaming.y.push(md);
				}

				backReaming.line.color = 'rgb(227, 67, 94)'
				backReaming.name = 'Back Reaming ' + (j+1).toString();
				if(isBackReamingChecked == true){
					//data = [...data, context.backReaming]
					data.push(backReaming)
				}

				length = trippingInResults.length;
				for(i = 0; i < length; i++){
					var md = trippingInResults[i].bottomMeasuredDepth;

					helicalBuckling.x.push(-1 * trippingInResults[i].criticalHelicalBuckling/M);
					helicalBuckling.y.push(md);

					sinusoidalBuckling.x.push(-1 * trippingInResults[i].criticalSinusoidalBuckling/M);
					sinusoidalBuckling.y.push(md);
				}
	
			}

			helicalBuckling.line.color = 'rgb(227, 67, 94)'
			sinusoidalBuckling.line.color = 'rgb(29, 36, 198)'

			//data = [...data, context.helicalBuckling, context.sinusoidalBuckling];
			data.push(helicalBuckling)
			data.push(sinusoidalBuckling)
			console.log("data: ", data);
			
			var layout = { 
				showlegend: true,
				title: 'Effective Tension Plot',
				height: 900,
				xaxis: {
					title: 'Effective Tension (Klb)',
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
        }
    },
    mounted() {
        var context = this;
		context.createChart();
		
    }
}
</script>