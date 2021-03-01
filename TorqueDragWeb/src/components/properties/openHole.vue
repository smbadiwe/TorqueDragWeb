<template>
    <div class="row">
        <div class="col-12 q-pa-sm">
            <table>
                <tr>
                    <th>Property</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Background-color</td>
                    <td>
                        <div class="row">
                            <div class="col-12">
                                <input class="text-center bg-positive text-accent" type="color" id="formationColor" name="formationColor"
                                v-model="colorOpenHoleAnnulus"
                                style="width:100%" @change="onColorChanged">
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Annulus</td>
                    <td>
                        <div class="row">
                            <div class="col-12">
                                <input type="range" min="1" max="15" v-model="holeAnnulus" style="width:100%">
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
       
    },
    data(){
        return {
            colorOpenHoleAnnulus: 'gray',
            holeAnnulus: 10
        }
    },
    methods:{
        onColorChanged(){
            var context =  this;
            //console.log("colorFormation: ", context.colorFormation);
            this.$store.commit('propertyGridStore/setOpenHoleProperties', {
            colorOpenHoleAnnulus:  context.colorOpenHoleAnnulus,
            holeAnnulus: context.holeAnnulus 
            });
        }
    }
}
</script>