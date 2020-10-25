<template>
  <div class="q-pa-md bg-accent">
<!--     <q-scroll-area
        :visible="visible"  
      style="height: 500px; width: 500px;"
    > -->
      <q-stepper
        v-model="ImportDataStep"
        vertical
        color="primary"
        animated
        style="width: 500px;"
        class="bg-accent"
      >
        <q-step
          :name="1"
          title="Select MS Excel Worksheet"
          :done="ImportDataStep > 1">
          <div class="bg-accent">
              <readExcelSheets-app class="bg-accent">
              </readExcelSheets-app>
          </div>

          <q-stepper-navigation class="bg-accent">
            <q-btn @click="moveForward(1)" color="primary" label="Next" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Map Variables"
          :done="ImportDataStep > 2"
        >
          <div class="bg-accent">
            <mapExcelVariables-app v-if="isWellPath"></mapExcelVariables-app>
            <mapHoleData-app v-if="isHole"></mapHoleData-app>
            <mapTubingData-app v-if="isTubingString"></mapTubingData-app>
          </div>

          <q-stepper-navigation class="bg-accent">
            <q-btn @click="moveForward(2)" color="primary" label="Next" />
            <q-btn flat @click="moveBackward(2)" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Map Units"
          :done="ImportDataStep > 3"
        >
          <div class="bg-accent">
            <!-- <contactDataComponent></contactDataComponent> -->
          </div>

          <q-stepper-navigation class="bg-accent">
            <q-btn @click="moveForward(3)" color="primary" label="Next" />
            <q-btn flat @click="moveBackward(3)" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>


        <q-step
          :name="4"
          title="Preview Data"
        >
          <div class="bg-accent">
            <previewDevSurvey-app v-if="isWellPath"></previewDevSurvey-app>
            <previewHoleData-app v-if="isHole"></previewHoleData-app>
            <previewTubingData-app v-if="isTubingString"></previewTubingData-app>
          </div>

          <q-stepper-navigation class="bg-accent">
            <q-btn color="primary" label="Finish" @click="finishAction"/>
            <q-btn flat @click="moveBackward(4)" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    <!-- </q-scroll-area> -->
  </div>
</template>


<script>

import readExcelSheets from 'components/dataImport/readExcelSheets.vue'
import mapExcelVariables from 'components/dataImport/mapExcelVariables.vue'
import mapHoleData from 'components/dataImport/holeDataImport/mapHoleData.vue'
import mapTubingData from 'components/dataImport/tubingDataImport/mapTubingData.vue'
import previewDevSurvey from 'components/dataImport/previewDevSurvey.vue'
import previewHoleData from 'components/dataImport/holeDataImport/previewHoleData.vue'
import previewTubingData from 'components/dataImport/tubingDataImport/previewTubingData.vue'

export default {
    computed: {
      previewSurveyData(){
        return this.$store.getters['dataImportStore/previewSurveyData'];
      },
      isImportDialogVisible(){
        return this.$store.getters['wellPathStore/isImportDialogVisible'];
      },
      companyDBConnectionString(){
        return this.$store.getters['authStore/companyDBConnectionString'];
      },
      SelectedTorqueDragDesign(){
        return this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      }
    },
    components: {
        'readExcelSheets-app': readExcelSheets,
        'mapExcelVariables-app': mapExcelVariables,
        'previewDevSurvey-app': previewDevSurvey,
        'mapHoleData-app': mapHoleData,
        'mapTubingData-app': mapTubingData,
        'previewHoleData-app': previewHoleData,
        'previewTubingData-app': previewTubingData
    },
    data () {
    return {
      ImportDataStep: 1,
      visible: true,
      isWellPath: false,
      isHole: false,
      isTubingString: false
     }
    },
    methods: {
        moveForward (currentStep){
            var context =  this;
            if(currentStep == 3){
              this.$store.commit('dataImportStore/GetDevSurveyPreview', context.SelectedTorqueDragDesign.designId)
            }

            context.ImportDataStep = currentStep + 1;
        },
        moveBackward (currentStep){
            var context =  this;
            if(currentStep == 2){
              //this.$store.commit('dataImportStore/RefreshSheetData')
            }

            context.ImportDataStep = currentStep - 1;
        },
        finishAction(){
          var context = this;
          this.$store.dispatch('wellPathStore/PostDeviationSurvey', {
            deviationSurveys: context.previewSurveyData,
            companyDBConnectionString: context.companyDBConnectionString
          });
          
        }
    },
    created(){
      var typeOfInput = this.$store.getters['dataImportStore/typeOfInput'];
      var context =  this;

          switch(typeOfInput){
            case "Well Path":
              context.isWellPath = true;
              context.isHole = false;
              context.isTubingString = false;
              break;
            case "Hole":
              context.isWellPath = false;
              context.isHole = true;
              context.isTubingString = false;
              break;
            case "Tubing String":
              context.isWellPath = false;
              context.isHole = false;
              context.isTubingString =  true;
              break;
          }
    }
  }
</script>