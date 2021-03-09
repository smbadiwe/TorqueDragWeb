<template>
    <!-- <div id="Component_31__38" class="Component_31___38">
        <svg class="Path_67_ew" viewBox="0 0 102 34">
            <linearGradient id="Path_67_ew" spreadMethod="pad" x1="0.488" x2="0.488" y1="0.5" y2="-0.441">
                <stop offset="0" stop-color="#323232" stop-opacity="1"></stop>
                <stop offset="0.6109" stop-color="#444" stop-opacity="1"></stop>
                <stop offset="1" stop-color="#767676" stop-opacity="1"></stop>
            </linearGradient>
            <path id="Path_67_ew" d="M 0 0 L 102 0 L 102 34 L 0 34 L 0 0 Z">
            </path>
        </svg>
        <div id="Datum" clickable
        @click="showdatum">
            <span>Datum</span>
        </div>
    </div> -->
    <!-- <div class="Path_67_ew" id="Path_67_ew"> -->
        <div 
            id="Datum" clickable
            @click="showdatum"
            class="vl">
                <span class="Datum">Datum</span>
        </div>
    <!-- </div> -->
</template>

<script>
export default {
    methods:{
        showdatum(){
            this.$emit('showdatum');
             /* this.$store.commit('authStore/SetActiveViews', {
                isdatum: true,
                iswellpath: false,
                ishole: false,
                istubingstring: false,
                isrig: false,
                isfluids: false,
                issubsurface: false,
                isoperations: false
            }); */
        }
    }
    
}
</script>

<style scoped>

    #Path_67_ew {
	fill: url(#Path_67_ew);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
    }

    .Path_67_ew {
        overflow: visible;
        position: absolute;
        transform-origin: center;
    }

    #Datum {
        transform: translate(-5px, 30px) rotate(-90deg);
        transform-origin: center;
        position: absolute;
        overflow: visible;
        white-space: nowrap;
        text-align: left;
        color: rgba(214,214,214,1);
    }

    .vl {
  border: 0.5px solid rgba(112,112,112,1);
  height: 100px;
}

</style>