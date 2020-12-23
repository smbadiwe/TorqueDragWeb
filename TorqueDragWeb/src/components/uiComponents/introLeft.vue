<template>
    <div>
        <svg class="RIght_Rectangle">
            <rect id="RIght_Rectangle" rx="0" ry="0" x="0" y="0" width="432" height="1080">
            </rect>
        </svg>

        <div 
		@click="openSavedCases"
		id="Button" class="Button">
            <svg class="Rectangle_4">
                <rect id="Rectangle_4" rx="23" ry="23" x="0" y="0" width="165" height="46">
                </rect>
            </svg>
            <div id="Open_Saved">
                <span>Open Saved...</span>
            </div>
        </div>
        <div id="Button_w" class="Button">
            <svg class="Path_3" viewBox="0 0 105 46">
                <path id="Path_3" d="M 23 0 L 82 0 C 94.70255279541016 0 105 10.29745006561279 105 23 C 105 35.70254898071289 94.70255279541016 46 82 46 L 23 46 C 10.29745006561279 46 0 35.70254898071289 0 23 C 0 10.29745006561279 10.29745006561279 0 23 0 Z">
                </path>
            </svg>
            <div id="Import">
                <span>Import</span>
            </div>
        </div>
        <div id="Button_2" class="Button_2">
            <svg class="Rectangle_5">
                <rect id="Rectangle_5" rx="9" ry="9" x="0" y="0" width="360" height="50">
                </rect>
            </svg>
            <div id="Learn__Support">
                <span>Learn & Support</span>
            </div>
        </div>
        <div id="Button_2_" class="Button_2">
            <svg class="Rectangle_5_">
                <rect id="Rectangle_5_" rx="9" ry="9" x="0" y="0" width="360" height="50">
                </rect>
            </svg>
            <div id="Recent_Cases">
                <span>Recent Cases</span>
            </div>
        </div>
        <div id="Button_2_ba" class="Button_2">
            <svg class="Rectangle_5_ba">
                <rect id="Rectangle_5_ba" rx="9" ry="9" x="0" y="0" width="360" height="50">
                </rect>
            </svg>
            <div id="Home">
                <span>Home</span>
            </div>
        </div>
        <div @click="showCreateWell" id="Button_" class="Button">
            <svg class="Rectangle_4_ba">
                <rect id="Rectangle_4_ba" rx="23" ry="23" x="0" y="0" width="161" height="46">
                </rect>
            </svg>
            <div id="Create_New">
                <span>Create New...</span>
            </div>
        </div>
        </div>
</template>

<script>
export default {
    methods: {
		showCreateWell(){
			this.$router.push('/createWell');
		},
		openSavedCases(){
			this.$store.commit('authStore/showLayout1');
		}
	}
}
</script>

<style scoped>

#RIght_Rectangle {
	fill: rgba(27,27,27,1);
}
.RIght_Rectangle {
	position: absolute;
	overflow: visible;
	width: 432px;
	height: 1080px;
	left: 0px;
	top: 0px;
}

#Button {
	position: absolute;
	width: 165px;
	height: 46px;
	left: 36px;
	top: 469px;
	overflow: visible;
}

#Rectangle_4 {
	fill: transparent;
	stroke: rgba(227,227,227,1);
	stroke-width: 2.5px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_4 {
	position: absolute;
	overflow: visible;
	width: 165px;
	height: 46px;
	left: 0px;
	top: 0px;
}
#Open_Saved {
	left: 23px;
	top: 10px;
	position: absolute;
	overflow: visible;
	width: 121px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
}
#Button_w {
	position: absolute;
	width: 105px;
	height: 46px;
	left: 64px;
	top: 574px;
	overflow: visible;
}

#Path_3 {
	fill: transparent;
	stroke: rgba(0,185,255,1);
	stroke-width: 2.5px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_3 {
	overflow: visible;
	position: absolute;
	width: 105px;
	height: 46px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Import {
	left: 23px;
	top: 10px;
	position: absolute;
	overflow: visible;
	width: 61px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(0,185,255,1);
}
#Button_2 {
	position: absolute;
	width: 360px;
	height: 50px;
	left: 32px;
	top: 223px;
	overflow: visible;
}
#Rectangle_5 {
	fill: rgba(27,27,27,1);
}
.Rectangle_5 {
	position: absolute;
	overflow: visible;
	width: 360px;
	height: 50px;
	left: 0px;
	top: 0px;
}
#Learn__Support {
	left: 17px;
	top: 12px;
	position: absolute;
	overflow: visible;
	width: 147px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
}
#Button_2_ {
	position: absolute;
	width: 360px;
	height: 50px;
	left: 32px;
	top: 273px;
	overflow: visible;
}
#Rectangle_5_ {
	fill: rgba(27,27,27,1);
}
.Rectangle_5_ {
	position: absolute;
	overflow: visible;
	width: 360px;
	height: 50px;
	left: 0px;
	top: 0px;
}
#Recent_Cases {
	left: 17px;
	top: 12px;
	position: absolute;
	overflow: visible;
	width: 116px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
}
#Button_2_ba {
	position: absolute;
	width: 360px;
	height: 50px;
	left: 32px;
	top: 173px;
	overflow: visible;
}
#Rectangle_5_ba {
	fill: rgba(27,27,27,1);
}
.Rectangle_5_ba {
	position: absolute;
	overflow: visible;
	width: 360px;
	height: 50px;
	left: 0px;
	top: 0px;
}
#Home {
	left: 17px;
	top: 12px;
	position: absolute;
	overflow: visible;
	width: 55px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
}

#Button_ {
	position: absolute;
	width: 161px;
	height: 46px;
	left: 36px;
	top: 398px;
	overflow: visible;
	--web-animation: fadein 0.3s ease-out;
	--web-action-type: page;
	--web-action-target:  Main PE.html;
	cursor: pointer;
}
#Rectangle_4_ba {
	fill: transparent;
	stroke: rgba(227,227,227,1);
	stroke-width: 2.5px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_4_ba {
	position: absolute;
	overflow: visible;
	width: 161px;
	height: 46px;
	left: 0px;
	top: 0px;
}
#Create_New {
	left: 23px;
	top: 10px;
	position: absolute;
	overflow: visible;
	width: 117px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
}

</style>