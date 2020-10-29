<template>
    <div class="q-pa-sm bg-accent">
        <div class="row">
            <div class="col-12">
                 <q-table  
                    :data="previewTubingStringData" 
                    :columns="columns" 
                    row-key="name" 
                    style="width:100%;">


                    <template v-slot:body="props">
                        <q-tr>
                            <q-td key="typeOfSection" :props="props">{{ props.row.typeOfSection }}</q-td>
                            <q-td key="length" :props="props">{{ props.row.length }}</q-td>
                            <q-td key="measuredDepth" :props="props">{{ props.row.measuredDepth }}</q-td>
                            <q-td key="size" :props="props">{{ props.row.size }}</q-td>
                            <q-td key="weight" :props="props">{{ props.row.weight }}</q-td>
                            <q-td key="grade" :props="props">{{ props.row.grade }}</q-td>
                            <q-td key="outerDiameter" :props="props">{{ props.row.outerDiameter }}</q-td>
                            <q-td key="innerDiameter" :props="props">{{ props.row.innerDiameter }}</q-td>
                            <q-td key="minimumYieldStrength" :props="props">{{ props.row.minimumYieldStrength }}</q-td>
                            <q-td key="itemDescription" :props="props">{{ props.row.itemDescription }}</q-td>
                            <q-td key="makeUpTorque" :props="props">{{ props.row.makeUpTorque }}</q-td>
                            <q-td key="overPullMargin" :props="props">{{ props.row.overPullMargin }}</q-td>
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
        previewTubingStringData() {
        return this.$store.getters['dataImportStore/previewTubingStringData'];
        }
    },
    data() {
        return {

            columns: [
                { name: "typeOfSection", label: "Section Type", field: "", align: "left" },
                { name: "length", label: "Length (ft)", field: "", align: "left" },
                { name: "measuredDepth", label: "Measured Depth (ft)", field: "", align: "left" },
                { name: "size", label: "Size (in)", field: "", align: "left" },
                { name: "weight", label: "Weight (lb/ft)", field: "", align: "left" },
                { name: "grade", label: "Grade", field: "", align: "left" },
                { name: "outerDiameter", label: "Outer Diameter (in)", field: "", align: "left" },
                { name: "innerDiameter", label: "Inner Diameter (in)", field: "", align: "left" },
                { name: "minimumYieldStrength", label: "Minimum Yield Strength (lb/ft)", field: "", align: "left" },
                { name: "itemDescription", label: "Description", field: "", align: "left" },
                { name: "makeUpTorque", label: "Make-Up Torque", field: "", align: "left" },
                { name: "overPullMargin", label: "Over-Pull Margin", field: "", align: "left" }
            ]
        }
    }
}
</script>