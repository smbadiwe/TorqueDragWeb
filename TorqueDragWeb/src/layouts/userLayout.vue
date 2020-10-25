<template>
  <div v-bind:style="mainStyle" class="bg-primary">
    <q-layout view="hHh lpR fFf">
      <q-header>


        <div class="q-pa-sm q-pl-md row items-center bg-secondary">
            <!--  <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
            /> -->

           

          <div class="cursor-pointer non-selectable q-pr-md q-pl-md">
            <q-btn 
              flat
            size="md" 
            label="Settings"
            class="text-capitalize">
           </q-btn>
          </div>

          <div class="cursor-pointer non-selectable q-pr-md q-pl-md">
            <q-btn 
              flat
            size="md" 
            label="Home"
            class="text-capitalize"
            @click="ShowFileRibbon('Home')">
           </q-btn>
          </div>

          <div class="cursor-pointer non-selectable q-pr-md q-pl-md">
            <q-btn 
            flat
           size="md" 
           label="View"
           class="text-capitalize">
            <q-menu fit>
              <div class="q-pa-md bg-accent" style="max-width: 350px">
                <q-list>
                  <q-item clickable v-ripple
                  @click="ShowInputView">
                    <q-item-section>Inputs</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple
                  @click="ShowWellListView">
                    <q-item-section>WellList</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple
                  @click="ShowSchematicView">
                    <q-item-section>Schematic</q-item-section>
                  </q-item>

                  <q-item clickable v-ripple
                  @click="ShowTDAnalysisView">
                    <q-item-section>Analysis Settings</q-item-section>
                  </q-item>
                  
                </q-list>
              </div>
            </q-menu>
           </q-btn>
          </div>

          <div class="cursor-pointer non-selectable q-pr-md q-pl-md">
            <q-btn 
              flat
            size="md" 
            label="General Outputs"
            class="text-capitalize"
            @click="ShowFileRibbon('General Outputs')">
           </q-btn>
          </div>

          <div class="cursor-pointer non-selectable q-pr-md q-pl-md">
            <q-btn 
              flat
            size="md" 
            label="Torque & Drag"
            class="text-capitalize"
            @click="ShowFileRibbon('Torque & Drag')">
           </q-btn>
          </div>

          <div class="cursor-pointer non-selectable q-pr-md q-pl-md">
            <q-btn 
            flat
           size="md" 
           label="Hydraulics"
           class="text-capitalize">
            <q-menu fit>
              <div class="q-pa-md bg-accent" style="width:600px; height:100px">
              </div>
            </q-menu>
           </q-btn>
          </div>

          <div class="cursor-pointer non-selectable q-pr-md q-pl-md"
           @click="ShowFileRibbon('Surge & Swab')">
            Surge & Swab
          </div>

          <div class="cursor-pointer non-selectable q-pr-md q-pl-md"
           @click="ShowFileRibbon('Well Control')">
            Well Control
          </div>

          <div class="cursor-pointer non-selectable q-pr-md q-pl-md">
           <q-btn 
              flat
            size="md" 
            label="Cementing"
            class="text-capitalize"
            @click="ShowFileRibbon('Cementing')">
           </q-btn>
          </div>

          <div class="cursor-pointer non-selectable q-pr-md q-pl-md">
            <q-btn 
              flat
            size="md" 
            label="Tubing Stress Analysis"
            class="text-capitalize"
            @click="ShowFileRibbon('Tubing Stress Analysis')">
           </q-btn>
          </div>

         

          <q-space />

          <div>
           <q-btn 
           v-if="Loginstatus"
           size="sm" 
           avatar>
            <q-avatar
            size="sm" 
            color="white" text-color="primary">
                  {{ IdentityModel.userName.charAt(0) }}
            </q-avatar>
            <q-menu fit>
              <q-list dense class="text-grey-9 text-caption bg-primary">
                  <q-item
                    class="bg-primary text-white">
                    <q-btn 
                        class="q-mr-md" 
                        size="sm" 
                        style="margin-left:auto; margin-right:auto; display:block;"
                        dense icon="color_lens"
                        @click="logoutUser">
                        Logout
                      </q-btn>
                  </q-item>
              </q-list>
            </q-menu>
           </q-btn>
          </div>

        
        </div>

        <div class="row">
          <div class="col-12">
            <hr/>
          </div>
        </div>
      </q-header>
 
      
    <q-drawer
      v-model="leftDrawerOpen"
      width="500"
      >
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <!-- <mainInput-app></mainInput-app> -->
       </div>
        
    </q-drawer>

      <q-page-container>
        <div class="row" v-if="isInput">
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
          <div class="col-12"> 
            <div class="row">
              <div class="col-5 bg-primary q-pa-none">
                <mainInput-app
                :visibility="isInput"></mainInput-app>
              </div>
              <div class="col-7 q-pa-sm">
                 <router-view />
              </div>
            </div>
          </div>
        </div>

        <div class="row" v-else>
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
        </div>
       
      </q-page-container>
    </q-layout>
  </div>
</template>


<script>
 import fileRibbon from 'pages/menus/fileRibbon.vue'
import homeRibbon from 'pages/menus/homeRibbon.vue';
import generalOutputs from 'pages/menus/generalOutputs.vue';
import mainInput from 'pages/inputdata/mainInput.vue';
import torqueDragRibbon from 'pages/menus/torqueDragRibbon.vue';
import wellList from 'pages/inputdata/wellList.vue';
import analysisSettings from 'pages/inputdata/analysisSettings.vue';

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
    }
  },
  components: { 
      'fileRibbon-app': fileRibbon,
      'mainInput-app': mainInput,
      'homeRibbon-app': homeRibbon,
      'generalOutputs-app': generalOutputs,
      'torqueDragRibbon-app': torqueDragRibbon,
      'wellList-app': wellList,
      'analysisSettings-app': analysisSettings
      },
  data () {
    return {
      leftDrawerOpen: false,
      isInput:false,
      isWellList:true,
      isSchematic:false,
      isTDAnalysis:false,
      tab: 'mails',
      isfileRibbon: false,
      ribbonStyle: {
          display: 'inline'
      },
      mainStyle: {
          // background: '#474f57',
          color: '#ffffff',
          fontFamily: 'Times New Roman',
          fontStyle: 'italic',
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
      inputsRibbonBgColor: '#191919',
      inputsRibbonTextColor: '#ffffff',
      homeRibbonBgColor: '',
      homeRibbonTextColor: '',
      GeneralOutputsBgColor: '',
      GeneralOutputsTextColor: ''

    }
  },
  methods:{
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
      }
    },
    onItemClick () {
      // console.log('Clicked on an Item')
    },
    logoutUser(){
      this.$store.dispatch('authStore/Logout')
    },
  }
}
</script>

<style scoped>
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
</style>