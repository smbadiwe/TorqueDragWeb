<template>
  <div style="height:100vh;">
    <div class="q-pa-sm bg-primary" v-bind:style="mainStyle">
    
        <!-- <textbox-Component></textbox-Component> -->
      <div class="row">
        <div class="col-12 q-pa-sm"> 
          <q-btn  icon="add_box"
          size="sm"
          flat
          @click="ExpandExander">
            <q-tooltip>
              Add Datum
            </q-tooltip>
          </q-btn>
        </div>
        
      </div>
        
      <div class="row"
      v-if="expanded">
       <div class="col-12 q-pa-sm">
                <q-expansion-item
                    v-model="expanded"
                    dense
                    dense-toggle
                    expand-separator
                    label="Add Datum"
                >
                    <q-card class="bg-primary">
                    <q-card-section>
                        
                        <div class="row q-pa-sm">

                          <div class="col-12 q-pa-sm">
                            New Datum
                            <br>
                            <hr/>
                          </div>

                          <div class="col-3 q-pa-sm">Shore</div>
                          <div class="col-6 q-pa-sm"><input v-model="message"></div>
                          <div class="col-3 q-pa-sm"></div>

                          <div class="col-3 q-pa-sm">Datumn Name</div>
                          <div class="col-6 q-pa-sm"><input v-model="message"></div>
                          <div class="col-3 q-pa-sm"></div>

                          <div class="col-3 q-pa-sm">Datumn Elevation</div>
                          <div class="col-6 q-pa-sm"><input v-model="message"></div>
                          <div class="col-3 q-pa-sm">ft</div>

                          <div class="col-3 q-pa-sm">Ground Elevation</div>
                          <div class="col-6 q-pa-sm"><input v-model="message"></div>
                          <div class="col-3 q-pa-sm">ft</div>

                          <div class="col-3 q-pa-sm">WellHead Elevation</div>
                          <div class="col-6 q-pa-sm"><input v-model="message"></div>
                          <div class="col-3 q-pa-sm">ft</div>

                          <div class="col-3 q-pa-sm">Air Gap</div>
                          <div class="col-6 q-pa-sm"><input v-model="message"></div>
                          <div class="col-3 q-pa-sm">ft</div>
                
                      </div>
                    </q-card-section>

                    <q-card-actions align="right">
                        <q-btn 
                            size="sm"
                            label="Add"
                            class="bg-primary"
                            @click="CollapseExander">
                        </q-btn>
                    </q-card-actions>

                    </q-card>
                </q-expansion-item>
 
            </div>
       </div>


      <div class="row q-pa-sm">
        <div class="col-6 q-pa-sm">
            Select Datum: 
          </div>
          <div class="col-6 q-pa-sm">
          <select v-model="selected" style="width:100%;"
          @input="onDatumSelectionChanged">
              <option>A</option>
              <option>B</option>
              <option>C</option>
          </select>
        </div>

        <div class="col-12 q-pa-sm">
          Datum Details
          <br>
          <hr/>
        </div>

        <div class="col-3 q-pa-sm">Shore</div>
        <div class="col-6 q-pa-sm"><input v-model="message"></div>
        <div class="col-3 q-pa-sm"></div>

        <div class="col-3 q-pa-sm">Datumn Name</div>
        <div class="col-6 q-pa-sm"><input v-model="message"></div>
        <div class="col-3 q-pa-sm"></div>

        <div class="col-3 q-pa-sm">Datumn Elevation</div>
        <div class="col-6 q-pa-sm"><input v-model="message"></div>
        <div class="col-3 q-pa-sm">ft</div>

        <div class="col-3 q-pa-sm">Ground Elevation</div>
        <div class="col-6 q-pa-sm"><input v-model="message"></div>
        <div class="col-3 q-pa-sm">ft</div>

        <div class="col-3 q-pa-sm">WellHead Elevation</div>
        <div class="col-6 q-pa-sm"><input v-model="message"></div>
        <div class="col-3 q-pa-sm">ft</div>

        <div class="col-3 q-pa-sm">Air Gap</div>
        <div class="col-6 q-pa-sm"><input v-model="message"></div>
        <div class="col-3 q-pa-sm">ft</div>
 
      </div>


     
    </div>
  </div>
</template>

<script>
import addDatum from 'components/inputdata/datum/addDatum.vue';
import textbox from 'components/controls/textbox.vue';
export default {
  components:{
    'addDatum-Component': addDatum,
    'textbox-Component': textbox
  },
  data () {
    return {
      message: "",
      hasUnit1: true,
      hastUnit2: false,
      variableName: "Weight",
      variableUnit: "Ibf",
      text: '',
      datumList: [],
      selectedDatum: "",
      mainStyle: {
          // background: '#474f57',
          color: '#ffffff',
          fontFamily: 'Times New Roman',
          fontStyle: 'italic',
          fontSizeAdjust: '0.58'
      },
      showHideStyle: {
          display: 'inline'
      },
      expanded: false
    }
  },
  methods: {
    ExpandExander(){
      var context = this;
      context.expanded = true;
    },
    CollapseExander(){
      var context = this;
      context.expanded = false;
    },
    onDatumSelectionChanged(){

    }
      
  }
}
</script>

<style scoped>


</style>

