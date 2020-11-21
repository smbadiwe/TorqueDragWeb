import authLayout from 'layouts/authLayout.vue'
import mainLayout from 'layouts/MainLayout.vue'
import userLayout from 'layouts/userLayout.vue'
import newLayout from 'layouts/newLayout.vue'
import newLayout2 from 'layouts/newLayout2.vue'
import landingpage from 'pages/index.vue'
import loginapge from 'pages/auth/loginapge.vue'
import dockpage1 from 'pages/inputdata/dockpage1.vue'
import simulationConsole from 'pages/simulation/simulationConsole.vue'
import t_d_results from 'pages/simulation/t_d_results.vue'
import schematic from 'pages/wellSchematics/schematic.vue'
import effectiveTension from 'pages/fixedDepthPlots/effectiveTension.vue'
import schematicView from 'pages/wellSchematics/schematicView.vue'

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
    path: '/newLayout',
    component: newLayout
  },
  {
    path: '/newLayout2',
    component: newLayout2,
    children: [
      { 
        path: '/newLayout2', 
        component: dockpage1
      }
    ]
  },
  {
    path: '/main',
    component: mainLayout,
    children: [
      { 
        path: '/main', 
        component: landingpage
      }
    ]
  },
  {
    path: '/userLayout',
    component: userLayout,
    children: [
      { 
        path: '', 
        component: landingpage
      },
      { 
        path: '/simulationConsole', 
        component: simulationConsole
      },
      { 
        path: '/TrippingOutDetails', 
        component: t_d_results
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
        path: '/schematicView',
        component: schematicView
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
