<template>
  <div>
     <!-- <q-scroll-area
        :visible="visible"
        id="scrollview"
    > -->
      <div id="schematicspace">
            <div class="row">
              <div class="col-12 q-pa-sm">
                <q-tree
                  class="bg-accent text-primary"
                  :nodes="wellProjects"
                  default-expand-all
                  node-key="designId"
                  @update:selected="selectNode"
                  :selected.sync="selected"/>
            </div>
          </div>
       </div>
     <!-- </q-scroll-area> -->
  </div>
</template>

<script>
export default {
  computed: {
    companyId(){
      return this.$store.getters['authStore/companyId'];
    },
    companyName(){
      return this.$store.getters['authStore/companyName'];
    },
    wellProjects(){
        return this.$store.getters['wellDesignStore/wellProjects'];
    },
    torqueDragDesigns(){
        return this.$store.getters['wellDesignStore/torqueDragDesigns'];
    },
    /* selected(){
        return this.$store.getters['wellDesignStore/selected'];
    }, */
    /* selected: {
           get(){
             return this.$store.getters['wellDesignStore/selected'];
           },
           set(newName){
             return newName
           } 
    } */
  },
  data () {
    return {
        visible: true,
        expanded: false,
        designName: "",
        selectedWellDesign: {},
        selected: null
    }
  }, 
  methods: {
    ExpandExander(){
      var context = this;
      context.expanded = true;
    },
    PostTorqueDragDesign(){
      var context = this;
      var d = new Date();
      var designDay = d.getDate();
      var designMonth = d.getMonth() + 1;
      var designYear = d.getFullYear();

      this.$store.dispatch('wellDesignStore/PostTorqueDragDesign', {
            torqueDragDesign: {
                companyId: context.companyId,
                designName: context.designName,
                designDay: designDay,
                designMonth: designMonth,
                designYear:  designYear
            },
            companyName: context.companyName
          });

          context.expanded = false;
    },
    selectNode (v) {
            var context = this;
             var i = 0;
            var nCount = context.torqueDragDesigns.length;
            context.selected = null
            for(i = 0; i < nCount; i++){
              //console.log("context.torqueDragDesigns[i].id: ", context.torqueDragDesigns[i].id);
              if(v == context.torqueDragDesigns[i].id){
                context.selected = context.torqueDragDesigns[i].designName
              }
              /* else{
                context.selected = null
              } */
            }
            console.log(context.selected);
            //console.log(v);
            if(v !== null){
              this.$store.commit('wellDesignStore/GetSelectedTorqueDragDesign', {
                id: v
              })
            }
            return;
    }
  },
  created() {
      /* var context = this;
      var companyName = this.$store.getters['authStore/companyName'];
      var torqueDragDesigns = this.$store.getters['wellDesignStore/torqueDragDesigns'];
      var SelectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      this.$store.dispatch('wellDesignStore/GetTorqueDragDesigns', companyName)
    
     */

   }
}
</script>

<style scoped>

#schematicspace {
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
    color: rgba(214,214,214,1);
}
#scrollview {
    height: 390px;
     width: 240px;
}

</style>