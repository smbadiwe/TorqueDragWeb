<template>
    <div class="bg-accent" style="height: 1100px;">
      <div 
      v-if="showView"
      class="row">
          <div id="myDiv" class="col-12 bg-accent" >
          </div>
      </div>

       <div class="row">
          <div class="col-12 q-pa-sm bg-primary">
                <q-inner-loading :showing="showLoader">
                  <q-spinner-gears size="100px" color="primary" />
              </q-inner-loading>
          </div>
      </div>
    </div>
</template>

<script>
import Plotly from 'plotly.js-dist'

export default {
    computed:{
        showLoader(){
            return this.$store.getters['dataImportStore/showLoader'];
        },
        showView(){
            return this.$store.getters['dataImportStore/showImportView'];
        },
        holeSegmentLast(){
            return this.$store.getters['simulationStore/holeSegmentLast'];
        }
    },
    data(){
        return {
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
                width: 800,
                height: 800,
                shapes: []
                };
            var context = this;
            var data1 = [];
            var data2 = [];
            var data = [];
            var schematicDTO =  this.$store.getters['simulationStore/schematicDTO'];
            layout.xaxis.range[1] = schematicDTO.xMax + 100;
            layout.yaxis.range[0] = schematicDTO.yMax + 100;
            console.log("schematicDTO.xMax; ", schematicDTO.xMax)
             console.log("schematicDTO.yMax; ", schematicDTO.yMax)
			var nholeSegments = schematicDTO.holeSegments.length;
            var metersToFeet = 1.0 / 0.3048;
            var inchesToFeet = 1.0 /  12.0;
            var scaleDiamter = 1000.0;
            var xoffSet = 50.0;
            var i = 0;
            var j = 0;

            var formation = {
                    type: 'path',
                    path: 'M 0,20',
                    fillcolor: '#a26c37',
                    line: {
                        color: '#a26c37'
                    }
            }

            formation.path= formation.path + ' L0,' + (schematicDTO.yMax + 100).toString() 
                                    + ' L' + (schematicDTO.xMax + 100).toString() + ',' + (schematicDTO.yMax + 100).toString() 
                                    + ' L' + (schematicDTO.xMax + 100).toString() + ',20 Z'; //'L2,8 L2,9 L3,10, L4,10 L5,9 L5,8 L4,7 Z'
            layout.shapes.push(context.copy(formation));
          
             for(j = 0; j < nholeSegments; j++){
                var holeSegment = schematicDTO.holeSegments[j];
                var left = {
                    type: 'path',
                    path: holeSegment.dh1,
                    fillcolor: '9896A5',
                    line: {
                        color: '9896A5'
                    }
                }



                /*  var right = {
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
                } */

                layout.shapes.push(context.copy(left));
                //layout.shapes.push(context.copy(right));
                //layout.shapes.push(context.copy(centerLine))
            }

             for(j = 0; j < nholeSegments; j++){
                var holeSegment = schematicDTO.holeSegments[j];
                var left = {
                    type: 'path',
                    path: holeSegment.dc,
                    fillcolor: '#b2beb5',
                    line: {
                        color: '#b2beb5'
                    }
                }

                /*  var right = {
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
                } */

                layout.shapes.push(context.copy(left));
                //layout.shapes.push(context.copy(right));
                //layout.shapes.push(context.copy(centerLine))
            }

            var npipeSegments = schematicDTO.pipeSegments.length

            for(j = 0; j < npipeSegments; j++){
                var pipeSegment = schematicDTO.pipeSegments[j];
                 var pipe = {
                    type: 'path',
                    path: pipeSegment.d,
                    fillcolor: '#D3D3D3',
                    line: {
                        color: '#D3D3D3'
                    }
                }
                layout.shapes.push(context.copy(pipe));
            }

            console.log("layout.shapes: ", layout.shapes)
            
            
            Plotly.newPlot('myDiv', data, layout);
        }
    },
    mounted() {
        var context = this;
        context.createChart();
    
		
        }
}
</script>