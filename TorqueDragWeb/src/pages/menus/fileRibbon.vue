<template>
  <div class="q-pa-md" style="display: inline;" >
       <div class="row q-col">
        <div v-if="ribbons.isFileRibbon"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="background:orange; height:100px;">
            <!-- <homeRibbon-Component></homeRibbon-Component> -->
        </div>
        <div v-if="ribbons.isEditRibbon"
        class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="background:green; height:100px;">
        </div>
       </div>
  </div>
</template>

<script>
import homeRibbon from 'pages/menus/homeRibbon.vue';
export default {
  components: {
      'homeRibbon-Component': homeRibbon
  },
  props: {
      ribbons: {
          type: Object,
           isFileRibbon: {
            type: Boolean,
            required: true
            },
            isEditRibbon: {
            type: Boolean,
            required: true
            }
      }

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