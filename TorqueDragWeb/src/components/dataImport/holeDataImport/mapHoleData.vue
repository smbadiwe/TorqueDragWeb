<template>
    <div class="q-pa-sm bg-accent">
        <div class="row">   
            <div class="col-6 q-pa-sm">
                 Hole Variables
                <br>
                <hr/>
                <br>
                <q-list class="bg-accent text-primary"
                    v-model="selectedDevSurveyVariable">
                    <q-item 
                    v-for="holeVariableInBuilt in holeVariablesInBuilt2" 
                    :key="holeVariableInBuilt.variableName"
                    clickable v-ripple
                    @click="GetselectedHoleSectionVariable(holeVariableInBuilt)"
                    :active="holeVariableInBuilt.isSelected"
                    active-class="text-orange-10 mnu_active">

                        <q-item-section>{{ holeVariableInBuilt.variableName }}</q-item-section>
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
                        <q-td key="HoleSectionVariable" :props="props">{{ props.row.HoleSectionVariable }}</q-td>
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
        holeVariablesInBuilt2(){
            return this.$store.getters['dataImportStore/holeVariablesInBuilt2'];
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
            selectedHoleSectionVariable: {},
            selectedSheetHeader: {},
            columns: [
            { name: "SheetHeaderName", label: "ExcelSheet Header", field: "", align: "left" },
            { name: "HoleSectionVariable", label: "Hole Section Variable", field: "", align: "left" },
            { name: "deleteVariable", label: "Delete Mapped Data", field: "actions", align: "left" }
        ]
        }
    },
    methods:{
        GetselectedSheetHeader(selectedItem){
            this.$store.commit('dataImportStore/GetselectedSheetHeader', selectedItem)
        },
        GetselectedHoleSectionVariable(selectedItem){
            this.$store.commit('dataImportStore/GetselectedHoleSectionVariable', selectedItem)
        },
        AddMappedVariable(){
            this.$store.commit('dataImportStore/AddMappedHoleSectionVariable')
        },
        DeleteVariable(item){
            this.$store.commit('dataImportStore/DeleteHoleSectionVariable', item)
        }
    }
}
</script>