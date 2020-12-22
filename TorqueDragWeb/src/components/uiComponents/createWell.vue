<template>
    <div>
      <!--   <div id="Group_24">
            <div id="Group_19"> -->
                <svg class="CreateWell_Rectangle">
                    <rect id="CreateWell_Rectangle" rx="0" ry="0" x="0" y="0" width="1325.667" height="877">
                    </rect>
                </svg>
                <div id="createWellView">
                    <createWellDesign></createWellDesign>
                </div>
          <!--   </div>
        </div> -->
    </div>
</template>

<script>
import createWellDesign from 'components/createWellDesign.vue';
export default {
    components:{
        createWellDesign
    }
    
}
</script>

<style scoped>

#Group_24 {
	position: absolute;
	width: 1325.667px;
	height: 877px;
	left: 440;
	top: 144px;
	overflow: visible;
}
#Group_19 {
	position: absolute;
	width: 1325.667px;
	height: 877px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#CreateWell_Rectangle {
	fill: rgba(20,20,20,1);
	stroke: rgba(50,50,50,1);
	stroke-width: 1.5px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.CreateWell_Rectangle {
	position: absolute;
	overflow: visible;
	width: 1325.667px;
	height: 877px;
	left: 440px;
	top: 144px;
}

#createWellView {
	opacity: 0.7;
	position: absolute;
	width: 1300px;
	height: 877px;
	left: 450px;
	top: 144px;
	overflow: visible;
}

</style>