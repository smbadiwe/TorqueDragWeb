<template>
    <div id="myDiv" class="bg-accent">
    </div>

</template>

<script>
export default {
     computed:{
        listOfData(){
            return this.$store.getters['dataVisualizationStore/listOfData'];
        }
    },
    methods:{
        createChart() {
			var context = this;

            let xAxisLabel = context.listOfData[0].name;
            
			console.log("x: ", context.listOfData[0].x);
			console.log("y: ", context.listOfData[0].y);
			var data = [context.listOfData[0]];
			var layout = { 
				showlegend: true,
				title: 'Effective Tension Plot',
				xaxis: {
					title: xAxisLabel,
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
        console.log("No 2");
		//context.createChart();
		
    },
    created(){
      var context = this;
      var PipeCalculatedVariables =  this.$store.getters['simulationStore/PipeCalculatedVariables'];
      this.$store.dispatch('dataVisualizationStore/GetListOfData', {
          simulationResults: PipeCalculatedVariables
      })
      console.log("No 1");
    }
}
</script>

