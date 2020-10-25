<template>
    <div class="q-pa-sm bg-accent">
        <div class="row">   
            <div class="col-6 q-pa-sm">
                 Deviation Survey Variables
                <br>
                <hr/>
                <br>
                <q-list class="bg-accent text-primary"
                    v-model="selectedDevSurveyVariable">
                    <q-item 
                    v-for="devSurveyVariableInBuilt in devSurveyVariablesInBuilt2" 
                    :key="devSurveyVariableInBuilt.variableName"
                    clickable v-ripple
                    @click="GetselectedDevSurveyVariable(devSurveyVariableInBuilt)"
                    :active="devSurveyVariableInBuilt.isSelected"
                    active-class="text-orange-10 mnu_active">

                        <q-item-section>{{ devSurveyVariableInBuilt.variableName }}</q-item-section>
                    </q-item>
                </q-list>
            </div>

            <div class="col-6 q-pa-sm">
                 Worksheet Headers
                <br>
                <hr/>
                <br>
                <q-list class="bg-accent text-primary"
                    v-model="selectedSheetHeader">
                    <q-item 
                    v-for="sheetHeader in sheetHeaders" 
                    :key="sheetHeader.variableName"
                    clickable v-ripple
                    @click="GetselectedSheetHeader(sheetHeader)"
                    :active="sheetHeader.isSelected"
                    active-class="text-orange-10 mnu_active">

                        <q-item-section>{{ sheetHeader.variableName }}</q-item-section>
                    </q-item>
                </q-list>
            </div>

            <div class="col-12 q-pa-sm text-right">
                <q-btn 
                    size="sm"
                    label="Add"
                    @click="AddMappedVariable">
                </q-btn>
            </div>
        </div>

        <div class="row">
            <div class="col-12 q-pa-sm">
                Mapped Variables
                <br>
                <hr/>
           </div>
           <div class="col-12 q-pa-sm">
               <q-table  
                :data="MappedVariables" 
                :columns="columns" 
                row-key="name" 
                binary-state-sort
                style="width:100%;">


                <template v-slot:body="props">
                    <q-tr>
                        <q-td key="SheetHeaderName" :props="props">{{ props.row.SheetHeaderName }}</q-td>
                        <q-td key="DevSurveyVariable" :props="props">{{ props.row.DevSurveyVariable }}</q-td>
                        <q-td key="azimuth" :props="props">{{ props.row.azimuth }}</q-td>
                        <q-td key="deleteVariable" :props="props">
                                <q-btn 
                                color="primary" 
                                label="Delete" 
                                @click="DeleteVariable(props.row)" 
                                size=sm no-caps></q-btn>
                            </q-td>
                    </q-tr>
                    </template>
                </q-table>

           </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        devSurveyVariablesInBuilt2(){
            return this.$store.getters['dataImportStore/devSurveyVariablesInBuilt2'];
        },
        sheetHeaders(){
            return this.$store.getters['dataImportStore/sheetHeaders'];
        },
        MappedVariables(){
            return this.$store.getters['dataImportStore/MappedVariables'];
        }
    },
    data() {
        return {
            SelecteddevSurveyVariable: '',
            selectedDevSurveyVariable: {},
            selectedSheetHeader: {},
            columns: [
            { name: "SheetHeaderName", label: "ExcelSheet Header", field: "", align: "left" },
            { name: "DevSurveyVariable", label: "Dev. Survey Variable", field: "", align: "left" },
            { name: "deleteVariable", label: "Delete Mapped Data", field: "actions", align: "left" }
        ]
        }
    },
    methods:{
        GetselectedSheetHeader(selectedItem){
            this.$store.commit('dataImportStore/GetselectedSheetHeader', selectedItem)
        },
        GetselectedDevSurveyVariable(selectedItem){
            this.$store.commit('dataImportStore/GetselectedDevSurveyVariable', selectedItem)
        },
        AddMappedVariable(){
            this.$store.commit('dataImportStore/AddMappedVariable')
        },
        DeleteVariable(item){
            this.$store.commit('dataImportStore/DeleteVariable', item)
        }
    }
}
</script>