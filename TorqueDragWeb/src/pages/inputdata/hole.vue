<template>
    <div>
        <q-scroll-area
            :visible="visible"
            style="height: 700px; width: 240px"
            > 
            <div class="row" id="holepage">
                <div class="col-12 q-pa-sm"> 
                    <q-btn 
                        size="sm"
                        label="Import from file">
                    </q-btn>
                </div>

                <div class="col-12 q-pa-sm"> 
                    <hr/>
                </div>

                <div class="col-4 q-pa-sm">
                    Riser 
                </div>
                <div class="col-4 q-pa-sm">
                    <q-btn  icon="add_box"
                        size="sm"
                        flat
                        @click="ShowHoleSection('New Riser')">
                        <q-tooltip>
                            Add Riser
                        </q-tooltip>
                    </q-btn>
                </div>

                <div class="col-4 q-pa-sm"></div>

                <div class="col-4 q-pa-sm">
                    Casing 
                </div>
                <div class="col-4 q-pa-sm">
                    <q-btn  icon="add_box"
                        size="sm"
                        flat
                        @click="ShowHoleSection('New Casing')">
                        <q-tooltip>
                            Add Casing
                        </q-tooltip>
                    </q-btn>
                </div>

                <div class="col-4 q-pa-sm">
                    <q-btn 
                        size="sm"
                        label="Add from catalog">
                    </q-btn>
                </div>

                <div class="col-4 q-pa-sm">
                    Open Hole 
                </div>
                <div class="col-4 q-pa-sm">
                    <q-btn  icon="add_box"
                        size="sm"
                        flat
                    @click="ShowHoleSection('New Open Hole')">
                        <q-tooltip>
                            Add Open Hole
                        </q-tooltip>
                    </q-btn>
                </div>

                <div class="col-4 q-pa-sm"></div>

                <div class="col-12 q-pa-sm"
                v-if="expanded">

                            <q-card class="bg-secondary">
                                <q-card-section align="center">
                                    <div class="text-center text-subtitle1 q-pb-md">{{ header }}</div>
                                </q-card-section>

                                <q-card-section>
                                    
                                    <div class="row">

                                        <div class="col-3 q-pa-sm">Type of Hole</div>
                                        <div class="col-6 q-pa-sm"><input v-model="typeOfHole"></div>
                                        <div class="col-3 q-pa-sm"></div>

                                        <div class="col-3 q-pa-sm">Outer Diamter</div>
                                        <div class="col-6 q-pa-sm"><input v-model="outerDiameter"></div>
                                        <div class="col-3 q-pa-sm">in</div>

                                        <div class="col-3 q-pa-sm">Inner Diameter</div>
                                        <div class="col-6 q-pa-sm"><input v-model="innerDiameter"></div>
                                        <div class="col-3 q-pa-sm">in</div>

                                        <div class="col-3 q-pa-sm">Weigth of Pipe</div>
                                        <div class="col-6 q-pa-sm"><input v-model="weight"></div>
                                        <div class="col-3 q-pa-sm">lb/ft</div>

                                        <div class="col-3 q-pa-sm">Top of Section</div>
                                        <div class="col-6 q-pa-sm"><input v-model="top"></div>
                                        <div class="col-3 q-pa-sm">ft</div>

                                        <div class="col-3 q-pa-sm">Bottom of Section</div>
                                        <div class="col-6 q-pa-sm"><input v-model="bottom"></div>
                                        <div class="col-3 q-pa-sm">ft</div>

                                        <div class="col-3 q-pa-sm">Friction Factor</div>
                                        <div class="col-6 q-pa-sm"><input v-model="frictionFactor"></div>
                                        <div class="col-3 q-pa-sm">ft</div>

                            
                                    </div>
                                </q-card-section>

                                <q-card-actions align="right">
                                    <q-btn 
                                        size="sm"
                                        label="Add"
                                        class="bg-primary"
                                        @click="PostHoleSection">
                                    </q-btn>
                                </q-card-actions>

                                </q-card>

                </div>
                
                <div class="col-12 q-pa-sm text-right"> 
                                    <q-btn 
                                        size="sm"
                                        label="Import"
                                        class="q-pa-sm"
                                        @click="Import">
                                    </q-btn>

                    <q-dialog v-model="isImportDialogVisible" class="bg-accent">
                        <div class="q-pa-sm bg-accent">
                            <msExcelImport-app></msExcelImport-app>
                        </div>
                    </q-dialog>
                </div>

                <div class="col-12 q-pa-sm">
                    <q-table
                        class="my-sticky-header-table"  
                        :data="holeSections" 
                        :columns="columns" 
                        row-key="name" 
                        flat
                        bordered
                        :separator="separator">


                        <template v-slot:body="props">
                            <q-tr
                            :props="props">
                                <q-td key="typeOfHole" :props="props">{{ props.row.typeOfHole }}</q-td>
                                <q-td key="outerDiameter" :props="props">{{ props.row.outerDiameter }}</q-td>
                                <q-td key="innerDiameter" :props="props">{{ props.row.innerDiameter }}</q-td>
                                <q-td key="weight" :props="props">{{ props.row.weight }}</q-td>
                                <q-td key="topOfHole" :props="props">{{ props.row.topOfHole }}</q-td>
                                <q-td key="bottomOfHole" :props="props">{{ props.row.bottomOfHole }}</q-td>
                                <q-td key="frictionFactor" :props="props">{{ props.row.frictionFactor }}</q-td>
                            </q-tr>
                        </template>
                    </q-table>
                </div>

            </div>
        </q-scroll-area>

    </div>
</template>

<script>
import msExcelImport from 'components/dataImport/msExcelImport.vue';
export default {
    computed:{
        holeSections() {
        return this.$store.getters['holeStore/holeSections'];
        },
        isImportDialogVisible() {
        return this.$store.getters['holeStore/isImportDialogVisible'];
        }
    },
    components: {
        'msExcelImport-app': msExcelImport
    },
    data() {
        return {
            expanded: false,
            header: "",
            typeOfHole: "",
            outerDiameter: null,
            innerDiameter: null,
            weight: null,
            top: null,
            bottom: null,
            frictionFactor: null,
            separator: 'cell',
            columns: [
            { name: "typeOfHole", label: "Hole Type", field: "", align: "left" },
            { name: "outerDiameter", label: "Outer Diameter (in)", field: "", align: "left" },
            { name: "innerDiameter", label: "Inner Diameter (in)", field: "", align: "left" },
            { name: "weight", label: "Weight (lb/ft)", field: "", align: "left" },
            { name: "topOfHole", label: "Top (ft)", field: "", align: "left" },
            { name: "bottomOfHole", label: "bottom (ft)", field: "", align: "left" },
            { name: "frictionFactor", label: "frictionFactor", field: "", align: "left" }
        ],
        visible: true
        }
    },
    methods: {
        Import(){
            this.$store.commit('dataImportStore/SetTypeOfInput', "Hole");
            this.$store.commit('holeStore/SetisImportDialogVisible', true);
            
        },
        ShowHoleSection(selectedHeader){
            var context = this;
            if(selectedHeader == "New Open Hole"){
                context.header = "New Open Hole"
                context.expanded = true;
            }

            if(selectedHeader == "New Riser"){
                context.header = "New Riser"
                context.expanded = true;
            }

            if(selectedHeader == "New Casing"){
                context.header = "New Casing"
                context.expanded = true;
            }
            
        },
        PostHoleSection(){
            var context =  this;
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
            this.$store.dispatch('holeStore/PostHoleSection', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id,
                holeSection: {
                typeOfHole: context.typeOfHole,
                outerDiameter: parseFloat(context.outerDiameter),
                innerDiameter: parseFloat(context.innerDiameter),
                weight: parseFloat(context.weight),
                topOfHole: parseFloat(context.top),
                bottomOfHole: parseFloat(context.bottom),
                frictionFactor:  parseFloat(context.frictionFactor),
                designId: selectedTorqueDragDesign.id
                }
            })

            context.expanded = false;
        }
    },
    created(){
      var Conn = this.$store.getters['authStore/companyName'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var payload = {
          companyName: Conn,
          designId: selectedTorqueDragDesign.id,
          holeSections: []
      }
      console.log(payload)
      this.$store.dispatch('holeStore/GetHoleSections', payload)
      var tabCaption = "Hole Section Editor";
      this.$store.commit('settingsStore/GetTabCaption', tabCaption);
  }
}
</script>

<style scoped>
.my-sticky-header-table{
   /* height or max-height is important */
  height: 350px;
  background-color: rgba(20,20,20,1);
  top: 48px
}

#holepage {
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
    color: rgba(214,214,214,1);
}
    
</style>