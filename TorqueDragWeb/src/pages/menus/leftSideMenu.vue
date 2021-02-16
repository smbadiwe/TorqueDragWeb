<template>
    <div class="row bg-primary  text-accent" style="min-width: 700px;">
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

                 <q-separator dark horizontal/>

                <q-item 
                v-for="item in menuList2" :key="item.label"
                clickable v-ripple
                 @click="listItemClickAction(item.label)">
                    <q-item-section avatar>
                    <q-icon color="accent" 
                    :name="item.iconName" />
                    </q-item-section>

                    <q-item-section>{{ item.label}}</q-item-section>
                </q-item>

            </q-list>
        </div>

         <!-- <q-separator vertical dark /> -->

        <div class="col-8 q-pa-sm bg-positive">
            <recentProjects></recentProjects>
        </div>


         <q-dialog v-model="isCreateWellDesign" class="bg-primary">
            <div class="q-pa-sm bg-primary">
                <createWellDesign></createWellDesign>
            </div>
        </q-dialog>

        <q-dialog v-model="isWellExplorer" class="bg-primary">
            <div class="q-pa-sm bg-primary">
                <wellList></wellList>
            </div>
        </q-dialog>

    </div>
</template>

<script>
import createWellDesign from "components/createWellDesign.vue"
import wellList from "pages/inputdata/wellList.vue"
import recentProjects from "pages/menus/recentProjects.vue"

export default {
    computed:{
         isCreateWellDesign(){
            return this.$store.getters['wellDesignStore/isCreateWellDesign'];
        },
        isWellExplorer(){
            return this.$store.getters['wellDesignStore/isWellExplorer'];
        }
    },
    components:{
        createWellDesign,
        wellList,
        recentProjects
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
              label: "Well Explorer",
              iconName: "account_tree"
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
                  this.$store.commit('wellDesignStore/SetCreateWellDesign', true);
                  this.$store.commit('wellDesignStore/SetIsWellExplorer', false);
                  break;
             case "Open":
                 this.$store.commit('wellDesignStore/SetCreateWellDesign', false);
                 this.$store.commit('wellDesignStore/SetIsWellExplorer', false);
                  break;
            case "Save":
                  this.$store.commit('wellDesignStore/SetCreateWellDesign', false);
                  this.$store.commit('wellDesignStore/SetIsWellExplorer', false);
                  break;
            case "Save As":
                  this.$store.commit('wellDesignStore/SetCreateWellDesign', false);
                  this.$store.commit('wellDesignStore/SetIsWellExplorer', false);
                  break;
            case "Recent Projects":
                  this.$store.commit('wellDesignStore/SetCreateWellDesign', false);
                  this.$store.commit('wellDesignStore/SetIsWellExplorer', false);
                  break;
            case "Well Explorer":
                console.log("Well Explorer 1")
                this.$store.commit('wellDesignStore/SetCreateWellDesign', false);
                console.log("Well Explorer 2")
                this.$store.commit('wellDesignStore/SetIsWellExplorer', true);
                console.log("Well Explorer 3")
                break;
            case "Exit":
                  this.$store.commit('wellDesignStore/SetCreateWellDesign', false);
                  this.$store.commit('wellDesignStore/SetIsWellExplorer', false);
                  break;
          }
      }
  }
}
</script>

<style scoped>

</style>