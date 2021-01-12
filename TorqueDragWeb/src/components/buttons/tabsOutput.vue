<template>
    <div>
        <div id="Component_Tab1"
        @click="showSchematic">
            <svg class="Path_Tab1" viewBox="0 0 177 34">
                <path id="Path_Tab1" d="M 0 0 L 177 0 L 177 34 L 0 34 L 0 0 Z">
                </path>
            </svg>
            <div id="Deviated_Schematic">
                <span>Deviated Schematic</span>
            </div>
        </div>

        <div id="Component_Tab2"
        @click="showReport">
            <svg class="Path_Tab1" viewBox="0 0 177 34">
                <path id="Path_Tab1" d="M 0 0 L 177 0 L 177 34 L 0 34 L 0 0 Z">
                </path>
            </svg>
            <div id="Deviated_Schematic">
                <span>Report</span>
            </div>
        </div>

        <div id="Component_Tab3"
        @click="showChart">
            <svg class="Path_Tab1" viewBox="0 0 177 34">
                <path id="Path_Tab1" d="M 0 0 L 177 0 L 177 34 L 0 34 L 0 0 Z">
                </path>
            </svg>
            <div id="Deviated_Schematic">
                <span>Chart</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        showSchematic(){

        },
        showReport(){

        },
        showChart(){
            
        }
    }
    
}
</script>

<style scoped>

#Component_Tab1 {
	position: absolute;
	width: 177px;
	height: 34px;
	left: 0.667px;
	top: 0px;
	overflow: visible;
}

#Component_Tab2 {
	position: absolute;
	width: 177px;
	height: 34px;
	left: 180px;
	top: 0px;
	overflow: visible;
}

#Component_Tab3 {
	position: absolute;
	width: 177px;
	height: 34px;
	left: 360px;
	top: 0px;
	overflow: visible;
}

#Path_Tab1 {
	fill: rgba(45,66,123,1);
}
.Path_Tab1 {
	overflow: visible;
	position: absolute;
	width: 177px;
	height: 34px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}

#Deviated_Schematic {
	left: 12px;
	top: 5px;
	position: absolute;
	overflow: visible;
	width: 153px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 18px;
	color: rgba(214,214,214,1);
}

</style>