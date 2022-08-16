import { $http } from 'boot/axios'

const state =  {
    selectedSheetName: "",
    sheetsData: [],
    sheetNames: [],
    catalogWorkSheets: [
        {
          label: 'Catalog Work Sheets',
          avatar: '',
          children: [
            {
              label: 'Casing Catalog',
              icon: '',
              children: [
                { label: 'API casing' },
                { label: 'Hal_Re_Ca_Bu_Thr_Reg' },
                { label: 'Hal_Red_Ca_Extreme_line' },
                { label: 'Hal_Red_Ca_long_Round_Thread' },
                { label: 'Hal_Red_Casing_Plain_End' },
                { label: 'Hali_Red_casing_short_Rou_Thre' },
                { label: 'Vallourec_Casing_Catalog' },
                { label: 'Antares PJD' },
                { label: 'API Connection Catalog' },
                { label: 'GC Tubulars TCC 3P' },
                { label: 'GC Tubulars TCC 3P I.S.' },
                { label: 'GC Tubulars TCC 3P SC' },
                { label: 'GC Tubulars TCC Buttress' },
                { label: 'GC Tubulars TCC Buttress I.S' },
                { label: 'GC Tubulars TCC Buttress SC' },
                { label: 'GB Tubulars Weld-on 3 Pitch' },
                { label: 'GB Tubulars Weld-on 3 Pitch IS' },
                { label: 'GB Tublars Weld-on 3 Pitch SC' },
                { label: 'GB Tubulars Weld-on Buttress' },
                { label: 'GB Tubulars Weld-on Buttress IS' },
                { label: 'GB Tubulars Weld-on Buttress SC' },
                { label: 'Grand Prideco Big HD-L' },
                { label: 'Grand Prideco Grand NJO' },
                { label: 'Grand Prideco HD-L' },
                { label: 'Grand Prideco NJO' },
                { label: 'Grand Prideco SB-6' },
                { label: 'Grand Prideco ST-L' },
                { label: 'Grand Prideco TC-II' },
                { label: 'Hydril MAC-II' },
                { label: 'Hydril Series 500 Type 511' },
                { label: 'Hydril SuPreme LX' },
                { label: 'Hydril 513 & 523 Connectors' },
                { label: 'Tenaris 3SB' },
                { label: 'Tenaris Blue' },
                { label: 'Tenaris ER' },
                { label: 'Tenaris HW' },
                { label: 'Tenaris MS' },
                { label: 'Tenaris MS XT-XC' },
                { label: 'Tenaris MS28' },
                { label: 'Tenaris MS28 XT-XC' },
                { label: 'Tenaris PJD' },
                { label: 'Vallourec-Big Omega Connectors' },
                { label: 'Vallourec- VAM 21 Connectors' },
                { label: 'Vallourec VAM 21 HT Connectors' },
                ,{ label: 'Vallourec VAM BOLT Connectors' },
                { label: 'Vallourec VAM FJL Connectors' },
                { label: 'Vallorec VAM HP Connectors' },
                { label: 'Vallourec VAM HWST Connectors' },
                { label: 'Vallourec VAM HWST SC70 Connect' },
                { label: 'Vallourec VAM HWST SC80 Connect' },
                { label: 'Vallourec VAM S80 Connetors' },
                { label: 'Vallourec VAM SLIJII Connectors' },
                { label: 'Vallourec VAM TOP Casing Connec' },
                { label: 'Vallourec VAM TOP HT Connectors' },
                { label: 'Vallourec VAM TOP SC80-Connecto' },
                { label: 'Vallourec VAM TOP SC90 Connecto' },
                { label: 'Vallourec VAM TOP Tubing Connec' },
                { label: 'VAM ACE Legacy' },
                { label: 'VAM ACE SC80 Legacy' },
                { label: 'VAM ACE SC90 Legacy' },
                { label: 'VAM DINO VAM' },
                { label: 'VAM FJL' },
                { label: 'VAM New VAM Legacy' },
                { label: 'VAM New VAM MS Legacy' },
                { label: 'VAM PRO Legacy' },
                { label: 'VAM SLIJ-II' },
                { label: 'VAM TOP' },
                { label: 'VAM TOP HC' },
                { label: 'VAM TOP HT' }
              ]
            },
            {
              label: 'Drill Collars',
              icon: '',
              children: [
                { label: 'API Drill collars (non magnetic)' },
                { label: 'API drill collars (Magnetic)' }
              ]
            },
            {
              label: 'Drill Pipe Catalog',
              icon: '',
              children: [
                { label: 'API Drill Pipes' },
                { label: 'Grant Prideco' },
                { label: 'Halliburton Redbook EU' },
                { label: 'Halliburton Redbook IEU' },
                { label: 'Halliburton Redbook IU' }
              ]
            }
          ]
        }
      ]
}

const getters = {
  catalogWorkSheets(state){
      return state.catalogWorkSheets;
  },
  sheetsData(state){
      return state.sheetsData;
  },
  sheetNames(state){
    return state.sheetNames;
}
}

const mutations = {
  setWorkSheetData(state, payload){
    state.sheetNames = payload.sheetNames;
    state.sheetsData = payload.sheetsData;
  },
}

const actions = {
    saveSelectedTable(context, payload)
    {
      return new Promise((resolve, reject) => {
    
  
         $http.post('Catalogs/SaveSelectedTable', payload)
          .then(response => {
               
            context.commit('dataImportStore/SetLoaderParameters', {
              showLoader: false,
              showImportView: true
            }, {root:true});
            context.commit('authStore/setStatusMessageBarVisibility',  
            {
              actionMessage: `${payload.selectedDataTableName} saved successfully`,
              visibility: true
            }, {root:true});    
                
              resolve(response)
              
          })
          .catch(error => {
            console.log("saveSelectedTable error")
            context.commit('dataImportStore/SetLoaderParameters', {
              showLoader: false,
              showImportView: true
            }, {root:true});
            context.commit('authStore/setStatusMessageBarVisibility',  
            {
              actionMessage: `${payload.selectedDataTableName} failed to save. Please check your data`,
              visibility: true
            }, {root:true});    
            reject(error)
          })
      })
    }
}

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
  }