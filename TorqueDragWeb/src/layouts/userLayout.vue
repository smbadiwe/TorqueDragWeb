<template>
  <div v-bind:style="mainStyle">
    <q-layout view="hHh lpR fFf">
      <q-header>


        <div class="q-pa-sm q-pl-md row items-center">
             <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
            />

           <div class="cursor-pointer non-selectable q-pa-sm"
          v-on:click="ShowFileRibbon('Input')">
            Input
          </div>

          <div class="cursor-pointer non-selectable q-pa-sm"
          v-on:click="ShowFileRibbon('Home')">
            Home
          </div>

          <div class="q-ml-md cursor-pointer non-selectable q-pa-sm"
          v-on:click="ShowFileRibbon('Edit')">
            Edit
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
      </q-header>
 

      <div 
      v-bind:style="ribbonStyle"
      class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <fileRibbon-app
            :ribbons="ribbons"></fileRibbon-app>
     </div>

    <q-drawer
      v-model="leftDrawerOpen"
      width="500"
      >
        <div
          class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <mainInput-app></mainInput-app>
       </div>
        
    </q-drawer>

      <q-page-container>
        <div class="row" v-if="isInput">
          <div class="col-12"> 
            <div class="row">
              <div class="col-5 bg-primary q-pa-sm">
                <mainInput-app></mainInput-app>
              </div>
              <div class="col-7 q-pa-sm">
                 <router-view />
              </div>
            </div>
          </div>
        </div>

        <div class="row" v-else>
          <div class="col-12 q-pa-sm"> 
            <router-view />
          </div>
        </div>
       
      </q-page-container>
    </q-layout>
  </div>
</template>


<script>
 import fileRibbon from 'pages/menus/fileRibbon.vue'
//import fileRibbon from 'pages/menus/newRibbonBar.vue'
import mainInput from 'pages/inputdata/mainInput.vue'

export default {
  name: 'userLayout',
  computed: {
    IdentityModel(){
          return this.$store.getters['authStore/IdentityModel'];
        },
    Loginstatus(){
      return this.$store.getters['authStore/Loginstatus'];
    }
  },
  components: { 
      'fileRibbon-app': fileRibbon,
      'mainInput-app': mainInput
      },
  data () {
    return {
      leftDrawerOpen: false,
      isInput:false,
      tab: 'mails',
      isfileRibbon: false,
      ribbonStyle: {
          display: 'inline'
      },
      ribbons: {
           isFileRibbon: false,
           isEditRibbon: false
      },
      mainStyle: {
          background: '#474f57',
          color: '#ffffff',
          fontFamily: 'Times New Roman',
          fontStyle: 'italic',
          fontSizeAdjust: '0.58'
      },
    }
  },
  methods:{
      ShowFileRibbon(selectedRibbonName){
          var context =  this;
          if(selectedRibbonName == "Home"){
              if(context.ribbons.isFileRibbon == true){
                  context.ribbonStyle.display = 'none';
                  context.ribbons.isFileRibbon = false;
                  context.ribbons.isEditRibbon =  false; 
              }else{
                  context.ribbonStyle.display = 'inline';
                  context.ribbons.isFileRibbon = true;
                  context.ribbons.isEditRibbon =  false; 
              }
          }else if(selectedRibbonName == "Edit"){

              if(context.ribbons.isEditRibbon == true){
                  context.ribbonStyle.display = 'none';
                  context.ribbons.isFileRibbon = false;
                  context.ribbons.isEditRibbon =  false; 
              }else{
                  context.ribbonStyle.display = 'inline';
                  context.ribbons.isFileRibbon = false;
                  context.ribbons.isEditRibbon =  true; 
              } 
              
          }else if(selectedRibbonName == "Input"){
            if(context.isInput == true){
              context.isInput = false;
            }else{
              context.isInput = true;
            }
          }

          //console.log("ribbonStyle:", context.ribbonStyle)
          
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
</style>