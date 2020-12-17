<template>
    <div>
        
        <svg class="Rectangle_78">
            <rect id="Rectangle_78" rx="0" ry="0" x="0" y="0" width="34" height="900">
            </rect>
        </svg>

        <analysis></analysis>
        <dataReader></dataReader>
        <reports></reports>
        <settingsbutton></settingsbutton>
        <sensitivitybutton></sensitivitybutton>
        <schematicbutton></schematicbutton>
        
       
       
    </div>
</template>

<script>
import analysis from 'components/uiComponents/analysis.vue';
import dataReader from 'components/uiComponents/dataReader.vue';
import reports from 'components/uiComponents/reports.vue';
import settingsbutton from 'components/buttons/settingsbutton.vue';
import sensitivitybutton from 'components/buttons/sensitivitybutton.vue';
import schematicbutton from 'components/buttons/schematicbutton.vue';


export default {
    components:{
        analysis,
        dataReader,
        reports,
        settingsbutton,
        sensitivitybutton,
        schematicbutton
    },
    data(){
        return {
            isdefaultviewleft:true,
            isdatum: false,
            iswellpath: false,
            ishole: false,
            istubingstring: false,
            isrig: false,
            isfluids: false,
            issubsurface: false,
            isoperations: false
        }
    },
    methods:{
        updatedatum(){
            var context =  this;
            context.isdefaultviewleft = false,
            context.isdatum =  true;
            context.iswellpath = false;
            context.ishole = false;
            context.istubingstring= false;
            context.isrig = false;
            context.isfluids = false;
            context.issubsurface = false;
            context.isoperations = false;
        },
        updatewellpath(){
            var context =  this;
            context.isdefaultviewleft = false,
            context.isdatum =  false;
            context.iswellpath = true;
            context.ishole = false;
            context.istubingstring= false;
            context.isrig = false;
            context.isfluids = false;
            context.issubsurface = false;
            context.isoperations = false;
        },
        updatehole(){
            var context =  this;
            context.isdefaultviewleft = false,
            context.isdatum =  false;
            context.iswellpath = false;
            context.ishole = true;
            context.istubingstring= false;
            context.isrig = false;
            context.isfluids = false;
            context.issubsurface = false;
            context.isoperations = false;
        },
        updatetubingstring(){
            var context =  this;
            context.isdefaultviewleft = false,
            context.isdatum =  false;
            context.iswellpath = false;
            context.ishole = false;
            context.istubingstring= true;
            context.isrig = false;
            context.isfluids = false;
            context.issubsurface = false;
            context.isoperations = false;
        },
        updaterig(){
            var context =  this;
            context.isdefaultviewleft = false,
            context.isdatum =  false;
            context.iswellpath = false;
            context.ishole = false;
            context.istubingstring= false;
            context.isrig = true;
            context.isfluids = false;
            context.issubsurface = false;
            context.isoperations = false;
        },
        updatefluids(){
            var context =  this;
            context.isdefaultviewleft = false,
            context.isdatum =  false;
            context.iswellpath = false;
            context.ishole = false;
            context.istubingstring= false;
            context.isrig = false;
            context.isfluids = true;
            context.issubsurface = false;
            context.isoperations = false;
        },
        updatesubsurface(){
            var context =  this;
            context.isdefaultviewleft = false,
            context.isdatum =  false;
            context.iswellpath = false;
            context.ishole = false;
            context.istubingstring= false;
            context.isrig = false;
            context.isfluids = false;
            context.issubsurface = true;
            context.isoperations = false;
        },
        updateoperations(){
            var context =  this;
            context.isdefaultviewleft = false,
            context.isdatum =  false;
            context.iswellpath = false;
            context.ishole = false;
            context.istubingstring= false;
            context.isrig = false;
            context.isfluids = false;
            context.issubsurface = false;
            context.isoperations = true;
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