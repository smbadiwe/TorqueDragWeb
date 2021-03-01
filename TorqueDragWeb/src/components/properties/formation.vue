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
                                 v-model="colorFormation"
                                style="width:100%" @change="onColorChanged">
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Vertical Offset</td>
                    <td>
                        <div class="row">
                            <div class="col-12">
                                <input  class="text-center bg-positive text-accent"
                                v-model="yOffSet"
                                style="width:100%" @change="onColorChanged">
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
            colorFormation: '#a26c37',
            yOffSet: 0
        }
    },
    methods:{
        onColorChanged(){
            var context =  this;
            //console.log("colorFormation: ", context.colorFormation);
            this.$store.commit('propertyGridStore/setFormationProperties', {
            colorFormation:  context.colorFormation,
            yOffSet: context.yOffSet 
            });
        }
    }
}
</script>