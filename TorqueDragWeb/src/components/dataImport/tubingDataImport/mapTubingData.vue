<template>
    <div class="q-pa-sm bg-primary text-accent">
        <div class="row">
             <div class="col-12 q-pa-sm text-right">
                <q-btn 
                    size="sm"
                    label="Add"
                    @click="AddMappedVariable">
                </q-btn>
            </div>
               
            <div class="col-6 q-pa-sm">
                 Tubing String Variables
                <br>
                <hr/>
                <br>
                <q-list class="bg-primary text-accent"
                    v-model="selectedTubingStringVariable">
                    <q-item 
                    v-for="TubingStringVariableInBuilt in TubingStringVariablesInBuilt2" 
                    :key="TubingStringVariableInBuilt.variableName"
                    clickable v-ripple
                    @click="GetselectedTubingStringVariable(TubingStringVariableInBuilt)"
                    :active="TubingStringVariableInBuilt.isSelected"
                    active-class="text-green  mnu_active">

                        <q-item-section>{{ TubingStringVariableInBuilt.variableName }}</q-item-section>
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
                        <q-td key="TubingStringVariable" :props="props">{{ props.row.TubingStringVariable }}</q-td>
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
        TubingStringVariablesInBuilt2(){
            return this.$store.getters['dataImportStore/TubingStringVariablesInBuilt2'];
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
            selectedTubingStringVariable: {},
            selectedSheetHeader: {},
            columns: [
            { name: "SheetHeaderName", label: "ExcelSheet Header", field: "", align: "left" },
            { name: "TubingStringVariable", label: "Tubing String Variable", field: "", align: "left" },
            { name: "deleteVariable", label: "Delete Mapped Data", field: "actions", align: "left" }
        ]
        }
    },
    methods:{
        GetselectedSheetHeader(selectedItem){
            this.$store.commit('dataImportStore/GetselectedSheetHeader', selectedItem)
        },
        GetselectedTubingStringVariable(selectedItem){
            this.$store.commit('dataImportStore/GetselectedTubingStringVariable', selectedItem)
        },
        AddMappedVariable(){
            this.$store.commit('dataImportStore/AddMappedTubingStringVariable')
        },
        DeleteVariable(item){
            this.$store.commit('dataImportStore/DeleteTubingStringVariable', item)
        }
    }
}
</script>