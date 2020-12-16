<template>
    <div>

        <defaultheader v-if="isdefaultviewleft"></defaultheader>
        <datumsectionheader v-if="isdatum"></datumsectionheader>
        <wellpathheader v-if="iswellpath"></wellpathheader>
        <holesectionheader v-if="ishole"></holesectionheader>
        <tubingstringheader v-if="istubingstring"></tubingstringheader>
        <righeader v-if="isrig"></righeader>
        <fluidsheader v-if="isfluids"></fluidsheader>
        <subsurfaceheader v-if="issubsurface"></subsurfaceheader>
        <operationsheader v-if="isoperations"></operationsheader>
        

    </div>
</template>

<script>
import defaultheader from 'components/inputheaders/defaultheader.vue';
import holesectionheader from 'components/inputheaders/holesectionheader.vue';
import datumsectionheader from 'components/inputheaders/datumsectionheader.vue';
import wellpathheader from 'components/inputheaders/wellpathheader.vue';
import tubingstringheader from 'components/inputheaders/tubingstringheader.vue';
import righeader from 'components/inputheaders/righeader.vue';
import fluidsheader from 'components/inputheaders/fluidsheader.vue';
import subsurfaceheader from 'components/inputheaders/subsurfaceheader.vue';
import operationsheader from 'components/inputheaders/operationsheader.vue';

export default {
    components:{
        defaultheader,
        holesectionheader,
        datumsectionheader,
        wellpathheader,
        tubingstringheader,
        righeader,
        fluidsheader,
        subsurfaceheader,
        operationsheader
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
        iswellpath: {
            type: Boolean,
            default:false,
        },
        ishole: {
            type: Boolean,
            default:false,
        },
        istubingstring: {
            type: Boolean,
            default:false,
        },
        isrig: {
            type: Boolean,
            default:false,
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