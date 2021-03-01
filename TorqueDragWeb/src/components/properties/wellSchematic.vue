<template>
    <div class="bg-primary text-accent">
        <div class="row">
            <div class="col-12 q-pa-sm">
                <select style="width:100%;"
                class="text-center bg-positive text-accent"
                name="NameOfPropertyList1"
                id="" 
                v-on:change="onItemSelectionChanged($event)">
                    <option
                    v-for="propertyItem in propertyLists1" :key="propertyItem.id">
                    {{ propertyItem.name }}
                    </option>
                </select>
            </div>

            <div class="col-12 q-pa-sm">
                <select style="width:100%;"
                class="text-center bg-positive text-accent"
                name="NameOfPropertyList2"
                id="" 
                v-on:change="onItem2SelectionChanged($event)">
                    <option
                    v-for="propertyItem in propertyLists2" :key="propertyItem.id">
                    {{ propertyItem.name }}
                    </option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <formation v-if="isFormation"></formation>
                <openHole v-if="isOpenHole"></openHole>
                <buckling v-if='isBuckling'></buckling>
            </div>
        </div>
    </div>
</template>

<script>
import formation from 'components/properties/formation.vue'
import openHole from 'components/properties/openHole.vue'
import buckling from 'components/properties/buckling.vue'
export default {
    computed:{
        propertyLists1(){
            return this.$store.getters['propertyGridStore/propertyLists1'];
        },
        propertyLists2(){
            return this.$store.getters['propertyGridStore/propertyLists2'];
        },
        isFormation(){
            return this.$store.getters['propertyGridStore/isFormation'];
        },
        isOpenHole(){
            return this.$store.getters['propertyGridStore/isOpenHole'];
        },
        isBuckling(){
            return this.$store.getters['propertyGridStore/isBuckling'];
        }
    },
    components:{
        formation,
        openHole,
        buckling
    },
    data(){
        return {

        }
    },
    methods:{
        onItemSelectionChanged(e){
            var context = this;
            //var id = e.target.value;
            var name = e.target.options[e.target.options.selectedIndex].text;
            console.log(name)
            var payload = {
                isFormation: false,
                isOpenHole: false,
                isBuckling: false
            }

            switch(name){
                case 'Formation':
                    payload.isFormation = true;
                    break;
                case 'Open Hole':
                    payload.isOpenHole = true;
                    break;
                case 'Buckling':
                    payload.isBuckling = true;
                    break;
            }

            this.$store.commit('propertyGridStore/setActivePropertyView', payload);
        },
        onItem2SelectionChanged(e){
            var context = this;
            //var id = e.target.value;
            var name = e.target.options[e.target.options.selectedIndex].text;

        }
    },
    created(){
        var tabCaption = "Property Grid";
        this.$store.commit('settingsStore/GetTabCaptionRight', tabCaption);
    }
}
</script>

<style>

</style>