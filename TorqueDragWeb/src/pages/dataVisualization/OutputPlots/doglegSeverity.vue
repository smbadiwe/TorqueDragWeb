<template>
    <div style="height: 1100px;">
        <chart
        ></chart>
    </div>
</template>

<script>
import chart from  'pages/dataVisualization/chart.vue'
export default {
    components:{
        chart
    },
    created(){
        var Conn = this.$store.getters['authStore/companyName'];
        var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign'];
        var payload = {
            companyName: Conn,
            designId: selectedTorqueDragDesign.id
        }
        this.$store.dispatch('wellPathStore/LoadDevSurveySeriesCollection', payload);
    }
}
</script>