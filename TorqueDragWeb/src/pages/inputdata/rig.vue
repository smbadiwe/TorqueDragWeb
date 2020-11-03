<template>
    <div>
        <div class="row q-pa-sm">
            <div class="col-12">
            Mechanical Limits
            <br>
            <hr/>
            </div>

            <div class="col-5"><q-checkbox v-model="isBlockRating" label="Block rating:" color="primary" /></div>
            <div class="col-3 q-pt-sm">1,500 kip</div>
            <div class="col-4"></div>

            <div class="col-5"><q-checkbox v-model="isTorqueRating" label="Torque rating:" color="primary" /></div>
            <div class="col-3  q-pt-sm">50,000 ft-lbf</div>
            <div class="col-4"></div>
    
        </div>

        <div class="row q-pa-sm">
            <div class="col-12">
            Circulating System
            <br>
            <hr/>
            </div>

            <div class="col-5">Rated working pressure</div>
            <div class="col-4"></div>
            <div class="col-3">5,000 psi</div>
            

            <div class="col-4 q-pa-sm">
                Mud Pumps 
            </div>
            <div class="col-4 q-pa-sm">
                <q-btn  icon="add_box"
                    size="sm"
                    flat>
                    <q-tooltip>
                        Add mud pump
                    </q-tooltip>
                </q-btn>
            </div>

            <div class="col-4 q-pa-sm">
                <q-btn 
                    size="sm"
                    label="Add from catalog">
                </q-btn>
            </div>
    
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isBlockRating: true,
            isTorqueRating: true
        }
    },
    created(){
      var tabCaption = "Rig Equipment";
      this.$store.commit('settingsStore/GetTabCaption', tabCaption);
    }
}
</script>