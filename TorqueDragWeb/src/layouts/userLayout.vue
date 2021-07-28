<template>
  <!-- <div class="bg-primary"> -->

    <q-layout view="hHh lpR fFf" class="bg-primary">
    <q-header elevated>

    <q-bar class="q-pa-none row bg-secondary" >
            
          <q-btn
          flat
          dense
          round
          icon="settings"
          aria-label="Settings"
          @click="setIsSetting"
        />
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="UpdateLeftDrawerOpen"
        />
        <q-btn 
            flat
          dense
          round
          icon="save"
          @click="SaveProject">
          <q-tooltip>
              Save Project
          </q-tooltip>
        </q-btn>

          

            <!-- shadow-2 -->
            <q-tabs 
            v-model="tab"
            no-caps
            mobile-arrows
            outside-arrows
            class="mytab text-accent col-9"
          >
          
            <q-btn style="background: rgba(45,66,123,1);" :label="caption">
                <q-menu>
                  <leftSideMenu></leftSideMenu>
                </q-menu>
            </q-btn>

            <q-space/>

            <q-tab name="output" label="Output"
             @click="ShowFileRibbon('General Outputs')"/>
            <q-tab name="torquedrag" label="Torque & Drag" 
            @click="ShowFileRibbon('Torque & Drag')"/>
            <q-tab name="hydraulics" label="Hydraulics"
             @click="ShowFileRibbon('Hydraulics')" />
             <q-tab name="swabsurge" label="Swab & Surge"
             @click="ShowFileRibbon('Surge & Swab')" />
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
          <q-btn dense flat round :icon="visibilityIcon" @click="ToggleRibbonVisibility" />
          <q-btn dense flat round icon="menu" @click="UpdateRightDrawerOpen" />
          <q-btn dense flat icon="minimize" />
          <q-btn dense flat icon="crop_square" />
          <q-btn dense flat icon="close"
          @click="logoutUser" />
    </q-bar>

    <div 
    v-if="isRibbonVisible"
    class="row items-center bg-info" style="height: 150px;">
       
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
      <div v-if="isHydraulics"
          class="col-12">
        <hydraulicsRibbon></hydraulicsRibbon>
      </div>
      <div  v-if="isSurgeSwab"
          class="col-12">
        <surgeSwabRibbon></surgeSwabRibbon>
      </div>
    </div>

    <div class="row"
    v-if="statusBar.visibility">
      <q-bar class="col-12 q-pa-none bg-secondary" >
        <div class="q-pa-sm text-warning">
          {{ statusBar.actionMessage }}
        </div>
        <q-space />
        <q-btn dense flat icon="close"
          @click="closeStatusMessageBar" />
      </q-bar>
    </div>

       <q-dialog v-model="isSetting" class="bg-primary">
          <div class="q-pa-sm bg-primary">
              <settings></settings>
          </div>
      </q-dialog>

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

      <q-page-container class="bg-primary">

    <div class="row bg-primary" style="height:100vh;">
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
import hydraulicsRibbon from 'pages/menus/hydraulicsRibbon.vue';
import mainInput from 'pages/inputdata/mainInput.vue';
import mainInputRight from 'pages/inputdata/mainInputRight.vue';
import testRibbon from 'pages/menus/testRibbon.vue';
import torqueDragRibbon from 'pages/menus/torqueDragRibbon.vue';
import surgeSwabRibbon from 'pages/menus/surgeSwabRibbon.vue';
import wellList from 'pages/inputdata/wellList.vue';
import analysisSettings from 'pages/inputdata/analysisSettings.vue';
import chartSeries from 'pages/dataVisualization/TorqueDrag/chartSeries.vue';
import chartProperties from 'pages/dataVisualization/TorqueDrag/chartProperties.vue';
import dockView from 'pages/inputdata/dockView.vue';
import leftSideMenu from 'pages/menus/leftSideMenu.vue';
import settings from 'pages/menus/settings.vue'


export default {
  name: 'userLayout',
  computed: {
    isSetting(){
       return this.$store.getters['settingsStore/isSetting'];
    },
    caption(){
          return this.$store.getters['wellDesignStore/caption'];
    },
    IdentityModel(){
          return this.$store.getters['authStore/IdentityModel'];
    },
    Loginstatus(){
      return this.$store.getters['authStore/Loginstatus'];
    },
    menuTabs() {
         return this.$store.getters['settingsStore/menuTabs'];
    },
    statusBar(){
      return this.$store.getters['authStore/statusBar'];
    },
    rig(){
            return this.$store.getters['rigStore/rig'];
        },
        drillBit(){
            return this.$store.getters['tubingStringStore/drillBit'];
        },
        datum(){
            return this.$store.getters['datumStore/datum'];
        },
        deviationSurveys(){
            return this.$store.getters['wellPathStore/deviationSurveys'];
        },
        fluid(){
            return this.$store.getters['fluidsStore/fluid'];
        },
        mudPVTs(){
            return this.$store.getters['fluidsStore/mudPVTs'];
        },
        holeSections(){
            return this.$store.getters['holeStore/holeSections'];
        },
        operation(){
            return this.$store.getters['operationsStore/operation'];
        },
        pipes(){
            return this.$store.getters['tubingStringStore/pipes'];
        },
        common(){
            return this.$store.getters['settingsStore/common'];
        }
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
      dockView,
      leftSideMenu,
      hydraulicsRibbon,
      surgeSwabRibbon,
      settings
      },
  data () {
    return {
      isRibbonVisible: true,
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
      isRibbonGeneralOutputs: true,
      isTorqueDrag: false,
      isHydraulics: false,
      isSurgeSwab: false,
      isDataVisualization: false,
      inputsRibbonBgColor: '#191919',
      inputsRibbonTextColor: '#ffffff',
      homeRibbonBgColor: '',
      homeRibbonTextColor: '',
      GeneralOutputsBgColor: '',
      GeneralOutputsTextColor: '',
      visibilityIcon: "visibility"

    }
  },
  methods:{
      setIsSetting(){
         this.$store.commit('settingsStore/setIsSetting', true);
      },
      closeStatusMessageBar(){
        this.$store.commit('authStore/setStatusMessageBarVisibility', {
            actionMessage: "",
            visibility: false
            });
      },
      ToggleRibbonVisibility(){
        var context =  this;
        if(context.isRibbonVisible == true)
        {
          context.isRibbonVisible = false;
          context.visibilityIcon = "visibility_off";
        }
        else
        {
          context.isRibbonVisible = true;
          context.visibilityIcon = "visibility";
        }

        console.log("isRibbonVisible: ", context.isRibbonVisible);
      },
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

          context.isRibbonGeneralOutputs = false;
            context.isTorqueDrag=false;
            context.isHydraulics = false;
            context.isRibbonActiveHome = false;
            context.isSurgeSwab = false;

        switch(selectedRibbonName){

          case "Home":
            context.isRibbonActiveHome = true;

            context.homeRibbonBgColor = context.accentColor;
            context.homeRibbonTextColor = context.primaryColor;
            context.GeneralOutputsBgColor = context.secondaryColor;
            context.GeneralOutputsTextColor = context.inActiveTextcolor
            break;

          case "General Outputs":
            context.isRibbonGeneralOutputs = true;

            context.homeRibbonBgColor = context.secondaryColor;
            context.homeRibbonTextColor = context.inActiveTextcolor;
            context.GeneralOutputsBgColor = context.accentColor;
            context.GeneralOutputsTextColor = context.primaryColor

            break;

          case "Torque & Drag":
            context.isTorqueDrag=true;
            break;

          case "Hydraulics":
            context.isHydraulics = true;
            break;

          case "Surge & Swab":
            context.isSurgeSwab = true;
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
    },
    toNumber(value){
        var ans = 0;
        //console.log("value: ", value)
        ans = parseFloat(value);
        if(Number.isNaN(ans) === true){
            //console.log("ans: ", ans)
            ans = 0;
        }

        return ans;
    },
    RigFormatting(){
        var context  =  this;
        var rig = context.rig;
        //console.log("rig: ", rig)
        rig.highPumpPressure = context.toNumber(rig.highPumpPressure);
        rig.lowPumpPressure = context.toNumber(rig.lowPumpPressure);
        rig.flowRateHighPumpPressure = context.toNumber(rig.flowRateHighPumpPressure);
        rig.flowRateLowPumpPressure = context.toNumber(rig.flowRateLowPumpPressure);
        rig.flowExponent = context.toNumber(rig.flowExponent);
        rig.pumpEfficiency = context.toNumber(rig.pumpEfficiency);
        rig.maxAllowableSurfacePressure = context.toNumber(rig.maxAllowableSurfacePressure);
        rig.maxHorsePower = context.toNumber(rig.maxHorsePower);
        rig.minimumFlowRate = context.toNumber(rig.minimumFlowRate);
        rig.surfaceSystemConstant = context.toNumber(rig.surfaceSystemConstant);
        return rig;
    },
    DrillBitFormatting(){
        var context  =  this;
        var drillBit = context.drillBit;
        drillBit.bitSize = context.toNumber(drillBit.bitSize);
        drillBit.numberOfBitNozzles = context.toNumber(drillBit.numberOfBitNozzles);
        drillBit.dischargeCoefficient = context.toNumber(drillBit.dischargeCoefficient);

        return drillBit;
    },
    DatumFormatting(){
        var context  =  this;
        var datum = context.datum;
        datum.datumElevation = context.toNumber(datum.datumElevation);
        datum.groundElevation = context.toNumber(datum.groundElevation);
        datum.airGap = context.toNumber(datum.airGap);
        datum.wellHeadElevation = context.toNumber(datum.wellHeadElevation);

        //console.log("datum: ", datum)
        return datum;
    },
    FluidFormatting(){
        var context  =  this;
        var fluid = context.fluid;
        fluid.baseFannDialReading = context.toNumber(fluid.baseFannDialReading);
        fluid.baseFannRPM = context.toNumber(fluid.baseFannRPM);
        fluid.fannDialReading = context.toNumber(fluid.fannDialReading);
        fluid.fannRPM = context.toNumber(fluid.fannRPM);

        return fluid;
    },
    OperationFormatting(){
        var context  =  this;
        var operation = context.operation;
        operation.trippingInSpeed = context.toNumber(operation.trippingInSpeed);
        operation.trippingInRPM = context.toNumber(operation.trippingInRPM);
        operation.trippingOutSpeed = context.toNumber(operation.trippingOutSpeed);
        operation.trippingOutRPM = context.toNumber(operation.trippingOutRPM);
        operation.weightOnBit = context.toNumber(operation.weightOnBit);
        operation.torqueAtBit = context.toNumber(operation.torqueAtBit);
        operation.weightOnBitIDHM = context.toNumber(operation.weightOnBitIDHM);
        operation.hookLoadIDHM = context.toNumber(operation.hookLoadIDHM);
        operation.tripSpeedBackReam = context.toNumber(operation.tripSpeedBackReam)
        operation.tripRPMBackReam = context.toNumber(operation.tripRPMBackReam)
        operation.torqueAtBitDrillingOperation = context.toNumber(operation.torqueAtBitDrillingOperation)
        operation.torqueAtBitBackReaming = context.toNumber(operation.torqueAtBitBackReaming)
        operation.overpullBackReaming = context.toNumber(operation.overpullBackReaming)

        return operation;
    },
    SettingFormatting(){
        var context  =  this;
        var common = context.common;
        common.startMeasuredDepth = context.toNumber(common.startMeasuredDepth);
        common.endMeasuredDepth = context.toNumber(common.endMeasuredDepth);
        common.stepSize = context.toNumber(common.stepSize);
        common.seaWaterDensity = context.toNumber(common.seaWaterDensity);
        common.courseLength = context.toNumber(common.courseLength);
        common.youngsModulus = context.toNumber(common.youngsModulus);
        common.blockWeight =  context.toNumber(common.blockWeight);
        common.percentOfYield = context.toNumber(common.percentOfYield);
        common.bucklingLimitFactor = context.toNumber(common.bucklingLimitFactor);

        return common;
    },
    SaveProject(){
      var context =  this;
      var Conn = this.$store.getters['authStore/companyName'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
      var IdentityModel = this.$store.getters['authStore/IdentityModel'];
      
      var allInputsDTO = {
          rig: context.RigFormatting(),
          drillBit: context.DrillBitFormatting(),
          datum: context.DatumFormatting(),
          deviationSurveys: context.deviationSurveys,
          fluid: context.FluidFormatting(),
          mudPVTs: context.mudPVTs,
          holeSections: context.holeSections,
          operation: context.OperationFormatting(),
          pipes: context.pipes,
          common: context.SettingFormatting()
      }

      console.log("allInputsDTO: ", allInputsDTO)

      this.$store.dispatch('wellDesignStore/PostAllData', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id,
                userId: IdentityModel.id,
                allInputsDTO
            });

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
body{
  background:black;
}
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