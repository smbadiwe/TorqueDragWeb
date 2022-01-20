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
			var M = 1.0;
			var i = 0;
			var simulationResultsDTOsCount = simulationResultsDTOs.length;
			var data  = [];

			for(j = 0; j < simulationResultsDTOsCount; j++){

				var simulationResultsDTO = simulationResultsDTOs[j];

				var rotatingOffBottomResults =  simulationResultsDTO.rotatingOffBottomResults;

				var isRotatingOffBottomChecked =  simulationResultsDTO.isRotatingOffBottomChecked;

                var hoop = {
                x: [],
                y: [],
                line:{
                    shape: 'spline',
                    width: 3,
                    color: 'green'
                },
                mode: 'lines',
                type: 'scatter',
                name: 'Hoop',
                fill: 'tonexty'
                }
            
                if(j == 0)hoop.fill = 'none'
                else hoop.fill = 'tonexty'

                var radial = {
                x: [],
                y: [],
                line:{
                    shape: 'spline',
                    width: 3,
                    color: 'green'
                },
                mode: 'lines',
                type: 'scatter',
                name: 'Radial',
                fill: 'tonexty'
                }
            
                if(j == 0)radial.fill = 'none'
                else radial.fill = 'tonexty'

                var torsion = {
                x: [],
                y: [],
                line:{
                    shape: 'spline',
                    width: 3,
                    color: 'green'
                },
                mode: 'lines',
                type: 'scatter',
                name: 'Torsion',
                fill: 'tonexty'
                }
            
                if(j == 0)torsion.fill = 'none'
                else torsion.fill = 'tonexty'

                var shear = {
                x: [],
                y: [],
                line:{
                    shape: 'spline',
                    width: 3,
                    color: 'green'
                },
                mode: 'lines',
                type: 'scatter',
                name: 'Shear',
                fill: 'tonexty'
                }
            
                if(j == 0)shear.fill = 'none'
                else shear.fill = 'tonexty'
                
                var axial = {
                    x: [],
                    y: [],
                    line:{
                        shape: 'spline',
                        width: 3
                    },
                    mode: 'lines',
                    type: 'scatter',
                    name: 'Axial',
                }

                if(j == 0)axial.fill = 'none'
                    else axial.fill = 'tonexty'

                var buckling = {
                    x: [],
                    y: [],
                    line:{
                        shape: 'spline',
                        width: 3
                    },
                    mode: 'lines',
                    type: 'scatter',
                    name: 'Buckling',
                }

                if(j == 0)buckling.fill = 'none'
                    else buckling.fill = 'tonexty'

                var bending = {
                    x: [],
                    y: [],
                    line:{
                        shape: 'spline',
                        width: 3
                    },
                    mode: 'lines',
                    type: 'scatter',
                    name: 'Bending',
                }

                if(j == 0)bending.fill = 'none'
                    else bending.fill = 'tonexty'
                    
                var vonMises = {
                    x: [],
                    y: [],
                    line:{
                        shape: 'spline',
                        width: 3
                    },
                    mode: 'lines',
                    type: 'scatter',
                    name: 'VonMises',
                }

                if(j == 0)vonMises.fill = 'none'
                    else vonMises.fill = 'tonexty'


                length = rotatingOffBottomResults.length;
                
                for(i = 0; i < length; i++){
                    var md = rotatingOffBottomResults[i].bottomMeasuredDepth;

                    hoop.x.push(rotatingOffBottomResults[i].hoopStressInner/M);
                    hoop.y.push(md);
                    radial.x.push(rotatingOffBottomResults[i].radialStressInner/M);
                    radial.y.push(md);
                    torsion.x.push(rotatingOffBottomResults[i].torsionStressInner/M);
                    torsion.y.push(md);
                    shear.x.push(rotatingOffBottomResults[i].shearStress/M);
                    shear.y.push(md);
                    axial.x.push(rotatingOffBottomResults[i].axilStressInner/M);
                    axial.y.push(md);
                    buckling.x.push(rotatingOffBottomResults[i].bucklingStressOuter/M);
                    buckling.y.push(md);
                    bending.x.push(rotatingOffBottomResults[i].bendingStressInner/M);
                    bending.y.push(md);
                    vonMises.x.push(rotatingOffBottomResults[i].vonMisesStressInner/M);
                    vonMises.y.push(md);
                }

                hoop.name = 'Hoop ' + (j+1).toString();
                hoop.actualName =  'hoop ' + (j+1).toString();

                radial.actualName =  'Radial ' + (j+1).toString();
                radial.name = 'radial' + (j+1).toString();

                torsion.actualName =  'Torsion ' + (j+1).toString();
                torsion.name = 'torsion' + (j+1).toString();

                shear.name = 'Shear' + (j+1).toString();
                shear.actualName =  'shear ' + (j+1).toString();

                axial.name = 'Axial ' + (j+1).toString();
                axial.actualName =  'axial' + (j+1).toString();

                buckling.name = 'Buckling ' + (j+1).toString();
                buckling.actualName =  'buckling' + (j+1).toString();

                bending.name = 'Bending ' + (j+1).toString();
                bending.actualName =  'bending' + (j+1).toString();

                vonMises.name = 'VonMises ' + (j+1).toString();
                vonMises.actualName =  'vonMises' + (j+1).toString();

                if(isRotatingOffBottomChecked == true){
                    data.push(hoop);
                    data.push(radial);
                    data.push(torsion);
                    data.push(shear);
                    data.push(axial);
                    data.push(buckling);
                    data.push(bending);
                    data.push(vonMises);
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
					unit: "psi"
				},
				excelFileName: "RotatingOffBottomStress.csv",
				tableTitle: "Rotating Off Bottom Stress",
				isReversed: true
			}

			/* this.$store.commit('simulationStore/setCustomColumns', tableData);
			this.$store.commit('simulationStore/setCustomTable', tableData);
			this.$store.commit('simulationStore/setExcelFileName', tableData);
			this.$store.commit('simulationStore/setTableTitle', tableData); */

			var layout = { 
				showlegend: true,
				title: 'Rotating Off Bottom Stress',
				height: 900,
				xaxis: {
					title: 'Stress (psi)',
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