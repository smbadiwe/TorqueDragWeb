var deviationSurveys = [];

/* function copy(obj) {
    var cp = {};
    for (var o in obj) {
        cp[o] = obj[o];
    }
    return cp;
} */

var calculateDevParams = function calculate(devParams){

    function getChangeInTrueVerticalDepth(changeInMeasuredDepth, Inclination){
        let changeInTrueVerticalDepth = 0;
        changeInTrueVerticalDepth = changeInMeasuredDepth * Math.cos(Inclination);
        return changeInTrueVerticalDepth;
    }
    
    function getChangeInNorth(changeInMeasuredDepth, inclination, azimuth){
        let changeInNorth = 0;
        changeInNorth = changeInMeasuredDepth * Math.sin(inclination) * Math.cos(azimuth);
        console.log("changeInMeasuredDepth: ", changeInMeasuredDepth);
        console.log("inclination: ", inclination);
        console.log("azimuth: ", azimuth);
        console.log("changeInNorth: ", changeInNorth);
        return changeInNorth;
    }
    
    function getChangeInEast(changeInMeasuredDepth, inclination, azimuth){
        let changeInEast = 0;
        changeInEast = changeInMeasuredDepth * Math.sin(inclination) * Math.sin(azimuth);
        return changeInEast;
    }
    
    function getChaneInHorizontalDisplacement(changeInNorth,changeInEast){
        let chaneInHorizontalDisplacement = 0;
        chaneInHorizontalDisplacement = Math.pow(Math.pow(changeInNorth, 2.0) + Math.pow(changeInEast, 2.0), 0.5);
        return chaneInHorizontalDisplacement;
    }

    function tangentialMethod(courseLength, lowerInclination, lowerAzimuth, upperInclination, upperAzimuth)
    {
    var term1 = 0, term2 = 0, term3 = 0, term4 = 0, dLS = 0;
    term1 = Math.sin(lowerInclination) * Math.sin(upperInclination);
    term2 = Math.sin(lowerAzimuth) * Math.sin(upperAzimuth);
    term3 = Math.cos(lowerAzimuth) * Math.cos(upperAzimuth);
    term4 = Math.cos(lowerInclination) * Math.cos(upperInclination);
    dLS = 1 / (courseLength * (term1 * (term2 + term3) + term4));
    return dLS;
    }

    console.log("devParams: ", devParams)
    var i = 0;
    var length = devParams.length;
    let angleConverter = (22.0 / 7.0) /180.0;
    
    for(i = 1; i < length; i++){
        let inclLower = angleConverter * devParams[i-1].inclination;
        let aziLower = angleConverter * devParams[i-1].azimuth;

        let incl = angleConverter * devParams[i].inclination;
        let azi = angleConverter * devParams[i].azimuth;

        let dMD = devParams[i].measuredDepth - devParams[i-1].measuredDepth
        let changeInNorth = getChangeInNorth(dMD, incl, azi);
  
        devParams[i].northSouth = devParams[i-1].northSouth + changeInNorth;
        let changeInEast = getChangeInEast(dMD, incl, azi);
      
        devParams[i].eastWest = devParams[i-1].eastWest + changeInEast;
        devParams[i].trueVerticalDepth = devParams[i-1].trueVerticalDepth 
        + getChangeInTrueVerticalDepth(dMD, incl);
       
            devParams[i].verticalSection = devParams[i-1].verticalSection 
        + getChaneInHorizontalDisplacement(changeInNorth, changeInEast);

        devParams[i].doglegSeverity = tangentialMethod(dMD, inclLower, aziLower, incl, azi) * 100.0;
      
    }

    console.log("devParams: ", devParams)
    this.deviationSurveys = devParams;// this.copy(devParams);
}

var devCalcParams = {
    calculateDevParams: calculateDevParams,
    deviationSurveys: deviationSurveys
}

//module.exports = DevCalcParams;
export { devCalcParams  }
