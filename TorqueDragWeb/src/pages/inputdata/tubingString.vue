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