<template>
    <div class="row bg-positive  text-accent" style="height: 500px;">
        <div class="col-4 q-pa-sm">   
            <q-list bordered>
                <q-item 
                v-for="item in menuList1" :key="item.label"
                clickable v-ripple
                @click="listItemClickAction(item.label)">
                    <q-item-section avatar>
                    <q-icon color="accent" 
                    :name="item.iconName" />
                    </q-item-section>

                    <q-item-section>{{ item.label}}</q-item-section>
                </q-item>

                 <q-separator accent horizontal/>

                <q-item 
                v-for="item in menuList2" :key="item.label"
                clickable v-ripple>
                    <q-item-section avatar>
                    <q-icon color="accent" 
                    :name="item.iconName" />
                    </q-item-section>

                    <q-item-section>{{ item.label}}</q-item-section>
                </q-item>

            </q-list>
        </div>

         <q-dialog v-model="isCreateWellDesign" class="bg-primary">
            <div class="q-pa-sm bg-primary">
                <createWellDesign></createWellDesign>
            </div>
        </q-dialog>

        <div class="col-8 q-pa-sm">

        </div>
    </div>
</template>

<script>
import createWellDesign from "components/createWellDesign.vue"
export default {
    computed:{
         isCreateWellDesign(){
            return this.$store.getters['wellDesignStore/isCreateWellDesign'];
        }
    },
    components:{
        createWellDesign
    },
    data () {
    return {
      menuList1: [
          {
              label: "New",
              iconName: "create_new_folder"
          },
          {
              label: "Open",
              iconName: "folder_open"
          },
          {
              label: "Save",
              iconName: "save"
          }
      ],
       menuList2: [
          {
              label: "Save As",
              iconName: "save_alt"
          },
          {
              label: "Recent Projects",
              iconName: "reorder"
          },
          {
              label: "Exit",
              iconName: "disabled_by_default"
          }
      ]
    }
  },
  methods:{
      listItemClickAction(selectedItem){
          var context = this;
          switch(selectedItem){
              case "New":
                  this.$store.commit('wellDesignStore/ShowCreateWellDesign', true);
                  break;
             case "Open":
                  context.createWellVisibility = false;
                  break;
            case "Save":
                  context.createWellVisibility = false;
                  break;
            case "Save As":
                  context.createWellVisibility = false;
                  break;
            case "Recent Projects":
                  context.createWellVisibility = false;
                  break;
            case "Exit":
                  context.createWellVisibility = false;
                  break;
          }
      }
  }
}
</script>

<style scoped>

</style>