<template>
    <div class="row">
        <div class="col-12 q-pa-sm">
            <table>
                <tr>
                    <th>Property</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Helical Buckling</td>
                    <td>
                        <div class="row">
                            <div class="col-12">
                                <input class="text-center bg-white" type="color" id="helicalColor" 
                                name="helicalColor"
                                v-model="colorHelicalBuckling"
                                style="width:100%" @change="onColorChanged">
                            </div>
                        </div>
                    </td>
                </tr>
                 <tr>
                    <td>Sinusiodal Buckling</td>
                    <td>
                        <div class="row">
                            <div class="col-12">
                                <input class="text-center bg-white" type="color" id="sinusiodalColor" 
                                name="sinusiodalColor"
                                v-model="colorSinusiodalBuckling"
                                style="width:100%" @change="onColorChanged">
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                   <td>Sensitivity</td>
                    <td>
                        <div class="row">
                            <div class="col-12">
                                <q-btn-dropdown class="q-pa-sm" flat :label="selectedSensitivity">
                                    <q-list>
                                        <q-item 
                                        v-for="series in sensitivityIndices" :key="series"
                                        clickable v-close-popup @click="onItemClick(series)">
                                        <q-item-section>
                                            <q-item-label>{{ series }}</q-item-label>
                                        </q-item-section>
                                        </q-item>

                                    </q-list>
                                </q-btn-dropdown>
                            </div>
                        </div>
                    </td>
                </tr>
                 <tr>
                   <td>Operation</td>
                    <td>
                        <div class="row">
                            <div class="col-12">
                                <q-btn-dropdown class="q-pa-sm" flat :label="selectedOperation">
                                    <q-list>
                                        <q-item 
                                        v-for="operationName in operationNames" :key="operationName"
                                        clickable v-close-popup @click="onItemSelectionChanged(operationName)">
                                        <q-item-section>
                                            <q-item-label>{{ operationName }}</q-item-label>
                                        </q-item-section>
                                        </q-item>

                                    </q-list>
                                    </q-btn-dropdown>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
       sensitivityIndices() {
            return this.$store.getters['simulationStore/sensitivityIndices'];
        },
        operationNames(){
            return this.$store.getters['operationsStore/operationNames'];
        }
    },
    data(){
        return {
            colorHelicalBuckling: 'orange',
            colorSinusiodalBuckling: 'yellow',
            selectedSensitivity: '1',
            selectedOperation: "No Operation"
        }
    },
    methods:{
        onColorChanged(){
            var context =  this;
            this.$store.commit('propertyGridStore/setBucklingProperties', {
            colorHelicalBuckling:  context.colorHelicalBuckling,
            colorSinusiodalBuckling: context.colorSinusiodalBuckling,
            selectedSensitivity: context.selectedSensitivity,
            selectedOperation: context.selectedOperation
            });
        },
        onItemSelectionChanged(name){
            // var id = e.target.value;
            // var name = e.target.options[e.target.options.selectedIndex].text;
            var context =  this;
            context.selectedOperation =  name;
            var operationResults = []
            console.log(name)

            switch(name) {
                case "No Operation":
                    context.isOperation = false;
                    break;

                case "Tripping In":
                    context.isOperation = true;
                    var operationResults = this.$store.getters['simulationStore/trippingInResults'];
                    break;

                case "Tripping Out":
                    context.isOperation = true;
                    var operationResults = this.$store.getters['simulationStore/trippingOutResults'];
                    break;
                
                case "Rotating On Bottom":
                    context.isOperation = true;
                    var operationResults = this.$store.getters['simulationStore/drillingResults'];
                    break;

                case "Slide Drilling":
                    context.isOperation = true;
                    var operationResults = this.$store.getters['simulationStore/slideDrillingResults'];
                    break;
                
                case "Back reaming":
                    context.isOperation = true;
                    var operationResults = this.$store.getters['simulationStore/backReamingResults'];
                    break;
            }

            var context =  this;
            this.$store.commit('propertyGridStore/setBucklingProperties', {
            colorHelicalBuckling:  context.colorHelicalBuckling,
            colorSinusiodalBuckling: context.colorSinusiodalBuckling,
            selectedSensitivity: context.selectedSensitivity,
            selectedOperation: context.selectedOperation
            });

            console.log(operationResults)

        },
        onItemClick(selectedItem){
         var context =  this;
         context.selectedSensitivity = "Sensitivity #"+ selectedItem.toString();
          var sensitivityResultsDTO = this.$store.getters['simulationStore/sensitivityResultsDTO'];
          var simulationResultsDTOs = sensitivityResultsDTO.simulationResultsDTOs;
          var simulationResultsDTOsCount = simulationResultsDTOs.length;
          var simulationResultsDTO = simulationResultsDTOs[selectedItem-1];
          console.log(simulationResultsDTO)
          switch(context.selectedOperation) {
                case "No Operation":
                    context.isOperation = false;
                    break;

                case "Tripping In":
                    context.isOperation = true;
                    this.$store.commit('simulationStore/setTrippingInResults', simulationResultsDTO.trippingInResults);
                    break;

                case "Tripping Out":
                    context.isOperation = true;
                    this.$store.commit('simulationStore/setTrippingOutResults', simulationResultsDTO.trippingOutResults);
                    break;
                
                case "Rotating On Bottom":
                    context.isOperation = true;
                    this.$store.commit('simulationStore/setDrillingResults', simulationResultsDTO.drillingResults);
                    break;

                case "Slide Drilling":
                    context.isOperation = true;
                    this.$store.commit('simulationStore/setSlideDrillingResults', simulationResultsDTO.slideDrillingResults);
                    break;
                
                case "Back reaming":
                    context.isOperation = true;
                    this.$store.commit('simulationStore/setBackReamingResults', simulationResultsDTO.backReamingResults);
                    break;
            }

         var context =  this;
            this.$store.commit('propertyGridStore/setBucklingProperties', {
            colorHelicalBuckling:  context.colorHelicalBuckling,
            colorSinusiodalBuckling: context.colorSinusiodalBuckling,
            selectedSensitivity: context.selectedSensitivity,
            selectedOperation: context.selectedOperation
            });

            
      }
    }
}
</script>