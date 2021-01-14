<template>
  <!-- <div class="bg-primary"> -->

    <q-layout view="hHh lpR fFf" class="bg-primary">
    <q-header elevated>

    <q-bar class="q-pa-sm q-pl-md row bg-secondary" >
            
          <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="UpdateLeftDrawerOpen"
        />
          <q-icon name="laptop_chromebook"/>
          

              <q-tabs 
            v-model="tab"
            no-caps
            outside-arrows
            mobile-arrows
            class="mytab text-white shadow-2 col-9"
          >
            <q-tab name="output" label="Output"
             @click="ShowFileRibbon('General Outputs')"/>
            <q-tab name="torquedrag" label="Torque & Drag" 
            @click="ShowFileRibbon('Torque & Drag')"/>
            <q-tab name="hydraulics" label="Hydraulics" />
             <q-tab name="swabsurge" label="Swab & Surge" />
            <q-tab name="centralization" label="Centralization" />
            <q-tab name="wellcontrol" label="Well Control" />
            <q-tab name="cementing" label="Cementing" />
          </q-tabs>
          <!-- <div>Google Chrome</div> -->

          <!-- <q-space/> -->

          <!-- <div class="col q-px-md menutab cursor-pointer non-selectable">
            Output
          </div>

          <div class="col q-px-md menutab cursor-pointer non-selectable">
            Torque & Drag
          </div>

          <div class="col q-px-md menutab cursor-pointer non-selectable">
            Hydraulics
          </div>

          <div class="col q-px-md menutab cursor-pointer non-selectable">
            Centralization
          </div>

          <div class="col q-px-md menutab cursor-pointer non-selectable">
            Swab & Surge
          </div>

          <div class="col q-px-md menutab cursor-pointer non-selectable">
            Well Control
          </div>

          <div class="col q-px-md menutab cursor-pointer non-selectable">
            Cementing
          </div> -->

         

          <q-space />
          <q-btn dense flat round icon="menu" @click="UpdateRightDrawerOpen" />
          <q-btn dense flat icon="minimize" />
          <q-btn dense flat icon="crop_square" />
          <q-btn dense flat icon="close"
          @click="logoutUser" />
    </q-bar>

    <div class="row items-center bg-dark" style="height: 100px;">
       
      <div v-if="isRibbonActiveHome"
            class="col-12">
            <homeRibbon-app></homeRibbon-app>
      </div>
      <div v-if="isRibbonGeneralOutputs"
            class="col-12">
            <generalOutputs-app></generalOutputs-app>
      </div> 
      <div v-if="isTorqueDrag"
          class="col-12">
            <torqueDragRibbon-app></torqueDragRibbon-app>
      </div>
    </div>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
       show-if-above
      :width="450"
      bordered
      content-class="bg-primary"
    >
         <div class="col-12 bg-primary q-pa-none">
            <mainInput-app
            :visibility="isInput"></mainInput-app>
          </div>
    </q-drawer>

    <q-drawer 
    v-model="rightDrawerOpen" 
    show-if-above 
    side="right" 
    :width="450"
    bordered
    content-class="bg-primary">
          <div class="col-12 bg-primary q-pa-none">
            <mainInputRight
            :visibility="isInput"></mainInputRight>
          </div>
    </q-drawer>

      <q-page-container>

    <div class="row">
      <div class="col-12"> 
         <dockView></dockView>
        <!-- <div class="row">
          <div class="col-3 bg-primary q-pa-none">
            <mainInput-app
            :visibility="isInput"></mainInput-app>
          </div>
          <div class="col-9 q-pa-sm">
              <router-view />
          </div>
        </div> -->
      </div>
    </div>

    <!-- <div class="row" v-else-if="isDataVisualization">
      <div class="col-12"> 
        <div class="row">
          <div class="col-3 bg-primary q-pa-none">
            <chartSeries-app></chartSeries-app>
          </div>
          <div class="col q-pa-sm">
              <router-view />
          </div>
          <div  
            class="col-3 bg-primary q-pa-sm">
          <chartProperties-app></chartProperties-app>
        </div>
        </div>
      </div>
    </div>
 -->

    <!-- <div class="row" v-else>
        <div 
        class="col q-pa-sm"> 
          <router-view />
        </div>
        <div 
        v-if="isWellList" 
        class="col-3 bg-primary q-pa-sm">
          <wellList-app></wellList-app>
        </div>
        <div 
        v-if="isSchematic" 
        class="col-3 bg-primary q-pa-sm">

        </div>
        <div 
        v-if="isTDAnalysis" 
        class="col-3 bg-primary q-pa-sm">
          <analysisSettings-app></analysisSettings-app>
        </div>

    </div> -->
      </q-page-container>
    </q-layout>
  <!-- </div> -->
</template>


<script>
 import fileRibbon from 'pages/menus/fileRibbon.vue'
import homeRibbon from 'pages/menus/homeRibbon.vue';
import generalOutputs from 'pages/menus/generalOutputs.vue';
import mainInput from 'pages/inputdata/mainInput.vue';
import mainInputRight from 'pages/inputdata/mainInputRight.vue';
import testRibbon from 'pages/menus/testRibbon.vue';
import torqueDragRibbon from 'pages/menus/torqueDragRibbon.vue';
import wellList from 'pages/inputdata/wellList.vue';
import analysisSettings from 'pages/inputdata/analysisSettings.vue';
import chartSeries from 'pages/dataVisualization/TorqueDrag/chartSeries.vue';
import chartProperties from 'pages/dataVisualization/TorqueDrag/chartProperties.vue';
import dockView from 'pages/inputdata/dockView.vue';


export default {
  name: 'userLayout',
  computed: {
    IdentityModel(){
          return this.$store.getters['authStore/IdentityModel'];
    },
    Loginstatus(){
      return this.$store.getters['authStore/Loginstatus'];
    },
    menuTabs() {
         return this.$store.getters['settingsStore/menuTabs'];
    },
   /*  leftDrawerOpen(){
          return this.$store.getters['authStore/leftDrawerOpen'];
    },
    right(){
          return this.$store.getters['authStore/right'];
    } */
  },
  components: { 
      'fileRibbon-app': fileRibbon,
      'mainInput-app': mainInput,
      'homeRibbon-app': homeRibbon,
      'generalOutputs-app': generalOutputs,
      'torqueDragRibbon-app': torqueDragRibbon,
      'wellList-app': wellList,
      'analysisSettings-app': analysisSettings,
      'chartSeries-app': chartSeries,
      'chartProperties-app': chartProperties,
      testRibbon,
      mainInputRight,
      dockView
      },
  data () {
    return {
      leftDrawerOpen: false,
      rightDrawerOpen: false,
      isInput:true,
      isWellList:true,
      isSchematic:false,
      isTDAnalysis:false,
      tab: 'output',
      isfileRibbon: false,
      ribbonStyle: {
          display: 'inline'
      },
      mainStyle: {
          // background: '#474f57',
          //fontStyle: 'italic',
          color: '#ffffff',
          fontFamily: 'Times New Roman',
          fontSizeAdjust: '0.58'
      },
      primaryColor   : '#191919',
      secondaryColor : '#00a300',
      accentColor: '#e8e3e3',
      inActiveTextcolor: '#ffffff',
      isRibbonActiveInputs: false,
      isRibbonActiveHome: false,
      isRibbonGeneralOutputs: false,
      isTorqueDrag: false,
      isDataVisualization: false,
      inputsRibbonBgColor: '#191919',
      inputsRibbonTextColor: '#ffffff',
      homeRibbonBgColor: '',
      homeRibbonTextColor: '',
      GeneralOutputsBgColor: '',
      GeneralOutputsTextColor: ''

    }
  },
  methods:{
      UpdateLeftDrawerOpen(){
        var context =  this;
        context.leftDrawerOpen = !context.leftDrawerOpen;
        this.$store.commit('authStore/UpdateDockViewWidth', {
          leftDrawerOpen: context.leftDrawerOpen,
          rightDrawerOpen: context.rightDrawerOpen 
        })

      },
      UpdateRightDrawerOpen(){
        var context =  this;
        context.rightDrawerOpen = !context.rightDrawerOpen;
        this.$store.commit('authStore/UpdateDockViewWidth', {
          leftDrawerOpen: context.leftDrawerOpen,
          rightDrawerOpen: context.rightDrawerOpen 
        })

      },
      ShowFileRibbon(selectedRibbonName){
          var context =  this;
          var i = 0;
          var menuTabsCount = context.menuTabs.length;

        switch(selectedRibbonName){
          /* case "Inputs":
            if(context.isInput == true){
                  context.isInput = false;
            }else{
                  context.isInput = true;
            }
            break; */

          case "Home":
            context.isRibbonGeneralOutputs = false;
            context.isTorqueDrag=false;
            if(context.isRibbonActiveHome == true ){
              context.isRibbonActiveHome = false;

            }else{
              context.isRibbonActiveHome = true;
                  
            }

            context.homeRibbonBgColor = context.accentColor;
            context.homeRibbonTextColor = context.primaryColor;
            context.GeneralOutputsBgColor = context.secondaryColor;
            context.GeneralOutputsTextColor = context.inActiveTextcolor
            break;

          case "General Outputs":
            context.isRibbonActiveHome = false;
            context.isTorqueDrag = false;
            if(context.isRibbonGeneralOutputs == true ){
              context.isRibbonGeneralOutputs = false;

            }else{
              context.isRibbonGeneralOutputs = true;
            }

            context.homeRibbonBgColor = context.secondaryColor;
            context.homeRibbonTextColor = context.inActiveTextcolor;
            context.GeneralOutputsBgColor = context.accentColor;
            context.GeneralOutputsTextColor = context.primaryColor

            break;

          case "Torque & Drag":
            context.isRibbonActiveHome = false;
            context.isRibbonGeneralOutputs = false;
            if(context.isTorqueDrag == true ){
              context.isTorqueDrag = false;

            }else{
              context.isTorqueDrag = true;
            }
            break;

        }

      },
    ShowInputView(){
      var context =  this;
      if(context.isInput == true){
        context.isInput = false;
      }else{
        context.isInput = true;
      }
    },
    ShowWellListView(){
      var context =  this;
      if(context.isWellList == true){
        context.isWellList = false;
      }else{
        context.isWellList = true;
        context.isInput = false;
        context.isSchematic = false;
        context.isTDAnalysis = false;
        context.isDataVisualization = false;
      }
    },
    ShowSchematicView(){
      var context =  this;
      if(context.isSchematic == true){
        context.isSchematic = false;
        
      }else{
        context.isSchematic = true;
        context.isInput = false;
        context.isTDAnalysis = false;
         context.isWellList = false;
         context.isDataVisualization = false;
      }
    },
    ShowTDAnalysisView(){
      var context =  this;
      if(context.isTDAnalysis == true){
        context.isTDAnalysis = false;
      }else{
        context.isTDAnalysis = true;
        context.isInput = false;
        context.isSchematic = false;
        context.isWellList = false;
        context.isDataVisualization = false;
      }
    },
    onItemClick () {
      // console.log('Clicked on an Item')
    },
    logoutUser(){
      this.$store.dispatch('authStore/Logout')
    },
    activateDataVisualization(){
      var context  = this;
      if(context.isDataVisualization == true){
        context.isInput = false;
        context.isTDAnalysis = false;
        context.isInput = false;
        context.isSchematic = false;
        context.isWellList = fafalselse;
      }
    }
  },
  mounted() {
    var context  = this;
    context.isDataVisualization = this.$store.getters['dataVisualizationStore/isDataVisualization'];
    context.activateDataVisualization();
  }
}
</script>

<style scoped>
#Rectangle_2 {
	fill: rgba(50,50,50,1); 
}

.Rectangle_2 {
	position: absolute;
	overflow: visible;
	height: 50px;
}

#Rectangle_1 {
	opacity: 0;
	fill: rgba(83,83,83,1);
}

.menutab {
	width: 64px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
}
.q-drawer {
    background: #474f57;
}

.q-drawer__content {
    background: #474f57;
}

.dropbtn {
  background-color: green;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;}

.show {display: block;}

.vl {
  border-right: 2px solid white;
  height: 100vh;
}

.my-sticky-header-table{
    /* height or max-height is important */
  height: 500px;
}
  
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    
    background-color: black
  }

  /* 
    

  thead tr th {
    position: sticky;
    z-index: 1;
  }
    
  thead tr:first-child th {
      top: 0;
  } */
    

  /* this is when the loading indicator appears */
  .q-table--loading thead tr:last-child th {
    /* height of all previous header rows */
    top: 48px
  }

  .mytab {
    background-color: rgba(112,112,112,1);
  }
</style>