<template>
     <div id="Component_31__51" class="Component_31___51">
            <svg class="Path_67_fd" viewBox="0 0 125 34">
                <linearGradient id="Path_67_fd" spreadMethod="pad" x1="0.488" x2="0.488" y1="0.5" y2="-0.441">
                    <stop offset="0" stop-color="#323232" stop-opacity="1"></stop>
                    <stop offset="0.6109" stop-color="#444" stop-opacity="1"></stop>
                    <stop offset="1" stop-color="#767676" stop-opacity="1"></stop>
                </linearGradient>
                <path id="Path_67_fd" d="M 0 0 L 125 0 L 125 34 L 0 34 L 0 0 Z">
                </path>
            </svg>
            <div id="Schematic"
			@click="showschematics">
                <span>Schematic</span>
            </div>
        </div>
</template>

<script>
export default {
	methods:{
		showschematics(){
			this.$emit('showschematics');
		}	
	}
    
}
</script>

<style scoped>

#Component_31__51 {
	position: absolute;
	width: 34px;
	height: 125px;
	left: 1885px;
	top: 411px;
	overflow: visible;
}
#Path_67_fd {
	fill: url(#Path_67_fd);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_67_fd {
	overflow: visible;
	position: absolute;
	width: 125px;
	height: 34px;
	transform: translate(0px, 0px) matrix(1,0,0,1,-45.5,45.5) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
}
#Schematic {
	transform: translate(0px, 0px) matrix(1,0,0,1,-16,53) rotate(90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 67px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 15px;
	color: rgba(214,214,214,1);
}

</style>