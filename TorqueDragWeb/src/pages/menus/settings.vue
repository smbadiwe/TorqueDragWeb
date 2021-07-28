<template>
    <div class="bg-primary text-accent">
         <div class="row">
            <div class="col-12">
                 <q-card class="my-card bg-secondary text-white" style="height:70px;">
                    <q-card-section align="right">
                        <div class="row">
                            <div class="col text-center text-subtitle1 q-pb-md">Settings</div>
                            <q-space />
                            <q-btn dense flat icon="close"
                            class="q-pa-sm"
                            @click="closeDialog" />
                        </div>
                    </q-card-section>
                    </q-card>
            </div>
        </div>
        <div class="row bg-primary text-accent">
            <q-expansion-item
                v-model="expandSettings"
                dense
                dense-toggle
                expand-separator
                label="Modules for Simulation"
                clickable
                class="bg-primary text-accent">
            
                <q-list bordered padding>

                <q-item tag="label" v-ripple>
                    <q-item-section>
                    <q-item-label>Torque and Drag</q-item-label>
                    </q-item-section>
                    <q-item-section side >
                    <q-toggle color="green" v-model="modulesParams.torqueAndDrag" val="battery" />
                    </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                    <q-item-section>
                    <q-item-label>Hydraulics</q-item-label>
                    </q-item-section>
                    <q-item-section side >
                    <q-toggle color="green" v-model="modulesParams.hydraulics" val="battery" />
                    </q-item-section>
                </q-item>
                <q-item tag="label" v-ripple>
                    <q-item-section>
                    <q-item-label>Surge and Swab</q-item-label>
                    </q-item-section>
                    <q-item-section side >
                    <q-toggle color="green" v-model="modulesParams.surgeAndSwab" val="battery" />
                    </q-item-section>
                </q-item>
                </q-list>
            </q-expansion-item>
        </div>
    </div>
</template>

<script>
export default {
     computed:{
        modulesParams() {
            return this.$store.getters['simulationStore/modulesParams'];
        }
    },
    data(){
        return {
            expandSettings: true
        }
    },
    methods:{
         closeDialog(){
         this.$store.commit('settingsStore/setIsSetting', false);
      },
    }
}
</script>

<style scoped>

</style>