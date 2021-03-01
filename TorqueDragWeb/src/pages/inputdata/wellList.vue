<template>
  <div class="bg-secondary dialogBorder" style="max-height: 700px;">
    
          <div class="row">
              <q-bar class="col-12 q-pa-sm row bg-secondary text-accent" >
                  <div>Well Explorer</div>
                  <q-space />
                  <q-btn dense flat icon="delete_forever"
                  @click="deleteAction" />
                  <q-btn dense flat icon="close"
                  @click="closeAction" />
              </q-bar>
          </div>

          <div class="row bg-primary" id="schematicspace">
              <div class="col-12 q-pa-sm  text-accent bg-primary">
                <q-tree
                  :nodes="wellProjects"
                  node-key="id"
                  @update:selected="selectNode"
                  :selected.sync="selected"
                  default-expand-all
                  color="accent"
                  control-color="blue"
                  text-color="accent"
                  dark/>
            </div>

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
    companies(){
        return this.$store.getters['wellDesignStore/externalcompanyNames'];
    },
    projects(){
        return this.$store.getters['wellDesignStore/projectNames'];
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
        selected: null,
        ticked: [],
        expanded: [],
        uniqueId: "",
        selectedCompany: "",
        selectedProject: ""
    }
  }, 
  methods: {
    closeAction(){
      this.$store.commit('wellDesignStore/SetIsWellExplorer', false);
    },
    ExpandExander(){
      var context = this;
      context.expanded = true;
    },
    createUniqueId()
    {
      var context =  this;
      var IdentityModel = this.$store.getters['authStore/IdentityModel'];

      context.uniqueId = context.externalcompanyName.toLowerCase() +
                    context.projectName.toLowerCase() +
                    context.siteName.toLowerCase() +
                    context.wellName.toLowerCase() +
                    context.wellboreName.toLowerCase() +
                    context.wellDesignName.toLowerCase() +
                    context.designName.toLowerCase() +
                    IdentityModel.id.ToString();

    },
    deleteAction(){
      var context = this;
      context.createUniqueId();
      this.$store.dispatch('wellDesignStore/DeleteTorqueDragDesign', {
        uniqueId: context.uniqueId,
        companyName: context.companyName
      });
    },
    PostTorqueDragDesign(){
      var context = this;
      var d = new Date();
      var designDay = d.getDate();
      var designMonth = d.getMonth() + 1;
      var designYear = d.getFullYear();

      this.$store.commit('dataImportStore/SetLoaderParameters', {
            showLoader: true,
            showImportView: false
          });

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
    selectNode (_wellCaseId) {
            var context = this;

            console.log(context.selected);
            this.$store.commit('dataImportStore/SetLoaderParameters', {
              showLoader: true,
              showImportView: false
            });
            if(_wellCaseId !== null){


              this.$store.dispatch('wellDesignStore/PostSelectedWellDesign', {
                wellCaseId: _wellCaseId,
                companyName: context.companyName
              })
            }
            this.$store.commit('wellDesignStore/SetIsWellExplorer', false);
            
    }
  },
  created() {
      var tabCaption = "Schematics";
      this.$store.commit('settingsStore/GetTabCaptionRight', tabCaption);
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
    /* color: rgba(214,214,214,1); */
}
#scrollview {
    height: 390px;
     width: 240px;
}

.dialogBorder {
  border: 2px solid rgba(112,112,112,1);
    max-height: 700px;
  /* height: 50px; */
}

</style>