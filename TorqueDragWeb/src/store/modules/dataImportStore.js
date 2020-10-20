import { $http } from 'boot/axios' 

const state = {
    MsExcelWbBook:{
        sheetNames: [],
        sheetsData: [],
    },
    selectedSheetName: "",
    selectedSheetData: {}
  }

  const getters = {
    MsExcelWbBook(state){
        return state.MsExcelWbBook;
    },
    selectedSheetName(state){
        return state.selectedSheetName;
    },
    selectedSheetData(state){
        return state.selectedSheetData;
    }
}

const mutations = {
    GetMsExcelWbBook(state, payload){
        state.MsExcelWbBook.sheetNames = payload.sheetNames;
        state.MsExcelWbBook.sheetsData = payload.sheetsData;

        console.log("state.MsExcelWbBook:", state.MsExcelWbBook);
    },
    onItemSelectionChanged(state, payload){

        state.selectedSheetName = payload;
        var i = 0;
        var nCount = state.MsExcelWbBook.sheetNames.length;
        for(i = 0; i < nCount; i++){
            if(state.selectedSheetName == state.MsExcelWbBook.sheetNames[i]){
                state.selectedSheetData = state.MsExcelWbBook.sheetsData[i];
                break;
            }
        }
    }


}

const actions = {


}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}