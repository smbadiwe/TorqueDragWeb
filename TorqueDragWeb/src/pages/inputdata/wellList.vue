<template>
    <div class="col-12">

    <q-card class="my-card bg-secondary text-white" style="height:50px;">
      <q-card-section align="right">
        <div class="text-center text-subtitle1 q-pb-md">Well List</div>
      </q-card-section>
    </q-card>

    <div class="row">
        <div class="col-12 q-pa-sm"> 
          <q-btn  icon="add_box"
          size="sm"
          flat
          @click="ExpandExander">
            <q-tooltip>
              Add New Well
            </q-tooltip>
          </q-btn>
        </div>
        
      </div>

      <div class="row"
        v-if="expanded">
            <div class="col-12">
                        <q-expansion-item
                            v-model="expanded"
                            dense
                            dense-toggle
                            expand-separator
                            label="Add Well"
                        >

                        <q-card class="bg-secondary">
                            <q-card-section>
                                
                                <div class="row">

                                <div class="col-12 q-pa-sm">
                                    New Well
                                    <br>
                                    <hr/>
                                </div>

                                <div class="col-3 q-pa-sm">Design Name</div>
                                <div class="col-6 q-pa-sm"><input v-model="designName"></div>
                                <div class="col-3 q-pa-sm"></div>

                        
                            </div>
                            </q-card-section>

                            <q-card-actions align="right">
                                <q-btn 
                                    size="sm"
                                    label="Add"
                                    class="bg-primary"
                                    @click="PostTorqueDragDesign">
                                </q-btn>
                            </q-card-actions>

                            </q-card>

                        </q-expansion-item>
            </div>
      </div>

    <q-scroll-area
        :visible="visible"
      style="height: 500px; width: 100%;"
    >
        <q-list class="bg-accent text-primary"
        v-model="selectedWellDesign">
        <q-item 
        v-for="torqueDragDesign in torqueDragDesigns" :key="torqueDragDesign.designName"
        clickable v-ripple
        @click="onItemSelectionChanged(torqueDragDesign)">
            <q-item-section 
            v-if="torqueDragDesign.isSelected" 
            class="bg-grey">{{ torqueDragDesign.designName }}</q-item-section>
            <q-item-section
            v-else
            >{{ torqueDragDesign.designName }}</q-item-section>

            
            <q-item-section 
                v-if="torqueDragDesign.isSelected" 
                side class="text-primary bg-grey">{{ torqueDragDesign.creationDate }}</q-item-section>
            <q-item-section
                v-else 
                side class="text-primary">{{ torqueDragDesign.creationDate }}</q-item-section>
        </q-item>

        </q-list>
    </q-scroll-area>
  </div>
</template>

<script>
export default {
  computed: {
    companyId(){
      return this.$store.getters['authStore/companyId'];
    },
    torqueDragDesigns(){
      return this.$store.getters['wellDesignStore/torqueDragDesigns'];
    },
    companyDBConnectionString(){
      return this.$store.getters['authStore/companyDBConnectionString'];
    }
  },
  data () {
    return {
        visible: true,
        expanded: false,
        designName: "",
        selectedWellDesign: {}
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
            companyDBConnectionString: context.companyDBConnectionString
          });

          context.expanded = false;
    },
    onItemSelectionChanged(torqueDragDesign){
        var context =  this;
        this.$store.commit('wellDesignStore/GetSelectedTorqueDragDesign', torqueDragDesign)
    },
  },
  created() {
      var companyDBConnectionString = this.$store.getters['authStore/companyDBConnectionString'];
      //var parts = companyDBConnectionString.split('\\');
      //var output = parts.join('\\\\');
      this.$store.dispatch('wellDesignStore/GetTorqueDragDesigns', companyDBConnectionString)
   }
}
</script>