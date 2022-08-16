<template>
  <div>
	   <div class="row">
            <q-bar class="col-12 q-pa-sm bg-secondary" >
					<q-space />
					<q-btn
                    flat
                    dense
                    round
                    size="md"
                    icon="file_download"
                    aria-label="Load Data"
                    @click="loadAction"
                    />
                    <q-btn
                    flat
                    dense
                    round
                    size="md"
                    icon="save"
                    aria-label="Next"
                    @click="saveAction"
                    />
            </q-bar>
            </div>

            <div class="row">
            <div class="col-10 q-pa-sm">
                <select
                    style="width:100%;"
                    name="NameOfSheet"
                    id="" 
                    v-on:change="onWorkSheetNameSelectionChanged($event)"
                    class="text-center bg-positive text-accent">
                    <option
                        v-for="sheetName in sheetNames" :key="sheetName">
                        {{ sheetName }}
                    </option>
                </select>
            </div>
            <div class="col-2 q-pa-sm bg-primary text-accent">
                <label class="custom-file-upload">
                    <input type="file" @change="importExcel" id="upload"/>
                    <i class="fa fa-cloud-upload"></i> Browse File
                </label>
            </div>
            </div>

        <div class="row">
            <div class="col-2 q-pa-md">
            <p 
            style="width:100%;"
            class="text-center bg-positive text-accent"> Category: </p>
            </div>
            <div class="col-10 q-pa-md">
              <select
              style="width:100%;"
              class="text-center bg-positive text-accent"
                name="Category"
                @change="onCategoryChanged">
                  <option
                    v-for="category in uniqueCategories" :key="category">
                    {{ category }}
                  </option>
              </select>
          </div>
        </div>

        <div class="row">
            <div class="col-2 q-pa-md">
            <p 
            style="width:100%;"
            class="text-center bg-positive text-accent"> Data Table: </p>
            </div>
            <div class="col-10 q-pa-md">
              <select
              style="width:100%;"
              class="text-center bg-positive text-accent"
                name="Category"
                @change="onEquipmentTableChanged">
                  <option
                    v-for="tableOfSelectedCategory in tablesOfSelectedCategory" :key="tableOfSelectedCategory">
                    {{ tableOfSelectedCategory }}
                  </option>
              </select>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
				<chartToTable></chartToTable>
			</div>

		</div>
  </div>
</template>

<script>
import chartToTable from "pages/fixedDepthPlots/chartToTable.vue"
import xlsx from "xlsx";
export default {
    computed:{
        catalogWorkSheets(){
            return this.$store.getters['catalogStore/catalogWorkSheets'];
        },
        sheetsData(){
            return this.$store.getters['catalogStore/sheetsData'];
        },
        sheetNames(){
            return this.$store.getters['catalogStore/sheetNames'];
        }
    },
    components:{
        chartToTable
    },
    data(){
        return {
            selectedCategory: "",
            selectedDataTableName: "",
            selectedSheetName: "",
            dataTables: [
                { label: 'API casing', category: 'Casing Catalog' },
                { label: 'Hal_Re_Ca_Bu_Thr_Reg', category: 'Casing Catalog' },
                { label: 'Hal_Red_Ca_Extreme_line', category: 'Casing Catalog' },
                { label: 'Hal_Red_Ca_long_Round_Thread', category: 'Casing Catalog' },
                { label: 'Hal_Red_Casing_Plain_End', category: 'Casing Catalog' },
                { label: 'Hali_Red_casing_short_Rou_Thre', category: 'Casing Catalog' },
                { label: 'Vallourec_Casing_Catalog', category: 'Casing Catalog' },
                { label: 'Antares PJD', category: 'Casing Catalog' },
                { label: 'API Connection Catalog', category: 'Casing Catalog' },
                { label: 'GC Tubulars TCC 3P', category: 'Casing Catalog' },
                { label: 'GC Tubulars TCC 3P I.S.', category: 'Casing Catalog' },
                { label: 'GC Tubulars TCC 3P SC', category: 'Casing Catalog' },
                { label: 'GC Tubulars TCC Buttress', category: 'Casing Catalog' },
                { label: 'GC Tubulars TCC Buttress I.S', category: 'Casing Catalog' },
                { label: 'GC Tubulars TCC Buttress SC', category: 'Casing Catalog' },
                { label: 'GB Tubulars Weld-on 3 Pitch', category: 'Casing Catalog' },
                { label: 'GB Tubulars Weld-on 3 Pitch IS', category: 'Casing Catalog' },
                { label: 'GB Tublars Weld-on 3 Pitch SC', category: 'Casing Catalog' },
                { label: 'GB Tubulars Weld-on Buttress', category: 'Casing Catalog' },
                { label: 'GB Tubulars Weld-on Buttress IS', category: 'Casing Catalog' },
                { label: 'GB Tubulars Weld-on Buttress SC', category: 'Casing Catalog' },
                { label: 'Grand Prideco Big HD-L', category: 'Casing Catalog' },
                { label: 'Grand Prideco Grand NJO', category: 'Casing Catalog' },
                { label: 'Grand Prideco HD-L', category: 'Casing Catalog' },
                { label: 'Grand Prideco NJO', category: 'Casing Catalog'},
                { label: 'Grand Prideco SB-6', category: 'Casing Catalog' },
                { label: 'Grand Prideco ST-L', category: 'Casing Catalog' },
                { label: 'Grand Prideco TC-II', category: 'Casing Catalog' },
                { label: 'Hydril MAC-II', category: 'Casing Catalog' },
                { label: 'Hydril Series 500 Type 511', category: 'Casing Catalog' },
                { label: 'Hydril SuPreme LX', category: 'Casing Catalog' },
                { label: 'Hydril 513 & 523 Connectors', category: 'Casing Catalog' },
                { label: 'Tenaris 3SB', category: 'Casing Catalog' },
                { label: 'Tenaris Blue', category: 'Casing Catalog' },
                { label: 'Tenaris ER', category: 'Casing Catalog' },
                { label: 'Tenaris HW', category: 'Casing Catalog' },
                { label: 'Tenaris MS', category: 'Casing Catalog' },
                { label: 'Tenaris MS XT-XC', category: 'Casing Catalog' },
                { label: 'Tenaris MS28', category: 'Casing Catalog' },
                { label: 'Tenaris MS28 XT-XC', category: 'Casing Catalog' },
                { label: 'Tenaris PJD', category: 'Casing Catalog' },
                { label: 'Vallourec-Big Omega Connectors', category: 'Casing Catalog' },
                { label: 'Vallourec- VAM 21 Connectors', category: 'Casing Catalog' },
                { label: 'Vallourec VAM 21 HT Connectors', category: 'Casing Catalog' },
                ,{ label: 'Vallourec VAM BOLT Connectors', category: 'Casing Catalog' },
                { label: 'Vallourec VAM FJL Connectors', category: 'Casing Catalog' },
                { label: 'Vallorec VAM HP Connectors', category: 'Casing Catalog' },
                { label: 'Vallourec VAM HWST Connectors', category: 'Casing Catalog' },
                { label: 'Vallourec VAM HWST SC70 Connect', category: 'Casing Catalog' },
                { label: 'Vallourec VAM HWST SC80 Connect', category: 'Casing Catalog' },
                { label: 'Vallourec VAM S80 Connetors', category: 'Casing Catalog' },
                { label: 'Vallourec VAM SLIJII Connectors', category: 'Casing Catalog' },
                { label: 'Vallourec VAM TOP Casing Connec', category: 'Casing Catalog' },
                { label: 'Vallourec VAM TOP HT Connectors', category: 'Casing Catalog' },
                { label: 'Vallourec VAM TOP SC80-Connecto', category: 'Casing Catalog' },
                { label: 'Vallourec VAM TOP SC90 Connecto', category: 'Casing Catalog' },
                { label: 'Vallourec VAM TOP Tubing Connec', category: 'Casing Catalog' },
                { label: 'VAM ACE Legacy', category: 'Casing Catalog' },
                { label: 'VAM ACE SC80 Legacy', category: 'Casing Catalog' },
                { label: 'VAM ACE SC90 Legacy', category: 'Casing Catalog' },
                { label: 'VAM DINO VAM', category: 'Casing Catalog' },
                { label: 'VAM FJL', category: 'Casing Catalog' },
                { label: 'VAM New VAM Legacy', category: 'Casing Catalog' },
                { label: 'VAM New VAM MS Legacy', category: 'Casing Catalog' },
                { label: 'VAM PRO Legacy', category: 'Casing Catalog' },
                { label: 'VAM SLIJ-II', category: 'Casing Catalog' },
                { label: 'VAM TOP', category: 'Casing Catalog' },
                { label: 'VAM TOP HC', category: 'Casing Catalog'},
                { label: 'VAM TOP HT', category: 'Casing Catalog' },
                { label: 'API Drill collars (non magnetic)', category: 'Drill Collars' },
                { label: 'API drill collars (Magnetic)', category: 'Drill Collars' },
                { label: 'API Drill Pipes', category: 'Drill Pipe Catalog' },
                { label: 'Grant Prideco', category: 'Drill Pipe Catalog' },
                { label: 'Halliburton Redbook EU', category: 'Drill Pipe Catalog' },
                { label: 'Halliburton Redbook IEU', category: 'Drill Pipe Catalog' },
                { label: 'Halliburton Redbook IU', category: 'Drill Pipe Catalog' }
            ],
            uniqueCategories: [],
            tablesOfSelectedCategory: []
        }
    },
    methods:{
        getCategories(){
            const context = this;
            const categories = context.dataTables.map((row) => {
                return row.category;
            });
            console.log("categories 1: ", categories);
            context.uniqueCategories = categories.filter((x, i, a) => { 
                return a.indexOf(x) === i; 
            });

            console.log("categories 2: ", context.uniqueCategories);
           
        },
        getTablesOfSelectedCategory(){
            var context = this;
            const tables = context.dataTables.filter((row) => {
            return row.category == context.selectedCategory 
            });

            context.tablesOfSelectedCategory = tables.map((row) => {
                return row.label;
            })

            if(context.tablesOfSelectedCategory.length > 0){
                context.selectedDataTableName = context.tablesOfSelectedCategory[0];
            }

            console.log("context.tablesOfSelectedCategory: ", context.tablesOfSelectedCategory);
        },
        onCategoryChanged (e) {
            var context =  this;
            context.selectedCategory = e.target.options[e.target.options.selectedIndex].text;
            console.log("SelectedCategory: ", context.selectedCategory);
            context.getTablesOfSelectedCategory();
                
        },
        onEquipmentTableChanged(e) {
            var context =  this;
            context.selectedDataTableName = e.target.options[e.target.options.selectedIndex].text;
            console.log("selectedDataTableName: ", context.selectedDataTableName);
                
        },
        onWorkSheetNameSelectionChanged(e){
            var context =  this;
            context.selectedSheetName = e.target.options[e.target.options.selectedIndex].text;
            console.log("this.selectedSheetName: ", context.selectedSheetName);
        
        },
        loadAction(){
             this.$store.dispatch('catalogStore/setWorkSheetData');
        },
        importExcel(e) {
            var sheetNames = [];
            var sheets =  [];
            const files = e.target.files;
            console.log(files);
            if (!files.length) {
                return ;
            } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
                return alert("The upload format is incorrect. Please upload xls or xlsx format");
            }
            const fileReader = new FileReader();
            fileReader.onload = ev => {
                try {
                const data = ev.target.result;
                const XLSX = xlsx;
                const workbook = XLSX.read(data, {
                    type: "binary"
                });



                var nCount = workbook.SheetNames.length;
                var i = 0;
                var j = 0;

                for(j = 0; j < nCount; j++){

                    var wsname = workbook.SheetNames[j]; // Take the first sheet，wb.SheetNames[0] :Take the name of the first sheet in the sheets
                    sheetNames.push(wsname);
                    var ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname], {defval:""}); // Generate JSON table content，wb.Sheets[Sheet名]    Get the data of the first sheet


                    const excellist = [];  // Clear received data
                    // Edit data
                    for (i = 0; i < ws.length; i++) {
                        excellist.push(ws[i]);
                    }
                    sheets.push(excellist);
                    //console.log("Read results", excellist); // At this point, you get an array containing objects that need to be processed
                    }
                } catch (e) {
                return alert("Read failure!");;
                }
            };
            fileReader.readAsBinaryString(files[0]);
            var input = document.getElementById("upload");
            this.$store.commit('catalogStore/setWorkSheetData', {
                sheetNames: sheetNames,
                sheetsData: sheets
            });
            input.value = "";
        },
        saveAction(){
            let selectedDataTable = {};
            let context = this;

            const sheets = context.sheetsData;
            const sheetNames = context.sheetNames;
            console.log("sheetNames: ", sheetNames);
            console.log("sheets: ", sheets);
            console.log("context.selectedSheetName: ", context.selectedSheetName);
            var companyName = this.$store.getters['authStore/companyName'];
            const length = sheets.length;
            let i = 0;
            for(i = 0; i < length; i++){
                if(context.selectedSheetName  == sheetNames[i]){
                    selectedDataTable = sheets[i];
                    break;
                }
            }
            const obj = {
                selectedDataTableName: context.selectedDataTableName,
                selectedDataTable,
                category: context.selectedCategory,
                companyName
            }

            console.log("obj: ", obj);
            this.$store.dispatch('catalogStore/saveSelectedTable', obj);
        }
    },
    created(){
        var context = this;
        context.getCategories();
        if(context.uniqueCategories.length > 0){
            context.selectedCategory = context.uniqueCategories[0];
            context.getTablesOfSelectedCategory();
            
        }
    }
}
</script>

<style lang="scss" scoped>

    input[type="file"] {
    display: none;
    }
    .custom-file-upload {
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
    }
    
</style>