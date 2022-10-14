import { https } from "./services";

const state =  {
    isWellSchematic: false,
    propertyLists1: [],
    propertyLists2: [],
    formationProperties: {
        colorFormation: '#a26c37',
        yOffSet: 0
    },
    isFormation: false,
    isOpenHole: false,
    isBuckling: false,
    openHoleProperties: {
        colorOpenHoleAnnulus:  'gray',
        holeAnnulus: 10
    },
    bucklingProperties: {
        colorHelicalBuckling: 'orange',
        colorSinusiodalBuckling: 'yellow',
        selectedSensitivity: '1',
        selectedOperation: ""
    }
}

const getters = {
    isWellSchematic(state){
        return state.isWellSchematic;
    },
    isBuckling(state){
        return state.isBuckling;
    },
    bucklingProperties(state){
        return state.bucklingProperties;
    },
    openHoleProperties(state){
        return state.openHoleProperties;
    },
    isFormation(state){
        return state.isFormation;
    },
    isOpenHole(state){
        return state.isOpenHole;
    },
    propertyLists1(state){
        return state.propertyLists1;
    },
    propertyLists2(state){
        return state.propertyLists2;
    },
    formationProperties(state){
        return state.formationProperties;
    }
}

const mutations = {
    setPropertyLists1(state, payload){
        state.propertyLists1 = payload;
    },
    setPropertyLists2(state, payload){
        state.propertyLists2 = payload;
    },
    setFormationProperties(state, payload){
        state.formationProperties = payload;
    },
    setOpenHoleProperties(state, payload){
        state.openHoleProperties = payload;
    },
    setActivePropertyView(state, payload){
        state.isFormation = payload.isFormation;
        state.isOpenHole = payload.isOpenHole;
        state.isBuckling = payload.isBuckling;
    },
    setBucklingProperties(state, payload){
        state.bucklingProperties = payload;
    },
    setCurrentRoutePropertyGrid(state, payload){
        var currentRoute = payload;
        state.isWellSchematic = false
        switch(currentRoute){
            case '/formationTops':
                state.isWellSchematic = true
                break;
        }
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