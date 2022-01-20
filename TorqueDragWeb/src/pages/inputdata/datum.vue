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
          
        <div 
        v-if="expanded"
        class="row text-accent"
        >
        <div class="col-12">
                 <!--  <q-expansion-item
                      v-model="expanded"
                      dense
                      dense-toggle
                      expand-separator
                      label="Add Datum"
                      clickable
                      @click="ExpandExander2"
                  > -->

                   <!--  <textbox2 v-model="typeOfShore" placeholder="Enter type of platform"/> -->

                    <textbox variableName="Type of Shore" col1="4" col2="8"
                    v-model="typeOfShore"
                    unit="" :hasUnit="false" :toolTipDescription="datumDescriptions.typeOfShore"></textbox>

                    <textbox variableName="Datum Name" col1="4" col2="8"
                     v-model="datumName"
                    unit="" :hasUnit="false" :toolTipDescription="datumDescriptions.datumName"></textbox>

                    <textbox variableName="Datum Elevation" col1="4" col2="8"
                     v-model="datumElevation"
                    unit="ft" :hasUnit="true" :toolTipDescription="datumDescriptions.datumElevation"></textbox>

                    <textbox variableName="Ground Elevation" col1="4" col2="8"
                     v-model="groundElevation"
                    unit="ft" :hasUnit="true" :toolTipDescription="datumDescriptions.groundElevation"></textbox>

                    <textbox variableName="WellHead Elevation" col1="4" col2="8"
                     v-model="wellHeadElevation"
                    unit="ft" :hasUnit="true" :toolTipDescription="datumDescriptions.wellHeadElevation"></textbox>

                    <textbox variableName="Air Gap" col1="4" col2="8"
                     v-model="airGap"
                    unit="ft" :hasUnit="true" :toolTipDescription="datumDescriptions.airGap"></textbox>

                    <div class="row">
                      <div class="col-12" style="height:10px;"></div>
                    </div>

                    <div class="row">
                      
                        <q-btn 
                        class="col-2 text-right"
                          align="right"
                          size="sm"
                          label="Cancel"
                          @click="cancelDatum">
                      </q-btn>
                      <q-space/>
                      <q-btn 
                      class="col-2 text-right"
                          align="right"
                          size="sm"
                          label="Add"
                          @click="PostDatum">
                      </q-btn>
                    </div>
                          
                          <!-- <div class="row">

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
                  
                        </div> -->
                  <!-- </q-expansion-item> -->
  
              </div>
        </div>


        <div 
        v-if="expanded2"
        class="row text-accent">

          <div class="col-12">

            <comboBox v-on:onSelectionChanged="onDatumSelectionChanged($event)"
            variableName = "Select Datum:" col1="4" col2="8"
            v-bind:listOfData="datums"
            :toolTipDescription="datumDescriptions.datumName"></comboBox>

            <textbox variableName="Shore" col1="4" col2="8"
            v-model="selectedDatum.typeOfShore"
            unit="" :hasUnit="false" disabled
            :toolTipDescription="datumDescriptions.typeOfShore"></textbox>

            <textbox variableName="Datum Name" col1="4" col2="8"
            v-model="selectedDatum.datumName"
            unit="" :hasUnit="false" disabled
            :toolTipDescription="datumDescriptions.datumName"></textbox>

            <textbox variableName="Datum Elevation" col1="4" col2="8"
            v-model="selectedDatum.datumElevation"
            unit="ft" :hasUnit="true" disabled
            :toolTipDescription="datumDescriptions.datumElevation"></textbox>

            <textbox variableName="Ground Elevation" col1="4" col2="8"
            v-model="selectedDatum.groundElevation"
            unit="ft" :hasUnit="true" disabled
            :toolTipDescription="datumDescriptions.groundElevation"></textbox>

            <textbox variableName="WellHead Elevation" col1="4" col2="8"
            v-model="selectedDatum.wellHeadElevation"
            unit="ft" :hasUnit="true" disabled
            :toolTipDescription="datumDescriptions.wellHeadElevation"></textbox>

            <textbox variableName="Air Gap" col1="4" col2="8"
            v-model="selectedDatum.airGap"
            unit="ft" :hasUnit="true" disabled
            :toolTipDescription="datumDescriptions.airGap"></textbox>
      

          </div>

          
        </div>

         
      </div>

    <!-- </q-scroll-area> -->
  </div>
</template>

<script>
import textbox from "components/controls/textbox.vue"
import textbox2 from "components/controls/textbox2.vue"
import comboBox from "components/controls/comboBox.vue"
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
    },
    datumDescriptions(){
      return this.$store.getters['datumStore/datumDescriptions'];
    }
  },
  components:{
    textbox,
    comboBox,
    textbox2
  },
  data () {
    return {
      isUnit: true,
      isNotUnit: false,
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
      /* var context = this;
       var id = e.target.value;
        var name = e.target.options[e.target.options.selectedIndex].text;
        console.log('id ', id );
        console.log('name ',name ); */

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
        const request = {
              typeOfShore: context.typeOfShore,
              datumElevation: parseFloat(context.datumElevation),
              groundElevation: parseFloat(context.groundElevation),
              airGap: parseFloat(context.airGap),
              wellHeadElevation: parseFloat(context.wellHeadElevation),
              datumName: context.datumName,
              companyName,
              designId: selectedTorqueDragDesign.id,
              userId: IdentityModel._id
          }

          console.log('request: ', request);
      this.$store.dispatch('datumStore/PostDatum', request);

          context.expanded = false;
          context.expanded2 = true
    },
    cancelDatum(){
      var context =  this;
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

