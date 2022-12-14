import { https } from "./services";
import { $http } from "boot/axios";

const state =  {
  statusBar: {
      actionMessage: "",
      visibility: false
    },
    Loginstatus: false,
    IdentityModel: {},
    user: {},
    administrator: {},
    companyName: "",
    companyId: {},
    isLayout1: false,
    isLayout2: true,
    activeViews: {
      isdefaultviewleft:true,
      isdatum: false,
      iswellpath: false,
      ishole: false,
      istubingstring: false,
      isrig: false,
      isfluids: false,
      issubsurface: false,
      isoperations: false
    },
    dockViewWidth: screen.width,
    outputTabs: [
      /* {
        name: 'General',
        isActive: false,
        route: 'commonPage'
      } */
    ],
    outputTabNames: [] //'General'

}

const getters = {
  statusBar(state){
      return state.statusBar;
    },
    outputTabNames(state){
      return state.outputTabNames;
    },
    outputTabs(state){
      return state.outputTabs;
    },
    dockViewWidth(state){
      return state.dockViewWidth;
    },
    activeViews(state){
      return state.activeViews;
    },
    Loginstatus(state){
        return state.Loginstatus;
    },
    IdentityModel(state){
        return state.IdentityModel;
    },
    user(state){
        return state.user;
    },
    administrator(state){
        return state.administrator;
    },
    companyName(state){
        return state.companyName;
    },
    companyId(state){
      return state.companyId;
    },
    isLayout1(state){
      return state.isLayout1;
    },
    isLayout2(state){
      return state.isLayout2;
    }
}

const mutations = {
  setStatusMessageBarVisibility(state, payload){
      state.statusBar.visibility = payload.visibility;
      state.statusBar.actionMessage = payload.actionMessage;
    },
    AddOutputTab(state, payload){
      var i = 0, len = state.outputTabs.length;
      
      var check = false;
      console.log(check);
      for(i = 0; i < len; i++){
        if(payload.name == state.outputTabs[i].name){
          check = true;
          console.log(check);
          break;
        }
      }

      
      if(check ==  false){
        state.outputTabs.push({
          name: payload.name,
          isActive: false,
          route: payload.route
        });

        state.outputTabNames.push(payload.name);
        console.log(state.outputTabs)

        var route = '/' + payload.route;
            console.log(route)
            this.$router.push(route);

        
      }

      if(check ==  true){
        /* state.outputTabs.push({
          name: payload.name,
          isActive: false,
          route: payload.route
        }); */

        //state.outputTabNames.push(payload.name);
        console.log(state.outputTabs)

        var route = '/' + payload.route;
            console.log(route)
            this.$router.push(route);

        
      }
    },
    RemoveOutputTab(state, payload){
      const index = state.outputTabNames.indexOf(payload.name);
      console.log(state.outputTabNames)
      if (index > -1) {
        state.outputTabNames.splice(index, 1);
        state.outputTabs.splice(index, 1);
        var len = state.outputTabs.length;
        if(len > 0)
        {
          var route = '/' + state.outputTabs[len-1].route;
          this.$router.push(route);
        }
        if(len <= 0){
          var route = '/commonPage';
          this.$router.push(route);
        }
      }
      console.log(state.outputTabs);
      
    },
    UpdateDockViewWidth(state, payload){
      state.dockViewWidth = 900;// screen.width;
      console.log(state.dockViewWidth)
      /* if(payload.leftDrawerOpen == true)
      {
        state.dockViewWidth = state.dockViewWidth - 450.0;
        console.log("dockViewWidth: removed leftDrawerOpen ", state.dockViewWidth)
      }

      if(payload.rightDrawerOpen == true)
      {
        state.dockViewWidth = state.dockViewWidth - 450.0;
        console.log("dockViewWidth: removed rightDrawerOpen ", state.dockViewWidth)
      }
 */
    },
    SetActiveViews(state, payload){
      state.activeViews = payload;
      console.log("activeViews: ", payload);
    },
    Login(state, payload){
        console.log("loginDTO:", payload)
        state.Loginstatus= true;
        state.IdentityModel = payload.user; //payload.identity;
        state.companyName = payload.user.companyName; 

        const inMin = 24 * 60;
        let expiredAt = new Date(new Date().getTime() + (60000 * inMin));
        let obj = {
          value: payload.token,
          expiredAt: expiredAt.toISOString()
        }
        sessionStorage.setItem('seassionObj', JSON.stringify(obj));


        //state.companyId = payload.companyId;
        //state.user = payload.user;
        //state.administrator = payload.administrator;
        
        if(payload.token !== undefined){
          this.$router.push('/userLayout');
          state.visible = false
          state.showSimulatedReturnData = true
        }

       /* if(state.IdentityModel.roleName == "admin"){
           this.$router.push('/admin');
        }
        else{
          this.$router.push('/userLayout');
        } */
    
        
    },
    Logout(state){
        console.log("logoutUser");
        state.Loginstatus= true;
        state.IdentityModel = {}
        this.$router.push('/');
    },
    showLayout1(state){
      state.isLayout1 = true;
      state.isLayout2 = false;
      this.$router.push('/docksite');
    }

}

const actions = {
    LoginUser(context, payload)
    {

      let config = {
        useCredentails: false
      }
      context.state.visible = true
      context.state.showSimulatedReturnData = false

      return new Promise((resolve, reject) => {
        console.log(payload)
        https().post('users/Login', payload)
          .then(response => {
            console.log("response: ", response);
            context.commit('Login', response.data) 
            context.commit('setStatusMessageBarVisibility',  
            {
              actionMessage: response.data.info,
              visibility: true
            });
            //payload.user
            context.dispatch('wellDesignStore/GetTorqueDragDesigns',  {
              companyName: response.data.user.companyName,
              id: response.data.user._id
            }, {root:true})             
              resolve(response)
              
          })
          .catch(error => {
            console.log(error.message)
            state.visible = false
            state.showSimulatedReturnData = true
            alert(error.message);
            reject(error)
          })
      })
    },
    Login(context, payload)
    {

      let config = {
        useCredentails: false
      }
      context.state.visible = true
      context.state.showSimulatedReturnData = false

      return new Promise((resolve, reject) => {
        console.log(payload)
         https().post('identities/Login', payload)
          .then(response => {
            console.log("response: ", response);
            context.dispatch('LoginUser', payload) 
           /*  context.commit('setStatusMessageBarVisibility',  
            {
              actionMessage: response.data.info,
              visibility: true
            });
            context.dispatch('wellDesignStore/GetTorqueDragDesigns',  {
              companyName: response.data.identity.companyName,
              id: response.data.identity.id
            }, {root:true}) */ 

              resolve(response)
              
          })
          .catch(error => {
            console.log(error.message)
            state.visible = false
            state.showSimulatedReturnData = true
            alert(error.message);
            reject(error)
          })
      })
    },
    Logout(context)
    {
      let config = {
        useCredentails: false
      }

      return new Promise((resolve, reject) => {
        console.log("seen")
         https().post('identities/Logout', context.state.IdentityModel)
          .then(response => {
              
            context.commit('Logout', response.data)              
              resolve(response)
              
          })
          .catch(error => {
            reject(error)
          })
      })
    }
}

export default {
    namespaced: true,
    getters,
    mutations,
    actions,
    state
  }