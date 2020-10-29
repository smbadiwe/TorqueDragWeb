<template>
  <div style="height:450px;">
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
                          <div class="col-7 q-pa-sm"><input v-model="typeOfShore"></div>
                          <div class="col-2 q-pa-sm"></div>

                          <div class="col-3 q-pa-sm">Datum Name</div>
                          <div class="col-7 q-pa-sm"><input v-model="datumName"></div>
                          <div class="col-2 q-pa-sm"></div>

                          <div class="col-3 q-pa-sm">Datum Elevation</div>
                          <div class="col-7 q-pa-sm"><input v-model="datumElevation"></div>
                          <div class="col-2 q-pa-sm">ft</div>

                          <div class="col-3 q-pa-sm">Ground Elevation</div>
                          <div class="col-7 q-pa-sm"><input v-model="groundElevation"></div>
                          <div class="col-2 q-pa-sm">ft</div>

                          <div class="col-3 q-pa-sm">WellHead Elevation</div>
                          <div class="col-7 q-pa-sm"><input v-model="wellHeadElevation"></div>
                          <div class="col-2 q-pa-sm">ft</div>

                          <div class="col-3 q-pa-sm">Air Gap</div>
                          <div class="col-7 q-pa-sm"><input v-model="airGap"></div>
                          <div class="col-2 q-pa-sm">ft</div>
                
                      </div>
                    </q-card-section>

                    <q-card-actions align="right">
                        <q-btn 
                            size="sm"
                            label="Add"
                            class="bg-primary"
                            @click="PostDatum">
                        </q-btn>
                    </q-card-actions>

                    </q-card>
                </q-expansion-item>
 
            </div>
       </div>


      <div class="row q-pa-sm">
        <div class="col-md-6 col-sm-12 q-pa-sm">
            Select Datum: 
          </div>
          <div class="col-md-6 col-sm-12 q-pa-sm">
          <select style="width:100%;"
            name="NameOfDatum"
            id="" 
            v-on:change="onDatumSelectionChanged($event)">
              <option
                v-for="datum in datums" :key="datum.id">
                {{ datum.datumName }}
              </option>
          </select>
        </div>

        <div class="col-12 q-pa-sm">
          Datum Details
          <br>
          <hr/>
        </div>

        <div class="col-md-3 col-sm-12 q-pa-sm">Shore</div>
        <div class="col-6 q-pa-sm"><input v-model="selectedDatum.typeOfShore"></div>
        <div class="col-3 q-pa-sm"></div>

        <div class="col-md-3 col-sm-12 q-pa-sm">Datum Name</div>
        <div class="col-6 q-pa-sm"><input v-model="selectedDatum.datumName"></div>
        <div class="col-3 q-pa-sm"></div>

        <div class="col-md-3 col-sm-12 q-pa-sm">Datum Elevation</div>
        <div class="col-6 q-pa-sm"><input v-model="selectedDatum.datumElevation"></div>
        <div class="col-3 q-pa-sm">ft</div>

        <div class="col-md-3 col-sm-12 q-pa-sm">Ground Elevation</div>
        <div class="col-6 q-pa-sm"><input v-model="selectedDatum.groundElevation"></div>
        <div class="col-3 q-pa-sm">ft</div>

        <div class="col-md-3 col-sm-12 q-pa-sm">WellHead Elevation</div>
        <div class="col-6 q-pa-sm"><input v-model="selectedDatum.wellHeadElevation"></div>
        <div class="col-3 q-pa-sm">ft</div>

        <div class="col-md-3 col-sm-12 q-pa-sm">Air Gap</div>
        <div class="col-6 q-pa-sm"><input v-model="selectedDatum.airGap"></div>
        <div class="col-3 q-pa-sm">ft</div>
 
      </div>


     
    </div>
  </div>
</template>

<script>
import addDatum from 'components/inputdata/datum/addDatum.vue';
import textbox from 'components/controls/textbox.vue';
export default {
  computed: {
    companyDBConnectionString(){
      return this.$store.getters['authStore/companyDBConnectionString'];
    },
    SelectedTorqueDragDesign(){
      return this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
    },
    datums(){
      return this.$store.getters['datumStore/datums'];
    },
    selectedDatum(){
      return this.$store.getters['datumStore/selectedDatum'];
    }
  },
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
      expanded: false,
      typeOfShore: "",
      datumElevation: "",
      groundElevation: "",
      airGap: "",
      wellHeadElevation: "",
      datumName: ""
    }
  },
  methods: {
    ExpandExander(){
      var context = this;
      context.expanded = true;
    },
    onDatumSelectionChanged(e){
      var context = this;
       var id = e.target.value;
        var name = e.target.options[e.target.options.selectedIndex].text;
        console.log('id ', id );
        console.log('name ',name );

      this.$store.commit('datumStore/onDatumSelectionChanged', name);

      
         // @input="onDatumSelectionChanged"
    },
    PostDatum(){
      var context = this;
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var Conn = this.$store.getters['authStore/companyDBConnectionString'];
      this.$store.dispatch('datumStore/PostDatum', {
            datum: {
              designId: selectedTorqueDragDesign.designId,
              typeOfShore: context.typeOfShore,
              datumElevation: parseFloat(context.datumElevation),
              groundElevation: parseFloat(context.groundElevation),
              airGap: parseFloat(context.airGap),
              wellHeadElevation: parseFloat(context.wellHeadElevation),
              datumName: context.datumName
            },
            companyDBConnectionString: Conn,
            designId: selectedTorqueDragDesign.designId
          });

          context.expanded = false;
    }
      
  },
  created() {
      var Conn = this.$store.getters['authStore/companyDBConnectionString'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var payload = {
          companyDBConnectionString: Conn,
          designId: selectedTorqueDragDesign.designId
      }
      this.$store.dispatch('datumStore/GetDatums', payload)
   }
  }
</script>

<style scoped>


</style>

