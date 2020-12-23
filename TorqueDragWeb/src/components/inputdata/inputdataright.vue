<template>
    <div>
        <settingsview v-if="issettingsheader"></settingsview>
        <schematicsview v-if="issensitivityheader"></schematicsview>
        <sensitivityview v-if="isschematicsheader"></sensitivityview>
    </div>
</template>

<script>
import settingsview from 'components/inputdata/settingsview.vue';
import schematicsview from 'components/inputdata/schematicsview.vue';
import sensitivityview from 'components/inputdata/sensitivityview.vue';

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