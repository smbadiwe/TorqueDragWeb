import Vue from 'vue'
import Vuex from 'vuex'

import authStore from './modules/authStore'
import datumStore from './modules/datumStore'
import wellPathStore from './modules/wellPathStore'
import tubingStringStore from './modules/tubingStringStore'
import fluidsStore from './modules/fluidsStore'
import subSurfaceStore from './modules/subSurfaceStore'
import settingsStore from './modules/settingsStore'
import wellDesignStore from './modules/wellDesignStore'
import dataImportStore from './modules/dataImportStore'
import holeStore from './modules/holeStore'
import operationsStore from './modules/operationsStore'
import simulationStore from './modules/simulationStore'
import dataVisualizationStore from './modules/dataVisualizationStore'

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
      subSurfaceStore,
      settingsStore,
      wellDesignStore,
      dataImportStore,
      holeStore,
      operationsStore,
      simulationStore,
      dataVisualizationStore
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
