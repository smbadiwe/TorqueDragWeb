<template>
  <div class="bg-secondary dialogBorder" style="width: 500px; max-height: 700px;">
      <div class="row">
              <q-bar class="col-12 q-pa-sm row bg-secondary text-accent" >
                  <div>{{ importDialogCaption }}</div>
                  <q-space />
                  <q-btn dense flat icon="close"
                  @click="cancelCreation" />
              </q-bar>
        </div>

      <q-stepper
        v-model="ImportDataStep"
        vertical
        color="accent"
        animated
        style="width: 500px;"
        class="bg-primary"
      >
        <q-step
          class="bg-primary"
          :name="1"
          title="Select MS Excel Worksheet"
          :done="ImportDataStep > 1">
          <div class="bg-primary">
              <readExcelSheets-app class="bg-primary">
              </readExcelSheets-app>
          </div>

          <q-stepper-navigation class="bg-primary">
            <q-btn @click="moveForward(1)" color="primary" label="Next" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          class="bg-primary"
          :name="2"
          title="Map Variables"
          :done="ImportDataStep > 2"
        >
          <div class="bg-primary">
            <mapExcelVariables-app v-if="isWellPath"></mapExcelVariables-app>
            <mapHoleData-app v-if="isHole"></mapHoleData-app>
            <mapTubingData-app v-if="isTubingString"></mapTubingData-app>
            <mapFluidData-app v-if="isFluid"></mapFluidData-app>
          </div>

          <q-stepper-navigation class="bg-primary">
            <q-btn @click="moveForward(2)" color="primary" label="Next" />
            <q-btn flat @click="moveBackward(2)" color="accent" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>

        <q-step
        class="bg-primary"
          :name="3"
          title="Map Units"
          :done="ImportDataStep > 3"
        >
          <div class="bg-primary">
            <!-- <contactDataComponent></contactDataComponent> -->
          </div>

          <q-stepper-navigation class="bg-primary">
            <q-btn @click="moveForward(3)" color="primary" label="Next" />
            <q-btn flat @click="moveBackward(3)" color="accent" label="Back" class="q-ml-sm" />
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
            <previewFluidData-app v-if="isFluid"></previewFluidData-app>
          </div>

          <q-stepper-navigation class="bg-primary">
            <q-btn color="primary" label="Finish" @click="finishAction"/>
            <q-btn flat @click="moveBackward(4)" color="accent" label="Back" class="q-ml-sm" />
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
import mapFluidData from 'components/dataImport/fluidDataImport/mapFluidData.vue'
import previewFluidData from 'components/dataImport/fluidDataImport/previewFluidData.vue'

export default {
    computed: {
      importDialogCaption(){
        return this.$store.getters['dataImportStore/importDialogCaption'];
      },
      previewSurveyData(){
        return this.$store.getters['dataImportStore/previewSurveyData'];
      },
      isImportDialogVisible(){
        return this.$store.getters['wellPathStore/isImportDialogVisible'];
      },
      companyName(){
        return this.$store.getters['authStore/companyName'];
      },
      SelectedTorqueDragDesign(){
        return this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      },
      previewHoleData(){
          return this.$store.getters['dataImportStore/previewHoleData'];
      },
      previewTubingStringData(){
          return this.$store.getters['dataImportStore/previewTubingStringData'];
      },
      previewMudPVTData(){
        return this.$store.getters['dataImportStore/previewMudPVTData'];
      }
    },
    components: {
        'readExcelSheets-app': readExcelSheets,
        'mapExcelVariables-app': mapExcelVariables,
        'previewDevSurvey-app': previewDevSurvey,
        'mapHoleData-app': mapHoleData,
        'mapTubingData-app': mapTubingData,
        'previewHoleData-app': previewHoleData,
        'previewTubingData-app': previewTubingData,
        'mapFluidData-app': mapFluidData,
        'previewFluidData-app': previewFluidData
    },
    data () {
    return {
      ImportDataStep: 1,
      visible: true,
      isWellPath: false,
      isHole: false,
      isTubingString: false,
      isFluid: false
     }
    },
    methods: {
        cancelCreation(){
          this.$store.commit('wellPathStore/SetisImportDialogVisible', false);
        },
        moveForward (currentStep){
            var context =  this;
            var typeOfInput = this.$store.getters['dataImportStore/typeOfInput'];
            var IdentityModel = this.$store.getters['authStore/IdentityModel'];


          switch(typeOfInput){
            case "Well Path":
              context.isWellPath = true;
              context.isHole = false;
              context.isTubingString = false;
              context.isFluid = false;
              break;
            case "Hole":
              context.isWellPath = false;
              context.isHole = true;
              context.isTubingString = false;
              context.isFluid = false;
              break;
            case "Tubing String":
              context.isWellPath = false;
              context.isHole = false;
              context.isTubingString =  true;
              context.isFluid = false;
              break;
            case "Fluid":
              context.isWellPath = false;
              context.isHole = false;
              context.isTubingString =  false;
              context.isFluid = true;
              break;
          }

            if(currentStep == 3){
              var typeOfInput = this.$store.getters['dataImportStore/typeOfInput'];
              switch(typeOfInput){
                case "Well Path":
                  this.$store.commit('dataImportStore/GetDevSurveyPreview', {
                    designId: context.SelectedTorqueDragDesign.id,
                    userId: IdentityModel.id
                  });
                  break;
                case "Hole":
                  this.$store.commit('dataImportStore/GetHoleSectionPreview', {
                    designId: context.SelectedTorqueDragDesign.id,
                    userId: IdentityModel.id
                  });
                  break;
                case "Tubing String":
                  this.$store.commit('dataImportStore/GetTubingStringPreview', {
                    designId: context.SelectedTorqueDragDesign.id,
                    userId: IdentityModel.id
                  });
                  break;
                case "Fluid":
                  this.$store.commit('dataImportStore/GetFluidPreview', {
                    designId: context.SelectedTorqueDragDesign.id,
                    userId: IdentityModel.id
                  });
                  break;
              }
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
          var typeOfInput = this.$store.getters['dataImportStore/typeOfInput'];
          var Conn = this.$store.getters['authStore/companyName'];
          var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
          var IdentityModel = this.$store.getters['authStore/IdentityModel'];

          switch(typeOfInput){
            case "Well Path":
              context.isWellPath = true;
              context.isHole = false;
              context.isTubingString = false;
              context.isFluid = false;
              break;
            case "Hole":
              context.isWellPath = false;
              context.isHole = true;
              context.isTubingString = false;
              context.isFluid = false;
              break;
            case "Tubing String":
              context.isWellPath = false;
              context.isHole = false;
              context.isTubingString =  true;
              context.isFluid = false;
              break;
            case "Fluid":
              context.isWellPath = false;
              context.isHole = false;
              context.isTubingString =  false;
              context.isFluid = true;
              break;
          }

          switch(typeOfInput){
            case "Well Path":
              this.$store.dispatch('wellPathStore/PostDeviationSurvey', {
                deviationSurveys: context.previewSurveyData,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel.id,
                companyName: Conn
              });
              break;
            case "Hole":
              this.$store.dispatch('holeStore/PostHoleSections', {
                holeSections: context.previewHoleData,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel.id,
                companyName: Conn,
                holeSection: {}
              });
              break;
            case "Tubing String":
              this.$store.dispatch('tubingStringStore/PostPipes', {
                pipes: context.previewTubingStringData,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel.id,
                companyName: Conn
              });
              break;
            case "Fluid":
              this.$store.dispatch('fluidsStore/PostMudPVTs', {
                mudPVTs: context.previewMudPVTData,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel.id,
                companyName: Conn
              });
              break;
          }
          
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
              context.isFluid = false;
              break;
            case "Hole":
              context.isWellPath = false;
              context.isHole = true;
              context.isTubingString = false;
              context.isFluid = false;
              break;
            case "Tubing String":
              context.isWellPath = false;
              context.isHole = false;
              context.isTubingString =  true;
              context.isFluid = false;
              break;
            case "Fluid":
              context.isWellPath = false;
              context.isHole = false;
              context.isTubingString =  false;
              context.isFluid = true;
              break;
          }
    }
  }
</script>

<style scoped>

.dialogBorder {
  border: 2px solid rgba(112,112,112,1);
    max-height: 700px;
  /* height: 50px; */
}

</style>