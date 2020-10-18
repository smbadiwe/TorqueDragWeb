<template>
    <div style="height:100vh;">
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
                    <q-card>
                    <q-card-section>
                        
                        <q-select 
                            class="login-input q-pa-sm"  
                            v-model="typeOfSection" 
                            :options="pipeSectionTypeList" 
                            label="Tubing Section Type"
                            borderless>
                        </q-select>
                        <q-input  class="login-input q-pa-md" outlined v-model="length" label="Length (ft)"/>
                        <q-input  class="login-input q-pa-md" outlined v-model="measuredDepth" label="Measured Depth (ft)"/>
                        <q-input  class="login-input q-pa-md" outlined v-model="size" label="Size (in)"/>
                        <q-input  class="login-input q-pa-md" outlined v-model="weight" label="Weight (Ibf)"/>
                        <q-input  class="login-input q-pa-md" outlined v-model="grade" label="Grade"/>
                        <q-input  class="login-input q-pa-md" outlined v-model="outerDiameter" label="Outer Diameter (in)"/>
                        <q-input  class="login-input q-pa-md" outlined v-model="innerDiameter" label="Inner Diameter (in)"/>
                        <q-input  class="login-input q-pa-md" outlined v-model="minimumYieldStrength" label="Minimum Yield Strength"/>
                        <q-input  class="login-input q-pa-md" outlined v-model="makeUpTorque" label="Make-Up Torque"/>
                        <q-input  class="login-input q-pa-md" outlined v-model="overPullMargin" label="Over_Pull Margin"/>
                        <q-input  class="login-input q-pa-md" type="textarea" outlined v-model="itemDescription" label="Item Description"/>
                    </q-card-section>

                    <q-card-actions align="right">
                        <q-btn 
                            size="sm"
                            label="Add"
                            class="bg-primary"
                            @click="collapseExander">
                        </q-btn>
                    </q-card-actions>

                    </q-card>
                </q-expansion-item>
 
            </div>

            <div class="col-12 q-pa-sm"> 
            <q-table  
             :data="deviationSurveys" 
             :columns="columns" 
             row-key="name" 
             binary-state-sort
             >


            <template v-slot:body="props">
                <q-tr 
                v-if ="!props.row.isPaid"
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

    </div>
</template>

<script>
export default {
     computed:{
        pipes() {
        return this.$store.getters['tubingStringStore/pipes'];
        }
    },
    data () {
        return {
        columns: [
            { name: "typeOfSection", label: "Section Type", field: "", align: "left" },
            { name: "length", label: "Length (ft)", field: "", align: "left" },
            { name: "measuredDepth", label: "MD (ft)", field: "", align: "left" },
            { name: "outerDiameter", label: "OD (in)", field: "", align: "left" },
            { name: "innerDiameter", label: "ID (in)", field: "", align: "left" }
        ],
        expanded: false
        }
  },
  methods: {
      collapseExander() {
          
        var context = this;
        context.expanded= false;
      }
  }
}
</script>

<style scoped>

    .login-input{
        font-size:14px;
        background-color: white;
    }

</style>