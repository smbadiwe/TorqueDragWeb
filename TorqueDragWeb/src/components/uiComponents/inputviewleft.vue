<template>
    <div>
        <div id="Component_53__1" class="Component_53___1">

            <inputdataleft 
                v-bind:isdefaultviewleft="isdefaultviewleft"
                v-bind:isdatum="isdatum"
                v-bind:iswellpath="iswellpath"
                v-bind:ishole="ishole"
                v-bind:istubingstring="istubingstring"
                v-bind:isrig="isrig"
                v-bind:isfluids="isfluids"
                v-bind:issubsurface="issubsurface"
                v-bind:isoperations="isoperations">
            </inputdataleft>

            <headers
                v-bind:isdefaultviewleft="isdefaultviewleft"
                v-bind:isdatum="isdatum"
                v-bind:iswellpath="iswellpath"
                v-bind:ishole="ishole"
                v-bind:istubingstring="istubingstring"
                v-bind:isrig="isrig"
                v-bind:isfluids="isfluids"
                v-bind:issubsurface="issubsurface"
                v-bind:isoperations="isoperations"></headers>
            
             <svg class="Rectangle_75">
                <rect id="Rectangle_75" rx="0" ry="0" x="0" y="0" width="34" height="900">
                </rect>
            </svg>
            <datumbutton v-on:showdatum="updatedatum"></datumbutton>
            <wellpathbutton v-on:showwellpath="updatewellpath"></wellpathbutton>
            <holebutton v-on:showhole="updatehole"></holebutton>
            <tubingstringbutton v-on:showtubingstring="updatetubingstring"></tubingstringbutton>
            <rigbutton v-on:showrig="updaterig"></rigbutton>
            <fluidsbutton v-on:showfluids="updatefluids"></fluidsbutton>
            <subsurfacebutton v-on:showsubsurface="updatesubsurface"></subsurfacebutton>
            <operationsbutton v-on:showoperations="updateoperations"></operationsbutton>

        </div>    
       
    </div>
</template>

<script>
import datumbutton from 'components/buttons/datumbutton.vue';
import wellpathbutton from 'components/buttons/wellpathbutton.vue';
import holebutton from 'components/buttons/holebutton.vue';
import tubingstringbutton from 'components/buttons/tubingstringbutton.vue';
import rigbutton from 'components/buttons/rigbutton.vue';
import fluidsbutton from 'components/buttons/fluidsbutton.vue';
import subsurfacebutton from 'components/buttons/subsurfacebutton.vue';
import operationsbutton from 'components/buttons/operationsbutton.vue';
import settingsbutton from 'components/buttons/settingsbutton.vue';
import sensitivitybutton from 'components/buttons/sensitivitybutton.vue';
import schematicbutton from 'components/buttons/schematicbutton.vue';

import headers from 'components/inputheaders/headers.vue';
import inputdataleft from 'components/inputdata/inputdataleft.vue';

export default {
    components:{
        datumbutton,
        wellpathbutton,
        holebutton,
        tubingstringbutton,
        rigbutton,
        fluidsbutton,
        subsurfacebutton,
        operationsbutton,
        headers,
        settingsbutton,
        sensitivitybutton,
        schematicbutton,
        inputdataleft,
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

#Rectangle_75 {
	fill: rgba(20,20,20,1);
}
.Rectangle_75 {
	position: absolute;
	overflow: visible;
	width: 34px;
	height: 900px;
	left: 2px;
	top: 180px;
}

#Component_53__1 {
	position: absolute;
	width: 297.333px;
	height: 877px;
	left: 0px;
	top: 144px;
	overflow: visible;
}

</style>