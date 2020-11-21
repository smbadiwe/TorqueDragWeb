<template>
  <div id="myDiv" class="bg-accent" >
  </div>
</template>

<script>
import Plotly from 'plotly.js-dist'

export default {
    computed:{
        visible(){
            return this.$store.getters['simulationStore/visible'];
        },
        showSimulatedReturnData(){
            return this.$store.getters['simulationStore/showSimulatedReturnData'];
        },
        holeSegmentLast(){
            return this.$store.getters['simulationStore/holeSegmentLast'];
        }
    },
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
			holeSegmentLeft: {
				x: [],
				y: [],
				line:{
                    shape: 'spline',
                    color: 'black'
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Casing left',
                },
            holeSegmentRight: {
				x: [],
				y: [],
				line:{
                    shape: 'spline',
                     color: 'black'
				},
				mode: 'lines',
				type: 'scatter',
				name: 'Casing Right',
				},
        }
    },
    methods:{
        copy(obj) {
        var cp = {};
        for (var o in obj) {
            cp[o] = obj[o];
        }
        return cp;
        },
        createChart() {
            console.log("createChart")
             var layout = {
                title: 'Well Schematic',
                xaxis: {
                    range: [0, 3500],
                    zeroline: false,
                    showgrid: false
                },
                yaxis: {
                    range: [3500, 0],
                    showgrid: false
                },
                width: 500,
                height: 500,
                shapes: []
                };
            var context = this;
            var data1 = [];
            var data2 = [];
            var data = [];
            var schematicDTO =  this.$store.getters['simulationStore/schematicDTO'];
            layout.xaxis.range[1] = schematicDTO.xMax;
            layout.yaxis.range[0] = schematicDTO.yMax;
            console.log("schematicDTO.xMax; ", schematicDTO.xMax)
             console.log("schematicDTO.yMax; ", schematicDTO.yMax)
			var nholeSegments = schematicDTO.holeSegments.length;
            var metersToFeet = 1.0 / 0.3048;
            var inchesToFeet = 1.0 /  12.0;
            var scaleDiamter = 1000.0;
            var xoffSet = 50.0;
            var i = 0;
            var j = 0;
           /*  for(j = 0; j < nholeSegments; j++){
                var holeSections = schematicDTO.holeSegments[j].holeSections;
                var nholeSegment = holeSections.length;
                var left = context.holeSegmentLeft;
                var right = context.holeSegmentRight;
                left.x = [];
                left.y = [];
                right.x = [];
                right.y = [];
                for(i = 0; i < nholeSegment; i++){
                    left.x.push(xoffSet + holeSections[i].topDisplacement * metersToFeet)
                    left.y.push(holeSections[i].topOfHole * metersToFeet)

                    left.x.push(xoffSet + holeSections[i].bottomDisplacement * metersToFeet)
                    left.y.push(holeSections[i].bottomOfHole * metersToFeet)

                     right.x.push(xoffSet + holeSections[i].topDisplacement * metersToFeet
                    + holeSections[i].outerDiameter * inchesToFeet * scaleDiamter)
                    right.y.push(holeSections[i].topOfHole * metersToFeet)

                    right.x.push(xoffSet + holeSections[i].bottomDisplacement * metersToFeet
                    + holeSections[i].outerDiameter * inchesToFeet * scaleDiamter)
                    right.y.push(holeSections[i].bottomOfHole * metersToFeet)
                }

                data.push(context.copy(left));
                data.push(context.copy(right))
            }
 */
             for(j = 0; j < nholeSegments; j++){
                var holeSegment = schematicDTO.holeSegments[j];
                var left = {
                    type: 'path',
                    path: holeSegment.d1,
                    line: {
                        color: 'black'
                    }
                }

                 var right = {
                    type: 'path',
                    path: holeSegment.d2,
                    line: {
                        color: 'black'
                    }
                }

                var centerLine = {
                    type: 'path',
                    path: holeSegment.centerLine,
                    line: {
                        color: 'black'
                    }
                }

                layout.shapes.push(context.copy(left));
                layout.shapes.push(context.copy(right));
                //layout.shapes.push(context.copy(centerLine))
            }

            var npipeSegments = schematicDTO.pipeSegments.length

            for(j = 0; j < npipeSegments; j++){
                var pipeSegment = schematicDTO.pipeSegments[j];
                 var pipe = {
                    type: 'path',
                    path: pipeSegment.d,
                    fillcolor: 'brown',
                    line: {
                        color: 'black'
                    }
                }
                layout.shapes.push(context.copy(pipe));
            }
            console.log("layout.shapes: ", layout.shapes)
            
			/* var layout = { 
				showlegend: true,
				title: 'Well Schematic',
				xaxis: {
                    rangemode: 'tozero',
					title: 'Horizontal Displacement (ft)',
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
                    linewidth: 4,
                    range: [0, 5000]
				},
				yaxis: {
                    rangemode: 'nonnegative',
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
            
             */
            
            
            Plotly.newPlot('myDiv', data, layout);
        }
    },
    mounted() {
        var context = this;
        context.createChart();
    
		
        }
}
</script>