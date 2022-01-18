<template>
     <div class="row">
              <div :class="'col-'+ col1 + ' q-pa-sm text-accent'">
                {{ variableName }}: 
              </div>

            <div :class="'col-'+ col2 + ' q-pa-sm text-accent'">
              <select style="width:100%;"
              class="text-center bg-positive text-accent"
                :name="variableName"
                id="" 
                v-on:change="onSelectionChanged($event)">
                  <option
                    v-for="item in listOfData" :key="item.id">
                    {{ item.datumName }}
                  </option>
              </select>
              </div>
            </div>
</template>

<script>

export default {
  components:{
  },
  props: {
    col1: {
        type: String,
        default: "3"
    },
    col2: {
        type: String,
        default: "5"
    },
    col3: {
        type: String,
        default: "4"
    },
    variable: {
        type: String,
        default: ""
    },
    variableName: {
        type: String,
        default: ""
    },
    listOfData :{
        type: Array,
        default: []
    }
  },
  data () {
    return {
    }
  },
  methods: {
      getWeight(){
          var context = this;

          return context.variableName;
      },
      onSelectionChanged(e){
      var context = this;
       var id = e.target.value;
        var name = e.target.options[e.target.options.selectedIndex].text;
        this.$emit('onSelectionChanged', name);
    },
  }
}
</script>


<style scoped>

</style>