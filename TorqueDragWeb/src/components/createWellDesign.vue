<template>
    <div>
        <div class="row">
            <div class="col-2">
            </div>

            <div class="col-12 q-pa-sm">
                <q-card>
                    <q-card-section class="bg-primary text-accent">
                        <div class="col-12 text-center">
                            Create Well Design
                        </div>
                    </q-card-section>
                    
                    <q-card-section class="bg-primary text-accent text-center">
                        
                        <div class="row">

                        <div class="col-3 q-pa-sm">Comapny:</div>
                        <input class="col-9 q-pa-sm" v-model="companyName" v-on:keyup="searchCompanyname">
                        <p class="col-12 q-pa-sm text-warning">{{ companyNameMessage }}</p>

                        <div class="col-3 q-pa-sm">Project:</div>
                        <input class="col-9 q-pa-sm" v-model="projectName"  v-on:keyup="searchProjectname">
                        <p class="col-12 q-pa-sm text-warning">{{ projectNameMessage }}</p>

                        <div class="col-3 q-pa-sm">Site:</div>
                        <input class="col-9 q-pa-sm" v-model="siteName">
                        <p class="col-12 q-pa-sm text-warning">{{ siteNameMessage }}</p>

                        <div class="col-3 q-pa-sm">Well:</div>
                        <input class="col-9 q-pa-sm" v-model="wellName" v-on:keyup="searchWellname">
                        <p class="col-12 q-pa-sm text-warning">{{ wellNameMessage }}</p>

                        <div class="col-3 q-pa-sm">Wellbore:</div>
                        <input class="col-9 q-pa-sm" v-model="wellboreName" v-on:keyup="searchWellborename">
                        <p class="col-12 q-pa-sm text-warning">{{ wellboreNameMessage }}</p>

                        <div class="col-3 q-pa-sm">Design:</div>
                        <input class="col-9 q-pa-sm" v-model="wellDesignName" v-on:keyup="searchWellDesignname">
                        <p class="col-12 q-pa-sm text-warning">{{ wellDesignNameMessage }}</p>

                        <div class="col-3 q-pa-sm">Cases:</div>
                        <input class="col-9 q-pa-sm" v-model="designName" v-on:keyup="searchWellCasename">
                        <p class="col-12 q-pa-sm text-negative">{{ designNameMessage }}</p>
                
                    </div>
                    </q-card-section>

                    <q-card-actions align="right" class="bg-secondary text-accent">
                        <q-btn 
                            size="sm"
                            label="Add"
                            @click="PostTorqueDragDesign">
                        </q-btn>
                        <q-btn 
                            size="sm"
                            label="Cancel"
                            @click="cancelCreation">
                        </q-btn>
                    </q-card-actions>

                    </q-card>
            </div>

            <div class="col-2">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        companyName(){
            return this.$store.getters['authStore/companyName'];
        },
        companyId(){
            return this.$store.getters['authStore/companyId'];
        },
    },
    data(){
        return {
            isNewProject: true,
            isNewField: true,
            isNewWell: true,
            isNewWellbore: true,
            isNewWellDesign: true,
            isNewWellCase: true,
           

            companyName: '',
            dense: false,
            companyNameMessage: "",
            projectName: "",
            projectNameMessage: "",
            siteName: "",
            siteNameMessage: "",
            wellName: "",
            wellNameMessage: "",
            wellboreName: "",
            wellboreNameMessage: "",
            wellDesignName: "",
            wellDesignNameMessage: "",
            designName: "",
            designNameMessage: ""

        }
    },
    methods:{
        searchCompanyname(){
            var context = this;
            console.log('searchCompanyname')
        },
        searchProjectname(){
            var projectNames = this.$store.getters['wellDesignStore/projectNames'];
            var i = 0;
            var context =  this;
            var length = projectNames.length;
            for(i = 0; i < length; i++){
                if(context.projectName.toLowerCase() == projectNames[i].toLowerCase()){
                    context.projectNameMessage = "This project already exists!"
                    return
                }
            }
        },
        searchWellname(){
            var wellNames = this.$store.getters['wellDesignStore/wellNames'];
            var i = 0;
            var context =  this;
            var length = wellNames.length;
            for(i = 0; i < length; i++){
                if(context.wellName.toLowerCase() == wellNames[i].toLowerCase()){
                    context.wellNameMessage = "This well already exists!"
                    return
                }
            }
        },
        searchWellborename(){
            var wellboreNames = this.$store.getters['wellDesignStore/wellboreNames'];
            var i = 0;
            var context =  this;
            var length = wellboreNames.length;
            for(i = 0; i < length; i++){
                if(context.wellboreName.toLowerCase() == wellboreNames[i].toLowerCase()){
                    context.wellboreNameMessage = "This wellbore already exists!"
                    return
                }
            }
        },
        searchWellDesignname(){
            var wellDesignNames = this.$store.getters['wellDesignStore/wellDesignNames'];
            var i = 0;
            var context =  this;
            var length = wellDesignNames.length;
            for(i = 0; i < length; i++){
                if(context.wellDesignName.toLowerCase() == wellDesignNames[i].toLowerCase()){
                    context.wellDesignNameMessage = "This well design already exists!"
                    return
                }
            }
        },
        searchWellCasename(){
            var wellCases = this.$store.getters['wellDesignStore/wellCases'];
            var i = 0;
            var context =  this;
            var length = wellCases.length;
            for(i = 0; i < length; i++){
                if(context.designName.toLowerCase() == wellCases[i].toLowerCase()){
                    context.designNameMessage = "This well case already exists!"
                    return
                }
            }
        },
        cancelCreation(){
             this.$store.commit('wellDesignStore/HideCreateWellDesign', false);
        },
        PostTorqueDragDesign(){
        var context = this;
        var d = new Date();
        var designDay = d.getDate();
        var designMonth = d.getMonth() + 1;
        var designYear = d.getFullYear();

        this.$store.dispatch('wellDesignStore/PostTorqueDragDesign', {
                torqueDragDesign: {
                    companyId: context.companyId,
                    designName: context.designName,
                    designDay: designDay,
                    designMonth: designMonth,
                    designYear:  designYear,
                    projectName: context.projectName,
                    fieldName: context.fieldName,
                    wellName: context.wellName,
                    wellboreName: context.wellboreName,
                    wellDesignName: context.wellDesignName
                },
                companyName: context.companyName
            });

        }
    },
    created(){

    }
}
</script>

<style scoped>

#cardsection {
    white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
    background-color:  rgba(27,27,27,1);;
}

#cardaction {
    white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
    background-color:   rgba(27,27,27,1);;
}

.myInput {
  background-position: 10px 12px;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}


</style>