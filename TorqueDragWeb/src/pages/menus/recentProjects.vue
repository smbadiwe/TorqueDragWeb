<template>
  <div class="q-pa-sm bg-positive text-accent" >
    
    <q-list bordered padding 
    class="rounded-borders bg-positive text-accent" 
    style="min-width: 350px">
      <q-item-label header>Recent Well Cases</q-item-label>

      <q-item 
        v-for="torqueDragMostRecentDesign in torqueDragMostRecentDesigns" :key="torqueDragMostRecentDesign.uniqueId"
        clickable v-ripple
        @click="GetSelectedTorqueDragDesign(torqueDragMostRecentDesign)"
        :active="torqueDragMostRecentDesign.isSelected"
        active-class="text-green mnu_active">
        <q-item-section>
          <q-item-label caption class="bg-positive text-accent">{{ torqueDragMostRecentDesign.designName }}  ({{ torqueDragMostRecentDesign.projectName }})</q-item-label>
        </q-item-section>

        <q-item-section side>
            <q-item-label caption class="bg-positive text-accent">{{ torqueDragMostRecentDesign.createdAt }}</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
  </div>
</template>

<script>
export default {
  computed:{
    torqueDragMostRecentDesigns(){
      return this.$store.getters['wellDesignStore/torqueDragMostRecentDesigns'];
    }
  },
  data () {
    return {
      active: true
    }
  },
  methods:{
    GetSelectedTorqueDragDesign(selectedItem){
            console.log(selectedItem)
            this.$store.dispatch('wellDesignStore/GetSelectedTorqueDragDesign', selectedItem)
        },
  }
}
</script>

<style scoped>

</style>
