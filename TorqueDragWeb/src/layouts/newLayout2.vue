<template>
 <div>
     <q-layout view="hHh lpR fFf">
         <q-header>
            <div id="Top_Rectangle" :style="'width: '+ win_width + 'px;'">
                <svg class="Rectangle_2" :style="'width: '+ win_width + 'px;'">
                    <rect id="Rectangle_2"
                    rx="0" ry="0" x="0" y="0" :width="win_width" height="139">
                    </rect>
                </svg>
                <svg class="Rectangle_1" :style="'width: '+ win_width + 'px;'">
                    <rect id="Rectangle_1"
                     rx="0" ry="0" x="0" y="0" :width="win_width" height="42">
                    </rect>
                </svg>
            </div>
            <div class="row">
                <div class="col-2">
                    
                </div>
                <div class="col-7">
                    <div class="row">
                        <div class="col q-pa-sm TextClass">
                            Output
                        </div>
                        <div class="col q-pa-sm TextClass">
                            Torque & Drag
                        </div>
                        <div class="col q-pa-sm TextClass">
                            Hydraulics
                        </div>

                        <div class="col q-pa-sm TextClass">
                            Surge & Swab
                        </div>
                    </div>
                </div>
                <div class="col-3">

                </div>
            </div>
         </q-header>

         <q-page-container>
           
         </q-page-container>

     </q-layout>
 </div>
</template>

<script>
export default {
    computed: {
        win_width() {
            return this.$q.screen.width;
        },
        win_height() {
            return this.$q.screen.height;
        }
    },
    data() {
        return {
        }
    },
    methods: {

    }

}
</script>

<style>
   
   #Top_Rectangle {
	position: absolute;;
	height: 139px;
    /* width: 1920px; */
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
	height: 139px;
    width: 1920px;
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
	height: 42px;
	left: 0px;
	top: 0px;
}

.TextClass {
    height: 42px;
	overflow: visible;
	white-space: nowrap;
	text-align: left;
	font-family: Segoe UI;
	font-style: normal;
	font-weight: normal;
	font-size: 20px;
	color: rgba(227,227,227,1);
    background-color: rgba(50,50,50,1);
}
</style>

