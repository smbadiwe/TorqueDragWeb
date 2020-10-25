<template>
    <div class="q-pa-sm bg-accent">
        <div class="row">
            <div class="col-12">
                 <q-table  
                    :data="previewSurveyData" 
                    :columns="columns" 
                    row-key="name" 
                    binary-state-sort
                    style="width:100%;">


                    <template v-slot:body="props">
                        <q-tr>
                            <q-td key="measuredDepth" :props="props">{{ props.row.measuredDepth }}</q-td>
                            <q-td key="inclination" :props="props">{{ props.row.inclination }}</q-td>
                            <q-td key="azimuth" :props="props">{{ props.row.azimuth }}</q-td>
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
        previewSurveyData() {
        return this.$store.getters['dataImportStore/previewSurveyData'];
        }
    },
    data() {
        return {

            columns: [
                { name: "measuredDepth", label: "MD (ft)", field: "", align: "left" },
                { name: "inclination", label: "Inc (deg)", field: "", align: "left" },
                { name: "azimuth", label: "Azi (deg)", field: "", align: "left" }
            ]
        }
    }
}
</script>