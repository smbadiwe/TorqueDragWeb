<template>
    <div class="q-pa-sm bg-primary text-accent">
        <div class="row">
            <div class="col-12 q-pa-sm">
                 <q-table  
                    :data="previewMudPVTData"
                    :columns="columns"
                    row-key="name"
                    dark
                    color="amber"
                    bordered
                    :separator="separator"
                    style="width:100%;">


                    <template v-slot:body="props">
                        <q-tr>
                            <q-td key="temperature" :props="props">{{ props.row.temperature }}</q-td>
                            <q-td key="pressure" :props="props">{{ props.row.pressure }}</q-td>
                            <q-td key="density" :props="props">{{ props.row.density }}</q-td>
                            <q-td key="plasticViscoity" :props="props">{{ props.row.plasticViscoity }}</q-td>
                            <q-td key="yieldPoint" :props="props">{{ props.row.yieldPoint }}</q-td>
                            <q-td key="reference" :props="props">{{ props.row.reference }}</q-td>
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
        previewMudPVTData() {
        return this.$store.getters['dataImportStore/previewMudPVTData'];
        }
    },
    data() {
        return {
            separator: 'cell',
            columns: [
                { name: "temperature", label: "Temperature (deg F)", field: "", align: "left" },
                { name: "pressure", label: "Pressure (psi)", field: "", align: "left" },
                { name: "density", label: "Density (lb/ft3)", field: "", align: "left" },
                { name: "plasticViscoity", label: "Plastic Viscoity (cp)", field: "", align: "left" },
                { name: "yieldPoint", label: "Yield Point (lb/100ft2)", field: "", align: "left" },
                { name: "reference", label: "Reference", field: "", align: "left" }
            ]
        }
    }
}
</script>