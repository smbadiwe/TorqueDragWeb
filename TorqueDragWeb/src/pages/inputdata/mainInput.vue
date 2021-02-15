<template>
  <div>
    <div 
    v-if="showView"
    class="row">
    <div 
    class="col-12 bg-primary">

      
      <q-card class="my-card text-white" style="height:50px;">
        <q-card-section align="right">
          <div class="text-center text-subtitle1 q-pb-md">{{ tabCaption }}</div>
            <!-- <q-icon name="close" /> -->
        </q-card-section>
      </q-card>

      <q-scroll-area
          :visible="visible"
        style="height: 1000px; width: 100%;"
      >

          <div class="row"> 

            <div class="col-2">
              <buttonBarLeft v-on:updateprop="updateprop($event)"></buttonBarLeft>
            </div>

            <div id="Group_37_dw_datumview" class="col-10">

              <inputdataleft
                  v-bind:isdatum="isdatum"
                  v-bind:iswellpath="iswellpath"
                  v-bind:ishole="ishole"
                  v-bind:istubingstring="istubingstring"
                  v-bind:isrig="isrig"
                  v-bind:isfluids="isfluids"
                  v-bind:issubsurface="issubsurface"
                  v-bind:isoperations="isoperations"></inputdataleft>

            <!--  <q-tab-panels
                v-model="tab"
                animated
                swipeable
                vertical
                transition-prev="jump-up"
                transition-next="jump-up"
                class="bg-primary mypanel"
              >
                <q-tab-panel name="Datum">
                  <div>
                      <datumn-app></datumn-app>
                  </div>
                  
                </q-tab-panel>

                <q-tab-panel name="WellPath">
                  <div>
                    <wellPath-app></wellPath-app>
                  </div>
                </q-tab-panel>

                <q-tab-panel name="Hole">
                  <div>
                    <hole-app></hole-app>
                  </div>
                </q-tab-panel>

                <q-tab-panel name="String">
                  <div>
                    <tubingString-app></tubingString-app>
                  </div>
                </q-tab-panel>

                <q-tab-panel name="Rig">
                  <div>
                    <rig-app></rig-app>
                  </div>
                </q-tab-panel>

                <q-tab-panel name="Fluids">
                  <div>
                    <fluids-app></fluids-app>
                  </div>
                </q-tab-panel>

                <q-tab-panel name="Subsurface">
                  <div>
                    <subsurface-app></subsurface-app>
                  </div>
                </q-tab-panel>

                <q-tab-panel name="Operations">
                  <div>
                    <operations-app></operations-app>
                  </div>
                </q-tab-panel>

              </q-tab-panels> -->

            </div>
          </div>

      <!-- <q-splitter
        v-model="splitterModel"
        >

          <template v-slot:before>
            <q-tabs
          v-model="tab"
              vertical
            >
              <q-tab name="Datum" label="Datum" v-bind:style="qtabStyle"/>
              <q-tab name="WellPath" label="Well Path" v-bind:style="qtabStyle" />
              <q-tab name="Hole" label="Hole" v-bind:style="qtabStyle" />
              <q-tab name="String" label="String" v-bind:style="qtabStyle" />
              <q-tab name="Rig" label="Rig" v-bind:style="qtabStyle" />
              <q-tab name="Fluids" label="Fluids" v-bind:style="qtabStyle" />
              <q-tab name="Subsurface" label="Subsurface" v-bind:style="qtabStyle" />
              <q-tab name="Operations" label="Operations" v-bind:style="qtabStyle" />
            </q-tabs>
          </template>

          <template v-slot:after>
            <q-tab-panels
              v-model="tab"
              animated
              swipeable
              vertical
              transition-prev="jump-up"
              transition-next="jump-up"
              class="bg-primary mypanel"
            >
              <q-tab-panel name="Datum">
                <div>
                    <datumn-app></datumn-app>
                </div>
                
              </q-tab-panel>

              <q-tab-panel name="WellPath">
                <div>
                  <wellPath-app></wellPath-app>
                </div>
              </q-tab-panel>

              <q-tab-panel name="Hole">
                <div>
                  <hole-app></hole-app>
                </div>
              </q-tab-panel>

              <q-tab-panel name="String">
                <div>
                  <tubingString-app></tubingString-app>
                </div>
              </q-tab-panel>

              <q-tab-panel name="Rig">
                <div>
                  <rig-app></rig-app>
                </div>
              </q-tab-panel>

              <q-tab-panel name="Fluids">
                <div>
                  <fluids-app></fluids-app>
                </div>
              </q-tab-panel>

              <q-tab-panel name="Subsurface">
                <div>
                  <subsurface-app></subsurface-app>
                </div>
              </q-tab-panel>

              <q-tab-panel name="Operations">
                <div>
                  <operations-app></operations-app>
                </div>
              </q-tab-panel>

            </q-tab-panels>
          </template>

      </q-splitter> -->
      
      </q-scroll-area>
    </div>
    </div>

  <div class="row">
          <div class="col-12 q-pa-sm bg-primary">
                <q-inner-loading :showing="showLoader">
                  <q-spinner-gears size="100px" color="primary" />
              </q-inner-loading>
          </div>
      </div>
  </div>
</template>

<script>
import inputdataleft from 'components/inputdata/inputdataleft.vue';
import buttonBarLeft from 'components/buttons/buttonBarLeft.vue';
/* import wellPath from 'pages/inputdata/wellPath.vue'
import hole from 'pages/inputdata/hole.vue'
import tubingString from 'pages/inputdata/tubingString.vue'
import rig from 'pages/inputdata/rig.vue'
import fluids from 'pages/inputdata/fluids.vue'
import subsurface from 'pages/inputdata/subsurface.vue'
import operations from 'pages/inputdata/operations.vue'
 */

export default {
computed:{
  showLoader(){
      return this.$store.getters['dataImportStore/showLoader'];
  },
  showView(){
  return this.$store.getters['dataImportStore/showImportView'];
  },
  selectedInputTab() {
         return this.$store.getters['datumStore/selectedInputTab'];
    },
    tabCaption() {
         return this.$store.getters['settingsStore/tabCaption'];
    },
    winwidth() {
            var wd = (this.$q.screen.width/ 12.0)* 3.0;
            console.log(wd);
            return wd;
    }
},
props: {
  visibility: {
    type: Boolean,
    default: true
  }
},
 components:{
    /*  'datumn-app': datumn,
     'wellPath-app': wellPath,
     'hole-app': hole,
     'tubingString-app': tubingString,
     'rig-app': rig,
     'fluids-app': fluids,
     'subsurface-app': subsurface,
     'operations-app': operations, */
     buttonBarLeft,
     inputdataleft
  },
  data () {
    return {
      dense: false,
      // visibility:true,
      tab: 'Datum',
      visible: true,
      splitterModel: 10,
      isdefaultviewleft:true,
      isdatum: false,
      iswellpath: false,
      ishole: false,
      istubingstring: false,
      isrig: false,
      isfluids: false,
      issubsurface: false,
      isoperations: false
    }
  },
  methods:{
    CloseView(){
      var context = this;
      context.visibility =  false;
    },
    updateprop(ev){
      var context =  this;
        context.isdatum = ev.isdatum;
        context.iswellpath = ev.iswellpath;
        context.ishole = ev.ishole;
        context.istubingstring = ev.istubingstring;
        context.isrig = ev.isrig;
        context.isfluids = ev.isfluids;
        context.issubsurface = ev.issubsurface;
        context.isoperations = ev.isoperations;
        console.log("ev: ", ev);
    }

  },
  created(){
    var wd = (this.$q.screen.width/ 12.0)* 3.0;
            //console.log(wd);
  }
}
</script>

<style scoped>
.my-card {
  width: 100%;
  background-color: rgba(112,112,112,1);
  }
.mypanel {
  /* border-style: groove; */
  }
.q-tab-panel {
    padding: 16px;
}
.vl {
  border-right: 2px solid rgba(112,112,112,1);
  height: 840px;
}

#Path_67_ew {
	fill: url(#Path_67_ew);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
  }

.Path_67_ew {
    overflow: visible;
    position: absolute;
    /* width: 500px; */
    height: 845px;
    left: 0px;
    top: 0px;
  }

  #Group_37_dw_datumview {
	/* opacity: 0.7;
	 position: absolute;
	width: 245px;
	height: 781.564px;
	left: 55.494px;
	top: 70.436px;
	overflow: visible; */
}
</style>