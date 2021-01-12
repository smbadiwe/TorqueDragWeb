<template>
  <div>
    <q-toolbar class=" bg-dark text-white q-my-md">

       <div>
            <div class="row buttonTD1">
                  <div class="q-pa-sm text-caption">
                    <q-btn 
                    icon="play_arrow" 
                    flat
                    stretch
                    size="sm" 
                    label="Run"
                    class="text-capitalize"
                    stack 
                    @click="RunSimulation"
                    >
                </q-btn>
                </div>
            </div>

          <div class="row buttonTD2">
          </div>

            <div class="row buttonTD3">
                <div class="col-12 q-pt-sm text-center">
                    Simulation
                </div>
            </div>
       </div>

      <q-separator dark vertical />

      <div>
        <div class="row buttonTD1">
              <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="legend_toggle" 
                    flat
                    size="sm" 
                    label="Effective Tension"
                    class="text-capitalize"
                    stack 
                    @click="effectiveTensionPlots">
                </q-btn>
              </div>

              <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="align_horizontal_center"
                    stretch 
                    flat
                    size="sm"  
                    label="Normal Force"
                    class="text-capitalize"
                    stack
                    @click="normalForcePlots" >
                </q-btn>    
              </div>

            <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="align_horizontal_left" 
                    stretch
                    flat
                    size="sm"  
                    label="Hook Load"
                    class="text-capitalize"
                    stack 
                     @click="hookLoadPlots">
                </q-btn>
            </div>

            <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="align_horizontal_right" 
                    stretch
                    flat
                    size="sm" 
                    label="Torque"
                    class="text-capitalize"
                    stack
                    @click="torquePlots" >
                </q-btn>
                </div>

            <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="align_vertical_bottom" 
                    stretch
                    flat
                    size="sm" 
                    label="Drag"
                    class="text-capitalize"
                    stack
                    @click="dragPlots" >
                </q-btn>
            </div>

            
        </div>
        
        <div class="row buttonTD2">
        </div>
        
        <div class="row buttonTD3">
            <div class="col-12 q-pt-sm text-center">
                Plots
            </div>
        </div>
      </div>

      <q-separator dark vertical />

      
      <div>
        <div class="row buttonTD1">
              <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="table_chart" 
                    flat
                    size="sm" 
                    label="Tripping In"
                    class="text-capitalize"
                    stack 
                    @click="TrippingInDetails">
                </q-btn>
              </div>

              <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="table_rows"
                    stretch 
                    flat
                    size="sm"  
                    label="Tripping Out"
                    class="text-capitalize"
                    stack 
                    @click="TrippingOutDetails">
                </q-btn>    
              </div>

            <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="reorder" 
                    stretch
                    flat
                    size="sm"  
                    label="Rotating On Bottom"
                    class="text-capitalize"
                    stack 
                    @click="RotatingOnBottomDetails">
                </q-btn>
            </div>

            <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="view_list" 
                    stretch
                    flat
                    size="sm" 
                    label="Slide Drilling"
                    class="text-capitalize"
                    stack
                    @click="SlideDrillingDetails">
                </q-btn>
                </div>

            <div class="q-pa-sm text-caption col">
                <q-btn 
                    icon="list_alt" 
                    stretch
                    flat
                    size="sm" 
                    label="Back reaming"
                    class="text-capitalize"
                    stack 
                    @click="BackReamingDetails">
                </q-btn>
            </div>

            
        </div>
        
        <div class="row buttonTD2">
        </div>
        
        <div class="row buttonTD3">
            <div class="col-12 q-pt-sm text-center">
                Report
            </div>
        </div>
      </div>
      
      
    </q-toolbar>
  </div>
</template>



<style scoped>
.buttonTD1 {
    height:40px;
}

.buttonTD2 {
    height:10px;
}

.buttonTD3 {
    height:20px;
}
</style>