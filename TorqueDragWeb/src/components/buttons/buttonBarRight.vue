<template>
    <div>
        <settingsbutton v-on:showsettings="showsettings"></settingsbutton>
        <sensitivitybutton v-on:showsensitivity="showsensitivity"></sensitivitybutton>
        <schematicbutton v-on:showschematics="showschematics"></schematicbutton>
    </div>
</template>

<script>

import settingsbutton from 'components/buttons/settingsbutton.vue';
import sensitivitybutton from 'components/buttons/sensitivitybutton.vue';
import schematicbutton from 'components/buttons/schematicbutton.vue';

export default {
    components:{
/*         analysis,
        dataReader,
        reports, */
        settingsbutton,
        sensitivitybutton,
        schematicbutton
    },
    data(){
        return {
            activeViews: {
                issettingsheader:true,
                issensitivityheader: false,
                ispropertyMainheader: false,
            }
        }
    },
    methods:{
        showsettings(){
            var context =  this;
            context.activeViews.issettingsheader = true,
            context.activeViews.issensitivityheader =  false;
            context.activeViews.ispropertyMainheader = false;
            this.$emit('updatepropRight', context.activeViews);
        },
        showsensitivity(){
            var context =  this;
            context.activeViews.issettingsheader = false,
            context.activeViews.issensitivityheader =  true;
            context.activeViews.ispropertyMainheader = false;
            this.$emit('updatepropRight', context.activeViews);
        },
        showschematics(){
            
            var context =  this;
            context.activeViews.issettingsheader = false,
            context.activeViews.issensitivityheader =  false;
            context.activeViews.ispropertyMainheader = true;
            //console.log("showschematics buttonBarRight")
            this.$emit('updatepropRight', context.activeViews);
        }
    }
    
}
</script>