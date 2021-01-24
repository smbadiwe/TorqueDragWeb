<template>
    <div class="row">
        <div class="col-12">
            <q-tabs 
            v-model="tab"
            no-caps
            outside-arrows
            mobile-arrows
            class="mytab text-white shadow-2 col-9"
          >

            <q-tab class="taboutput"
            v-for="outputTab in outputTabs" :key="outputTab.name"
            :name="outputTab.route">
                <div class="row"> 
                    <div class="col-9"
                    @click="ShowActivePage(outputTab)">
                        {{ outputTab.name }}
                    </div>
                    <div class="col-3">
                        <q-btn 
                            icon="close" 
                            flat
                            stretch
                            size="sm" 
                            class="text-capitalize"
                            stack 
                            @click="RemoveOutputTab(outputTab)"
                            >
                        </q-btn>
                    </div>
                </div>
            </q-tab>
          </q-tabs>
        </div>
        <div class="col-12">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        dockViewWidth() {
            return 600; //this.$store.getters['authStore/dockViewWidth'];
        },
        win_height() {
            return this.$q.screen.height;
        },
        outputTabs(){
            return this.$store.getters['authStore/outputTabs'];
        },
        outputTabNames(){
            return this.$store.getters['authStore/outputTabNames'];
        }
    },
    data() {
        return {
            tab: ''
        }
    },
    methods: {
        RemoveOutputTab(selectedTab){
            console.log(selectedTab)
            this.$store.commit('authStore/RemoveOutputTab', selectedTab);
        },
        ShowActivePage(selectedTab){
            var route = '/' + selectedTab.route;
            this.$router.push(route);
            console.log("route :", route )
        }
    },
    created(){
        this.$router.push('/commonPage');
    }
    
}
</script>

<style scoped>
.taboutput {
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 18px;
	color: rgba(214,214,214,1);
    background-color: rgba(45,66,123,1);
}
</style>