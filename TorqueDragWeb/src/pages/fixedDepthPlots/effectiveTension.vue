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
			traceEffectiveTensionBottom: {
				x: [],
				y: [],
				line:{
					shape: 'spline'
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Tripping Out',
				},
        }
    },
    methods:{
        createChart() {
			var context = this;
			var PipeCalculatedVariables =  this.$store.getters['simulationStore/PipeCalculatedVariables'];
			var length = PipeCalculatedVariables.length;
			context.traceEffectiveTensionBottom.x = [];
			context.traceEffectiveTensionBottom.y = [];
			var i = 0;
			for(i = 0; i < length; i++){
				context.traceEffectiveTensionBottom.x.push(PipeCalculatedVariables[i].tensionTopOfPipeTripOut/1000.0)
				context.traceEffectiveTensionBottom.y.push(PipeCalculatedVariables[i].bottomMeasuredDepth/0.3048)
			}
			console.log("x: ", context.traceEffectiveTensionBottom.x);
			console.log("y: ", context.traceEffectiveTensionBottom.y);
			var data = [context.traceEffectiveTensionBottom];
			var layout = { 
				showlegend: true,
				title: 'Effective Tension Plot',
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
			Plotly.newPlot('myDiv', data, layout);
        }
    },
    mounted() {
        var context = this;
		context.createChart();
		
        }
}
</script>