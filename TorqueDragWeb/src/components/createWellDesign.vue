<template>
    <div>
        <div class="row">
            <div class="col-2">
            </div>

            <div class="col-12 q-pa-sm">
                <q-card>
                                <q-card-section id="cardsection">
                                    
                                    <div class="row">

                                    <div class="col-12 q-pa-sm">
                                        Create Well Design
                                        <br>
                                        <hr/>
                                    </div>

                                    <div class="col-3 q-pa-sm">Project:</div>
                                    <div v-if="isNewProject" class="col-6 q-pa-sm"><input v-model="projectName"></div>
                                    <div v-else class="col-6 q-pa-sm">
                                        <select style="width:100%;"
                                            name="projectName"
                                            id="" 
                                            v-model="projectName"
                                            v-on:change="onProjectNameSelectionChanged($event)">
                                            <option
                                                v-for="projectName in projectNames" :key="projectName">
                                                {{ projectName }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-3 q-pa-sm">
                                        <!-- <q-btn  icon="add_box"
                                        size="sm"
                                        flat
                                        @click="isNewProjectToggleg">
                                            <q-tooltip>
                                            Add Project
                                            </q-tooltip>
                                        </q-btn> -->
                                    </div>

                                    <div class="col-3 q-pa-sm">Field:</div>
                                    <div v-if="isNewField" class="col-6 q-pa-sm"><input v-model="fieldName"></div>
                                    <div v-else class="col-6 q-pa-sm">
                                        <select style="width:100%;"
                                            name="fieldName"
                                            id="" 
                                            v-model="fieldName"
                                            v-on:change="onFieldNameSelectionChanged($event)">
                                            <option
                                                v-for="fieldName in fieldNames" :key="fieldName">
                                                {{ fieldName }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-3 q-pa-sm">
                                        <!-- <q-btn  icon="add_box"
                                        size="sm"
                                        flat
                                        @click="isNewFieldToggleg">
                                            <q-tooltip>
                                            Add Field
                                            </q-tooltip>
                                        </q-btn> -->
                                    </div>

                                    <div class="col-3 q-pa-sm">Well:</div>
                                    <div v-if="isNewWell" class="col-6 q-pa-sm"><input v-model="wellName"></div>
                                    <div v-else class="col-6 q-pa-sm">
                                        <select style="width:100%;"
                                            name="wellName"
                                            id="" 
                                            v-model="wellName"
                                            v-on:change="onWellNameSelectionChanged($event)">
                                            <option
                                                v-for="wellName in wellNames" :key="wellName">
                                                {{ wellName }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-3 q-pa-sm">
                                        <!-- <q-btn  icon="add_box"
                                        size="sm"
                                        flat
                                        @click="isNewWellToggleg">
                                            <q-tooltip>
                                            Add Well
                                            </q-tooltip>
                                        </q-btn> -->
                                    </div>

                                    <div class="col-3 q-pa-sm">Wellbore:</div>
                                    <div v-if="isNewWellbore" class="col-6 q-pa-sm"><input v-model="wellboreName"></div>
                                    <div v-else class="col-6 q-pa-sm">
                                        <select style="width:100%;"
                                            name="wellboreName"
                                            id="" 
                                            v-model="wellboreName"
                                            v-on:change="onWellboreNameSelectionChanged($event)">
                                            <option
                                                v-for="wellboreName in wellboreNames" :key="wellboreName">
                                                {{ wellboreName }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-3 q-pa-sm">
                                        <!-- <q-btn  icon="add_box"
                                        size="sm"
                                        flat
                                        @click="isNewWellboreToggleg">
                                            <q-tooltip>
                                            Add Wellbore
                                            </q-tooltip>
                                        </q-btn> -->
                                    </div>

                                    <div class="col-3 q-pa-sm">Well Design:</div>
                                    <div v-if="isNewWellDesign" class="col-6 q-pa-sm"><input v-model="wellDesignName"></div>
                                    <div v-else class="col-6 q-pa-sm">
                                        <select style="width:100%;"
                                            name="wellDesignName"
                                            id="" 
                                            v-model="wellDesignName"
                                            v-on:change="onWellDesignNameSelectionChanged($event)">
                                            <option
                                                v-for="wellDesignName in wellDesignNames" :key="wellDesignName">
                                                {{ wellDesignName }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-3 q-pa-sm">
                                        <!-- <q-btn  icon="add_box"
                                        size="sm"
                                        flat
                                        @click="isNewWellDesignToggleg">
                                            <q-tooltip>
                                            Add Well Design
                                            </q-tooltip>
                                        </q-btn> -->
                                    </div>


                                    <div class="col-3 q-pa-sm">Well Case:</div>
                                    <div v-if="isNewWellCase" class="col-6 q-pa-sm"><input v-model="designName"></div>
                                    <div v-else class="col-6 q-pa-sm">
                                        <select style="width:100%;"
                                            name="designName"
                                            id="" 
                                            v-model="designName"
                                            v-on:change="onWellCaseNameSelectionChanged($event)">
                                            <option
                                                v-for="wellCase in wellCases" :key="wellCase">
                                                {{ wellCase }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-3 q-pa-sm">
                                        <!-- <q-btn  icon="add_box"
                                        size="sm"
                                        flat
                                        @click="isNewWellCaseToggleg">
                                            <q-tooltip>
                                            Add Well Case
                                            </q-tooltip>
                                        </q-btn> -->
                                    </div>
                            
                                </div>
                                </q-card-section>

                                <q-card-actions align="right" id="cardaction">
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
        projectNames(){
            return this.$store.getters['wellDesignStore/projectNames'];
        },
        fieldNames(){
            return this.$store.getters['wellDesignStore/fieldNames'];
        },
        wellNames(){
            return this.$store.getters['wellDesignStore/wellNames'];
        },
        wellboreNames(){
            return this.$store.getters['wellDesignStore/wellboreNames'];
        },
        wellDesignNames(){
            return this.$store.getters['wellDesignStore/wellDesignNames'];
        },
        wellCases(){
            return this.$store.getters['wellDesignStore/wellCases'];
        },
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
            projectName: "",
            fieldName: "",
            wellName: "",
            wellboreName: "",
            wellDesignName: "",
            designName: ""
        }
    },
    methods:{
        cancelCreation(){
             this.$store.commit('wellDesignStore/HideCreateWellDesign');
        },
        onProjectNameSelectionChanged(e){
            var context = this;
            context.projectName = e.target.options[e.target.options.selectedIndex].text;
            //this.$store.dispatch('wellDesignStore/PostTorqueDragDesign', context.projectName);
        },
        onFieldNameSelectionChanged(e){
        var context = this;
        context.fieldName = e.target.options[e.target.options.selectedIndex].text;           
        },
        onWellNameSelectionChanged(e){
        var context = this;
        context.wellName = e.target.options[e.target.options.selectedIndex].text;           
        },
        onWellboreNameSelectionChanged(e){
        var context = this;
        context.wellboreName = e.target.options[e.target.options.selectedIndex].text;           
        },
        onWellDesignNameSelectionChanged(e){
        var context = this;
        context.wellDesignName = e.target.options[e.target.options.selectedIndex].text;           
        },
        onWellCaseNameSelectionChanged(e){
        var context = this;
        context.designName = e.target.options[e.target.options.selectedIndex].text;           
        },
        isNewProjectToggleg(){
            var context = this;
            if(context.isNewProject ==  true){
                context.isNewProject = false;
            }else{
                context.isNewProject = true;
            }
        },
        isNewFieldToggleg(){
            var context = this;
            if(context.isNewField ==  true){
                context.isNewField = false;
            }else{
                context.isNewField = true;
            }
        },
        isNewWellToggleg(){
            var context = this;
            if(context.isNewWell ==  true){
                context.isNewWell = false;
            }else{
                context.isNewWell = true;
            }
        },
        isNewWellboreToggleg(){
            var context = this;
            if(context.isNewWellbore ==  true){
                context.isNewWellbore = false;
            }else{
                context.isNewWellbore = true;
            }
        },
        isNewWellDesignToggleg(){
            var context = this;
            if(context.isNewWellDesign ==  true){
                context.isNewWellDesign = false;
            }else{
                context.isNewWellDesign = true;
            }
        },
        isNewWellCaseToggleg(){
            var context = this;
            if(context.isNewWellCase ==  true){
                context.isNewWellCase = false;
            }else{
                context.isNewWellCase = true;
            }
        },
        PostTorqueDragDesign(){
        var context = this;
        var d = new Date();
        var designDay = d.getDate();
        var designMonth = d.getMonth() + 1;
        var designYear = d.getFullYear();

        /* var i = 0;
        var checkProject =  false;
        for(i = 0; i < context.projectNames.length; i++){
            if(context.projectNames[i] == context.projectName){
                alert( context.projectName + " exists in the list of project names");
                checkProject = true;
                return;
            }
        }
      
        var checkField = false;
        if(checkProject == true){
            for(i = 0; i < context.fieldNames.length; i++){
                if(context.fieldNames[i] == context.fieldName){
                    alert( context.fieldName + " exists in the list of field names");
                    checkField = true;
                    return;
                }
            }
        }

          

        for(i = 0; i < context.wellNames.length; i++){
            if(context.wellNames[i] == context.wellName){
                alert( context.wellName + " exists in the list of well names");
                return;
            }
        }

        for(i = 0; i < context.wellboreNames.length; i++){
            if(context.wellboreNames[i] == context.wellboreName){
                alert( context.wellboreName + " exists in the list of wellbore names");
                return;
            }
        }

        for(i = 0; i < context.wellDesignNames.length; i++){
            if(context.wellDesignNames[i] == context.wellDesignName){
                alert( context.wellDesignNames + " exists in the list of wellDesign names");
                return;
            }
        }

        for(i = 0; i < context.wellCases.length; i++){
            if(context.wellCases[i] == context.designName){
                alert( context.designName + " exists in the list of wellcase names");
                return;
            }
        } */


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


</style>