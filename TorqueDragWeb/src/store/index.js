import Vue from 'vue'
import Vuex from 'vuex'

import authStore from './modules/authStore'
import datumStore from './modules/datumStore'
import wellPathStore from './modules/wellPathStore'
import tubingStringStore from './modules/tubingStringStore'
import fluidsStore from './modules/fluidsStore'
import subSurfaceStore from './modules/subSurfaceStore'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      authStore,
      datumStore,
      wellPathStore,
      tubingStringStore,
      fluidsStore,
      subSurfaceStore
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
