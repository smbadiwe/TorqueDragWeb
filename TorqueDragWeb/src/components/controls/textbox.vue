<template>
    <div class="row">
        <div v-if="hasUnit" :class="'col-'+ col1 + ' q-pt-sm text-accent'">{{ variableName }} ({{ unit }})</div>
        <div v-else :class="'col-'+ col1 + ' q-pt-sm text-accent'">{{ variableName }}</div>
        <div :class="'col-'+ col2 + ' q-pa-sm text-accent'">
            <input class="text-center bg-positive text-accent" 
            :value="variable"
            @input="$emit('input',$event.target.value)"
            style="border: 1px solid transparent;">
        </div>
        <!-- <div
         :class="'col-'+ col2 + ' q-pa-sm text-accent'">
            <q-tooltip>
                {{ toolTipDescription }}
            </q-tooltip>
            <input class="text-center bg-positive text-accent" 
            :value="variable"
            @input="$emit('input',$event.target.value)" 
            style="border: 1px solid red;">
        </div> -->
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
    unit: {
        type: String,
        default: ""
    },
    hasUnit: {
        type: Boolean,
        default: false
    },
    toolTipDescription: {
        type: String,
        default: ""
    }
  },
  data () {
    return {
        //border: "border: 1px solid red;"
        
    }
  },
  methods: {
      setBorder(){
          var context =  this;
          //console.log("context.variable: ", context.variable)
          if(context.variable != "" && 
          context.variable != null && context.variable != undefined){
              return true;
          }
          return false;
      },
      getWeight(){
          var context = this;

          return context.variableName;
      }
  },
  mounted(){
      /* var context =  this;
          console.log(context.variable)
          if(context.variable != ""){
              context.border = "border: 1px solid yellow;"
              console.log(context.border)
          } */
           
  }
}
</script>


<style scoped>

</style>