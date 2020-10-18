<template>
    <div style="height:100vh;">
        <div class="row">
            <div class="col-12">
                <q-card class="my-card" flat > 

                    <q-card-section class="bg-primary text-white text-center">
                        <div class="row">
                            <div class="col-12">
                                <div class="text-h6">Mud Details</div>
                            </div>
                        </div>
                    </q-card-section>

                    <q-card-section class="bg-primary text-white text-center">
                        <div class="row">
                            <div class="col-3 q-pa-sm">Name:</div>
                            <div class="col-3"></div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                        </div>

                        <div class="row">
                            <div class="col-3 q-pa-sm">Description:</div>
                            <div class="col-3"></div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                        </div>

                        <div class="row">
                            <div class="col-12 q-pa-sm text-left">
                                Fluid Composition
                                <br>
                                <hr/>
                            </div>

                            <div class="col-6 q-pa-sm">
                                Mud base type: 
                            </div>
                            <div class="col-6 q-pa-sm">
                               <select v-model="selected" style="width:100%;">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                               </select>
                            </div>

                            <div class="col-6 q-pa-sm">
                                Base Fluid: 
                            </div>
                            <div class="col-6 q-pa-sm">
                               <select v-model="selected" style="width:100%;">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                               </select>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-12 q-pa-sm text-left">
                                Rheology Tests
                                <br>
                                <hr/>
                            </div>

                            <div class="col-6 q-pa-sm">
                                Rheology model: 
                            </div>
                            <div class="col-6 q-pa-sm">
                               <select v-model="selected" style="width:100%;">
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                               </select>
                            </div>

                            <div class="col-6 q-pa-sm">
                                <input type="radio" id="one" value="One" v-model="picked">
                                <label for="one">Rheology</label>
                            </div>

                            <div class="col-6 q-pa-sm">
                                <input type="radio" id="two" value="Two" v-model="picked">
                                <label for="two">Fann</label>
                            </div>

                            <div class="col-12 q-pa-sm text-right"> 
                                <q-btn 
                                    size="sm"
                                    label="Import">
                                </q-btn>
                            </div>

                            <div class="col-12 q-pa-sm"> 
                            <q-table  
                            :data="mudPVTs" 
                            :columns="columns" 
                            row-key="name" 
                            binary-state-sort
                            style="width:100%;">


                            <template v-slot:body="props">
                                <q-tr 
                                v-if ="!props.row.isPaid"
                                :props="props">
                                    <q-td key="temperature" :props="props">{{ props.row.temperature }}</q-td>
                                    <q-td key="pressure" :props="props">{{ props.row.pressure }}</q-td>
                                    <q-td key="reference" :props="props">{{ props.row.reference }}</q-td>
                                </q-tr>
                                </template>
                            </q-table>

                            </div>

                            <div class="col-3 q-pa-sm">Density:</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">sg</div>

                            <div class="col-3 q-pa-sm">Plastic viscosity:</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">cp</div>

                            <div class="col-3 q-pa-sm">Yeild point:</div>
                            <div class="col-6 q-pa-sm"><input v-model="message"></div>
                            <div class="col-3 q-pa-sm">lbf/100ftsq</div>

                            <div class="col-12 q-pa-sm text-left">
                                Fluid Plot
                                <br>
                                <hr/>
                            </div>

                        </div>

                    </q-card-section>

                </q-card>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    computed:{
        mudPVTs() {
        return this.$store.getters['fluidsStore/mudPVTs'];
        }
    },
    data () {
    return {
      shape: 'line',
      picked: '',
      columns: [
            { name: "temperature", label: "Temperature (deg F)", field: "", align: "left" },
            { name: "pressure", label: "Pressure (psi)", field: "", align: "left" },
            { name: "reference", label: "reference", field: "", align: "left" }
        ]
    }
  }
}
</script>

<style scoped>
.my-card {
    border: none;
}
</style>