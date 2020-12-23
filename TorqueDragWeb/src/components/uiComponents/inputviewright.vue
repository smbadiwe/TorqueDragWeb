<template>
    <div>
           
      

         <headersRight
                v-bind:issettingsheader="issettingsheader"
                v-bind:issensitivityheader="issensitivityheader"
                v-bind:isschematicsheader="isschematicsheader"></headersRight>

                  <inputdataright 
                v-bind:issettingsheader="issettingsheader"
                v-bind:issensitivityheader="issensitivityheader"
                v-bind:isschematicsheader="isschematicsheader">
            </inputdataright>

        <svg class="Rectangle_78">
            <rect id="Rectangle_78" rx="0" ry="0" x="0" y="0" width="34" height="900">
            </rect>
        </svg>

<!--         <analysis></analysis>
        <dataReader></dataReader>
        <reports></reports> -->

        <settingsbutton v-on:showsettings="showsettings"></settingsbutton>
        <sensitivitybutton v-on:showsensitivity="showsensitivity"></sensitivitybutton>
        <schematicbutton v-on:showschematics="showschematics"></schematicbutton>
        
       
    </div>
</template>

<script>
/* import analysis from 'components/uiComponents/analysis.vue';
import dataReader from 'components/uiComponents/dataReader.vue';
import reports from 'components/uiComponents/reports.vue'; */
import settingsbutton from 'components/buttons/settingsbutton.vue';
import sensitivitybutton from 'components/buttons/sensitivitybutton.vue';
import schematicbutton from 'components/buttons/schematicbutton.vue';
import headersRight from 'components/inputheaders/headersRight.vue';
import inputdataright from 'components/inputdata/inputdataright.vue';


export default {
    components:{
/*         analysis,
        dataReader,
        reports, */
        settingsbutton,
        sensitivitybutton,
        schematicbutton,
        headersRight,
        inputdataright
    },
    data(){
        return {
            issettingsheader:true,
            issensitivityheader: false,
            isschematicsheader: false
        }
    },
    methods:{
        showsettings(){
            var context =  this;
            context.issettingsheader = false,
            context.issensitivityheader =  true;
            context.isschematicsheader = false;
        },
        showsensitivity(){
            var context =  this;
            context.issettingsheader = false,
            context.issensitivityheader =  true;
            context.isschematicsheader = false;
        },
        showschematics(){
            var context =  this;
            context.issettingsheader = false,
            context.issensitivityheader =  false;
            context.isschematicsheader = true;
        }
    }
    
    
}
</script>

<style scoped>


#Rectangle_78 {
	fill: rgba(20,20,20,1);
}
.Rectangle_78 {
	position: absolute;
	overflow: visible;
	width: 34px;
	height: 900px;
	left: 1885px;
	top: 180px;
}

</style>