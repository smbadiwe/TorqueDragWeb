<template>
    <div id="tubingstringpage">
        <q-scroll-area
            :visible="visible"
            style="height: 700px; width: 240px"
            > 

                <div class="row q-pa-sm">
                    <div class="col-3">String name:</div>
                    <div class="col-3">Assembly</div>
                </div>

                <div class="row q-pa-sm">
                    <div class="col-3">String depth:</div>
                    <div class="col-3">14,814.00 ft</div>
                </div>

                <div class="row q-pa-sm">
                <div class="col-12">
                Tubing String Table
                <br>
                <hr/>      
                </div>

                    <div class="col-12 q-pa-sm">
                        <q-expansion-item
                            v-model="expanded"
                            dense
                            dense-toggle
                            expand-separator
                            label="Add Tubing Section"
                        >
                            <q-card class="bg-primary">
                            <q-card-section>
                                
                                <div class="row">

                                <div class="col-3 q-pa-sm">Length</div>
                                <div class="col-6 q-pa-sm"><input v-model="length"></div>
                                <div class="col-3 q-pa-sm">ft</div>

                                <div class="col-3 q-pa-sm">Measured Depth</div>
                                <div class="col-6 q-pa-sm"><input v-model="measuredDepth"></div>
                                <div class="col-3 q-pa-sm">ft</div>

                                <div class="col-3 q-pa-sm">Size</div>
                                <div class="col-6 q-pa-sm"><input v-model="size"></div>
                                <div class="col-3 q-pa-sm">in</div>

                                <div class="col-3 q-pa-sm">Weight</div>
                                <div class="col-6 q-pa-sm"><input v-model="weight"></div>
                                <div class="col-3 q-pa-sm">lbf</div>

                                <div class="col-3 q-pa-sm">Grade</div>
                                <div class="col-6 q-pa-sm"><input v-model="grade"></div>
                                <div class="col-3 q-pa-sm"></div>

                                <div class="col-3 q-pa-sm">Outer Diameter</div>
                                <div class="col-6 q-pa-sm"><input v-model="outerDiameter"></div>
                                <div class="col-3 q-pa-sm">in</div>

                                <div class="col-3 q-pa-sm">Outer Diameter</div>
                                <div class="col-6 q-pa-sm"><input v-model="innerDiameter"></div>
                                <div class="col-3 q-pa-sm">in</div>

                                <div class="col-3 q-pa-sm">Minimum Yield Strength</div>
                                <div class="col-6 q-pa-sm"><input v-model="minimumYieldStrength"></div>
                                <div class="col-3 q-pa-sm">in</div>

                                <div class="col-3 q-pa-sm">Make-Up Torque</div>
                                <div class="col-6 q-pa-sm"><input v-model="makeUpTorque"></div>
                                <div class="col-3 q-pa-sm">in</div>

                                <div class="col-3 q-pa-sm">Over-Pull Margin</div>
                                <div class="col-6 q-pa-sm"><input v-model="overPullMargin"></div>
                                <div class="col-3 q-pa-sm">in</div>

                                <div class="col-3 q-pa-sm">Item Description</div>
                                <div class="col-6 q-pa-sm"><input type="textarea" v-model="itemDescription"></div>
                                <div class="col-3 q-pa-sm"></div>

                                </div>
                                
                            </q-card-section>

                            <q-card-actions align="right">
                                <q-btn 
                                    size="sm"
                                    label="Add"
                                    class="bg-primary"
                                    @click="PostPipe">
                                </q-btn>
                            </q-card-actions>

                            </q-card>
                        </q-expansion-item>
        
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
                    :data="pipes" 
                    :columns="columns" 
                    row-key="name" 
                    flat
                    bordered
                    class="my-sticky-header-table"
                    dark
                    color="amber"
                    :separator="separator">


                    <template v-slot:body="props">
                        <q-tr
                        :props="props">
                            <q-td key="typeOfSection" :props="props">{{ props.row.typeOfSection }}</q-td>
                            <q-td key="length" :props="props">{{ props.row.length }}</q-td>
                            <q-td key="measuredDepth" :props="props">{{ props.row.measuredDepth }}</q-td>
                            <q-td key="outerDiameter" :props="props">{{ props.row.outerDiameter }}</q-td>
                            <q-td key="innerDiameter" :props="props">{{ props.row.innerDiameter }}</q-td>
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
        pipes() {
        return this.$store.getters['tubingStringStore/pipes'];
        },
        isImportDialogVisible() {
        return this.$store.getters['tubingStringStore/isImportDialogVisible'];
        }
    },
    components: {
        'msExcelImport-app': msExcelImport
    },
    data () {
        return {
        separator: 'cell',
        columns: [
            { name: "typeOfSection", label: "Section Type", field: "", align: "left" },
            { name: "length", label: "Length (ft)", field: "", align: "left" },
            { name: "measuredDepth", label: "MD (ft)", field: "", align: "left" },
            { name: "outerDiameter", label: "OD (in)", field: "", align: "left" },
            { name: "innerDiameter", label: "ID (in)", field: "", align: "left" }
        ],
        expanded: false,
        visible: true,
        typeOfSection: "",
        length: null,
        measuredDepth: null,
        size: null,
        weight: null,
        grade: "",
        outerDiameter: null,
        innerDiameter: null,
        minimumYieldStrength: null,
        itemDescription: "",
        makeUpTorque: null,
        overPullMargin: null
        }
  },
  methods: {
      Import(){
            this.$store.commit('dataImportStore/SetTypeOfInput', "Tubing String");
            this.$store.commit('tubingStringStore/SetisImportDialogVisible', true);
            
      },
      updateIsImportDialogVisible(){
          var context =  this;
          this.$store.commit('dataImportStore/SetTypeOfInput', "Tubing String");
          this.$store.commit('wellPathStore/SetisImportDialogVisible', true);
      },
      PostPipe(){
            var context =  this;
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
            this.$store.dispatch('tubingStringStore/PostPipe', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id,
                pipe: {
                    typeOfSection: context.typeOfSection,
                    length:  parseFloat(context.length),
                    measuredDepth:  parseFloat(context.measuredDepth),
                    size:  parseFloat(context.size),
                    weight:  parseFloat(context.weight),
                    grade:  context.grade,
                    outerDiameter:  parseFloat(context.outerDiameter),
                    innerDiameter:  parseFloat(context.innerDiameter),
                    minimumYieldStrength:  parseFloat(context.minimumYieldStrength),
                    itemDescription:  parseFloat(context.itemDescription),
                    makeUpTorque:  parseFloat(context.makeUpTorque),
                    overPullMargin:  parseFloat(context.overPullMargin),
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
          pipes: []
      }
      console.log(payload)
      this.$store.dispatch('tubingStringStore/GetPipes', payload);
      var tabCaption = "String Editor";
      this.$store.commit('settingsStore/GetTabCaption', tabCaption);
  }
}
</script>

<style scoped>

    .my-sticky-header-table{
    height: 450px;
    }

    /* .login-input{
        font-size:14px;
        background-color: white;
    } */

    #tubingstringpage {
    text-align: left;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: lighter;
    font-size: 15px;
    color: rgba(214,214,214,1);
}

</style>