<template>
    <div class="q-pa-sm bg-primary text-accent">
        <div class="row">   
            <div class="col-6 q-pa-sm">
                 Mud PVT Variables
                <br>
                <hr/>
                <br>
                <q-list class="bg-primary text-accent"
                    v-model="selectedMudPVTVariable">
                    <q-item 
                    v-for="FluidVariablesInBuilt in FluidVariablesInBuilt2" 
                    :key="FluidVariablesInBuilt.variableName"
                    clickable v-ripple
                    @click="GetselectedFluidVariable(FluidVariablesInBuilt)"
                    :active="FluidVariablesInBuilt.isSelected"
                    active-class="text-green mnu_active">

                        <q-item-section>{{ FluidVariablesInBuilt.variableName }}</q-item-section>
                    </q-item>
                </q-list>
            </div>

            <div class="col-6 q-pa-sm">
                 Worksheet Headers
                <br>
                <hr/>
                <br>
                <q-list class="bg-primary text-accent"
                    v-model="selectedSheetHeader">
                    <q-item 
                    v-for="sheetHeader in sheetHeaders" 
                    :key="sheetHeader.variableName"
                    clickable v-ripple
                    @click="GetselectedSheetHeader(sheetHeader)"
                    :active="sheetHeader.isSelected"
                    active-class="text-green mnu_active">

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
                 class="my-sticky-header-table"
                    :data="MappedVariables"
                    :columns="columns"
                    row-key="name"
                    dark
                    color="amber"
                    bordered
                    :separator="separator"
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
        FluidVariablesInBuilt2(){
            return this.$store.getters['dataImportStore/FluidVariablesInBuilt2'];
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
            separator: 'cell',
            SelecteddevSurveyVariable: '',
            selectedMudPVTVariable: {},
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
        GetselectedFluidVariable(selectedItem){
            this.$store.commit('dataImportStore/GetselectedFluidVariable', selectedItem)
        },
        AddMappedVariable(){
            this.$store.commit('dataImportStore/AddMappedFluidVariable')
        },
        DeleteVariable(item){
            this.$store.commit('dataImportStore/DeleteFluidVariable', item)
        }
    }
}
</script>