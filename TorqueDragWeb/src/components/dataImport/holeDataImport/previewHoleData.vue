<template>
    <div class="q-pa-sm bg-primary text-accent">
        <div class="row">
            <div class="col-12">
                 <q-table  
                    class="my-sticky-header-table"
                    :data="previewHoleData"
                    :columns="columns"
                    row-key="name"
                    dark
                    color="amber"
                    bordered
                    :separator="separator"
                    style="width:100%;">


                    <template v-slot:body="props">
                        <q-tr>
                            <q-td key="typeOfHole" :props="props">{{ props.row.typeOfHole }}</q-td>
                            <q-td key="outerDiameter" :props="props">{{ props.row.outerDiameter }}</q-td>
                            <q-td key="innerDiameter" :props="props">{{ props.row.innerDiameter }}</q-td>
                            <q-td key="weight" :props="props">{{ props.row.weight }}</q-td>
                            <q-td key="top" :props="props">{{ props.row.top }}</q-td>
                            <q-td key="bottom" :props="props">{{ props.row.bottom }}</q-td>
                            <q-td key="frictionFactor" :props="props">{{ props.row.frictionFactor }}</q-td>
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
        previewHoleData() {
        return this.$store.getters['dataImportStore/previewHoleData'];
        }
    },
    data() {
        return {
            separator: 'cell',
            columns: [
                { name: "typeOfHole", label: "Hole Type", field: "", align: "left" },
                { name: "outerDiameter", label: "Outer Diameter (in)", field: "", align: "left" },
                { name: "innerDiameter", label: "Inner Diameter (in)", field: "", align: "left" },
                { name: "weight", label: "Weight (lb/ft)", field: "", align: "left" },
                { name: "top", label: "Top (ft)", field: "", align: "left" },
                { name: "bottom", label: "Bottom (ft)", field: "", align: "left" },
                { name: "frictionFactor", label: "Friction Factor", field: "", align: "left" }
            ]
        }
    }
}
</script>