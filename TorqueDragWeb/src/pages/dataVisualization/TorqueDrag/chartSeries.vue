<template>
    <div class="q-pa-sm">
        <q-list bordered separator>
            <q-item 
            v-for="seriesName in seriesNames" :key="seriesName"
            clickable v-ripple>
                <q-item-section
                @ondragstart="drag(event)">seriesName</q-item-section>
            </q-item>
            </q-list>
    </div>
</template>

<script>
export default {
    computed:{
        seriesNames(){
          return this.$store.getters['dataVisualizationStore/seriesNames'];
        }
    },
    methods: {
        drag(ev) {
            ev.dataTransfer.setData("text", ev.target.id);
            console.log("dragged text: ", ev.target.id)
        }
    },
    
}
</script>