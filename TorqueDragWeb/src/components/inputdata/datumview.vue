<template>
    <div>
        <svg class="Rectangle_79_du_datumview">
            <linearGradient id="rect_datumview" spreadMethod="pad" x1="0.488" x2="0.488" y1="0.5" y2="-0.441">
                <stop offset="0" stop-color="#323232" stop-opacity="1"></stop>
                <stop offset="0.6109" stop-color="#444" stop-opacity="1"></stop>
                <stop offset="1" stop-color="#767676" stop-opacity="1"></stop>
            </linearGradient>
            <!-- <rect id="Rectangle_79_du_datumview" rx="0" ry="0" x="0" y="0" width="297.333" height="877">
            </rect> -->
        </svg>

        <div id="Group_37_dw_datumview">
            <datum></datum>
        </div>


    </div>
</template>

<script>
import datum from 'pages/inputdata/datum.vue';
export default {
    components:{
        datum
    }
}
</script>

<style scoped>
    #Rectangle_79_du_datumview {
	fill: rgba(20,20,20,1);
	stroke: rgba(50,50,50,1);
	stroke-width: 1.5px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_79_du_datumview {
	position: absolute;
	overflow: visible;
	width: 297.333px;
	height: 877px;
	left: 0px;
	top: 0px;
}

 #rect_datumview {
	fill: url(#rect_datumview);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}

#Group_37_dw_datumview {
	opacity: 0.7;
	position: absolute;
	width: 245px;
	height: 781.564px;
	left: 55.494px;
	top: 70.436px;
	overflow: visible;
}

</style>