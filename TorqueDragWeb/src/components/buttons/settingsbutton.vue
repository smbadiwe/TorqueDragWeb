<template>
    <div id="Component_31__47" class="Component_31___47">
        <svg class="Path_67_e" viewBox="0 0 110 34">
            <linearGradient id="Path_67_e" spreadMethod="pad" x1="0.488" x2="0.488" y1="0.5" y2="-0.441">
                <stop offset="0" stop-color="#323232" stop-opacity="1"></stop>
                <stop offset="0.6109" stop-color="#444" stop-opacity="1"></stop>
                <stop offset="1" stop-color="#767676" stop-opacity="1"></stop>
            </linearGradient>
            <path id="Path_67_e" d="M 0 0 L 110 0 L 110 34 L 0 34 L 0 0 Z">
            </path>
        </svg>
        <div id="Settings"
		 @click="showsettings">
            <span>Settings</span>
        </div>
    </div>
</template>

<script>
export default {
	methods:{
		showsettings(){
			this.$emit('showsettings');
		}	
	}
    
}
</script>

<style scoped>

#Component_31__47 {
	position: absolute;
	width: 34px;
	height: 110px;
	left: 395px;
	top: 2px;
	overflow: visible;
}
#Path_67_e {
	fill: url(#Path_67_e);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_67_e {
	overflow: visible;
	position: absolute;
	width: 110px;
	height: 34px;
	transform: translate(0px, 0px) matrix(1,0,0,1,-38,38) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
}
#Settings {
	transform: translate(0px, 0px) matrix(1,0,0,1,-8.5,45.5) rotate(90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 52px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 15px;
	color: rgba(214,214,214,1);
}

</style>