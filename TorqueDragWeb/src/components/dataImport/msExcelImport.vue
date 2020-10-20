<template>
  <div class="q-pa-md">
    <q-stepper
      v-model="ImportDataStep"
      horizontal
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Select MS Excel Worksheet"
        :done="ImportDataStep > 1"
      >
        <div>
            <readExcelSheets-app>
            </readExcelSheets-app>
        </div>

        <q-stepper-navigation>
          <q-btn @click="moveForward(1)" color="primary" label="Next" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Map Variables"
        :done="ImportDataStep > 2"
      >
        <div>
          <!-- <bioDataComponent></bioDataComponent> -->
        </div>

        <q-stepper-navigation>
          <q-btn @click="moveForward(2)" color="primary" label="Next" />
          <q-btn flat @click="moveBackward(2)" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Map Units"
        :done="ImportDataStep > 3"
      >
        <div>
          <!-- <contactDataComponent></contactDataComponent> -->
        </div>

        <q-stepper-navigation>
          <q-btn @click="moveForward(3)" color="primary" label="Next" />
          <q-btn flat @click="moveBackward(3)" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>


      <q-step
        :name="4"
        title="Preview Data"
      >
        <div>
          <!-- <nextOfKinDataComponent></nextOfKinDataComponent> -->
        </div>

        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" />
          <q-btn flat @click="moveBackward(4)" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>


<script>

import readExcelSheets from 'components/dataImport/readExcelSheets.vue'

export default {
    components: {
        'readExcelSheets-app': readExcelSheets
    },
    data () {
    return {
      ImportDataStep: 1
     }
    },
    methods: {
        moveForward (currentStep){
            var context =  this;
            context.ImportDataStep = currentStep + 1;
        },
        moveBackward (currentStep){
            var context =  this;
            context.ImportDataStep = currentStep - 1;
        }
    }
  }
</script>