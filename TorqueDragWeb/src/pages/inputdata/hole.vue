<template>
    <div>
        <div class="row">
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

        </div>

    </div>
</template>

<script>
export default {
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
            frictionFactor: null
        }
    },
    methods: {
        updateIsImportDialogVisible(){
            var context =  this;
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
            this.$store.dispatch('holeStore/GetDeviationSurveys', {
                typeOfHole: context.typeOfHole,
                outerDiameter: context.outerDiameter,
                innerDiameter: context.innerDiameter,
                weight: context.weight,
                top: context.top,
                bottom: context.bottom,
                frictionFactor: context.frictionFactor
            })
        }
    },
    created(){
      var Conn = this.$store.getters['authStore/companyDBConnectionString'];
      var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
      var payload = {
          companyDBConnectionString: Conn,
          designId: selectedTorqueDragDesign.designId,
          holeSections: []
      }
      console.log(payload)
      this.$store.dispatch('holeStore/GetHoleSections', payload)
  }
}
</script>