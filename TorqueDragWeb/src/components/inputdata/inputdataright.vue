<template>
    <div class="col-12 bg-warning">
        <settingsview v-if="issettingsheader"></settingsview>
        <propertyMain v-if="ispropertyMainheader"></propertyMain>
        <sensitivityview v-if="issensitivityheader"></sensitivityview>
    </div>
</template>

<script>
import settingsview from 'pages/inputdata/analysisSettings.vue'
import propertyMain from 'components/properties/propertyMain.vue';
import sensitivityview from 'pages/inputdata/sensitivity.vue';

export default {
    components:{
        settingsview,
        propertyMain,
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
        ispropertyMainheader:{
            type: Boolean,
            default:false
        }
    }
}
</script>

<style scoped>

</style>