<template>
    <div>

        <settingsheader v-if="issettingsheader"></settingsheader>
        <sensitivityheader v-if="issensitivityheader"></sensitivityheader>
        <schematicsheader v-if="isschematicsheader"></schematicsheader>
        

    </div>
</template>

<script>
import settingsheader from 'components/inputheaders/settingsheader.vue';
import sensitivityheader from 'components/inputheaders/sensitivityheader.vue';
import schematicsheader from 'components/inputheaders/schematicsheader.vue';

export default {
    components:{
        settingsheader,
        sensitivityheader,
        schematicsheader
    },
    props:{
        issettingsheader: {
            type: Boolean,
            default:true,
        },
        issensitivityheader: {
            type: Boolean,
            default:false,
        },
        isschematicsheader: {
            type: Boolean,
            default:false,
        }
    }
    
}
</script>