<template>
    <div>
        <svg class="Rectangle_79_du_settings">
			<rect id="Rectangle_79_du_settings" rx="0" ry="0" x="0" y="0" width="293.333" height="394px">
            </rect>
        </svg>

        <div id="Group_37_dw_settings">
            <analysisSettings></analysisSettings>
        </div>


    </div>
</template>

<script>
import analysisSettings from 'pages/inputdata/analysisSettings.vue';
export default {
    components:{
        analysisSettings
    }
}
</script>

<style scoped>
 #Rectangle_79_du_settings {
	fill: rgba(20,20,20,1);
	stroke: rgba(50,50,50,1);
	stroke-width: 1.5px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_79_du_settings {
	position: absolute;
	overflow: visible;
	width: 293.333px;
	height: 394px;
	left: 1623px;
	top: 178px;
}


#Group_37_dw_settings{
	opacity: 0.7;
	position: absolute;
	width: 245px;
	height: 394px;
	left: 1623px;
	top: 178px;
	overflow: visible;
}

</style>