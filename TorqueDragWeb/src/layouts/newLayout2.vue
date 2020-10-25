<template>
 <div v-bind:style="mainStyle">
     <q-layout view="hHh lpR fFf">
         <q-header>
             <div class="row">
                <div class="col-2"  :style="'height:' + headerHeight + 'px; background:' + dimgray + ';'">

                </div>
                <div class="col-6"   :style="'height:' + headerHeight + 'px;'">
                    <div class="row">
                        <div class="col q-pa-sm text-center" :style="'font-size:' + menubarFontSize + 'px; background:' + darkgrey + ';'">
                            Output
                        </div>
                        <div class="col q-pa-sm text-center" :style="'font-size:' + menubarFontSize + 'px; background:' + darkgrey + ';'">
                            Torque & Drag
                        </div>
                        <div class="col q-pa-sm text-center" :style="'font-size:' + menubarFontSize + 'px; background:' + darkgrey + ';'">
                            Hydraulics
                        </div>
                        <div class="col q-pa-sm text-center" :style="'font-size:' + menubarFontSize + 'px; background:' + darkgrey + ';'">
                            Centralization
                        </div>
                        <div class="col q-pa-sm text-center" :style="'font-size:' + menubarFontSize + 'px; background:' + darkgrey + ';'">
                            Swab & Surge
                        </div>
                        <div class="col q-pa-sm text-center" :style="'font-size:' + menubarFontSize + 'px; background:' + darkgrey + ';'">
                            Well Control
                        </div>
                        <div class="col q-pa-sm text-center" :style="'font-size:' + menubarFontSize + 'px; background:' + darkgrey + ';'">
                            Cementing
                        </div>
                    </div>
                </div>
                <div class="col-4"  :style="'height:' + headerHeight + 'px; background:' + dimgray + ';'">

                </div>
             </div>
         </q-header>

         <q-page-container>
             <div class="row">

            <div class="col-2" :style="'height:' + GetBodyHeight() + 'px;'">
                <div class="row">
                    <div class="col-12 text-center" :style="'height:20px;' + 'background: ' + primary + '; font-size:' + menubarFontSize + 'px;'"
                    >
                        <svg>

                        <text x="1" y="1" 
                        :style="'color:' + fontcolor + '; background: ' + primary + '; font-size:' + menubarFontSize + 'px;'">A nice rectangle</text>
                        </svg>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2 bg-orange">
                        <div class="row">
                            <div id="rotate-text">
                                <p>Datum</p>
                            </div>
                            <div id="rotate-text">
                                <p>WellPath</p>
                            </div>
                        </div>
                        <!-- <div class="row">
                            <div
                                class="container q-pa-md">
                                <span>Well Path</span>
                            </div>
                        </div> -->
                    </div>
                    <div class="col-10 bg-green">
                    </div>
                </div>
            </div>
            <div class="col-8" :style="'height:' + GetBodyHeight() + 'px;'">
                <router-view />
            </div>
            <div class="col-2 bg-red" :style="'height:' + GetBodyHeight() + 'px;'">
                <svg 
                    :width="win_widthTwoOverTwelve" 
                    :height="GetBodyHeight()">
                    <rect 
                    :width="win_widthTwoOverTwelve" 
                    :height="GetBodyHeight()"
                    :style="'fill:' + primary + '; stroke-width:' + strokeWidth + ';stroke:' + stroke" />

                </svg>
            </div>
             </div>
         </q-page-container>

         <footer>
             <div class="row">
                 <div class="col-12"  :style="'height:' + footerHeight + 'px; background:' + primary + ';'">

                </div>
             </div>
         </footer>
     </q-layout>
 </div>
</template>

<script>
export default {
    computed: {
        win_width() {
            return this.$q.screen.width;
        },
        win_widthOneOverFive() {
            return this.$q.screen.width /7.0;
        },
        win_widthTwoOverTwelve() {
            return 2 * (this.$q.screen.width /12.0)
        },
        win_widthFourOverFive() {
            return 4 * (this.$q.screen.width /7.0)
        },
        win_height() {
            return this.$q.screen.height;
        },
        bodyHeight2() {
            var context =  this;
            return this.$q.screen.height - 200;
        }
    },
    data() {
        return {
            darkgrey: '#A9A9A9',
            grey: '#808080',
            dimgray: '#696969',
            primary:'rgba(24,24,24,1)',
            headerHeight: 30,
            headerHeight2: 150,
            footerHeight: 30,
            menubarFontSize: 12,
            strokeWidth:1,
            stroke: '#ffffff',
            fontcolor: '#ffffff',
            mainStyle: {
                // background: '#474f57',
                color: '#ffffff',
                //fontFamily: 'Times New Roman',
                //fontStyle: 'italic',
                //fontSizeAdjust: '0.58'
            },
        }
    },
    methods: {
        GetBodyHeight(){
            var context =  this;
            var bodyHeight = context.win_height - context.headerHeight - context.footerHeight;
            console.log(bodyHeight)
            return bodyHeight;
        }
    }

}
</script>

<style>
      .container{
        -webkit-transform:  translateY(-100%) rotate(90deg) ;
        transform:  translateY(-100%) rotate(90deg);
        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        margin:0px;
        background-color:rgba(24,24,24,1);
        color:white;       
    }

    p{
        font: 12px;
        /* letter-spacing: 2px; */
        background:rgba(24,24,24,1);
        color:#fff;
        margin: 0 0 10px 0;
        padding: 5px 10px;
        line-height: 24px;
        /* padding: 5px 10px; 
        margin: 0 0 10px 0;
        line-height: 24px; */
    }

    .transF p{
        top: 0;
        left: 0;
        background: none;
        transform-origin: 0 0;
        transform: rotate(180deg);
    }

    #rotate-text {
        top: 0;
        left: 0;
        width: 150px;
        transform: rotate(270deg);
        }
</style>

