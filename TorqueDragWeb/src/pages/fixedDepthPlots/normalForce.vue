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
				},
			trippingIn: {
				x: [],
				y: [],
				line:{
					shape: 'spline'
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Tripping In',
				},
			trippingOut: {
				x: [],
				y: [],
				line:{
					shape: 'spline'
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Tripping Out',
			},
			rotatingOnBottom: {
				x: [],
				y: [],
				line:{
					shape: 'spline'
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Rotating On Bottom',
			},
			slideDrilling: {
				x: [],
				y: [],
				line:{
					shape: 'spline'
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Slide Drilling',
			},
			backReaming: {
				x: [],
				y: [],
				line:{
					shape: 'spline'
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Back Reaming',
			}

        }
    },
    methods:{
        createChart() {
			var context = this;

			var trippingInResults =  this.$store.getters['simulationStore/trippingInResults'];
			var trippingOutResults =  this.$store.getters['simulationStore/trippingOutResults'];
			var drillingResults =  this.$store.getters['simulationStore/drillingResults'];
			var slideDrillingResults =  this.$store.getters['simulationStore/slideDrillingResults'];
			var backReamingResults =  this.$store.getters['simulationStore/backReamingResults'];

			var length = trippingInResults.length;
			context.trippingIn.x = [];
			context.trippingIn.y = [];
			context.trippingOut.x = [];
			context.trippingOut.y = [];
			context.rotatingOnBottom.x = [];
			context.rotatingOnBottom.y = [];
			context.slideDrilling.x = [];
			context.slideDrilling.y = [];
			context.backReaming.x = [];
			context.backReaming.y = [];
			
			var M =1000.0;
			var i = 0;
			for(i = 0; i < length; i++){
				var md = trippingInResults[i].bottomMeasuredDepth;

				context.trippingIn.x.push(trippingInResults[i].normalForce/M);
				context.trippingIn.y.push(md);
			}

			length = trippingOutResults.length;
			for(i = 0; i < length; i++){
				var md = trippingInResults[i].bottomMeasuredDepth;

				context.trippingOut.x.push(trippingOutResults[i].normalForce/M);
				context.trippingOut.y.push(md);
			}

			length = drillingResults.length;
			for(i = 0; i < length; i++){
				var md = drillingResults[i].bottomMeasuredDepth;

				context.rotatingOnBottom.x.push(drillingResults[i].normalForce/M);
				context.rotatingOnBottom.y.push(md);
			}

			length = slideDrillingResults.length;
			for(i = 0; i < length; i++){
				var md = slideDrillingResults[i].bottomMeasuredDepth;

				context.slideDrilling.x.push(slideDrillingResults[i].normalForce/M);
				context.slideDrilling.y.push(md);
			}

			length = backReamingResults.length;
			for(i = 0; i < length; i++){
				var md = backReamingResults[i].bottomMeasuredDepth;

				context.backReaming.x.push(backReamingResults[i].normalForce/M);
				context.backReaming.y.push(md);
			}
			//console.log("x: ", context.trippingIn.x);
			//console.log("y: ", context.trippingIn.y);
			var data = [context.trippingIn, context.trippingOut, context.rotatingOnBottom, context.slideDrilling, context.backReaming];
			var layout = { 
				showlegend: true,
				title: 'Normal Force Plot',
				xaxis: {
					title: 'Normal Force (Klb)',
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
			Plotly.newPlot('myDiv', data, layout);
        }
    },
    mounted() {
        var context = this;
		context.createChart();
		
        }
}
</script>