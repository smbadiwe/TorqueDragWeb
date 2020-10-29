<template>
    <div class="q-pa-sm bg-accent">

        <div class="row">

            <div class="col q-pa-sm">
                <div class="row">
                    <!-- <div class="col-3 q-pa-sm">Sheet Name:</div> -->
                    <div class="col-12 q-pa-sm">
                        <select
                            name="NameOfSheet"
                            id="" 
                            v-on:change="onItemSelectionChanged($event)">
                           <!--  <option disabled>
                                Please select sheet Name
                            </option> -->
                            <option
                                v-for="sheetName in MsExcelWbBook.sheetNames" :key="sheetName">
                                {{ sheetName }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="col q-pa-sm">
                <label class="custom-file-upload">
                    <input type="file" @change="importExcel" id="upload"/>
                    <i class="fa fa-cloud-upload"></i> Browse File
                </label>
                
               <!--  <a
                    href="javascript:;"
                >
                    <input type="file" @change="importExcel" id="upload" />Browse File
                </a> -->
            </div>
        </div>

  </div>
</template>

<script>
import xlsx from "xlsx";

export default {
  name: 'Dashboard',
   computed: {
    MsExcelWbBook(){
      return this.$store.getters['dataImportStore/MsExcelWbBook'];
    }
   },
  methods: {
        /**
         * Import table
         */
    importExcel(e) {
        var _sheetNames = [];
        var _sheetsData = [];
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
                _sheetNames.push(wsname);
                var ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); // Generate JSON table content，wb.Sheets[Sheet名]    Get the data of the first sheet


                const excellist = [];  // Clear received data
                // Edit data
                for (i = 0; i < ws.length; i++) {
                    excellist.push(ws[i]);
                }
                _sheetsData.push(excellist);
                //console.log("Read results", excellist); // At this point, you get an array containing objects that need to be processed
                }
            } catch (e) {
            return alert("Read failure!");;
            }
        };
        fileReader.readAsBinaryString(files[0]);
        var input = document.getElementById("upload");
        input.value = "";
        this.$store.commit('dataImportStore/GetMsExcelWbBook', {
            sheetNames: _sheetNames,
            sheetsData: _sheetsData
        })
    },
    onItemSelectionChanged(e){
        var id = e.target.value;
        var name = e.target.options[e.target.options.selectedIndex].text;
        //console.log('id ', id );
        //console.log('name ',name );

        var typeOfInput = this.$store.getters['dataImportStore/typeOfInput'];
        switch(typeOfInput){
            case "Well Path":
               this.$store.commit('dataImportStore/onItemSelectionChanged', name);
              break;
            case "Hole":
                console.log("OnHoleSectionSelectionChanged")
               this.$store.commit('dataImportStore/OnHoleSectionSelectionChanged', name);
              break
            case "Tubing String":
               this.$store.commit('dataImportStore/OnTubingStringSelectionChanged', name);
              break
            case "Fluid":
               this.$store.commit('dataImportStore/OnFluidSelectionChanged', name);
              break
        }
     
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