<template>
    <div>
        <settingsview v-if="issettingsheader"></settingsview>
        <schematicsview v-if="isschematicsheader"></schematicsview>
        <sensitivityview v-if="issensitivityheader"></sensitivityview>
    </div>
</template>

<script>
import settingsview from 'pages/inputdata/analysisSettings.vue'
import schematicsview from 'pages/inputdata/wellList.vue';
import sensitivityview from 'pages/inputdata/sensitivity.vue';

export default {
    components:{
        settingsview,
        schematicsview,
        sensitivityview
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
        isschematicsheader:{
            type: Boolean,
            default:false
        }
    }
}
</script>

<style scoped>

</style>