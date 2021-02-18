<template>
    <div>
        <svg class="Rectangle_79_du_schematic">
			<rect id="Rectangle_79_du_schematic" rx="0" ry="0" x="0" y="0" width="293.333" height="394px">
            </rect>
        </svg>

        <!-- <div id="Group_37_dw_schematic">
            <wellList></wellList>
        </div> -->


    </div>
</template>

<script>
import wellList from 'pages/inputdata/wellList.vue';
export default {
    components:{
        wellList
    }
}
</script>

<style scoped>
 #Rectangle_79_du_schematic {
	fill: rgba(20,20,20,1);
	stroke: rgba(116, 15, 15, 0.842); /* rgba(50,50,50,1); */
	stroke-width: 1.5px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_79_du_schematic {
	/* position: absolute;
	overflow: visible; */
	width: 293.333px;
	height: 394px;
	/* left: 0px;
	top: 0px; */
/* 	left: 1623px;
	top: 178px; */
}


#Group_37_dw_schematic {
	opacity: 0.7;
	position: absolute;
	width: 245px;
	height: 394px;
	/* left: 1623px;
	top: 178px; */
	overflow: visible;
}

</style>