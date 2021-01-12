<template>
    <div>
        <datumbutton v-on:showdatum="updatedatum"></datumbutton>
        <wellpathbutton v-on:showwellpath="updatewellpath"></wellpathbutton>
        <holebutton v-on:showhole="updatehole"></holebutton>
        <tubingstringbutton v-on:showtubingstring="updatetubingstring"></tubingstringbutton>
        <rigbutton v-on:showrig="updaterig"></rigbutton>
        <fluidsbutton v-on:showfluids="updatefluids"></fluidsbutton>
        <subsurfacebutton v-on:showsubsurface="updatesubsurface"></subsurfacebutton>
        <operationsbutton v-on:showoperations="updateoperations"></operationsbutton>
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
            isoperations: false,
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
            }
        }
    },
    methods:{
        updatedatum(){
            var context =  this;
            context.activeViews.isdatum =  true;
            context.activeViews.iswellpath = false;
            context.activeViews.ishole = false;
            context.activeViews.istubingstring= false;
            context.activeViews.isrig = false;
            context.activeViews.isfluids = false;
            context.activeViews.issubsurface = false;
            context.activeViews.isoperations = false;
            this.$emit('updateprop', context.activeViews);
        },
        updatewellpath(){
            var context =  this;
            context.activeViews.isdatum =  false;
            context.activeViews.iswellpath = true;
            context.activeViews.ishole = false;
            context.activeViews.istubingstring= false;
            context.activeViews.isrig = false;
            context.activeViews.isfluids = false;
            context.activeViews.issubsurface = false;
            context.activeViews.isoperations = false;
            this.$emit('updateprop', context.activeViews);
        },
        updatehole(){
            var context =  this;
             context.activeViews.isdatum =  false;
             context.activeViews.iswellpath = false;
             context.activeViews.ishole = true;
             context.activeViews.istubingstring= false;
             context.activeViews.isrig = false;
             context.activeViews.isfluids = false;
             context.activeViews.issubsurface = false;
             context.activeViews.isoperations = false;
            this.$emit('updateprop', context.activeViews);
        },
        updatetubingstring(){
            var context =  this;
            context.activeViews.isdatum =  false;
            context.activeViews.iswellpath = false;
            context.activeViews.ishole = false;
            context.activeViews.istubingstring= true;
            context.activeViews.isrig = false;
            context.activeViews.isfluids = false;
            context.activeViews.issubsurface = false;
            context.activeViews.isoperations = false;
            this.$emit('updateprop', context.activeViews);
        },
        updaterig(){
            var context =  this;
            context.activeViews.isdatum =  false;
            context.activeViews.iswellpath = false;
            context.activeViews.ishole = false;
            context.activeViews.istubingstring= false;
            context.activeViews.isrig = true;
            context.activeViews.isfluids = false;
            context.activeViews.issubsurface = false;
            context.activeViews.isoperations = false;
            this.$emit('updateprop', context.activeViews);
        },
        updatefluids(){
            var context =  this;
            context.activeViews.isdatum =  false;
            context.activeViews.iswellpath = false;
            context.activeViews.ishole = false;
            context.activeViews.istubingstring= false;
            context.activeViews.isrig = false;
            context.activeViews.isfluids = true;
            context.activeViews.issubsurface = false;
            context.activeViews.isoperations = false;
            this.$emit('updateprop', context.activeViews);
        },
        updatesubsurface(){
            var context =  this;
            context.activeViews.isdatum =  false;
            context.activeViews.iswellpath = false;
            context.activeViews.ishole = false;
            context.activeViews.istubingstring= false;
            context.activeViews.isrig = false;
            context.activeViews.isfluids = false;
            context.activeViews.issubsurface = true;
            context.activeViews.isoperations = false;
            this.$emit('updateprop', context.activeViews);
        },
        updateoperations(){
            var context =  this;
            context.activeViews.isdatum =  false;
            context.activeViews.iswellpath = false;
            context.activeViews.ishole = false;
            context.activeViews.istubingstring= false;
            context.activeViews.isrig = false;
            context.activeViews.isfluids = false;
            context.activeViews.issubsurface = false;
            context.activeViews.isoperations = true;
            this.$emit('updateprop', context.activeViews);
        }
    }
    
}
</script>