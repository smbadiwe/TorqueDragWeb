<template>
     <div id="Component_31__37" class="Component_31___37">
        <svg class="Path_67_es" viewBox="0 0 130 34">
            <linearGradient id="Path_67_es" spreadMethod="pad" x1="0.488" x2="0.488" y1="0.5" y2="-0.441">
                <stop offset="0" stop-color="#323232" stop-opacity="1"></stop>
                <stop offset="0.6109" stop-color="#444" stop-opacity="1"></stop>
                <stop offset="1" stop-color="#767676" stop-opacity="1"></stop>
            </linearGradient>
            <path id="Path_67_es" d="M 0 0 L 130 0 L 130 34 L 0 34 L 0 0 Z">
            </path>
        </svg>
        <div id="Operations"
		clickable
        		@click="showoperations">
            <span>Operations</span>
        </div>
    </div>
</template>

<script>
export default {
	methods:{
        showoperations(){
            this.$emit('showoperations');
        }
    }
    
}
</script>

<style scoped>

#Component_31__37 {
	position: absolute;
	width: 34px;
	height: 130px;
	left: 2px;
	top: 711px;
	overflow: visible;
}
#Path_67_es {
	fill: url(#Path_67_es);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_67_es {
	overflow: visible;
	position: absolute;
	width: 130px;
	height: 34px;
	transform: translate(0px, 0px) matrix(1,0,0,1,-48,48) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
}
#Operations {
	transform: translate(0px, 0px) matrix(1,0,0,1,-18.5,55.5) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 72px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 15px;
	color: rgba(214,214,214,1);
}

</style>