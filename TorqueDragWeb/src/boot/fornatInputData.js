var dataFormattingMethods = {
        toNumber(value){
            var ans = 0;
            ans = parseFloat(value);
            if(Number.isNaN(ans) === true){
                console.log("ans: ", ans)
                ans = 0;
            }

            return ans;
        },
        RigFormatting(rig){
            var context  =  this;
            rig.highPumpPressure = context.toNumber(rig.highPumpPressure);
            rig.lowPumpPressure = context.toNumber(rig.lowPumpPressure);
            rig.flowRateHighPumpPressure = context.toNumber(rig.flowRateHighPumpPressure);
            rig.flowRateLowPumpPressure = context.toNumber(rig.flowRateLowPumpPressure);
            rig.flowExponent = context.toNumber(rig.flowExponent);
            rig.pumpEfficiency = context.toNumber(rig.pumpEfficiency);
            rig.maxAllowableSurfacePressure = context.toNumber(rig.maxAllowableSurfacePressure);
            rig.maxHorsePower = context.toNumber(rig.maxHorsePower);
            rig.minimumFlowRate = context.toNumber(rig.minimumFlowRate);
            rig.surfaceSystemConstant = context.toNumber(rig.surfaceSystemConstant);
            return rig;
        },
        DrillBitFormatting(drillBit){
            var context  =  this;
            drillBit.bitSize = context.toNumber(drillBit.bitSize);
            drillBit.numberOfBitNozzles = context.toNumber(drillBit.numberOfBitNozzles);
            drillBit.dischargeCoefficient = context.toNumber(drillBit.dischargeCoefficient);

            return drillBit;
        },
        DatumFormatting(datum){
            var context  =  this;
            datum.datumElevation = context.toNumber(datum.datumElevation);
            datum.groundElevation = context.toNumber(datum.groundElevation);
            datum.airGap = context.toNumber(datum.airGap);
            datum.wellHeadElevation = context.toNumber(datum.wellHeadElevation);
            return datum;
        },
        FluidFormatting(fluid){
            var context  =  this;
            fluid.baseFannDialReading = context.toNumber(fluid.baseFannDialReading);
            fluid.baseFannRPM = context.toNumber(fluid.baseFannRPM);
            fluid.fannDialReading = context.toNumber(fluid.fannDialReading);
            fluid.fannRPM = context.toNumber(fluid.fannRPM);

            return fluid;
        },
        OperationFormatting(operation){
            var context  =  this;
            operation.trippingInSpeed = context.toNumber(operation.trippingInSpeed);
            operation.trippingInRPM = context.toNumber(operation.trippingInRPM);
            operation.trippingOutSpeed = context.toNumber(operation.trippingOutSpeed);
            operation.trippingOutRPM = context.toNumber(operation.trippingOutRPM);
            operation.weightOnBit = context.toNumber(operation.weightOnBit);
            operation.torqueAtBit = context.toNumber(operation.torqueAtBit);
            operation.weightOnBitIDHM = context.toNumber(operation.weightOnBitIDHM);
            operation.hookLoadIDHM = context.toNumber(operation.hookLoadIDHM);
            operation.tripSpeedBackReam = context.toNumber(operation.tripSpeedBackReam)
            operation.tripRPMBackReam = context.toNumber(operation.tripRPMBackReam)
            operation.torqueAtBitDrillingOperation = context.toNumber(operation.torqueAtBitDrillingOperation)
            operation.torqueAtBitBackReaming = context.toNumber(operation.torqueAtBitBackReaming)
            operation.overpullBackReaming = context.toNumber(operation.overpullBackReaming)

            return operation;
        },
        SettingFormatting(common){
            var context  =  this;
            common.startMeasuredDepth = context.toNumber(common.startMeasuredDepth);
            common.endMeasuredDepth = context.toNumber(common.endMeasuredDepth);
            common.stepSize = context.toNumber(common.stepSize);
            common.seaWaterDensity = context.toNumber(common.seaWaterDensity);
            common.courseLength = context.toNumber(common.courseLength);
            common.youngsModulus = context.toNumber(common.youngsModulus);
            common.blockWeight =  context.toNumber(common.blockWeight);
            common.percentOfYield = context.toNumber(common.percentOfYield);
            common.bucklingLimitFactor = context.toNumber(common.bucklingLimitFactor);

            return common;
        }
    }


    export { dataFormattingMethods }