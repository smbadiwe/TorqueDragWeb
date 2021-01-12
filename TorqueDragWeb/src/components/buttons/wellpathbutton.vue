<template>
    <div id="Component_31__31" class="Component_31___31">
        <svg class="Path_67_d" viewBox="0 0 116 34">
            <linearGradient id="Path_67_d" spreadMethod="pad" x1="0.488" x2="0.488" y1="0.5" y2="-0.441">
                <stop offset="0" stop-color="#323232" stop-opacity="1"></stop>
                <stop offset="0.6109" stop-color="#444" stop-opacity="1"></stop>
                <stop offset="1" stop-color="#767676" stop-opacity="1"></stop>
            </linearGradient>
            <path id="Path_67_d" d="M 0 0 L 116 0 L 116 34 L 0 34 L 0 0 Z">
            </path>
        </svg>
        <div id="Wellpath"
        clickable
        @click="showwellpath">
            <span>Wellpath</span>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        showwellpath(){
            this.$emit('showwellpath');
            /* this.$store.commit('authStore/SetActiveViews', {
                isdatum: false,
                iswellpath: true,
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

    #Component_31__31 {
        position: absolute;
        width: 34px;
        height: 116px;
        left: 2px;
        top: 104px;
        overflow: visible;
    }

    #Path_67_d {
        fill: url(#Path_67_d);
        stroke: rgba(112,112,112,1);
        stroke-width: 1px;
        stroke-linejoin: miter;
        stroke-linecap: butt;
        stroke-miterlimit: 4;
        shape-rendering: auto;
    }
    .Path_67_d {
        overflow: visible;
        position: absolute;
        width: 116px;
        height: 34px;
        transform: translate(0px, 0px) matrix(1,0,0,1,-41,41) rotate(-90deg);
        transform-origin: center;
        left: 0px;
        top: 0px;
    }
    #Wellpath {
        transform: translate(0px, 0px) matrix(1,0,0,1,-11.5,48.5) rotate(-90deg);
        transform-origin: center;
        left: 0px;
        top: 0px;
        position: absolute;
        overflow: visible;
        width: 58px;
        white-space: nowrap;
        text-align: left;
        font-family: Segoe UI;
        font-style: normal;
        font-weight: lighter;
        font-size: 15px;
        color: rgba(214,214,214,1);
    }

</style>