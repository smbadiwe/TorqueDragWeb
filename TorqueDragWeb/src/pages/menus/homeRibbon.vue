<template>
   <div>
        <div class="row bg-accent text-primary" style="height:140px;">
               <div class="col-1 vl">
                <div class="row" style="height:100px">
                     <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        clickable
                        @click="createWellCase">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_1.jpg">
                        <br/>
                        New Well Case
                    </div>

                    <q-dialog v-model="isCreateWellDesign" class="bg-accent">
                    <div class="q-pa-sm bg-accent">
                        <createWellDesign-app></createWellDesign-app>
                    </div>
                </q-dialog>

                </div>

                <!-- <div class="row" style="height:20px">
                    <div class="col-12 q-pb-md q-pt-sm text-center">
                        Simulation
                    </div>
                </div> -->
            </div>
        </div>
   </div>
</template>

<script>
import createWellDesign from 'components/createWellDesign.vue';
export default {
    computed: {
        isCreateWellDesign(){
            return this.$store.getters['wellDesignStore/isCreateWellDesign'];
        }
    },
    components: {
        'createWellDesign-app': createWellDesign
    },
    data(){
        return {
        }

    },
    methods: {
        createWellCase(){
            this.$store.commit('wellDesignStore/ShowCreateWellDesign');
        }
    }
}
</script>

<style>
.vl {
  border-right: 2px solid rgba(24,24,24,1);
  height: 140px;
}

.buttonHover:hover {
  background-color: grey;
}

#TrueTension:hover {
  background-color: grey;
}

#Torque:hover {
    background-color: grey;
}

.object-fit-cover {
  width: 100%;
  height: 100%;
  object-fit: cover; /*magic*/
}

</style>