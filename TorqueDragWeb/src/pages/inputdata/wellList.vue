<template>
    <div class="row">
      <div class="col-12 q-pa-sm">

    <q-card class="my-card bg-secondary text-white" style="height:50px;">
      <q-card-section align="right">
        <div class="text-center text-subtitle1 q-pb-md">Well List</div>
      </q-card-section>
    </q-card>

    <q-scroll-area
        :visible="visible"
      style="height: 500px; width: 100%;"
    >
        <q-tree
          class="bg-accent text-primary"
          :nodes="wellProjects"
          default-expand-all
          node-key="designId"
          @update:selected="selectNode"
          :selected.sync="selected"/>
    </q-scroll-area>
    </div>
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
      var context = this;
      var companyName = this.$store.getters['authStore/companyName'];
      var torqueDragDesigns = this.$store.getters['wellDesignStore/torqueDragDesigns'];
      var SelectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      this.$store.dispatch('wellDesignStore/GetTorqueDragDesigns', companyName)

   /*    var nlength= Object.keys(SelectedTorqueDragDesign).length;
      console.log("nlength: ", nlength)
      var i = 0;
      var nCount = torqueDragDesigns.length;
      console.log("nCount: ", nCount)
      context.selected = null

    if(nCount == 0){
      this.$store.dispatch('wellDesignStore/GetTorqueDragDesigns', companyDBConnectionString)
    }else{

      if(nlength > 0){
        for(i = 0; i < nCount; i++){
          if(SelectedTorqueDragDesign.designId == torqueDragDesigns[i].id){
            context.selected = torqueDragDesigns[i].designName
            console.log("selected: ", context.selected);
          }
        }
      }else{
        SelectedTorqueDragDesign = torqueDragDesigns[0];
        context.selected = torqueDragDesigns[0].designName;
        console.log("SelectedTorqueDragDesign.id: ", SelectedTorqueDragDesign.id);
            console.log("selected: ", context.selected);
      }
    } */

   }
}
</script>