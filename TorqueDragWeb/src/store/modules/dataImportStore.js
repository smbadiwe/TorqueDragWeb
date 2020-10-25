import { $http } from 'boot/axios' 

const state = {
    MsExcelWbBook:{
        sheetNames: [],
        sheetsData: [],
    },
    selectedSheetName: "",
    selectedSheetData: [],
    devSurveyVariablesInBuilt: [
        {
            variableName: 'Measured Depth',
            isSelected: false
        },
        {
            variableName: 'Inclination',
            isSelected: false
        },
        {
            variableName: 'Azimuth',
            isSelected: false
        }
    ],
    devSurveyVariablesInBuilt2: [
        {
            variableName: 'Measured Depth',
            isSelected: false
        },
        {
            variableName: 'Inclination',
            isSelected: false
        },
        {
            variableName: 'Azimuth',
            isSelected: false
        }
    ],
    sheetHeaders: [],
    selectedSheetHeader: {},
    selectedDevSurveyVariable: {},
    selectedHoleSectionVariable: {},
    selectedTubingStringVariable: {},
    MappedVariables: [],
    previewSurveyData: [],
    previewHoleData: [],
    previewTubingStringData: [],
    holeVariablesInBuilt: [
        {
            typeOfHole: 'Type of hole',
            isSelected: false
        },
        {
            variableName: 'Outer Diameter',
            isSelected: false
        },
        {
            variableName: 'Inner Diameter',
            isSelected: false
        },
        {
            variableName: 'Weight',
            isSelected: false
        },
        {
            variableName: 'Top',
            isSelected: false
        },
        {
            variableName: 'bottom',
            isSelected: false
        },
        {
            variableName: 'frictionFactor',
            isSelected: false
        }
    ],
    holeVariablesInBuilt2: [
        {
            typeOfHole: 'Type of hole',
            isSelected: false
        },
        {
            variableName: 'Outer Diameter',
            isSelected: false
        },
        {
            variableName: 'Inner Diameter',
            isSelected: false
        },
        {
            variableName: 'Weight',
            isSelected: false
        },
        {
            variableName: 'Top',
            isSelected: false
        },
        {
            variableName: 'bottom',
            isSelected: false
        },
        {
            variableName: 'frictionFactor',
            isSelected: false
        }
    ],
    typeOfInput: '',
    TubingStringVariablesInBuilt: [
        {
            variableName: 'Type of Section',
            isSelected: false
        },
        {
            variableName: 'Length',
            isSelected: false
        },
        {
            variableName: 'Measured Depth',
            isSelected: false
        },
        {
            variableName: 'Size',
            isSelected: false
        },
        {
            variableName: 'Weight',
            isSelected: false
        },
        {
            variableName: 'Grade',
            isSelected: false
        },
        {
            variableName: 'Outer Diameter',
            isSelected: false
        },
        {
            variableName: 'Inner Diameter',
            isSelected: false
        },
        {
            variableName: 'Minimum Yield Strength',
            isSelected: false
        },
        {
            variableName: 'Item Description',
            isSelected: false
        },
        {
            variableName: 'Make-Up Torque',
            isSelected: false
        },
        {
            variableName: 'Over-Pull Margin',
            isSelected: false
        }
    ],
    TubingStringVariablesInBuilt2: [
        {
            variableName: 'Type of Section',
            isSelected: false
        },
        {
            variableName: 'Length',
            isSelected: false
        },
        {
            variableName: 'Measured Depth',
            isSelected: false
        },
        {
            variableName: 'Size',
            isSelected: false
        },
        {
            variableName: 'Weight',
            isSelected: false
        },
        {
            variableName: 'Grade',
            isSelected: false
        },
        {
            variableName: 'Outer Diameter',
            isSelected: false
        },
        {
            variableName: 'Inner Diameter',
            isSelected: false
        },
        {
            variableName: 'Minimum Yield Strength',
            isSelected: false
        },
        {
            variableName: 'Item Description',
            isSelected: false
        },
        {
            variableName: 'Make-Up Torque',
            isSelected: false
        },
        {
            variableName: 'Over-Pull Margin',
            isSelected: false
        }
    ]
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
    },
    devSurveyVariablesInBuilt(state){
        return state.devSurveyVariablesInBuilt;
    },
    sheetHeaders(state){
        return state.sheetHeaders;
    },
    selectedSheetHeader(state){
        return state.selectedSheetHeader;
    },
    selectedDevSurveyVariable(state){
        return state.selectedDevSurveyVariable;
    },
    MappedVariables(state){
        return state.MappedVariables;
    },
    devSurveyVariablesInBuilt2(state){
        return state.devSurveyVariablesInBuilt2;
    },
    previewSurveyData(state){
        return state.previewSurveyData;
    },
    holeVariablesInBuilt(state){
        return state.holeVariablesInBuilt;
    },
    holeVariablesInBuilt2(state){
        return state.holeVariablesInBuilt2;
    },
    selectedHoleSectionVariable(state){
        return state.selectedHoleSectionVariable;
    },
    previewHoleData(state){
        return state.previewHoleData;
    },
    typeOfInput(state){
        return state.typeOfInput;
    },
    TubingStringVariablesInBuilt(state){
        return state.TubingStringVariablesInBuilt;
    },
    TubingStringVariablesInBuilt2(state){
        return state.TubingStringVariablesInBuilt2;
    },
    previewTubingStringData(state){
        return state.previewTubingStringData;
    },
    selectedTubingStringVariable(state){
        return state.selectedTubingStringVariable;
    }
}

const mutations = {
    GetMsExcelWbBook(state, payload){
        state.MsExcelWbBook.sheetNames = payload.sheetNames;
        state.MsExcelWbBook.sheetsData = payload.sheetsData;

        //console.log("payload.sheetsData :", payload.sheetsData);
        //console.log("payload.sheetsData[0]: ", payload.sheetsData[0])
        var nlength =  payload.sheetsData.length;
        if(nlength > 0){
            state.selectedSheetData = payload.sheetsData[0];
            state.sheetHeaders = [];
            var nCount = state.selectedSheetData.length;
            if(nCount > 0){
                var obj = state.selectedSheetData[0];
                var columnHeaders = Object.keys(obj);
                for(j = 0; j < columnHeaders.length; j++){
                    state.sheetHeaders.push({
                        variableName: columnHeaders[j],
                        isSelected: false
                    })
                }
                //console.log("payload.sheetsData: ", payload.sheetsData)
            }
        }

        
    },
    onItemSelectionChanged(state, payload){

        state.selectedSheetName = payload;
        var i = 0;
        var j = 0;
        var nCount = state.MsExcelWbBook.sheetNames.length;
        for(i = 0; i < nCount; i++){
            if(state.selectedSheetName == state.MsExcelWbBook.sheetNames[i]){
                state.selectedSheetData = state.MsExcelWbBook.sheetsData[i];
                console.log("state.selectedSheetData: ", state.selectedSheetData)
                state.sheetHeaders = [];
                var nCount = state.selectedSheetData.length;
                if(nCount > 0){
                    var obj = state.selectedSheetData[0];
                    var columnHeaders = Object.keys(obj);
                    for(j = 0; j < columnHeaders.length; j++){
                        state.sheetHeaders.push({
                            variableName: columnHeaders[j],
                            isSelected: false
                        })
                    }

                    state.devSurveyVariablesInBuilt2 = [];
                    for(j = 0; j < state.devSurveyVariablesInBuilt.length; j++){
                        state.devSurveyVariablesInBuilt[j].isSelected = false;
                       state.devSurveyVariablesInBuilt2.push(state.devSurveyVariablesInBuilt[j]) 
                    }
                 
                    state.MappedVariables = [];
                    state.previewSurveyData = [];
                    
                }
                break;
            }
        }
    },
    OnHoleSectionSelectionChanged(state, payload){

        state.selectedSheetName = payload;
        var i = 0;
        var j = 0;
        var nCount = state.MsExcelWbBook.sheetNames.length;
        for(i = 0; i < nCount; i++){
            if(state.selectedSheetName == state.MsExcelWbBook.sheetNames[i]){
                state.selectedSheetData = state.MsExcelWbBook.sheetsData[i];
                //console.log("state.selectedSheetData: ", state.selectedSheetData)
                state.sheetHeaders = [];
                var nCount = state.selectedSheetData.length;
                if(nCount > 0){
                    var obj = state.selectedSheetData[0];
                    var columnHeaders = Object.keys(obj);
                    for(j = 0; j < columnHeaders.length; j++){
                        state.sheetHeaders.push({
                            variableName: columnHeaders[j],
                            isSelected: false
                        })
                    }

                    state.holeVariablesInBuilt2 = [];
                    for(j = 0; j < state.holeVariablesInBuilt.length; j++){
                        state.holeVariablesInBuilt[j].isSelected = false;
                       state.holeVariablesInBuilt2.push(state.holeVariablesInBuilt[j]) 
                    }
                 
                    state.MappedVariables = [];
                    state.previewHoleData = [];
                    
                }
                break;
            }
        }
    },
    OnTubingStringSelectionChanged(state, payload){

        state.selectedSheetName = payload;
        var i = 0;
        var j = 0;
        var nCount = state.MsExcelWbBook.sheetNames.length;
        for(i = 0; i < nCount; i++){
            if(state.selectedSheetName == state.MsExcelWbBook.sheetNames[i]){
                state.selectedSheetData = state.MsExcelWbBook.sheetsData[i];
                //console.log("state.selectedSheetData: ", state.selectedSheetData)
                state.sheetHeaders = [];
                var nCount = state.selectedSheetData.length;
                if(nCount > 0){
                    var obj = state.selectedSheetData[0];
                    var columnHeaders = Object.keys(obj);
                    for(j = 0; j < columnHeaders.length; j++){
                        state.sheetHeaders.push({
                            variableName: columnHeaders[j],
                            isSelected: false
                        })
                    }

                    state.TubingStringVariablesInBuilt2 = [];
                    for(j = 0; j < state.TubingStringVariablesInBuilt.length; j++){
                        state.TubingStringVariablesInBuilt[j].isSelected = false;
                       state.TubingStringVariablesInBuilt2.push(state.TubingStringVariablesInBuilt[j]) 
                    }
                 
                    state.MappedVariables = [];
                    state.previewTubingStringData = [];
                    
                }
                break;
            }
        }
    },
    GetselectedSheetHeader(state, payload){
        //console.log("GetselectedSheetHeader")
        state.selectedSheetHeader = payload;
        var i = 0;
        var nCount = state.sheetHeaders.length;
        for(i = 0; i < nCount; i++){
            if(state.sheetHeaders[i].variableName == state.selectedSheetHeader.variableName){
                state.sheetHeaders[i].isSelected = true;
            }else{
                state.sheetHeaders[i].isSelected = false;
            }
        }
        //console.log("state.selectedSheetHeader:", state.selectedSheetHeader);
    },
    GetselectedDevSurveyVariable(state, payload){
        //console.log("GetselectedDevSurveyVariable")
        state.selectedDevSurveyVariable = payload;
        var i = 0;
        var nCount = state.devSurveyVariablesInBuilt2.length;
        for(i = 0; i < nCount; i++){
            if(state.devSurveyVariablesInBuilt2[i].variableName == state.selectedDevSurveyVariable.variableName){
                state.devSurveyVariablesInBuilt2[i].isSelected = true;
            }else{
                state.devSurveyVariablesInBuilt2[i].isSelected = false;
            }
        }
        console.log("state.selectedDevSurveyVariable:", state.selectedDevSurveyVariable);
    },
    GetselectedHoleSectionVariable(state, payload){
        //console.log("GetselectedDevSurveyVariable")
        state.selectedHoleSectionVariable = payload;
        var i = 0;
        var nCount = state.holeVariablesInBuilt2.length;
        for(i = 0; i < nCount; i++){
            if(state.holeVariablesInBuilt2[i].variableName == state.selectedHoleSectionVariable.variableName){
                state.holeVariablesInBuilt2[i].isSelected = true;
            }else{
                state.holeVariablesInBuilt2[i].isSelected = false;
            }
        }
        //console.log("state.selectedDevSurveyVariable:", state.selectedHoleSectionVariable);
    },
    GetselectedTubingStringVariable(state, payload){
        //console.log("GetselectedDevSurveyVariable")
        state.selectedTubingStringVariable = payload;
        var i = 0;
        var nCount = state.TubingStringVariablesInBuilt2.length;
        for(i = 0; i < nCount; i++){
            if(state.TubingStringVariablesInBuilt2[i].variableName == state.selectedTubingStringVariable.variableName){
                state.TubingStringVariablesInBuilt2[i].isSelected = true;
            }else{
                state.TubingStringVariablesInBuilt2[i].isSelected = false;
            }
        }
        //console.log("state.selectedDevSurveyVariable:", state.selectedHoleSectionVariable);
    },
    AddMappedVariable(state){      

            for (var i = 0; i < state.sheetHeaders.length; i++){
                if (state.sheetHeaders[i].variableName === state.selectedSheetHeader.variableName) {
                    state.sheetHeaders.splice(i,1);
                    break;
                }
            }

            for (var i = 0; i < state.devSurveyVariablesInBuilt2.length; i++){
                if (state.devSurveyVariablesInBuilt2[i].variableName === state.selectedDevSurveyVariable.variableName) {
                    state.devSurveyVariablesInBuilt2.splice(i,1);
                    break;
                }
            }

            state.MappedVariables.push({
                SheetHeaderName: state.selectedSheetHeader.variableName,
                DevSurveyVariable: state.selectedDevSurveyVariable.variableName
            })
            

    },
    AddMappedHoleSectionVariable(state){      

                for (var i = 0; i < state.sheetHeaders.length; i++){
                    if (state.sheetHeaders[i].variableName === state.selectedSheetHeader.variableName) {
                        state.sheetHeaders.splice(i,1);
                        break;
                    }
                }

                for (var i = 0; i < state.holeVariablesInBuilt2.length; i++){
                    if (state.holeVariablesInBuilt2[i].variableName === state.selectedHoleSectionVariable.variableName) {
                        state.holeVariablesInBuilt2.splice(i,1);
                        break;
                    }
                }

                state.MappedVariables.push({
                    SheetHeaderName: state.selectedSheetHeader.variableName,
                    HoleSectionVariable: state.selectedHoleSectionVariable.variableName
                })
                

    },
    AddMappedTubingStringVariable(state){      

        for (var i = 0; i < state.sheetHeaders.length; i++){
            if (state.sheetHeaders[i].variableName === state.selectedSheetHeader.variableName) {
                state.sheetHeaders.splice(i,1);
                break;
            }
        }

        for (var i = 0; i < state.TubingStringVariablesInBuilt2.length; i++){
            if (state.TubingStringVariablesInBuilt2[i].variableName === state.selectedTubingStringVariable.variableName) {
                state.TubingStringVariablesInBuilt2.splice(i,1);
                break;
            }
        }

        state.MappedVariables.push({
            SheetHeaderName: state.selectedSheetHeader.variableName,
            TubingStringVariable: state.selectedHoleSectionVariable.variableName
        })
        

    },
    DeleteVariable(state, payload){

        for (var i = 0; i < state.MappedVariables.length; i++){
            if (state.MappedVariables[i].SheetHeaderName === payload.SheetHeaderName
                && state.MappedVariables[i].DevSurveyVariable === payload.DevSurveyVariable) {

                    state.sheetHeaders.push({
                        variableName: payload.SheetHeaderName,
                        isSelected: false
                    })
    
                    state.devSurveyVariablesInBuilt2.push({
                        variableName:  payload.DevSurveyVariable,
                        isSelected: false
                })

                state.MappedVariables.splice(i,1);

                
                break;
            }
        }
    },
    DeleteHoleSectionVariable(state, payload){

        for (var i = 0; i < state.MappedVariables.length; i++){
            if (state.MappedVariables[i].SheetHeaderName === payload.SheetHeaderName
                && state.MappedVariables[i].HoleSectionVariable === payload.HoleSectionVariable) {

                    state.sheetHeaders.push({
                        variableName: payload.SheetHeaderName,
                        isSelected: false
                    })
    
                    state.holeVariablesInBuilt2.push({
                        variableName:  payload.HoleSectionVariable,
                        isSelected: false
                })

                state.MappedVariables.splice(i,1);

                
                break;
            }
        }
    },
    DeleteTubingStringVariable(state, payload){

        for (var i = 0; i < state.MappedVariables.length; i++){
            if (state.MappedVariables[i].SheetHeaderName === payload.SheetHeaderName
                && state.MappedVariables[i].TubingStringVariable === payload.TubingStringVariable) {

                    state.sheetHeaders.push({
                        variableName: payload.SheetHeaderName,
                        isSelected: false
                    })
    
                    state.TubingStringVariablesInBuilt2.push({
                        variableName:  payload.TubingStringVariable,
                        isSelected: false
                })

                state.MappedVariables.splice(i,1);

                
                break;
            }
        }
    },
    GetDevSurveyPreview(state, payload){
        var MD = 0;
        var inc = 0;
        var azi = 0;
        var i = 0;
        var j = 0;
        var jCount = state.MappedVariables.length;

        if(state.devSurveyVariablesInBuilt2.length <= 0){
                state.previewSurveyData = [];     
                var nCount = state.selectedSheetData.length;
                for(i = 1; i < nCount; i++){
                    var obj = state.selectedSheetData[i];
                    MD = 0;
                    inc = 0;
                    azi = 0;
                    for(j = 0; j < jCount; j++){
                                switch(state.MappedVariables[j].DevSurveyVariable){
                                    case "Measured Depth":
                                        MD = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Inclination":
                                        inc = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Azimuth":
                                        azi = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                }
                    }

                    state.previewSurveyData.push({
                        measuredDepth: MD,
                        inclination: inc,
                        azimuth: azi,
                        designId: payload,
                        doglegSeverity: 0,
                        isSelected: false
                    })

                }

        }
    },
    GetHoleSectionPreview(state, payload){
        var typeOfHole = "";
        var outerDiameter = 0;
        var innerDiameter = 0;
        var weight = 0;
        var top = 0;
        var bottom = 0;
        var frictionFactor = 0;
        var i = 0;
        var j = 0;
        var jCount = state.MappedVariables.length;

        if(state.holeVariablesInBuilt2.length <= 0){
                state.previewHoleData = [];     
                var nCount = state.selectedSheetData.length;
                for(i = 1; i < nCount; i++){
                    var obj = state.selectedSheetData[i];
                    typeOfHole = "";
                    outerDiameter = 0;
                    innerDiameter = 0;
                    weight = 0;
                    top = 0;
                    bottom = 0;
                    frictionFactor = 0;
                    for(j = 0; j < jCount; j++){
                                switch(state.MappedVariables[j].HoleSectionVariable){
                                    case "Type of hole":
                                        typeOfHole = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Outer Diameter":
                                        outerDiameter = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Inner Diameter":
                                        innerDiameter = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Weight":
                                        weight = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Top":
                                        top = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "bottom":
                                        bottom = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "frictionFactor":
                                        frictionFactor = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                }
                    }

                    state.previewHoleData.push({
                        typeOfHole: typeOfHole,
                        outerDiameter: outerDiameter,
                        innerDiameter: innerDiameter,
                        weight: weight,
                        top: top,
                        bottom: bottom,
                        frictionFactor: frictionFactor,
                        designId: payload,
                        isSelected: false
                    })

                }

        }
    },
    GetTubingStringPreview(state, payload){
        var typeOfSection = "";
        var length = 0;
        var measuredDepth = 0;
        var size = 0;
        var weight = 0;
        var grade = "";
        var outerDiameter = 0;
        var innerDiameter = 0;
        var minimumYieldStrength = 0;
        var itemDescription = "";
        var makeUpTorque = 0;
        var overPullMargin = 0;
        var i = 0;
        var j = 0;
        var jCount = state.MappedVariables.length;

        if(state.holeVariablesInBuilt2.length <= 0){
                state.previewHoleData = [];     
                var nCount = state.selectedSheetData.length;
                for(i = 1; i < nCount; i++){
                    var obj = state.selectedSheetData[i];
                    typeOfSection = "";
                    length = 0;
                    measuredDepth = 0;
                    size = 0;
                    weight = 0;
                    grade = "";
                    outerDiameter = 0;
                    innerDiameter = 0;
                    minimumYieldStrength = 0;
                    itemDescription = "";
                    makeUpTorque = 0;
                    overPullMargin = 0;
                    for(j = 0; j < jCount; j++){
                                switch(state.MappedVariables[j].TubingStringVariable){
                                    case "Type of Section":
                                        typeOfSection = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Length":
                                        length = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Measured Depth":
                                        measuredDepth = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Size":
                                        size = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Weight":
                                        weight = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Grade":
                                        grade = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Outer Diameter":
                                        outerDiameter = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Inner Diameter":
                                        innerDiameter = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Minimum Yield Strength":
                                        minimumYieldStrength = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Item Description":
                                        itemDescription = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Make-Up Torque":
                                        makeUpTorque = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                    case "Over-Pull Margin":
                                        overPullMargin = obj[state.MappedVariables[j].SheetHeaderName];
                                        break;
                                }
                    }

                    state.previewHoleData.push({
                        typeOfSection: typeOfSection,
                        length: length,
                        measuredDepth: measuredDepth,
                        size: size,
                        weight: weight,
                        grade: grade,
                        outerDiameter: outerDiameter,
                        innerDiameter: innerDiameter,
                        minimumYieldStrength: minimumYieldStrength,
                        itemDescription: itemDescription,
                        makeUpTorque: makeUpTorque,
                        overPullMargin: overPullMargin,
                        designId: payload,
                        isSelected: false
                    })

                }

        }
    },
    SetTypeOfInput(state, payload){
        state.typeOfInput = payload;
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