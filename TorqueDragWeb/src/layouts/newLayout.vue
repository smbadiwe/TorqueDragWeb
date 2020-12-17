<template>
    <div id="Menu_Tab">
		<svg class="Rectangle_Page">
			<rect id="Rectangle_Page" rx="0" ry="0" x="0" y="0" width="1920" height="1080">
			</rect>
		</svg>
		<menubar></menubar>
		<inputviewleft></inputviewleft>
		<router-view />
		<inputviewright></inputviewright>

    </div>
</template>

<script>

import docksite from 'components/uiComponents/docksite.vue';
import menubar from 'components/uiComponents/menubar.vue';
import inputviewleft from 'components/uiComponents/inputviewleft.vue';
import inputviewright from 'components/uiComponents/inputviewright.vue';

export default {
    components: { 

       docksite,
       menubar,
       inputviewleft,
	  inputviewright
      }
    
}
</script>

<style>

.mediaViewInfo {
	--web-view-name: Menu Tab;
	--web-view-id: Menu_Tab;
	--web-scale-to-fit: true;
	--web-scale-to-fit-type: fit;
	--web-scale-on-resize: true;
	--web-enable-deep-linking: true;
}
:root {
	--web-view-ids: Menu_Tab;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	border: none;
}
#Menu_Tab {
	position: absolute;
	width: 1920px;
	height: 1080px;
    top: 0px;
    left: 0px;
	background-color: rgba(255,255,255,1);
	overflow: hidden;
	--web-view-name: Menu Tab;
	--web-view-id: Menu_Tab;
	--web-scale-to-fit: true;
	--web-scale-to-fit-type: fit;
	--web-scale-on-resize: true;
	--web-enable-deep-linking: true;
}
@keyframes fadein {

	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}

}
#Rectangle_Page {
	fill: rgba(24,24,24,1);
}
.Rectangle_Page {
	position: absolute;
	overflow: visible;
	width: 1920px;
	height: 1080px;
	left: 0px;
	top: 0px;
}
/* #Rectangle_75 {
	fill: rgba(20,20,20,1);
}
.Rectangle_75 {
	position: absolute;
	overflow: visible;
	width: 34px;
	height: 900px;
	left: 2px;
	top: 180px;
} */

/* #Component_53__2 {
	position: absolute;
	width: 297.333px;
	height: 394px;
	left: 1623px;
	top: 144px;
	overflow: visible;
}
#Rectangle_79 {
	fill: rgba(20,20,20,1);
	stroke: rgba(50,50,50,1);
	stroke-width: 1.5px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_79 {
	position: absolute;
	overflow: visible;
	width: 297.333px;
	height: 394px;
	left: 0px;
	top: 0px;
}
#Group_36 {
	position: absolute;
	width: 293.333px;
	height: 34px;
	left: 2px;
	top: 1px;
	overflow: visible;
}
#Path_90_z {
	fill: url(#Path_90_z);
}
.Path_90_z {
	overflow: visible;
	position: absolute;
	width: 293.333px;
	height: 34px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Analysis {
	left: 116px;
	top: 5px;
	position: absolute;
	overflow: visible;
	width: 62px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 18px;
	color: rgba(214,214,214,1);
} */

/* #Component_53__12 {
	position: absolute;
	width: 293.333px;
	height: 34px;
	left: 1625px;
	top: 987px;
	overflow: visible;
}
#Group_36_ {
	position: absolute;
	width: 293.333px;
	height: 34px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Path_90_ba {
	fill: url(#Path_90_ba);
}
.Path_90_ba {
	overflow: visible;
	position: absolute;
	width: 293.333px;
	height: 34px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Data_Reader {
	left: 99px;
	top: 5px;
	position: absolute;
	overflow: visible;
	width: 96px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 18px;
	color: rgba(214,214,214,1);
} */

/* #Group_24 {
	position: absolute;
	width: 1325.667px;
	height: 877px;
	left: 297.333px;
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
#Rectangle_24 {
	fill: rgba(20,20,20,1);
	stroke: rgba(50,50,50,1);
	stroke-width: 1.5px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_24 {
	position: absolute;
	overflow: visible;
	width: 1325.667px;
	height: 877px;
	left: 0px;
	top: 0px;
}
#Path_27 {
	fill: rgba(2,0,17,1);
}
.Path_27 {
	overflow: visible;
	position: absolute;
	width: 1321.667px;
	height: 34px;
	left: 2px;
	top: 1px;
	transform: matrix(1,0,0,1,0,0);
}
#Group_17 {
	position: absolute;
	width: 941.496px;
	height: 607.863px;
	left: 214.919px;
	top: 201.455px;
	overflow: visible;
}
#Path_56 {
	fill: rgba(237,237,244,1);
}
.Path_56 {
	overflow: visible;
	position: absolute;
	width: 941.496px;
	height: 607.863px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_57 {
	fill: rgba(237,237,244,1);
}
.Path_57 {
	overflow: visible;
	position: absolute;
	width: 167.035px;
	height: 186.462px;
	left: 335.644px;
	top: 3.857px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_58 {
	opacity: 0.1;
	fill: rgba(0,0,0,1);
}
.Path_58 {
	overflow: visible;
	position: absolute;
	width: 166.93px;
	height: 163.196px;
	left: 335.749px;
	top: 27.123px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_59 {
	opacity: 0.1;
	fill: rgba(0,0,0,1);
}
.Path_59 {
	overflow: visible;
	position: absolute;
	width: 122.379px;
	height: 138.439px;
	left: 380.331px;
	top: 51.599px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_60 {
	fill: rgba(1,45,162,1);
}
.Path_60 {
	overflow: visible;
	position: absolute;
	width: 23.723px;
	height: 68.062px;
	left: 412.805px;
	top: 19.952px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_61 {
	fill: rgba(1,45,162,1);
}
.Path_61 {
	overflow: visible;
	position: absolute;
	width: 49.004px;
	height: 42.482px;
	left: 429.633px;
	top: 106.898px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_62 {
	fill: rgba(1,45,162,1);
}
.Path_62 {
	overflow: visible;
	position: absolute;
	width: 60.4px;
	height: 23.389px;
	left: 437.555px;
	top: 79.827px;
	transform: matrix(1,0,0,1,0,0);
}
#Component_20__1 {
	position: absolute;
	width: 177px;
	height: 34px;
	left: 0.667px;
	top: 0px;
	overflow: visible;
}
#Path_63 {
	fill: rgba(45,66,123,1);
}
.Path_63 {
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
#Component_37__10 {
	position: absolute;
	width: 155px;
	height: 35px;
	left: 1169.667px;
	top: 0px;
	overflow: visible;
}
#Component_16__1 {
	position: absolute;
	width: 155px;
	height: 35px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Rectangle_37 {
	opacity: 0.32;
	fill: rgba(50,50,50,1);
	stroke: rgba(70,70,70,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_37 {
	position: absolute;
	overflow: visible;
	width: 155px;
	height: 35px;
	left: 0px;
	top: 0px;
}
#Component_14__1 {
	position: absolute;
	width: 33px;
	height: 34px;
	left: 60px;
	top: 0px;
	overflow: visible;
}
#Rectangle_60 {
	opacity: 0;
	fill: rgba(255,255,255,1);
}
.Rectangle_60 {
	position: absolute;
	overflow: visible;
	width: 33px;
	height: 34px;
	left: 0px;
	top: 0px;
}
#Union_9 {
	fill: rgba(66,66,66,1);
}
.Union_9 {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18.013px;
	left: 7px;
	top: 10px;
	transform: matrix(1,0,0,1,0,0);
}
#path-9_21_ {
	position: absolute;
	width: 32px;
	height: 33px;
	left: 9px;
	top: 1px;
	overflow: visible;
}
#Rectangle_59 {
	opacity: 0;
	fill: rgba(255,255,255,1);
}
.Rectangle_59 {
	position: absolute;
	overflow: visible;
	width: 32px;
	height: 33px;
	left: 0px;
	top: 0px;
}
#Group_52 {
	position: absolute;
	width: 17.295px;
	height: 15.516px;
	left: 7.38px;
	top: 10px;
	overflow: visible;
}
#Group_51 {
	position: absolute;
	width: 17.295px;
	height: 15.516px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#path-9_21__bv {
	fill: rgba(66,66,66,1);
}
.path-9_21__bv {
	overflow: visible;
	position: absolute;
	width: 17.295px;
	height: 3.516px;
	left: 0px;
	top: 6px;
	transform: matrix(1,0,0,1,0,0);
}
#path-9_21__bw {
	fill: rgba(66,66,66,1);
}
.path-9_21__bw {
	overflow: visible;
	position: absolute;
	width: 17.295px;
	height: 3.516px;
	left: 0px;
	top: 12px;
	transform: matrix(1,0,0,1,0,0);
}
#path-9_21__bx {
	fill: rgba(66,66,66,1);
}
.path-9_21__bx {
	overflow: visible;
	position: absolute;
	width: 17.295px;
	height: 3.516px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Component_15__1 {
	position: absolute;
	width: 30px;
	height: 34px;
	left: 116px;
	top: 0px;
	overflow: visible;
}
#Union_8 {
	fill: rgba(66,66,66,1);
}
.Union_8 {
	overflow: visible;
	position: absolute;
	width: 12.313px;
	height: 12.319px;
	left: 9px;
	top: 13px;
	transform: matrix(1,0,0,1,0,0);
}
#Rectangle_61 {
	opacity: 0;
	fill: rgba(255,255,255,1);
}
.Rectangle_61 {
	position: absolute;
	overflow: visible;
	width: 30px;
	height: 34px;
	left: 0px;
	top: 0px;
} */

/* #Top_Rectangle {
	position: absolute;
	width: 1920px;
	height: 139px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Rectangle_2 {
	fill: rgba(50,50,50,1);
}
.Rectangle_2 {
	position: absolute;
	overflow: visible;
	width: 1920px;
	height: 139px;
	left: 0px;
	top: 0px;
}
#Rectangle_1 {
	opacity: 0;
	fill: rgba(83,83,83,1);
}
.Rectangle_1 {
	position: absolute;
	overflow: visible;
	width: 1920px;
	height: 42px;
	left: 0px;
	top: 0px;
}
#Component_41__9 {
	position: absolute;
	width: 53px;
	height: 22px;
	left: 1832px;
	top: 75px;
	overflow: visible;
	transition: all 0.1s ease-out;
	--web-animation: fadein 0.1s ease-out;
	--web-action-type: page;
	--web-action-target: PE.html;
	cursor: pointer;
}
#Rectangle_67 {
	fill: rgba(121,121,121,1);
}
.Rectangle_67 {
	position: absolute;
	overflow: visible;
	width: 53px;
	height: 22px;
	left: 0px;
	top: 0px;
}
#Rectangle_68 {
	fill: rgba(50,50,50,1);
}
.Rectangle_68 {
	position: absolute;
	overflow: visible;
	width: 30px;
	height: 18px;
	left: 20px;
	top: 2px;
}
#Icon_ionic-ios-moon {
	fill: rgba(50,50,50,1);
}
.Icon_ionic-ios-moon {
	overflow: visible;
	position: absolute;
	width: 9.594px;
	height: 10.468px;
	left: 6.334px;
	top: 5.766px;
	transform: matrix(1,0,0,1,0,0);
}
#Component_55__1 {
	position: absolute;
	width: 32px;
	height: 32px;
	left: 1756px;
	top: 70px;
	overflow: visible;
}
#Rectangle_2092 {
	opacity: 0;
	fill: rgba(121,121,121,1);
}
.Rectangle_2092 {
	position: absolute;
	overflow: visible;
	width: 32px;
	height: 32px;
	left: 0px;
	top: 0px;
}
#Icon_feather-layout {
	position: absolute;
	width: 22.603px;
	height: 21.733px;
	left: 4.699px;
	top: 5.633px;
	overflow: visible;
}
#Path_5 {
	fill: transparent;
	stroke: rgba(121,121,121,1);
	stroke-width: 2px;
	stroke-linejoin: round;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_5 {
	overflow: visible;
	position: absolute;
	width: 24.603px;
	height: 23.733px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_6 {
	fill: transparent;
	stroke: rgba(121,121,121,1);
	stroke-width: 2px;
	stroke-linejoin: round;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_6 {
	overflow: visible;
	position: absolute;
	width: 22.909px;
	height: 2px;
	left: 1px;
	top: 6.367px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_7 {
	fill: transparent;
	stroke: rgba(121,121,121,1);
	stroke-width: 2px;
	stroke-linejoin: round;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_7 {
	overflow: visible;
	position: absolute;
	width: 2px;
	height: 17.367px;
	left: 7.301px;
	top: 6.367px;
	transform: matrix(1,0,0,1,0,0);
}
#General_tab_Component {
	position: absolute;
	width: 173px;
	height: 42px;
	left: 403px;
	top: 0px;
	overflow: visible;
}
#Drop_down {
	opacity: 0;
	fill: rgba(50,50,50,1);
}
.Drop_down {
	position: absolute;
	overflow: visible;
	width: 96px;
	height: 42px;
	left: 0px;
	top: 0px;
}
#Menu_Tab_cg {
	position: absolute;
	width: 173px;
	height: 42px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Path_16 {
	fill: rgba(83,83,83,1);
}
.Path_16 {
	filter: drop-shadow(0px 3px 6px rgba(53, 53, 53, 0.161));
	overflow: visible;
	position: absolute;
	width: 191px;
	height: 60px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Torque__Drag {
	left: 21px;
	top: 8px;
	position: absolute;
	overflow: visible;
	width: 132px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
}
#General_tab_Component_cj {
	position: absolute;
	width: 134px;
	height: 42px;
	left: 577px;
	top: 0px;
	overflow: visible;
}
#Drop_down_ck {
	opacity: 0;
	fill: rgba(50,50,50,1);
}
.Drop_down_ck {
	position: absolute;
	overflow: visible;
	width: 96px;
	height: 42px;
	left: 0px;
	top: 0px;
}
#Menu_Tab_cl {
	position: absolute;
	width: 134px;
	height: 42px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Path_16_cm {
	fill: rgba(83,83,83,1);
}
.Path_16_cm {
	filter: drop-shadow(0px 3px 6px rgba(53, 53, 53, 0.161));
	overflow: visible;
	position: absolute;
	width: 152px;
	height: 60px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Hydraulics {
	left: 21px;
	top: 8px;
	position: absolute;
	overflow: visible;
	width: 93px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
}
#General_tab_Component_co {
	position: absolute;
	width: 164px;
	height: 42px;
	left: 712px;
	top: 0px;
	overflow: visible;
}
#Drop_down_cp {
	opacity: 0;
	fill: rgba(50,50,50,1);
}
.Drop_down_cp {
	position: absolute;
	overflow: visible;
	width: 96px;
	height: 42px;
	left: 0px;
	top: 0px;
}
#Menu_Tab_cq {
	position: absolute;
	width: 164px;
	height: 42px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Path_16_cr {
	fill: rgba(83,83,83,1);
}
.Path_16_cr {
	filter: drop-shadow(0px 3px 6px rgba(53, 53, 53, 0.161));
	overflow: visible;
	position: absolute;
	width: 182px;
	height: 60px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Centralization {
	left: 21px;
	top: 8px;
	position: absolute;
	overflow: visible;
	width: 123px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
}
#General_tab_Component_ct {
	position: absolute;
	width: 167px;
	height: 42px;
	left: 877px;
	top: 0px;
	overflow: visible;
}
#Drop_down_cu {
	opacity: 0;
	fill: rgba(50,50,50,1);
}
.Drop_down_cu {
	position: absolute;
	overflow: visible;
	width: 96px;
	height: 42px;
	left: 0px;
	top: 0px;
}
#Menu_Tab_cv {
	position: absolute;
	width: 167px;
	height: 42px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Path_16_cw {
	fill: rgba(83,83,83,1);
}
.Path_16_cw {
	filter: drop-shadow(0px 3px 6px rgba(53, 53, 53, 0.161));
	overflow: visible;
	position: absolute;
	width: 185px;
	height: 60px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Swab__Surge {
	left: 21px;
	top: 8px;
	position: absolute;
	overflow: visible;
	width: 126px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
}
#General_tab_Component_cy {
	position: absolute;
	width: 139px;
	height: 42px;
	left: 1197px;
	top: 0px;
	overflow: visible;
}
#Drop_down_cz {
	opacity: 0;
	fill: rgba(50,50,50,1);
}
.Drop_down_cz {
	position: absolute;
	overflow: visible;
	width: 96px;
	height: 42px;
	left: 0px;
	top: 0px;
}
#Menu_Tab_c {
	position: absolute;
	width: 139px;
	height: 42px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Path_16_c {
	fill: rgba(83,83,83,1);
}
.Path_16_c {
	filter: drop-shadow(0px 3px 6px rgba(53, 53, 53, 0.161));
	overflow: visible;
	position: absolute;
	width: 157px;
	height: 60px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Cementing {
	left: 21px;
	top: 8px;
	position: absolute;
	overflow: visible;
	width: 98px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
}
#Home_tab_Component {
	position: absolute;
	width: 105px;
	height: 42px;
	left: 297px;
	top: 0px;
	overflow: visible;
}
#Drop_down_c {
	opacity: 0;
	fill: rgba(50,50,50,1);
}
.Drop_down_c {
	position: absolute;
	overflow: visible;
	width: 96px;
	height: 42px;
	left: 0px;
	top: 0px;
}
#Menu_Tab_da {
	position: absolute;
	width: 105px;
	height: 42px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Path_16_da {
	fill: rgba(83,83,83,1);
}
.Path_16_da {
	filter: drop-shadow(0px 3px 6px rgba(53, 53, 53, 0.161));
	overflow: visible;
	position: absolute;
	width: 123px;
	height: 60px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Output {
	left: 21px;
	top: 8px;
	position: absolute;
	overflow: visible;
	width: 64px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
}
#Logo_Small {
	position: absolute;
	width: 32px;
	height: 32px;
	left: 11px;
	top: 5px;
	overflow: visible;
}
#Mask_Group_4 {
	position: absolute;
	width: 32px;
	height: 32px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Component_37__1 {
	position: absolute;
	width: 155px;
	height: 35px;
	left: 1754px;
	top: 0px;
	overflow: visible;
}
#Component_16__1_db {
	position: absolute;
	width: 155px;
	height: 35px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Rectangle_37_dc {
	fill: rgba(50,50,50,1);
	stroke: rgba(70,70,70,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_37_dc {
	position: absolute;
	overflow: visible;
	width: 155px;
	height: 35px;
	left: 0px;
	top: 0px;
}
#Component_14__1_dd {
	position: absolute;
	width: 33px;
	height: 34px;
	left: 60px;
	top: 0px;
	overflow: visible;
}
#Rectangle_60_de {
	opacity: 0;
	fill: rgba(255,255,255,1);
}
.Rectangle_60_de {
	position: absolute;
	overflow: visible;
	width: 33px;
	height: 34px;
	left: 0px;
	top: 0px;
}
#Union_9_df {
	fill: rgba(168,168,168,1);
}
.Union_9_df {
	overflow: visible;
	position: absolute;
	width: 20px;
	height: 18.013px;
	left: 7px;
	top: 10px;
	transform: matrix(1,0,0,1,0,0);
}
#path-9_21__dg {
	position: absolute;
	width: 32px;
	height: 33px;
	left: 9px;
	top: 1px;
	overflow: visible;
}
#path-9_21__dh {
	fill: rgba(168,168,168,1);
}
.path-9_21__dh {
	overflow: visible;
	position: absolute;
	width: 14.055px;
	height: 3.516px;
	left: 9px;
	top: 16px;
	transform: matrix(1,0,0,1,0,0);
}
#Rectangle_59_di {
	opacity: 0;
	fill: rgba(255,255,255,1);
}
.Rectangle_59_di {
	position: absolute;
	overflow: visible;
	width: 32px;
	height: 33px;
	left: 0px;
	top: 0px;
}
#Component_15__1_dj {
	position: absolute;
	width: 30px;
	height: 34px;
	left: 116px;
	top: 0px;
	overflow: visible;
}
#Union_8_dk {
	fill: rgba(168,168,168,1);
}
.Union_8_dk {
	overflow: visible;
	position: absolute;
	width: 12.312px;
	height: 12.318px;
	left: 9px;
	top: 13px;
	transform: matrix(1,0,0,1,0,0);
}
#Rectangle_61_dl {
	opacity: 0;
	fill: rgba(255,255,255,1);
}
.Rectangle_61_dl {
	position: absolute;
	overflow: visible;
	width: 30px;
	height: 34px;
	left: 0px;
	top: 0px;
}
#Component_38__1 {
	position: absolute;
	width: 330px;
	height: 42px;
	left: 1420px;
	top: 0px;
	overflow: visible;
}
#Rectangle_36 {
	fill: rgba(32,59,83,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_36 {
	position: absolute;
	overflow: visible;
	width: 330px;
	height: 42px;
	left: 0px;
	top: 0px;
}
#New_Sample_Saved_Case {
	left: 32px;
	top: 8px;
	position: absolute;
	overflow: visible;
	width: 230px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
}
#Icon_feather-save {
	opacity: 0.4;
	position: absolute;
	width: 15.057px;
	height: 15.057px;
	left: 286.472px;
	top: 14.472px;
	overflow: visible;
}
#Path_17 {
	fill: transparent;
	stroke: rgba(227,227,227,1);
	stroke-width: 1.2000000476837158px;
	stroke-linejoin: round;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_17 {
	overflow: visible;
	position: absolute;
	width: 16.257px;
	height: 16.257px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_18 {
	fill: transparent;
	stroke: rgba(227,227,227,1);
	stroke-width: 1.2000000476837158px;
	stroke-linejoin: round;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_18 {
	overflow: visible;
	position: absolute;
	width: 9.565px;
	height: 7.892px;
	left: 3.346px;
	top: 8.365px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_19 {
	fill: transparent;
	stroke: rgba(227,227,227,1);
	stroke-width: 1.2000000476837158px;
	stroke-linejoin: round;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_19 {
	overflow: visible;
	position: absolute;
	width: 7.892px;
	height: 5.382px;
	left: 3.346px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
} */

/* #Component_53__1 {
	position: absolute;
	width: 297.333px;
	height: 877px;
	left: 0px;
	top: 144px;
	overflow: visible;
} */

/* #Rectangle_79_du {
	fill: rgba(20,20,20,1);
	stroke: rgba(50,50,50,1);
	stroke-width: 1.5px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_79_du {
	position: absolute;
	overflow: visible;
	width: 297.333px;
	height: 877px;
	left: 0px;
	top: 0px;
}
#Group_37 {
	opacity: 0.7;
	position: absolute;
	width: 71.012px;
	height: 781.564px;
	left: 55.494px;
	top: 70.436px;
	overflow: visible;
}
#Group_37_dw {
	opacity: 0.5;
	position: absolute;
	width: 71.012px;
	height: 781.564px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Path_91 {
	fill: rgba(50,50,50,1);
}
.Path_91 {
	overflow: visible;
	position: absolute;
	width: 71.012px;
	height: 781.564px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
} */

/* #Group_36_dy {
	position: absolute;
	width: 293.333px;
	height: 34px;
	left: 2px;
	top: 1px;
	overflow: visible;
}
#Path_90_d {
	fill: url(#Path_90_d);
}
.Path_90_d {
	overflow: visible;
	position: absolute;
	width: 293.333px;
	height: 34px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Hole_Section_Editor {
	left: 73px;
	top: 5px;
	position: absolute;
	overflow: visible;
	width: 149px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 18px;
	color: rgba(214,214,214,1);
} */

/* #Component_31__31 {
	position: absolute;
	width: 34px;
	height: 116px;
	left: 2px;
	top: 138px;
	overflow: visible;
} */

/* #Path_67_d {
	fill: url(#Path_67_d);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_67_d {
	overflow: visible;
	position: absolute;
	width: 116px;
	height: 34px;
	transform: translate(0px, 0px) matrix(1,0,0,1,-41,41) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
}
#Wellpath {
	transform: translate(0px, 0px) matrix(1,0,0,1,-11.5,48.5) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 58px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 15px;
	color: rgba(214,214,214,1);
} */

/* #Component_31__32 {
	position: absolute;
	width: 34px;
	height: 89px;
	left: 2px;
	top: 254px;
	overflow: visible;
}
#Path_67_eb {
	fill: url(#Path_67_eb);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_67_eb {
	overflow: visible;
	position: absolute;
	width: 89px;
	height: 34px;
	transform: translate(0px, 0px) matrix(1,0,0,1,-27.5,27.5) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
}
#Hole {
	transform: translate(0px, 0px) matrix(1,0,0,1,2,35) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 31px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 15px;
	color: rgba(214,214,214,1);
} */

/* #Component_31__33 {
	position: absolute;
	width: 34px;
	height: 96px;
	left: 2px;
	top: 343px;
	overflow: visible;
}
#Path_67_ed {
	fill: url(#Path_67_ed);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_67_ed {
	overflow: visible;
	position: absolute;
	width: 96px;
	height: 34px;
	transform: translate(0px, 0px) matrix(1,0,0,1,-31,31) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
}
#String {
	transform: translate(0px, 0px) matrix(1,0,0,1,-1.5,38.5) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 38px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 15px;
	color: rgba(214,214,214,1);
} */

/* #Component_31__34 {
	position: absolute;
	width: 34px;
	height: 80px;
	left: 2px;
	top: 439px;
	overflow: visible;
}
#Path_67_eg {
	fill: url(#Path_67_eg);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_67_eg {
	overflow: visible;
	position: absolute;
	width: 80px;
	height: 34px;
	transform: translate(0px, 0px) matrix(1,0,0,1,-23,23) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
}
#Rig {
	transform: translate(0px, 0px) matrix(1,0,0,1,6.5,30.5) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 22px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 15px;
	color: rgba(214,214,214,1);
} */

/* #Component_31__35 {
	position: absolute;
	width: 34px;
	height: 96px;
	left: 2px;
	top: 519px;
	overflow: visible;
}
#Path_67_ek {
	fill: url(#Path_67_ek);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_67_ek {
	overflow: visible;
	position: absolute;
	width: 96px;
	height: 34px;
	transform: translate(0px, 0px) matrix(1,0,0,1,-31,31) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
}
#Fluids {
	transform: translate(0px, 0px) matrix(1,0,0,1,-1.5,38.5) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 38px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 15px;
	color: rgba(214,214,214,1);
} */

/* #Component_31__36 {
	position: absolute;
	width: 34px;
	height: 130px;
	left: 2px;
	top: 615px;
	overflow: visible;
}
#Path_67_eo {
	fill: url(#Path_67_eo);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_67_eo {
	overflow: visible;
	position: absolute;
	width: 130px;
	height: 34px;
	transform: translate(0px, 0px) matrix(1,0,0,1,-48,48) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
}
#Subsurface {
	transform: translate(0px, 0px) matrix(1,0,0,1,-18.5,55.5) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 72px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 15px;
	color: rgba(214,214,214,1);
} */

/* #Component_31__37 {
	position: absolute;
	width: 34px;
	height: 130px;
	left: 2px;
	top: 745px;
	overflow: visible;
}
#Path_67_es {
	fill: url(#Path_67_es);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_67_es {
	overflow: visible;
	position: absolute;
	width: 130px;
	height: 34px;
	transform: translate(0px, 0px) matrix(1,0,0,1,-48,48) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
}
#Operations {
	transform: translate(0px, 0px) matrix(1,0,0,1,-18.5,55.5) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 72px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 15px;
	color: rgba(214,214,214,1);
} */

/* #Component_31__38 {
	position: absolute;
	width: 34px;
	height: 102px;
	left: 2px;
	top: 36px;
	overflow: visible;
} */
/* #Path_67_ew {
	fill: url(#Path_67_ew);
	stroke: rgba(112,112,112,1);
	stroke-width: 1px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_67_ew {
	overflow: visible;
	position: absolute;
	width: 102px;
	height: 34px;
	transform: translate(0px, 0px) matrix(1,0,0,1,-34,34) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
} */

/* #Datum {
	transform: translate(0px, 0px) matrix(1,0,0,1,-4.5,41.5) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 44px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 15px;
	color: rgba(214,214,214,1);
} */

/* #Component_31__47 {
	position: absolute;
	width: 34px;
	height: 110px;
	left: 1885px;
	top: 180px;
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
} */

/* #Component_31__50 {
	position: absolute;
	width: 34px;
	height: 122px;
	left: 1885px;
	top: 290px;
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
	position: absolute;
	width: 122px;
	height: 34px;
	transform: translate(0px, 0px) matrix(1,0,0,1,-44,44) rotate(-90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
}
#Sensitivity {
	transform: translate(0px, 0px) matrix(1,0,0,1,-14.5,51.5) rotate(90deg);
	transform-origin: center;
	left: 0px;
	top: 0px;
	position: absolute;
	overflow: visible;
	width: 64px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 15px;
	color: rgba(214,214,214,1);
} */

/* #Component_31__51 {
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
} */

/* #Rectangle_76 {
	opacity: 0.25;
	fill: rgba(2,0,17,1);
}
.Rectangle_76 {
	position: absolute;
	overflow: visible;
	width: 1848px;
	height: 50px;
	left: 36px;
	top: 1030px;
}
#Group_35 {
	position: absolute;
	width: 137px;
	height: 16px;
	left: 1735px;
	top: 1047px;
	overflow: visible;
}
#Group_34 {
	position: absolute;
	width: 73px;
	height: 16px;
	left: 28px;
	top: 0px;
	overflow: visible;
}
#Rectangle_73 {
	fill: rgba(52,52,52,1);
}
.Rectangle_73 {
	position: absolute;
	overflow: visible;
	width: 70px;
	height: 4px;
	left: 3px;
	top: 6px;
}
#Component_51__1 {
	position: absolute;
	width: 16px;
	height: 16px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Ellipse_1 {
	fill: rgba(38,38,38,1);
	stroke: rgba(112,112,112,1);
	stroke-width: 3px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Ellipse_1 {
	position: absolute;
	overflow: visible;
	width: 16px;
	height: 16px;
	left: 0px;
	top: 0px;
}
#Polygon_2 {
	fill: rgba(177,177,177,1);
}
.Polygon_2 {
	overflow: hidden;
	position: absolute;
	width: 10px;
	height: 6px;
	left: 0px;
	top: 5px;
	transform: matrix(1,0,0,1,0,0);
}
#Polygon_3 {
	fill: rgba(177,177,177,1);
}
.Polygon_3 {
	overflow: hidden;
	position: absolute;
	width: 12px;
	height: 8px;
	left: 2px;
	top: 4px;
	transform: matrix(1,0,0,1,0,0);
}
#Subtraction_1 {
	fill: rgba(177,177,177,1);
}
.Subtraction_1 {
	overflow: visible;
	position: absolute;
	width: 9px;
	height: 11px;
	left: 115px;
	top: 3px;
	transform: matrix(1,0,0,1,0,0);
}
#Polygon_5 {
	fill: rgba(177,177,177,1);
}
.Polygon_5 {
	overflow: hidden;
	position: absolute;
	width: 18px;
	height: 14px;
	left: 119px;
	top: 1px;
	transform: matrix(1,0,0,1,0,0);
}
#Group_38 {
	position: absolute;
	width: 293.333px;
	height: 34px;
	left: 1625px;
	top: 949px;
	overflow: visible;
}
#Path_90_fm {
	fill: url(#Path_90_fm);
}
.Path_90_fm {
	overflow: visible;
	position: absolute;
	width: 293.333px;
	height: 34px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Reports {
	left: 117px;
	top: 5px;
	position: absolute;
	overflow: visible;
	width: 60px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: lighter;
	font-size: 18px;
	color: rgba(214,214,214,1);
} */

/* #Component_39__1 {
	position: absolute;
	width: 70px;
	height: 28px;
	left: 185px;
	top: 9px;
	overflow: visible;
}
#Icon_material-undo {
	position: absolute;
	width: 29px;
	height: 28px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Rectangle_63 {
	opacity: 0;
	fill: rgba(255,255,255,1);
}
.Rectangle_63 {
	position: absolute;
	overflow: visible;
	width: 29px;
	height: 28px;
	left: 0px;
	top: 0px;
}
#Icon_material-undo_fr {
	fill: rgba(83,83,83,1);
}
.Icon_material-undo_fr {
	overflow: visible;
	position: absolute;
	width: 22.993px;
	height: 16.5px;
	left: 4.271px;
	top: 5.25px;
	transform: matrix(1,0,0,1,0,0);
}
#Icon_material-redo {
	position: absolute;
	width: 29px;
	height: 28px;
	left: 41px;
	top: 0px;
	overflow: visible;
}
#Rectangle_64 {
	opacity: 0;
	fill: rgba(255,255,255,1);
}
.Rectangle_64 {
	position: absolute;
	overflow: visible;
	width: 29px;
	height: 28px;
	left: 0px;
	top: 0px;
}
#Icon_material-redo_fu {
	fill: rgba(83,83,83,1);
}
.Icon_material-redo_fu {
	overflow: visible;
	position: absolute;
	width: 22.996px;
	height: 16.5px;
	left: 0.809px;
	top: 5.25px;
	transform: matrix(1,0,0,1,0,0);
} */

/* #Icon_feather-save_fv {
	position: absolute;
	width: 21.4px;
	height: 21.4px;
	left: 131.3px;
	top: 11.3px;
	overflow: visible;
}
#Path_17_fw {
	fill: transparent;
	stroke: rgba(83,83,83,1);
	stroke-width: 1.7999999523162842px;
	stroke-linejoin: round;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_17_fw {
	overflow: visible;
	position: absolute;
	width: 23.2px;
	height: 23.2px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_18_fx {
	fill: transparent;
	stroke: rgba(83,83,83,1);
	stroke-width: 1.7999999523162842px;
	stroke-linejoin: round;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_18_fx {
	overflow: visible;
	position: absolute;
	width: 13.689px;
	height: 11.311px;
	left: 4.756px;
	top: 11.889px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_19_fy {
	fill: transparent;
	stroke: rgba(83,83,83,1);
	stroke-width: 1.7999999523162842px;
	stroke-linejoin: round;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_19_fy {
	overflow: visible;
	position: absolute;
	width: 11.311px;
	height: 7.744px;
	left: 4.756px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
} */
/* #menu-down {
	position: absolute;
	width: 30px;
	height: 29px;
	left: 69px;
	top: 6px;
	overflow: visible;
}
#Rectangle_47_f {
	fill: transparent;
}
.Rectangle_47_f {
	position: absolute;
	overflow: visible;
	width: 30px;
	height: 29px;
	left: 0px;
	top: 0px;
}
#Rectangle_47_f {
	fill: transparent;
}
.Rectangle_47_f {
	position: absolute;
	overflow: visible;
	width: 30px;
	height: 29px;
	left: 0px;
	top: 0px;
}
#Icon_feather-menu {
	position: absolute;
	width: 19.112px;
	height: 11.637px;
	left: 5.247px;
	top: 10.181px;
	overflow: visible;
}
#Path_68 {
	fill: transparent;
	stroke: rgba(83,83,83,1);
	stroke-width: 2px;
	stroke-linejoin: round;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_68 {
	overflow: visible;
	position: absolute;
	width: 21.112px;
	height: 2px;
	left: 0px;
	top: 5.819px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_69 {
	fill: transparent;
	stroke: rgba(83,83,83,1);
	stroke-width: 2px;
	stroke-linejoin: round;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_69 {
	overflow: visible;
	position: absolute;
	width: 21.112px;
	height: 2px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Path_70 {
	fill: transparent;
	stroke: rgba(83,83,83,1);
	stroke-width: 2px;
	stroke-linejoin: round;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Path_70 {
	overflow: visible;
	position: absolute;
	width: 21.112px;
	height: 2px;
	left: 0px;
	top: 11.637px;
	transform: matrix(1,0,0,1,0,0);
} */

/* #Component_53__3 {
	position: absolute;
	width: 20.5px;
	height: 21.5px;
	left: 1371px;
	top: 13px;
	overflow: visible;
}
#Line_14 {
	fill: transparent;
	stroke: rgba(121,121,121,1);
	stroke-width: 3px;
	stroke-linejoin: miter;
	stroke-linecap: round;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Line_14 {
	overflow: visible;
	position: absolute;
	width: 8.242px;
	height: 8.243px;
	left: 16.5px;
	top: 17.5px;
	transform: matrix(1,0,0,1,0,0);
}
#Rectangle_2089 {
	fill: transparent;
	stroke: rgba(121,121,121,1);
	stroke-width: 3.5px;
	stroke-linejoin: miter;
	stroke-linecap: butt;
	stroke-miterlimit: 4;
	shape-rendering: auto;
}
.Rectangle_2089 {
	position: absolute;
	overflow: visible;
	width: 19px;
	height: 19px;
	left: 0px;
	top: 0px;
} */

/* #General_tab_Component_f {
	position: absolute;
	width: 151px;
	height: 42px;
	left: 1045px;
	top: 0px;
	overflow: visible;
}
#Drop_down_ga {
	opacity: 0;
	fill: rgba(50,50,50,1);
}
.Drop_down_ga {
	position: absolute;
	overflow: visible;
	width: 96px;
	height: 42px;
	left: 0px;
	top: 0px;
}
#Menu_Tab_gb {
	position: absolute;
	width: 151px;
	height: 42px;
	left: 0px;
	top: 0px;
	overflow: visible;
}
#Path_16_gc {
	fill: rgba(83,83,83,1);
}
.Path_16_gc {
	filter: drop-shadow(0px 3px 6px rgba(53, 53, 53, 0.161));
	overflow: visible;
	position: absolute;
	width: 169px;
	height: 60px;
	left: 0px;
	top: 0px;
	transform: matrix(1,0,0,1,0,0);
}
#Well_Control {
	left: 21px;
	top: 8px;
	position: absolute;
	overflow: visible;
	width: 110px;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
} */

</style>