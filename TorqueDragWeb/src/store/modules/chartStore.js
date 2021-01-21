import { $http } from 'boot/axios' 

const state = {
    layout: {},
    seriesCollection: [],
    seriesStore: []
}

const getters = {
    layout(state){
        return state.layout;
    },
    seriesCollection(state){
        return state.seriesCollection;
    },
    seriesStore(state){
        return state.seriesStore;
    }
}

const mutations = {
    
}

const actions = {
    SetChartData(context, payload)
    {
        context.state.layout = payload.layout;
        context.state.seriesCollection = payload.seriesCollection;
        context.state.seriesStore = payload.seriesStore;

        console.log("chartStore.seriesCollection", context.state.seriesCollection);
    }
}

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
  }