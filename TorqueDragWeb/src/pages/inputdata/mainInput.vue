<template>
  <div v-bind:style="tabStyle">
    <q-splitter
      v-model="splitterModel"
    >

      <template v-slot:before>
        <q-tabs
        class="q-tab-panels"
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

        </q-tab-panels>
      </template>

    </q-splitter>
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

export default {
 components:{
     'datumn-app': datumn,
     'wellPath-app': wellPath,
     'hole-app': hole,
     'tubingString-app': tubingString,
     'rig-app': rig,
     'fluids-app': fluids,
     'subsurface-app': subsurface
  },
  data () {
    return {
      dense: false,
      tab: 'Datum',
      splitterModel: 20,
      tabStyle: {
          background: '#474f57',
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
  }
}
</script>

<style scoped>
.q-tab-panels {
    background: #474f57;
}

.q-tab-panel {
    padding: 16px;
}
</style>