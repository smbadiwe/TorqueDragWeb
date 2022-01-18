<template>
  <div>
    <!-- <q-scroll-area
        :visible="visible"
      style="height: 700px; width:100%"
    > -->
      <div id="datumpage">
      
          <!-- <textbox-Component></textbox-Component> -->
        <div class="row">
          <div class="col-12"> 
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
          
        <div class="row text-accent"
        v-if="expanded">
        <div class="col-12">
                  <q-expansion-item
                      v-model="expanded"
                      dense
                      dense-toggle
                      expand-separator
                      label="Add Datum"
                      clickable
                      @click="ExpandExander2"
                  >
                      <!-- <q-card>
                      <q-card-section> -->
                          
                          <div class="row">

                            <div class="col-3 q-pt-sm">Shore</div>
                            <div class="col-5 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="typeOfShore"></div>
                            <div class="col-4"></div>

                            <div class="col-3 q-pt-sm">Datum Name</div>
                            <div class="col-5 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="datumName"></div>
                            <div class="col-4"></div>

                            <div class="col-3 q-pt-sm">Datum Elevation (ft)</div>
                            <div class="col-5 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="datumElevation"></div>
                            <div class="col-4"></div>

                            <div class="col-3 q-pt-sm">Ground Elevation (ft)</div>
                            <div class="col-5 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="groundElevation"></div>
                            <div class="col-4"></div>

                            <div class="col-3 q-pt-sm">WellHead Elevation (ft)</div>
                            <div class="col-5 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="wellHeadElevation"></div>
                            <div class="col-4"></div>

                            <div class="col-3 q-pt-sm">Air Gap (ft)</div>
                            <div class="col-5 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="airGap"></div>
                            <div class="col-4"></div>

                            <div style="height: 50px;"></div>

                            <q-btn 
                              align="right"
                              class="text-right"
                              size="sm"
                              label="Add"
                              @click="PostDatum">
                          </q-btn>
                  
                        </div>
                      <!-- </q-card-section> -->

                      <!-- <q-card-actions align="right">
                          <q-btn 
                              size="sm"
                              label="Add"
                              @click="PostDatum">
                          </q-btn>
                      </q-card-actions> -->

                      <!-- </q-card> -->
                  </q-expansion-item>
  
              </div>
        </div>


        <div 
        v-if="expanded2"
        class="row text-accent">
          <div class="col-md-3 col-sm-12 q-pa-sm">
              Select Datum: 
            </div>
            <div class="col-md-9 col-sm-12 q-pa-sm">
            <select style="width:100%;"
            class="text-center bg-positive text-accent"
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

          <div class="col-md-3 col-sm-12 q-pt-sm text-accent">Shore</div>
          <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="selectedDatum.typeOfShore"></div>
          <div class="col-3"></div>

          <div class="col-md-3 col-sm-12 q-pt-sm">Datum Name</div>
          <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="selectedDatum.datumName"></div>
          <div class="col-3"></div>

          <div class="col-md-3 col-sm-12 q-pt-sm">Datum Elevation (ft)</div>
          <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="selectedDatum.datumElevation"></div>
          <div class="col-3"></div>

          <div class="col-md-3 col-sm-12 q-pt-sm">Ground Elevation (ft)</div>
          <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="selectedDatum.groundElevation"></div>
          <div class="col-3"></div>

          <div class="col-md-3 col-sm-12 q-pt-sm">WellHead Elevation (ft)</div>
          <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="selectedDatum.wellHeadElevation"></div>
          <div class="col-3"></div>

          <div class="col-md-3 col-sm-12 q-pt-sm">Air Gap (ft)</div>
          <div class="col-6 q-pa-sm"><input class="text-center bg-positive text-accent" v-model="selectedDatum.airGap"></div>
          <div class="col-3"></div>
  
        </div>


      
      </div>

    <!-- </q-scroll-area> -->
  </div>
</template>

<script>

export default {
  computed: {
    companyName(){
      return this.$store.getters['authStore/companyName'];
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
 
      showHideStyle: {
          display: 'inline'
      },
      expanded: false,
      typeOfShore: "",
      datumElevation: "",
      groundElevation: "",
      airGap: "",
      wellHeadElevation: "",
      datumName: "",
      visible: true,
      expanded2: true
    }
  },
  methods: {
    ExpandExander(){
      var context = this;
      context.expanded = true;
      context.expanded2 = false
    },
    ExpandExander2(){
      var context = this;
      if(context.expanded == true){
        context.expanded2 = false
      }else{
        context.expanded2 = true
      }
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
      var IdentityModel = this.$store.getters['authStore/IdentityModel'];
      var companyName = this.$store.getters['authStore/companyName'];
       this.$store.commit('dataImportStore/SetLoaderParameters', {
            showLoader: true,
            showImportView: false
          });
      this.$store.dispatch('datumStore/PostDatum', {
            datum: {
              typeOfShore: context.typeOfShore,
              datumElevation: parseFloat(context.datumElevation),
              groundElevation: parseFloat(context.groundElevation),
              airGap: parseFloat(context.airGap),
              wellHeadElevation: parseFloat(context.wellHeadElevation),
              datumName: context.datumName,
              designId: selectedTorqueDragDesign.id,
              userId: IdentityModel._id
            },
            companyName,
            designId: selectedTorqueDragDesign.id,
            userId: IdentityModel._id
          });

          context.expanded = false;
          context.expanded2 = true
    }
      
  },
  created() {
      /* var Conn = this.$store.getters['authStore/companyName'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var IdentityModel = this.$store.getters['authStore/IdentityModel'];
      var payload = {
          companyName: Conn,
          designId: selectedTorqueDragDesign.id,
          userId: IdentityModel.id
      }
      this.$store.dispatch('datumStore/GetDatums', payload) */
      var tabCaption = "Datum Details";
      this.$store.commit('settingsStore/GetTabCaption', tabCaption);
   }
  }
</script>

<style scoped>

#datumpage {
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
    color: rgba(214,214,214,1);
}

</style>

