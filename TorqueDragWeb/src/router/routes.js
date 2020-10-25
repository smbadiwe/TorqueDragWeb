import authLayout from 'layouts/authLayout.vue'
import mainLayout from 'layouts/MainLayout.vue'
import userLayout from 'layouts/userLayout.vue'
import newLayout from 'layouts/newLayout.vue'
import newLayout2 from 'layouts/newLayout2.vue'
import landingpage from 'pages/index.vue'
import loginapge from 'pages/auth/loginapge.vue'
import dockpage1 from 'pages/inputdata/dockpage1.vue'

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
