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
                          <div class="col-6 q-pa-sm"><input v-model="typeOfShore"></div>
                          <div class="col-3 q-pa-sm"></div>

                          <div class="col-3 q-pa-sm">Datum Name</div>
                          <div class="col-6 q-pa-sm"><input v-model="datumName"></div>
                          <div class="col-3 q-pa-sm"></div>

                          <div class="col-3 q-pa-sm">Datum Elevation</div>
                          <div class="col-6 q-pa-sm"><input v-model="datumElevation"></div>
                          <div class="col-3 q-pa-sm">ft</div>

                          <div class="col-3 q-pa-sm">Ground Elevation</div>
                          <div class="col-6 q-pa-sm"><input v-model="groundElevation"></div>
                          <div class="col-3 q-pa-sm">ft</div>

                          <div class="col-3 q-pa-sm">WellHead Elevation</div>
                          <div class="col-6 q-pa-sm"><input v-model="wellHeadElevation"></div>
                          <div class="col-3 q-pa-sm">ft</div>

                          <div class="col-3 q-pa-sm">Air Gap</div>
                          <div class="col-6 q-pa-sm"><input v-model="airGap"></div>
                          <div class="col-3 q-pa-sm">ft</div>
                
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
        <div class="col-6 q-pa-sm">
            Select Datum: 
          </div>
          <div class="col-6 q-pa-sm">
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

        <div class="col-3 q-pa-sm">Shore</div>
        <div class="col-6 q-pa-sm"><input v-model="selectedDatum.typeOfShore"></div>
        <div class="col-3 q-pa-sm"></div>

        <div class="col-3 q-pa-sm">Datum Name</div>
        <div class="col-6 q-pa-sm"><input v-model="selectedDatum.datumName"></div>
        <div class="col-3 q-pa-sm"></div>

        <div class="col-3 q-pa-sm">Datum Elevation</div>
        <div class="col-6 q-pa-sm"><input v-model="selectedDatum.datumElevation"></div>
        <div class="col-3 q-pa-sm">ft</div>

        <div class="col-3 q-pa-sm">Ground Elevation</div>
        <div class="col-6 q-pa-sm"><input v-model="selectedDatum.groundElevation"></div>
        <div class="col-3 q-pa-sm">ft</div>

        <div class="col-3 q-pa-sm">WellHead Elevation</div>
        <div class="col-6 q-pa-sm"><input v-model="selectedDatum.wellHeadElevation"></div>
        <div class="col-3 q-pa-sm">ft</div>

        <div class="col-3 q-pa-sm">Air Gap</div>
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
      typeOfShore: "Onshore",
      datumElevation: 52,
      groundElevation: 14,
      airGap: 38,
      wellHeadElevation: 89,
      datumName: "Datum 01"
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

      this.$store.dispatch('datumStore/PostDatum', {
            datum: {
              designId: context.SelectedTorqueDragDesign.designId,
              typeOfShore: context.typeOfShore,
              datumElevation: context.datumElevation,
              groundElevation: context.groundElevation,
              airGap: context.airGap,
              wellHeadElevation: context.wellHeadElevation,
              datumName: context.datumName
            },
            companyDBConnectionString: context.companyDBConnectionString
          });

          context.expanded = false;
    }
      
  },
  created() {
      var companyDBConnectionString = this.$store.getters['authStore/companyDBConnectionString'];
      //var parts = companyDBConnectionString.split('\\');
      //var output = parts.join('\\\\');
      this.$store.dispatch('datumStore/GetDatums', companyDBConnectionString)
   }
  }
</script>

<style scoped>


</style>

