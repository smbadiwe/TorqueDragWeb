import authLayout from 'layouts/authLayout.vue'
import mainLayout from 'layouts/MainLayout.vue'
import userLayout from 'layouts/userLayout.vue'
import newLayout from 'layouts/newLayout.vue'
import newLayout2 from 'layouts/newLayout2.vue'
import companyLayout from 'layouts/companyLayout.vue'
import registrationLayout from 'layouts/registrationLayout.vue'
//import landingpage from 'pages/index.vue'
import loginapge from 'pages/auth/loginapge.vue'
import dockpage1 from 'pages/inputdata/dockpage1.vue'
import simulationConsole from 'pages/simulation/simulationConsole.vue'
import commonPage from 'pages/simulation/commonPage.vue'
import trippingInResults from 'pages/simulation/trippingInResults.vue'
import trippingOutResults from 'pages/simulation/trippingOutResults.vue'
import rotatingOnBottomResults from 'pages/simulation/rotatingOnBottomResults.vue'
import rotatingOffBottom from 'pages/simulation/rotatingOffBottom.vue'
import slideDrillingResults from 'pages/simulation/slideDrillingResults.vue'
import backReamingResults from 'pages/simulation/backReamingResults.vue'
import hyraulicsReport from  'pages/simulation/hydraulics/hyraulicsReport.vue'
import surgeSwabReport from 'pages/simulation/surgeSwab/surgeSwabReport.vue'
import schematic from 'pages/wellSchematics/schematic.vue'
import effectiveTension from 'pages/fixedDepthPlots/effectiveTension.vue'
import bitPowerOverArea from 'pages/fixedDepthPlots/bitPowerOverArea.vue'
import bitImpactForce from 'pages/fixedDepthPlots/bitImpactForce.vue'
import pressureLoss from 'pages/fixedDepthPlots/pressureLoss.vue'
import bitNozzleVelocity from 'pages/fixedDepthPlots/bitNozzleVelocity.vue'
import circulatingPressure from 'pages/fixedDepthPlots/circulatingPressure.vue'
import eCDvsDepth from 'pages/fixedDepthPlots/eCDvsDepth.vue'
import eCDvsTripTimeOpen from 'pages/fixedDepthPlots/eCDvsTripTimeOpen.vue'
import eCDvsDepthOpen from 'pages/fixedDepthPlots/eCDvsDepthOpen.vue'
import annularVelocityvsDepth from 'pages/fixedDepthPlots/annularVelocityvsDepth.vue'
import criticalPumpRate from 'pages/fixedDepthPlots/criticalPumpRate.vue'
import circulatingPressureSurgeSwab from 'pages/fixedDepthPlots/circulatingPressureSurgeSwab.vue'
import eCDvsDepthSurgeSwab from 'pages/fixedDepthPlots/eCDvsDepthSurgeSwab.vue'
import pressureLossSurgeSwab from 'pages/fixedDepthPlots/pressureLossSurgeSwab.vue'
import annularFlowRegime from 'pages/fixedDepthPlots/annularFlowRegime.vue'
import hydraulicsSummary from 'pages/simulation/hydraulics/hydraulicsSummary.vue'
import normalForce from 'pages/fixedDepthPlots/normalForce.vue'
import hookLoad from 'pages/fixedDepthPlots/hookLoad.vue'
import torque from 'pages/fixedDepthPlots/torque.vue'
import drag from  'pages/fixedDepthPlots/drag.vue'
import schematicView from 'pages/wellSchematics/schematicView.vue'
import chartAreaTorqueDrag from 'pages/dataVisualization/TorqueDrag/chartArea.vue'
import docksite from 'components/uiComponents/docksite.vue'
import introDockSite1 from 'components/uiComponents/introDockSite1.vue'
import createWell from 'components/uiComponents/createWell.vue'
import createCompany from 'pages/registration/createCompany.vue'
import createUser from 'pages/registration/createUser.vue'
import doglegSeverity from 'pages/dataVisualization/OutputPlots/doglegSeverity.vue'
import verticalSection from 'pages/dataVisualization/OutputPlots/verticalSection.vue'
import planView from 'pages/dataVisualization/OutputPlots/planView.vue'
import inclination from 'pages/dataVisualization/OutputPlots/inclination.vue'
import azimuth from 'pages/dataVisualization/OutputPlots/azimuth.vue'
import formationTops from 'pages/dataVisualization/formationTops.vue'
import trippingInStress from 'pages/stressPlots/trippingInStress.vue'
import trippingOutStress from 'pages/stressPlots/trippingOutStress.vue'
import slideDrillingStress from 'pages/stressPlots/slideDrillingStress.vue'
import rotatingOnBottomStress from 'pages/stressPlots/rotatingOnBottomStress.vue'
import rotatingOffBottomStress from 'pages/stressPlots/rotatingOffBottomStress.vue'
import backReamingStress from 'pages/stressPlots/backReamingStress.vue'
import catalogPage from 'pages/Catalogs/catalogPage.vue'

const routes = [
  {
    path: '/',
    component: authLayout,
    children: [
      { 
        path: '', 
        component: loginapge
      }
    ]
  },
  {
    path: '/companyLayout',
    component: companyLayout,
    children: [
      {
        path: '/companyLayout',
        component: createCompany
      }
    ]
  },
  {
    path: '/registrationLayout',
    component: registrationLayout,
    children: [
      {
        path: '/registrationLayout',
        component: createUser
      }
    ]
  },
  {
    path: '/newLayout',
    component: newLayout,
    children: [
      {
        path: '/newLayout',
        component: introDockSite1
      },
      {
        path: '/createWell',
        component: createWell
      },
      { 
        path: '/docksite', 
        component: docksite
      }
    ]
  },
  {
    path: '/newLayout2',
    component: newLayout2,
 /*    children: [
      { 
        path: '/newLayout2', 
        component: dockpage1
      }
    ] */
  },
 /*  {
    path: '/main',
    component: mainLayout,
    children: [
      { 
        path: '/main', 
        component: landingpage
      }
    ]
  },*/
  {
    path: '/userLayout',
    component: userLayout,
    children: [
      {
        path: '/commonPage',
        component: commonPage
      },
      { 
        path: '/simulationConsole', 
        component: simulationConsole
      },
      {
        path: '/doglegSeverity',
        component: doglegSeverity
      },
      {
        path: '/verticalSection',
        component: verticalSection
      },
      {
        path: '/planView',
        component: planView
      },
      {
        path: '/inclination',
        component: inclination
      },
      {
        path: '/azimuth',
        component: azimuth
      },
      { 
        path: '/trippingInResults', 
        component: trippingInResults
      },
      { 
        path: '/trippingOutResults', 
        component: trippingOutResults
      },
      { 
        path: '/rotatingOnBottomResults', 
        component: rotatingOnBottomResults
      },
      {
        path: '/rotatingOffBottom',
        component: rotatingOffBottom
      },
      { 
        path: '/slideDrillingResults', 
        component: slideDrillingResults
      },
      { 
        path: '/backReamingResults', 
        component: backReamingResults
      },
      {
        path: '/surgeSwabReport',
        component: surgeSwabReport
      },
      {
        path: '/schematic',
        component: schematic
      },
      { 
        path: '/effectiveTension', 
        component: effectiveTension
      },
      {
        path: '/bitPowerOverArea',
        component: bitPowerOverArea
      },
      {
        path: '/bitImpactForce',
        component: bitImpactForce
      },
      {
        path: '/bitNozzleVelocity',
        component: bitNozzleVelocity
      },
      {
        path: '/circulatingPressure',
        component: circulatingPressure
      },
      {
        path: '/eCDvsDepth',
        component: eCDvsDepth
      },
      {
        path: '/eCDvsTripTimeOpen',
        component: eCDvsTripTimeOpen
      },
      {
        path: '/eCDvsDepthOpen',
        component: eCDvsDepthOpen
      },
      {
        path: '/annularVelocityvsDepth',
        component: annularVelocityvsDepth
      },
      {
        path: '/criticalPumpRate',
        component: criticalPumpRate
      },
      {
        path: '/circulatingPressureSurgeSwab',
        component: circulatingPressureSurgeSwab
      },
      {
        path: '/eCDvsDepthSurgeSwab',
        component: eCDvsDepthSurgeSwab
      },
      {
        path: '/pressureLossSurgeSwab',
        component: pressureLossSurgeSwab
      },
      {
        path: '/annularFlowRegime',
        component: annularFlowRegime
      },
      {
        path: '/hydraulicsSummary',
        component: hydraulicsSummary
      },
      { 
        path: '/normalForce', 
        component: normalForce
      },
      {
        path: '/pressureLoss',
        component: pressureLoss
      },
      { 
        path: '/hookLoad', 
        component: hookLoad
      },
      { 
        path: '/torque', 
        component: torque
      }, 
      { 
        path: '/drag', 
        component: drag
      },      
      {
        path: '/schematicView',
        component: schematicView
      },
      {
        path: '/chartAreaTorqueDrag',
        component: chartAreaTorqueDrag
      },
      {
        path: '/formationTops',
        component: formationTops
      },
      {
        path: '/hyraulicsReport',
        component: hyraulicsReport
      },
      {
        path: '/trippingInStress',
        component: trippingInStress
      },
      {
        path: '/trippingOutStress',
        component: trippingOutStress
      },
      {
        path: '/slideDrillingStress',
        component: slideDrillingStress
      },
      {
        path: '/rotatingOnBottomStress',
        component: rotatingOnBottomStress
      },
      {
        path: '/rotatingOffBottomStress',
        component: rotatingOffBottomStress
      },
      {
        path: '/backReamingStress',
        component: backReamingStress
      },
      {
        path: '/catalogPage',
        component: catalogPage
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
