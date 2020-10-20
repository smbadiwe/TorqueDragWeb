<template>
    <div>

        <div class="row" style="height: 450px;">
            <div class="col-12">
                <q-expansion-item
                    v-model="expandedTDrmalAnalysis"
                    dense
                    dense-toggle
                    expand-separator
                    label="T & D Normal Analysis"
                    class="text-left"
                    >

                    <div class="row">
                        <div class="col-12">
                            <q-card class="my-card" flat > 

                                <q-card-section class="bg-primary text-white text-center">

                                    <div class="row">
                                        <div class="col-12 q-pa-sm text-left">
                                            <input type="checkbox" id="checkbox" v-model="checked">
                                            <label for="checkbox"> Tripping In </label>
                                            <br>
                                            <hr/>
                                        </div>

                                        <div class="col-12">
                                            <q-expansion-item
                                                v-model="expandedTrippingIn"
                                                dense
                                                dense-toggle
                                                expand-separator
                                            >
                                                    <div class="row">

                                                            <div class="col-3 q-pa-sm">Speed</div>
                                                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                                                            <div class="col-3 q-pa-sm">ft/min</div>

                                                            <div class="col-3 q-pa-sm">RPM</div>
                                                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                                                            <div class="col-3 q-pa-sm">rpm</div>

                                                    </div>
                                            </q-expansion-item>
                                        </div>
                                    </div>
                            

                                    <div class="row">
                                        <div class="col-12 q-pa-sm text-left">
                                            <input type="checkbox" id="checkbox" v-model="checked">
                                            <label for="checkbox"> Tripping Out </label>
                                            <br>
                                            <hr/>
                                        </div>

                                        <div class="col-12">
                                            <q-expansion-item
                                                v-model="expandedTrippingOut"
                                                dense
                                                dense-toggle
                                                expand-separator
                                            >
                                                    <div class="row">

                                                        <div class="col-3 q-pa-sm">Speed</div>
                                                        <div class="col-6 q-pa-sm"><input v-model="message"></div>
                                                        <div class="col-3 q-pa-sm">ft/min</div>

                                                        <div class="col-3 q-pa-sm">RPM</div>
                                                        <div class="col-6 q-pa-sm"><input v-model="message"></div>
                                                        <div class="col-3 q-pa-sm">rpm</div>
                                                    </div>
                                            </q-expansion-item>
                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="col-12 q-pa-sm text-left">
                                            <input type="checkbox" id="checkbox" v-model="checked">
                                            <label for="checkbox"> Rotating On Bottom </label>
                                            <br>
                                            <hr/>
                                        </div>

                                        <div class="col-12">
                                            <q-expansion-item
                                                v-model="expandedRotatingOnBottom"
                                                dense
                                                dense-toggle
                                                expand-separator
                                            >
                                                    <div class="row">

                                                        <div class="col-3 q-pa-sm">Speed</div>
                                                        <div class="col-6 q-pa-sm"><input v-model="message"></div>
                                                        <div class="col-3 q-pa-sm">ft/min</div>

                                                        <div class="col-3 q-pa-sm">RPM</div>
                                                        <div class="col-6 q-pa-sm"><input v-model="message"></div>
                                                        <div class="col-3 q-pa-sm">rpm</div>
                                                    </div>
                                            </q-expansion-item>
                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="col-12 q-pa-sm text-left">
                                            <input type="checkbox" id="checkbox" v-model="checked">
                                            <label for="checkbox"> Slide Drilling </label>
                                            <br>
                                            <hr/>
                                        </div>

                                        <div class="col-12">
                                            <q-expansion-item
                                                v-model="expandedSlideDrilling"
                                                dense
                                                dense-toggle
                                                expand-separator
                                            >
                                                    <div class="row">

                                                            <div class="col-3 q-pa-sm">WOB</div>
                                                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                                                            <div class="col-3 q-pa-sm">kip/min</div>

                                                            <div class="col-3 q-pa-sm">Torque at bit</div>
                                                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                                                            <div class="col-3 q-pa-sm">ft-lbf</div>
                                                    </div>
                                            </q-expansion-item>
                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="col-12 q-pa-sm text-left">
                                            <input type="checkbox" id="checkbox" v-model="checked">
                                            <label for="checkbox"> Back Reaming </label>
                                            <br>
                                            <hr/>
                                        </div>

                                        <div class="col-12">
                                            <q-expansion-item
                                                v-model="expandedBackReaming"
                                                dense
                                                dense-toggle
                                                expand-separator
                                            >
                                                    <div class="row">

                                                            <div class="col-3 q-pa-sm">WOB</div>
                                                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                                                            <div class="col-3 q-pa-sm">kip/min</div>

                                                            <div class="col-3 q-pa-sm">Torque at bit</div>
                                                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                                                            <div class="col-3 q-pa-sm">ft-lbf</div>
                                                    </div>
                                            </q-expansion-item>
                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="col-12 q-pa-sm text-left">
                                            <input type="checkbox" id="checkbox" v-model="checked">
                                            <label for="checkbox"> Rotating Off Bottom </label>
                                            <br>
                                            <hr/>
                                        </div>

                                        <div class="col-12">
                                            <q-expansion-item
                                                v-model="expandedRotatingOffBottom"
                                                dense
                                                dense-toggle
                                                expand-separator
                                            >
                                                    <div class="row">

                                                            <div class="col-3 q-pa-sm">WOB</div>
                                                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                                                            <div class="col-3 q-pa-sm">kip/min</div>

                                                            <div class="col-3 q-pa-sm">Torque at bit</div>
                                                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                                                            <div class="col-3 q-pa-sm">ft-lbf</div>
                                                    </div>
                                            </q-expansion-item>
                                        </div>

                                    </div>

                                </q-card-section>

                            </q-card>
                        </div>
                    </div>

                </q-expansion-item>
            </div>
        </div>

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            expandedTDrmalAnalysis: false,
            expandedTrippingIn: false,
            expandedTrippingOut: false,
            expandedRotatingOnBottom: false,
            expandedSlideDrilling: false,
            expandedBackReaming: false,
            expandedRotatingOffBottom: false,
            checked: false
        }
    }
}
</script>

<style scoped>
.my-card {
    border: none;
}
</style>