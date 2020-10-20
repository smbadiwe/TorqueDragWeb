<template>
  <div 
  v-bind:style="tabStyle" class="col-12 bg-primary">

    
    <q-card class="my-card bg-secondary text-white" style="height:50px;">
      <q-card-section align="right">
        <div class="text-center text-subtitle1 q-pb-md">Input Data</div>
          <!-- <q-icon name="close" /> -->
      </q-card-section>
    </q-card>

    <q-scroll-area
        :visible="visible"
      style="height: 500px; width: 100%;"
    >

        <div class="row"> 
          <div class="col-3">
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
          </div>

          <div class="col-9">
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
</template>

<script>
import datumn from 'pages/inputdata/datum.vue';
import wellPath from 'pages/inputdata/wellPath.vue'
import hole from 'pages/inputdata/hole.vue'
import tubingString from 'pages/inputdata/tubingString.vue'
import rig from 'pages/inputdata/rig.vue'
import fluids from 'pages/inputdata/fluids.vue'
import subsurface from 'pages/inputdata/subsurface.vue'
import operations from 'pages/inputdata/operations.vue'

export default {
computed:{
  selectedInputTab() {
         return this.$store.getters['datumStore/selectedInputTab'];
    }
},
props: {
  visibility: {
    type: Boolean,
    default: true
  }
},
 components:{
     'datumn-app': datumn,
     'wellPath-app': wellPath,
     'hole-app': hole,
     'tubingString-app': tubingString,
     'rig-app': rig,
     'fluids-app': fluids,
     'subsurface-app': subsurface,
     'operations-app': operations
  },
  data () {
    return {
      dense: false,
      // visibility:true,
      tab: 'Datum',
      visible: true,
      splitterModel: 20,
      tabStyle: {
          // background: '#474f57',
          color: '#ffffff',
          fontFamily: 'Times New Roman',
          fontStyle: 'italic',
          fontSizeAdjust: '0.58'
      },
      qtabStyle: {
        minHeight: '40px',
        marginLeft:'auto',
        marginRight:'auto',
        display:'block',
      }
    }
  },
  methods:{
    CloseView(){
      var context = this;
      context.visibility =  false;
    }
  },
  created(){

  }
}
</script>

<style scoped>
.my-card {
  width: 100%;
  }
.mypanel {
  /* border-style: groove; */
  }
.q-tab-panel {
    padding: 16px;
}
</style>