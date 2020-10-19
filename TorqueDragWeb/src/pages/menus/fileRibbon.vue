<template>
  <div class="q-pa-md" style="display: inline;" >
       <div class="row">
        <div v-if="isRibbonActiveInputs"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white" style="height:100px;">
            <!-- <homeRibbon-Component></homeRibbon-Component> -->
        </div>
        <div v-if="menuTabs[2].isRibbonActive"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-accent" style="height:100px;">
        </div>

        <div v-if="menuTabs[3].isRibbonActive"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-accent" style="height:100px;">
        </div>

        <div v-if="menuTabs[4].isRibbonActive"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-accent" style="height:100px;">
        </div>

        <div v-if="menuTabs[5].isRibbonActive"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-accent" style="height:100px;">
        </div>

        <div v-if="menuTabs[6].isRibbonActive"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-accent" style="height:100px;">
        </div>

        <div v-if="menuTabs[7].isRibbonActive"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-accent" style="height:100px;">
        </div>

       </div>
  </div>
</template>

<script>
import homeRibbon from 'pages/menus/homeRibbon.vue';
export default {
    computed:{
        menuTabs() {
            console.log("menuTabs fileRibbon")
         return this.$store.getters['settingsStore/menuTabs'];
        }
    },
    props:{
        isRibbonActiveInputs:{
            type: Boolean,
            default: false
        }
    },
  components: {
      'homeRibbon-Component': homeRibbon
  },
  data () {
      return {

      }
  },
  methods:{
      getFileRibbon(){
          var context = this;

          if(context.activeRibbon == "File"){
             context.isFileRibbon = true;
             context.isEditRibbon =  false; 
          }else if(context.activeRibbon == "Edit"){
              context.isFileRibbon = false;
              context.isEditRibbon =  true; 
          }
      }
  }
}
</script>