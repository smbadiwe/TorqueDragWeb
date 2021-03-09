<template>
    <div class="row bg-secondary text-accent">
        <div class="col-12">
            <datumbutton></datumbutton>
        </div>
        

        <!-- <div 
        v-for="caption in captions" :key="caption"
        class="col-12 vl">
            <span class="Datum">{{ caption }}</span>
        </div> -->
        
    </div>
</template>

<script>
import datumbutton from 'components/buttons/datumbutton2.vue';
export default {
    components:{
        datumbutton
    },
    data(){
       return {
            captions: ['Datum', 'Wellpath', 'Hole', 'Strings', 'Fluids', 'Rigs', 'Subsurface', 'Operations']
       }
    }
}
</script>

<style scoped>

.vl {
  border: 0.5px solid rgba(255,255,255,1);
  height: 100px;
}

#Path_67_ew {
	fill: url(#Path_67_ew);
	/* stroke: rgba(112,112,112,1); */
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
    }

.Datum {
        transform: translate(-5px, 30px) rotate(-90deg);
        transform-origin: center;
        /* left: 0px;
        top: 0px; */
        position: absolute;
        overflow: visible;
        /* width: 44px; */
        white-space: nowrap;
        text-align: left;
        /* font-family: Segoe UI;
        font-style: normal;
        font-weight: lighter;
        font-size: 15px;
        color: rgba(214,214,214,1); */
}

verticaltext {
    transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);

    bottom: 45%;
    position: absolute;
    color: #ed217c;
}

.rotate {
    position: absolute;
    top: 50%;
    left: 50%;
}

.rotate-up {
    transform: translateX(-50%) translateY(-50%) rotate(-90deg)
}

.rotate-down {
    transform: translateX(-50%) translateY(-50%) rotate(90deg)
}

</style>