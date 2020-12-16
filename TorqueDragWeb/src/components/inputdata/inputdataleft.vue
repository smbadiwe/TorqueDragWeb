<template>
    <div>
        <defaultviewleft v-if="isdefaultviewleft"></defaultviewleft>
        <datumview v-if="isdatum"></datumview>
        <wellpathview v-if="iswellpath"></wellpathview>
        <holeview v-if="ishole"></holeview>
        <tubingstringview v-if="istubingstring"></tubingstringview>
        <rigview v-if="isrig"></rigview>
        <fluidsview v-if="isfluids"></fluidsview>
        <subsurfaceview v-if="issubsurface"></subsurfaceview>
        <operationsview v-if="isoperations"></operationsview>
    </div>
</template>

<script>
import defaultviewleft from 'components/inputdata/defaultviewleft.vue';
import datumview from 'components/inputdata/datumview.vue';
import wellpathview from 'components/inputdata/wellpathview.vue';
import holeview from 'components/inputdata/holeview.vue';
import tubingstringview from 'components/inputdata/tubingstringview.vue';
import rigview from 'components/inputdata/rigview.vue';
import fluidsview from 'components/inputdata/fluidsview.vue';
import subsurfaceview from 'components/inputdata/subsurfaceview.vue';
import operationsview from 'components/inputdata/operationsview.vue';

export default {
    components:{
        defaultviewleft,
        datumview,
        wellpathview,
        holeview,
        tubingstringview,
        rigview,
        fluidsview,
        subsurfaceview,
        operationsview
    },
    props:{
        isdefaultviewleft: {
            type: Boolean,
            default:true,
        },
        isdatum: {
            type: Boolean,
            default:false,
        },
        iswellpath:{
            type: Boolean,
            default:false
        },
        ishole:{
            type: Boolean,
            default:false
        },
        istubingstring:{
            type: Boolean,
            default:false
        },
        isrig:{
            type: Boolean,
            default:false
        },
        isfluids: {
            type: Boolean,
            default:false,
        },
        issubsurface: {
            type: Boolean,
            default:false,
        },
        isoperations: {
            type: Boolean,
            default:false,
        }
    }
}
</script>

<style scoped>

</style>