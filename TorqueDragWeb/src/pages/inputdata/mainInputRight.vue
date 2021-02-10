<template>
  <div 
   class="col-12 bg-primary">

    
    <q-card class="my-card text-accent" style="height:50px;">
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
 
          <!-- <svg  :style="'width: '+ winwidth + 'px;'" class="Path_67_ew" :viewBox="'0 0 ' + winwidth + ' 845'">
            <linearGradient id="Path_67_ew" spreadMethod="pad" x1="0.488" x2="0.488" y1="0.5" y2="-0.441">
                <stop offset="0" stop-color="#323232" stop-opacity="1"></stop>
                <stop offset="0.6109" stop-color="#444" stop-opacity="1"></stop>
                <stop offset="1" stop-color="#767676" stop-opacity="1"></stop>
            </linearGradient>
            <path id="Path_67_ew" :d="'M 0 0 L ' + winwidth + ' 0 L ' + winwidth + ' 845 L 0 845 L 0 0 Z'">
            </path>
        </svg> -->


          <div id="Group_37_dw_datumview" class="col-10">
            <inputdataright
            v-bind:issettingsheader="issettingsheader"
                v-bind:issensitivityheader="issensitivityheader"
                v-bind:isschematicsheader="isschematicsheader"></inputdataright>
          </div>

          <div class="col-2">
            <buttonBarRight  v-on:updatepropRight="updatepropRight($event)"></buttonBarRight>
          </div>
        </div>

    
    
    </q-scroll-area>
  </div>
</template>

<script>
import inputdataright from 'components/inputdata/inputdataright.vue';
import buttonBarRight from 'components/buttons/buttonBarRight.vue';
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
     buttonBarRight,
     inputdataright
  },
  data () {
    return {
        issettingsheader:false,
        issensitivityheader: false,
        isschematicsheader: true,
        dense: false,
        // visibility:true,
        tab: 'Datum',
        visible: true,
        splitterModel: 10
 
    }
  },
  methods:{
    CloseView(){
      var context = this;
      context.visibility =  false;
    },
    updatepropRight(ev){
      var context =  this;
        context.issettingsheader = ev.issettingsheader;
        context.issensitivityheader = ev.issensitivityheader;
        context.isschematicsheader = ev.isschematicsheader;
         console.log("showschematics buttonBarRight")
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
	opacity: 0.7;
	/* position: absolute;
	width: 245px;
	height: 781.564px;
	left: 55.494px;
	top: 70.436px;
	overflow: visible; */
}
</style>