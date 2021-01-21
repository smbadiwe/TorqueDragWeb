<template>
    <div class="bg-accent">
        <div class="row">
        </div>
        <div class="row">
            <q-bar class="col-12 q-pa-sm row bg-secondary" >
                <q-btn dense flat round icon="table_view" />
                <q-btn dense flat round icon="content_copy" label="Copy" />
                
                <q-space />
                <q-btn-dropdown color="primary" :label="selectedYVariable">
                    <q-list>
                        <q-item 
                        v-for="series in seriesStore" :key="series.name"
                        clickable v-close-popup @click="onItemClick(series)">
                        <q-item-section>
                            <q-item-label>{{ series.name }}</q-item-label>
                        </q-item-section>
                        </q-item>

                    </q-list>
                    </q-btn-dropdown>
            </q-bar>
        </div>
        <div class="row">
            <div id="myDiv" class="col-12 bg-accent" >
            </div>
        </div>
    </div>
</template>

<script>

import Plotly from 'plotly.js-dist'
import {copy} from '../../boot/utils'

export default {
    computed:{
        seriesCollection(){
            var srsCollection = this.$store.getters['chartStore/seriesCollection'];
            // console.log("chart.seriesCollection", srsCollection);
            return srsCollection;
        },
        seriesStore(){
            return this.$store.getters['chartStore/seriesStore'];
        },
        layout(){
            return this.$store.getters['chartStore/layout'];
        }
    },
    data(){
        return{
            selectedYVariable: "",
            seriesCollection2: []
        }
    },
    methods: {
        onItemClick (yVariable) {
            var context = this;
            context.selectedYVariable = yVariable.name;
            var i = 0, lent = context.seriesStore.length;
            context.seriesCollection2 = [];
            for(i = 0; i < lent; i++){
                if(context.selectedYVariable == context.seriesStore[i].name){
                     var series1 = {
                        x: context.seriesStore[i].x,
                        y: context.seriesStore[i].y,
                        line: {
                            shape: "spline"
                        },
                        mode: "lines",
                        type: "scatter",
                        name: "Dogleg Severity"
                        };
                    context.layout.yaxis.title = context.seriesStore[i].yaxisTitle;
                    context.seriesCollection2.push(copy(series1));
                    Plotly.newPlot('myDiv', context.seriesCollection2, context.layout);
                    break;
                }
            }
        }
    },
    mounted(){
        var context =  this;
        Plotly.newPlot('myDiv', context.seriesCollection, context.layout);
    }
}
</script>