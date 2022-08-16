var copyAction =  function copyObjdect(obj) {
    var cp = {};
    for (var o in obj) {
        cp[o] = obj[o];
    }
    return cp;
}


var aPIDrillPipes = function getAPIDrillPipesData(sheetData, modelName) {
    var j = 0;
    var i = 0;
    var dataList = [];
    
    var length = sheetData.length;
    var aPI_Drill_Pipes_Columns = [
      { name: "dPC", label: "Drill Pipe Catalog", field: "dPC", align: "left" },
      { name: "component", label: "Component", field: "component", align: "left" },
      { name: "nominalDiameter", label: "Nominal Diameter (inch)", field: "nominalDiameter", align: "left" },
      { name: "nominalWeight", label: "Nominal Weight (ppf)", field: "nominalWeight", align: "left" },
      { name: "grade", label: "Grade", field: "grade", align: "left" },
      { name: "connection", label: "Connection", field: "connection", align: "left" },
      { name: "classOfComponent", label: "Class", field: "classOfComponent", align: "left" },
      { name: "bodyOD", label: "Body OD (in)", field: "bodyOD", align: "left" },
      { name: "bodyID", label: "Body ID (in)", field: "bodyID", align: "left" },
      { name: "weight", label: "Weight (ppf)", field: "weight", align: "left" },
      { name: "connectionOD", label: "Connection OD (in)", field: "connectionOD", align: "left" },
      { name: "connectionID", label: "Connection ID (in)", field: "connectionID", align: "left" },
      { name: "connectionTorsionalYield", label: "Connection Torsional Yield (ft-lbf)", field: "connectionTorsionalYield", align: "left" },
      { name: "toolJointLength", label: "Tool Joint Length (ft)", field: "toolJointLength", align: "left" },
      { name: "linearCapacity", label: "Linear Capacity (bbl/ft)", field: "linearCapacity", align: "left" },
      { name: "closedEndDisplacement", label: "Closed End Displacement (bbl/ft)", field: "closedEndDisplacement", align: "left" },
      { name: "averageJointLength", label: "Average Joint Length (ft)", field: "averageJointLength", align: "left" },
      { name: "makeUpTorque", label: "Makeup Torque (ft-lbf)", field: "makeUpTorque", align: "left" },
      { name: "wallThickness", label: "Wall Thickness (%)", field: "wallThickness", align: "left" }
  ]

    for (j = 0; j < length; j++) {
      var sheetRowData = sheetData[j];
      var rowData = {
        dPC: modelName,
        component: sheetRowData["Component"],
        nominalDiameter: sheetRowData["Nominal Diameter (inch)"],
        nominalWeight: sheetRowData["Nominal Weight (ppf)"],
        grade: sheetRowData["Grade"],
        connection: sheetRowData["Connection"],
        classOfComponent: sheetRowData["Class"],
        bodyOD: sheetRowData["Body OD (in)"],
        bodyID: sheetRowData["Body ID (in)"],
        weight: sheetRowData["Weight (ppf)"],
        connectionOD: sheetRowData["Connection OD (in)"],
        connectionID: sheetRowData["Connection ID (in)"],
        connectionTorsionalYield: sheetRowData["Connection Torsional Yield (ft-lbf)"],
        toolJointLength: sheetRowData["Tool Joint Length (ft)"],
        linearCapacity: sheetRowData["Linear Capacity (bbl/ft)"],
        closedEndDisplacement: sheetRowData["Closed End Displacement (bbl/ft)"],
        averageJointLength: sheetRowData["Average Joint Length (ft)"],
        makeUpTorque: sheetRowData["Makeup Torque (ft-lbf)"],
        wallThickness: sheetRowData["Wall Thickness (%)"]
      };

      dataList.push(rowData);
    }
    
    return { dataList, aPI_Drill_Pipes_Columns };
  }

  var drillPipeCat = {
    getAPIDrillPipes: aPIDrillPipes,
    copy: copyAction
}


export { drillPipeCat  }