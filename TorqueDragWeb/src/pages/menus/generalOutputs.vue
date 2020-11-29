<template>
   <div>
        <div class="row bg-accent text-primary" style="height:140px;">
               <div class="col-1 vl">
                <div class="row" style="height:100px">
                     <div class="col q-pa-sm text-caption buttonHover" style="height:50px;"
                        clickable
                        @click="DrawSchematic">
                        <img
                        class="object-fit-cover"
                        src="~assets/images/well_1.jpg">
                        <br/>
                        Draw Well
                    </div>

                </div>

                <div class="row" style="height:20px">
                    <div class="col-12 q-pb-md q-pt-sm text-center">
                        Well Schematic
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    computed: {
    },
    components: {
    },
    data(){
        return {
        }

    },
    methods: {
        DrawSchematic(){
            var context =  this;
            var Conn = this.$store.getters['authStore/companyName'];
            var selectedTorqueDragDesign = this.$store.getters['wellDesignStore/SelectedTorqueDragDesign']
            this.$store.dispatch('simulationStore/DrawSchematic', {
                companyName: Conn,
                designId: selectedTorqueDragDesign.id,
                canvasDepth: 500,
                canvasWidth: 800,
                xCanvasOffset: 50,
                yCanvasOffset: 20
            });
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