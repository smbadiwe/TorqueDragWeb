<template>
    <div>
        <svg class="Rectangle_79_du_wellpathview">
            <rect id="Rectangle_79_du_wellpathview" rx="0" ry="0" x="0" y="0" width="297.333" height="877">
            </rect>
        </svg>

        <div id="Group_37_dw_wellpathview">
            <wellPath></wellPath>
        </div>


    </div>
</template>

<script>
import wellPath from 'pages/inputdata/wellPath.vue';
export default {
    components:{
        wellPath
    }
}
</script>

<style scoped>
    #Rectangle_79_du_wellpathview {
	fill: rgba(20,20,20,1);
	stroke: rgba(50,50,50,1);
	stroke-width: 1.5px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_79_du_wellpathview {
	position: absolute;
	overflow: visible;
	width: 297.333px;
	height: 877px;
	left: 0px;
	top: 0px;
}


#Group_37_dw_wellpathview {
	opacity: 0.7;
	position: absolute;
	width: 245px;
	height: 781.564px;
	left: 55.494px;
	top: 70.436px;
	overflow: visible;
}

</style>