<template>
	<div class="row">
		<div class="col-12">
			<svg class="Path_67_fb">
				<linearGradient id="Path_67_fb" spreadMethod="pad" x1="0.488" x2="0.488" y1="0.5" y2="-0.441">
					<stop offset="0" stop-color="#323232" stop-opacity="1"></stop>
					<stop offset="0.6109" stop-color="#444" stop-opacity="1"></stop>
					<stop offset="1" stop-color="#767676" stop-opacity="1"></stop>
				</linearGradient>
				<path id="Path_67_fb" d="M 0 0 L 122 0 L 122 34 L 0 34 L 0 0 Z">
				</path>
			</svg>
			<div id="Sensitivity"
			@click="showsensitivity">
				<span>Sensitivity</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed:{
    winwidth() {
            var wd = (this.$q.screen.width/ 12.0)* 3.0;
            console.log(wd);
            return wd;
      }
},
	data(){
		return {

		}
	},
	methods:{
		showsensitivity(){
			this.$emit('showsensitivity');
		}	
	}
    
}
</script>

<style scoped>

#Component_31__50 {
	position: absolute;
	width: 34px;
	height: 122px;
	left: 395px; 
    top: 112px;
	overflow: visible;
}
#Path_67_fb {
	fill: url(#Path_67_fb);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_67_fb {
	overflow: visible;
	position: relative;
	width: 122px;
	height: 34px;
	transform: translate(0px, 0px) matrix(1,0,0,1,-44,44) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 52px;
}
#Sensitivity {
	transform: translate(0px, 0px) matrix(1,0,0,1,-14.5,41.5) rotate(90deg);
	transform-origin: center;
	left: 0px;
	top: 26px;
	position: relative;
	overflow: visible;
	width: 64px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 15px;
	color: rgba(214,214,214,1);
}

</style>