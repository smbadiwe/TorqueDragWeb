<template>
  <div id="myDiv" class="bg-accent" >
    <!-- <canvas id="effective_tension"></canvas> -->
  </div>
</template>

<script>
import Chart from 'chart.js';
import Plotly from 'plotly.js-dist'

export default {
    data(){
        return {
			scatterChartData: {
				datasets: [{
					label: 'My First dataset',
					borderColor: '#FF0000',
					backgroundColor: '#FF0000',
					data:  [{
								x: 5,
								y: 2
							}, 
							{
								x: 10,
								y: 4
							},
							{
								x: 15,
								y: 6
							},
							{
								x: 20,
								y: 8
							}
						]
				}, 
				{
					label: 'My Second dataset',
					borderColor: '#0000ff',
					backgroundColor: '#0000ff',
					data: [{
								x: 8,
								y: 4
							}, 
							{
								x: 12,
								y: 8
							},
							{
								x: 16,
								y: 12
							},
							{
								x: 24,
								y: 16
							}
						]
				}]
			},
			options: {
						title: {
							display: true,
							text: 'Chart.js Scatter Chart'
						},
						parsing: false
			},
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
			var data = [context.trace1, context.trace2, context.trace3];
			Plotly.newPlot('myDiv', data);
        }
    },
    mounted() {
        var context = this;
		context.createChart();
		
        }
}
</script>