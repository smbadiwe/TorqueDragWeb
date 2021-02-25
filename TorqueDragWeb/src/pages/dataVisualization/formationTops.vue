<template>
    <div  id="mydiv" ref="mydiv">
        <!-- id="mydiv" ref="mydiv" 
        <canvas id="c"></canvas> -->

        <canvas id="mycanvas" ref="mycanvas" class="bg-accent"></canvas>
    </div>
</template>

<script>
import * as THREE from 'three';

const scene = new THREE.Scene();

export default {
    data(){
        return {
            screenHeight: 800,
            screenWidth: 800,
            cube: null,
            renderer: null,
            pipeSectionTypes: ['Pup Joint', 'Tubing', 
            'Flow Coupling', 'SSSV', 'Seal Assembly', 'Mandrel', 'Packer'],
            pipeSectionColors: ['#D3D3D3', '#D3D3D3', 'gray', 'red', 'black',
                                'gold', 'blue'],
            schematicHeight: 1000,
            schematicWidth: 1000               
                                            
        }
    },
    methods: {
        drawLine(){
            var context =  this;
            var mydiv = this.$refs.mydiv
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(context.screenWidth, context.screenHeight );
            mydiv.appendChild(renderer.domElement );

            const camera = new THREE.PerspectiveCamera( 45, context.screenWidth / context.screenHeight, 1, 500 );
            camera.position.set( 0, 0, 100 );
            camera.lookAt( 0, 0, 0 );

            const scene = new THREE.Scene();

            //create a blue LineBasicMaterial
            const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

            const points = [];
            points.push( new THREE.Vector3( - 10, 0, 0 ) );
            points.push( new THREE.Vector3( 0, 10, 0 ) );
            points.push( new THREE.Vector3( 10, 0, 0 ) );

            const geometry = new THREE.BufferGeometry().setFromPoints( points );

            const line = new THREE.Line( geometry, material );

            scene.add( line );
            renderer.render( scene, camera );
        },
        drawCylinder(){
            var context =  this;
            var mydiv = this.$refs.mydiv

            var scene = new THREE.Scene();
            var camera = new THREE.PerspectiveCamera(60, context.screenWidth / context.screenHeight, 1, 1000);
            camera.position.set(0, 5, 10);
            camera.lookAt(scene.position);
            var renderer = new THREE.WebGLRenderer({
            antialias: true
            });
            renderer.setSize(context.screenWidth, context.screenHeight);
            mydiv.appendChild(renderer.domElement);

            //var controls = new THREE.OrbitControls(camera, renderer.domElement);

            //scene.add(new THREE.GridHelper(10, 10));

            var geom = new THREE.CylinderGeometry(1, 1, 7, 16, 1);
            //geom.rotateZ(-Math.PI * 0.5); // rotate 90 degrees clockwise around z-axis
            geom.rotateZ(60);

            var cylinder = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({
            color: "aqua",
            wireframe: false
            }));

            scene.add(cylinder);

            renderer.render(scene, camera);

        },
        render(){

        },
        main(){
            var context =  this;
            const canvas = document.querySelector('#c');
            const renderer = new THREE.WebGLRenderer({canvas});
            const fieldOfView = 75; //degrees in the vertical dimension
            const aspect = 2; //aspect ratio i.e width/height of canvas
            const near = 0.1; //nearest space in front of the camera that will be rendered
            const far = 5; //farthest space in front of the camera that will be rendered
            const camera = new THREE.PerspectiveCamera(fieldOfView, aspect, near, far);
            camera.position.z = 2;
            const scene = new THREE.Scene();
            const boxWidth = 1;
            const boxHeight = 1;
            const boxDepth = 1;
            const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
            const material = new THREE.MeshBasicMaterial({color: 0x44aa88});
            //const material = new THREE.MeshPhongMaterial({color: 0x44aa88});
            const cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            const color = 0xFFFFFF;
            const intensity = 1;
            //const light = new THREE.DirectionalLight(color, intensity);
            //light.position(-1, 2, 4);
            //scene.add(light);
            renderer.render(scene, camera);
        },
        aboutScene(){
            //an array of objects whose rotation to update 
            const objects = [];

            //use just one shpere for everything
            const radius = 1;
            const widthSegments = 6;
            const heightSegments = 6;
            const sphereGeometry =  new THREE.SphereGeometry(radius, widthSegments, heightSegments);

            const sunMaterial = new THREE.MeshPhongMaterial({emissive: 0xFFFF00});
            const sunMesh =  new THREE.Mesh(sphereGeometry, sunMaterial);
            sunMesh.scale.set(5, 5, 5); // make the sun large
            scene.add(sunMesh);
            objects.push(sunMesh);

            const color = 0xFFFFFF;
            const intensity = 3;
            const light =  new THREE.PointLight(color, intensity);
            scene.add(light);
            
            const fov = 75; //degrees in the vertical dimension
            const aspect = 2; //aspect ratio i.e width/height of canvas
            const near = 0.1; //nearest space in front of the camera that will be rendered
            const far = 5; //farthest space in front of the camera that will be rendered
            const camera = new THREE.PerspectiveCamera(fov);
            camera.position.set(0, 50, 0);
            camera.up.set(0, 0, 1);
            camera.lookAt(0, 0, 0); 
            const time = 0.01;
            
            objects.forEach((obj) => {
                obj.rotation.y = time;
            });

            const earthMaterial = new THREE.MeshPhongMaterial({color: 0x2233FF, emissive: 0x112244});
            const earthMesh =  new THREE.Mesh(sphereGeometry, earthMaterial);
            earthMesh.position.x = 10;
            scene.add(earthMesh);
            objects.push(earthMesh);

            const canvas = document.querySelector('#c');
            const renderer = new THREE.WebGLRenderer({canvas});
            renderer.render(scene, camera);
            
        },
        drawCylinder2(){
            var mycanvas = this.$refs.mycanvas
            var ctx, x, y, w, h;
            x = 200;
            y = 200;
            w = 400;
            h = 800;
            var canvas = document.getElementById("c");
            var ctx = canvas.getContext("3d");

            'use strict';
            var i, xPos, yPos, pi = Math.PI, twoPi = 2 * pi;

            ctx.beginPath();

            for (i = 0; i < twoPi; i += 0.001) {
                xPos = (x + w / 2) - (w / 2 * Math.cos(i));
                yPos = (y + h / 8) + (h / 8 * Math.sin(i));

                if (i === 0) {
                    ctx.moveTo(xPos, yPos);
                } else {
                    ctx.lineTo(xPos, yPos);
                }
            }
            ctx.moveTo(x, y + h / 8);
            ctx.lineTo(x, y + h - h / 8);

            for (i = 0; i < pi; i += 0.001) {
                xPos = (x + w / 2) - (w / 2 * Math.cos(i));
                yPos = (y + h - h / 8) + (h / 8 * Math.sin(i));

                if (i === 0) {
                    ctx.moveTo(xPos, yPos);
                } else {
                    ctx.lineTo(xPos, yPos);
                }
            }
            ctx.moveTo(x + w, y + h / 8);
            ctx.lineTo(x + w, y + h - h / 8);

            ctx.stroke();

            mydiv.appendChild(renderer.domElement );
        },
        drawCylinder3(canvas, ctx, fill, border, lineWidth)
        {
            canvas.width = 800;//160;
            canvas.height =800;// 175;
            ctx.translate(300,20); //(25,0)
            ctx.fillStyle = fill;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.beginPath();
            ctx.moveTo(97.0, 156.7);
            ctx.lineTo(97.0, 17.7);
            ctx.lineTo(1.0, 17.7);
            ctx.lineTo(1.0, 156.7);
            ctx.lineTo(97.0, 156.7);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(96.7, 156.2);
            ctx.bezierCurveTo(96.7, 165.3, 75.4, 172.7, 49.0, 172.7);
            ctx.bezierCurveTo(22.7, 172.7, 1.4, 165.3, 1.4, 156.2);
            ctx.bezierCurveTo(1.4, 147.2, 22.7, 139.8, 49.0, 139.8);
            ctx.bezierCurveTo(75.4, 139.8, 96.7, 147.2, 96.7, 156.2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(96.7, 17.4);
            ctx.bezierCurveTo(96.7, 26.5, 75.4, 33.8, 49.0, 33.8);
            ctx.bezierCurveTo(22.7, 33.8, 1.4, 26.5, 1.4, 17.4);
            ctx.bezierCurveTo(1.4, 8.4, 22.7, 1.0, 49.0, 1.0);
            ctx.bezierCurveTo(75.4, 1.0, 96.7, 8.4, 96.7, 17.4);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        },
        drawCylinder4(ctx, pt1, pt2, pt3, pt4, fillStyle, isBottomCoverPositive,
                    isBottomCoverNegative, isTopCoverPositive, isTopCoverNegative)
        {

            ctx.beginPath();
            ctx.moveTo(pt1.x, pt1.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.lineTo(pt3.x, pt3.y);
            ctx.lineTo(pt4.x, pt4.y);
            ctx.lineTo(pt1.x, pt1.y);
            ctx.closePath();
            //ctx.strokeStyle = "transparent";
            ctx.fillStyle = fillStyle;
            ctx.fill();
            ctx.stroke();
            
            var dy = 10;
            // layer1/Group/Path
            ctx.beginPath();
            if(isTopCoverNegative  == true){
                ctx.moveTo(pt1.x, pt1.y);
                ctx.bezierCurveTo(pt1.x, pt1.y - dy, pt2.x, pt1.y - dy, pt2.x, pt2.y);
            }

            if(isTopCoverPositive == true){
                ctx.moveTo(pt2.x, pt2.y);
                ctx.bezierCurveTo(pt2.x, pt2.y + dy, pt1.x, pt1.y + dy, pt1.x, pt1.y);
            }
            
            //ctx.closePath();
            ctx.fillStyle = fillStyle;
            ctx.fill();
            ctx.stroke();

            // layer1/Group/Path
            ctx.beginPath();

            if(isBottomCoverNegative == true){
                ctx.moveTo(pt4.x, pt4.y);
                ctx.bezierCurveTo(pt4.x, pt4.y - dy, pt3.x, pt4.y - dy, pt3.x, pt3.y);
            }

            if(isBottomCoverPositive == true){
                ctx.moveTo(pt3.x, pt3.y);
                ctx.bezierCurveTo(pt3.x, pt3.y + dy, pt4.x, pt4.y + dy, pt4.x, pt4.y);
            }
            
            //ctx.closePath();
            ctx.fillStyle = fillStyle;
            ctx.fill();
            ctx.stroke();
        },
        drawFormation(ctx, originX, originY, width, height, fillStyle){
            ctx.beginPath();
            ctx.rect(originX, originY , width, height);
            ctx.fillStyle = fillStyle;
            ctx.fill();
        },
        lineSpacing(depth1, depth2){
            var interval = (depth2 - depth1)/50.0;
            var depths = [];
            var x = depth1;
            depths.push(depth1);

            while (x < depth2)
            {
                x = x + interval;
                depths.push(x);
            }

            var i = depths.length - 1;

            if (depths[i] != depth2)
                depths[i] = depth2;

            return depths;
        },
        createRoughLine(depth1, depth2, displacement,
                      isMeasuedDepth, deviationSurveys){
            var context = this;
            var depths = context.lineSpacing(depth1, depth2);
            var points = [];
            var length = depths.length;
            var i = 0;
            for(i = 0; i < length; i++){
                var pt = {
                    x: displacement,
                    y: depths[i]
                }

                if(isMeasuedDepth == true){
                   pt.x = context.interpolation(deviationSurveys, pt.y, 'verticalSection');
                   console.log('vertical section: ', pt.x);
                }

                points.push(pt);
            }

            return points;
        },
        drawOpenHole(ctx, leftPoints, rightPoints, fillStyle)
        {
            var context =  this;
            var i = 0;
            var nPoints = leftPoints.length;
            ctx.beginPath();
            ctx.moveTo(leftPoints[0].x, leftPoints[0].y);
            for(i = 0; i < nPoints; i++){
                ctx.lineTo(leftPoints[i].x, leftPoints[i].y);
            }
            
            ctx.lineTo(rightPoints[nPoints-1].x, rightPoints[nPoints-1].y);

            for(i = nPoints-2; i >= 0; i--){
                ctx.lineTo(rightPoints[i].x, rightPoints[i].y);
            }

            ctx.closePath();
            ctx.fillStyle = fillStyle;
            ctx.fill();
            ctx.stroke();

           
        },
        drawCasing(ctx, pt1, pt2, pt3, pt4, fillStyle, isBottomCoverPositive,
                    isBottomCoverNegative, isTopCoverPositive, isTopCoverNegative,
                    addShoe)
        {

            ctx.beginPath();
            ctx.moveTo(pt1.x, pt1.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.lineTo(pt3.x, pt3.y);
            ctx.lineTo(pt4.x, pt4.y);
            ctx.lineTo(pt1.x, pt1.y);
            ctx.closePath();
            //ctx.strokeStyle = "transparent";
            ctx.fillStyle = fillStyle;
            ctx.fill();
            ctx.stroke();

            if(addShoe == true){
                ctx.beginPath();
                ctx.moveTo(pt3.x, pt3.y);
                ctx.lineTo(pt3.x + 10, pt3.y);
                ctx.lineTo(pt3.x, pt3.y-20);
                ctx.closePath();
                ctx.fillStyle = "black";
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(pt4.x, pt4.y);
                ctx.lineTo(pt4.x - 10, pt4.y);
                ctx.lineTo(pt4.x, pt4.y-20);
                ctx.closePath();
                //ctx.strokeStyle = "transparent";
                ctx.fillStyle = "black";
                ctx.fill();
                ctx.stroke();
            }
            
            var dy = 10;
           /*  if(isTopCoverNegative  == true){
               ctx.beginPath();
                ctx.moveTo(pt1.x, pt1.y);
                ctx.bezierCurveTo(pt1.x, pt1.y - dy, pt2.x, pt1.y - dy, pt2.x, pt2.y);
                ctx.fillStyle = fillStyle;
                ctx.fill();
                ctx.stroke();
            } */

            /* if(isTopCoverPositive == true){
                ctx.beginPath();
                ctx.moveTo(pt2.x, pt2.y);
                ctx.bezierCurveTo(pt2.x, pt2.y + dy, pt1.x, pt1.y + dy, pt1.x, pt1.y);
                ctx.fillStyle = 'black';
                ctx.fill();
                ctx.stroke();
            } */
            

            /* if(isBottomCoverNegative == true){
                ctx.beginPath();
                ctx.moveTo(pt4.x, pt4.y);
                ctx.bezierCurveTo(pt4.x, pt4.y - dy, pt3.x, pt4.y - dy, pt3.x, pt3.y);
                ctx.fillStyle = fillStyle;
                ctx.fill();
                ctx.stroke();
            }
 */
            /* if(isBottomCoverPositive == true){
                ctx.beginPath();
                ctx.moveTo(pt3.x, pt3.y);
                ctx.bezierCurveTo(pt3.x, pt3.y + dy, pt4.x, pt4.y + dy, pt4.x, pt4.y);
                ctx.fillStyle = 'black';
                ctx.fill();
                ctx.stroke();
            } */
            
            //ctx.closePath();
            /* ctx.fillStyle = fillStyle;
            ctx.fill();
            ctx.stroke(); */
        },
        drawPipe(ctx, pt1, pt2, pt3, pt4, fillStyle, isBottomCoverPositive,
                    isBottomCoverNegative, isTopCoverPositive, isTopCoverNegative,
                    showLabel, description, depthDescription)
        {

            ctx.beginPath();
            ctx.moveTo(pt1.x, pt1.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.lineTo(pt3.x, pt3.y);
            ctx.lineTo(pt4.x, pt4.y);
            ctx.lineTo(pt1.x, pt1.y);
            ctx.closePath();
            //ctx.strokeStyle = "transparent";
            ctx.fillStyle = fillStyle;
            ctx.fill();
            ctx.stroke();
            
            var dy = 5;

            if(showLabel == true){
                ctx.beginPath();
                ctx.moveTo(pt3.x, pt3.y);
                ctx.lineTo(pt3.x + 50, pt3.y);

                ctx.font = '12px Arial';
                ctx.fillStyle = 'black';
                ctx.textAlign = "left";
                ctx.fillText(description, pt3.x + 50, pt3.y);
                
                
                ctx.lineTo(pt4.x - 50, pt4.y);
                ctx.font = '12px Arial';
                ctx.fillStyle = 'black';
                ctx.textAlign = "right";
                ctx.fillText(depthDescription, pt4.x - 50, pt4.y);
                 
                ctx.stroke();
            }
            
           /*  if(isTopCoverNegative  == true){
                ctx.beginPath();
                ctx.moveTo(pt1.x, pt1.y);
                ctx.bezierCurveTo(pt1.x, pt1.y - dy, pt2.x, pt1.y - dy, pt2.x, pt2.y);
                ctx.fillStyle = fillStyle;
                ctx.fill();
                ctx.stroke();
            } */

            if(isTopCoverPositive == true){
                ctx.beginPath();
                ctx.moveTo(pt2.x, pt2.y);
                ctx.bezierCurveTo(pt2.x, pt2.y + dy, pt1.x, pt1.y + dy, pt1.x, pt1.y);
                ctx.fillStyle = 'black';
                ctx.fill();
                ctx.stroke();
            }
            

         /*    if(isBottomCoverNegative == true){
                ctx.beginPath();
                ctx.moveTo(pt4.x, pt4.y);
                ctx.bezierCurveTo(pt4.x, pt4.y - dy, pt3.x, pt4.y - dy, pt3.x, pt3.y);
                ctx.fillStyle = fillStyle;
                ctx.fill();
                ctx.stroke();
            } */

            if(isBottomCoverPositive == true){
                ctx.beginPath();
                ctx.moveTo(pt3.x, pt3.y);
                ctx.bezierCurveTo(pt3.x, pt3.y + dy, pt4.x, pt4.y + dy, pt4.x, pt4.y);
                ctx.fillStyle = 'black';
                ctx.fill();
                ctx.stroke();
            }
            
        },
        interpolate(x1, x2, y1, y2, y){
            var x = 0;
            var term1 = x2 - x1
            var term2 = (y -  y1)/(y2 - y1);
            x = x1 + (term2 * term1);

           /*  if(x === NaN){
                console.log("x1: ", x1);
                console.log("x2: ", x2);
                console.log("y1: ", y1);
                console.log("y2: ", y2);
                console.log("y: ", y);
            } */
            //console.log("x: ", x)
            return x;
        },
        interpolation(deviationSurveys, mD, yType){
            var i = 0, ii = 0; 
            var xType = 'measuredDepth';
            var  check = false;
            var deviationSurvey = deviationSurveys[0];
            var deviationSurvey2 = {}
            var Y = deviationSurvey[yType];
            var nCount = deviationSurveys.length;

            for (i = 1; i < nCount; i++){
                deviationSurvey = deviationSurveys[i-1];
                deviationSurvey2 = deviationSurveys[i];
                if (mD >= deviationSurvey[xType] && mD <= deviationSurvey2[xType]){
                    ii = i;
                    check = true;
                    break;
                }
            }

            if (check == true)
            {
                deviationSurvey = deviationSurveys[ii-1];
                deviationSurvey2 = deviationSurveys[ii];

                var m = (deviationSurvey2[yType] - deviationSurvey[yType]) 
                / (deviationSurvey2[xType] - deviationSurvey[xType]);
                var c = deviationSurvey[yType];
                var x = mD - deviationSurvey[xType];

                Y = m * x + c;
            }

            return Y;
        },
        testDrawingWellSchematic(){
            var context =  this;
            var originX = 0;
            var originY = 20;

            var drillPipes = [
                {
                    pt1: {
                        x: 60,
                        y: 30
                    },
                    pt2: {
                        x: 90,
                        y: 30
                    },
                    pt3: {
                        x: 90,
                        y: 100
                    },
                    pt4: {
                        x: 60,
                        y: 100
                    }
                },
                {
                    pt1: {
                        x: 60,
                        y: 100
                    },
                    pt2: {
                        x: 90,
                        y: 100
                    },
                    pt3: {
                        x: 90,
                        y: 200
                    },
                    pt4: {
                        x: 60,
                        y: 200
                    }
                },
                {
                    pt1: {
                        x: 60,
                        y: 200
                    },
                    pt2: {
                        x: 90,
                        y: 200
                    },
                    pt3: {
                        x: 90,
                        y: 300
                    },
                    pt4: {
                        x: 60,
                        y: 300
                    }
                },
                {
                    pt1: {
                        x: 60,
                        y: 300
                    },
                    pt2: {
                        x: 90,
                        y: 300
                    },
                    pt3: {
                        x: 190,
                        y: 400
                    },
                    pt4: {
                        x: 160,
                        y: 400
                    }
                },
                {
                    pt1: {
                        x: 160,
                        y: 400
                    },
                    pt2: {
                        x: 190,
                        y: 400
                    },
                    pt3: {
                        x: 290,
                        y: 500
                    },
                    pt4: {
                        x: 260,
                        y: 500
                    }
                },
                {
                    pt1: {
                        x: 260,
                        y: 500
                    },
                    pt2: {
                        x: 290,
                        y: 500
                    },
                    pt3: {
                        x: 440,
                        y: 600
                    },
                    pt4: {
                        x: 410,
                        y: 600
                    }
                }
            ]

            var casing = [
                {
                    pt1: {
                        x: 50,
                        y: 30
                    },
                    pt2: {
                        x: 100,
                        y: 30
                    },
                    pt3: {
                        x: 100,
                        y: 100
                    },
                    pt4: {
                        x: 50,
                        y: 100
                    }
                },
                {
                    pt1: {
                        x: 50,
                        y: 100
                    },
                    pt2: {
                        x: 100,
                        y: 100
                    },
                    pt3: {
                        x: 100,
                        y: 200
                    },
                    pt4: {
                        x: 50,
                        y: 200
                    }
                },
                {
                    pt1: {
                        x: 50,
                        y: 200
                    },
                    pt2: {
                        x: 100,
                        y: 200
                    },
                    pt3: {
                        x: 100,
                        y: 300
                    },
                    pt4: {
                        x: 50,
                        y: 300
                    }
                },
                {
                    pt1: {
                        x: 50,
                        y: 300
                    },
                    pt2: {
                        x: 100,
                        y: 300
                    },
                    pt3: {
                        x: 200,
                        y: 400
                    },
                    pt4: {
                        x: 150,
                        y: 400
                    }
                },
                {
                    pt1: {
                        x: 150,
                        y: 400
                    },
                    pt2: {
                        x: 200,
                        y: 400
                    },
                    pt3: {
                        x: 300,
                        y: 500
                    },
                    pt4: {
                        x: 250,
                        y: 500
                    }
                },
                {
                    pt1: {
                        x: 250,
                        y: 500
                    },
                    pt2: {
                        x: 300,
                        y: 500
                    },
                    pt3: {
                        x: 450,
                        y: 600
                    },
                    pt4: {
                        x: 400,
                        y: 600
                    }
                }
            ]

            var openhole = [
                {
                    pt1: {
                        x: 40,
                        y: 30
                    },
                    pt2: {
                        x: 110,
                        y: 30
                    },
                    pt3: {
                        x: 110,
                        y: 100
                    },
                    pt4: {
                        x: 40,
                        y: 100
                    }
                },
                {
                    pt1: {
                        x: 40,
                        y: 100
                    },
                    pt2: {
                        x: 110,
                        y: 100
                    },
                    pt3: {
                        x: 110,
                        y: 200
                    },
                    pt4: {
                        x: 40,
                        y: 200
                    }
                },
                {
                    pt1: {
                        x: 40,
                        y: 200
                    },
                    pt2: {
                        x: 110,
                        y: 200
                    },
                    pt3: {
                        x: 110,
                        y: 300
                    },
                    pt4: {
                        x: 40,
                        y: 300
                    }
                },
                {
                    pt1: {
                        x: 40,
                        y: 300
                    },
                    pt2: {
                        x: 110,
                        y: 300
                    },
                    pt3: {
                        x: 210,
                        y: 400
                    },
                    pt4: {
                        x: 140,
                        y: 400
                    }
                },
                {
                    pt1: {
                        x: 140,
                        y: 400
                    },
                    pt2: {
                        x: 210,
                        y: 400
                    },
                    pt3: {
                        x: 310,
                        y: 500
                    },
                    pt4: {
                        x: 240,
                        y: 500
                    }
                },
                {
                    pt1: {
                        x: 240,
                        y: 500
                    },
                    pt2: {
                        x: 310,
                        y: 500
                    },
                    pt3: {
                        x: 450,
                        y: 600
                    },
                    pt4: {
                        x: 390,
                        y: 600
                    }
                }
            ]

            var canvas = document.getElementById("mycanvas");
            var ctx = canvas.getContext("2d");

            var i = 0, lent = casing.length;

            
            canvas.width = context.screenWidth;
            canvas.height = context.screenHeight;
            ctx.translate(originX,originY); 
            ctx.lineWidth = 2;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            var fillStyle = 'lightblue';
            var formationOriginX = 0;
            var formationOriginY = 60;
            var formationWidth = canvas.width;
            var formationHeight = canvas.height - formationOriginY - 10;


            //Draw Formation
            fillStyle = ' #a26c37'
            context.drawFormation(ctx, formationOriginX, formationOriginY, formationWidth, formationHeight, fillStyle)


            // Draw Casing and Open Hole
            fillStyle = '#b2beb5';
            for(i = 0; i < lent; i++){
                context.drawCylinder4(ctx,
                    openhole[i].pt1, openhole[i].pt2, openhole[i].pt3, openhole[i].pt4, 'blue', true, true,
                    true, true);

                if(i == 0){
                    context.drawCylinder4(ctx,
                    casing[i].pt1, casing[i].pt2, casing[i].pt3, casing[i].pt4, fillStyle, false, false,
                    true, true);
                }else if (i == lent-1){
                    context.drawCylinder4(ctx,
                    casing[i].pt1, casing[i].pt2, casing[i].pt3, casing[i].pt4, fillStyle, true, true,
                    true, true);
                }else{
                    context.drawCylinder4(ctx,
                    casing[i].pt1, casing[i].pt2, casing[i].pt3, casing[i].pt4, fillStyle, true, true,
                    true, true);
                }

                

            
            }

            // Draw Drill Pipes
            fillStyle = '#D3D3D3';
            var pipesCount = drillPipes.length;
            for(i = 0; i < pipesCount; i++){
                if(i == 0){
                    context.drawCylinder4(ctx,
                    drillPipes[i].pt1, drillPipes[i].pt2, drillPipes[i].pt3, drillPipes[i].pt4, fillStyle, false, false,
                    true, true);
                }else if (i == lent-1){
                    context.drawCylinder4(ctx,
                    drillPipes[i].pt1, drillPipes[i].pt2, drillPipes[i].pt3, drillPipes[i].pt4, fillStyle, true, true,
                    true, true);
                }else{
                    context.drawCylinder4(ctx,
                    drillPipes[i].pt1, drillPipes[i].pt2, drillPipes[i].pt3, drillPipes[i].pt4, fillStyle, true, true,
                    true, true);
                }

            }
            


            
        },
        getDrillPipeFillStyle(typeOfSection){
            //console.log('typeOfSection: ', typeOfSection)
            var context = this;
            var fillStyle = '#D3D3D3';
            var i = 0, length = context.pipeSectionTypes.length;
            for(i = 0; i < length; i++){    
               /*  if(typeOfSection  == 'Flow Coupling'){
                    console.log('Flow Coupling Color: ', context.pipeSectionColors[i])
                } */
                if(typeOfSection == context.pipeSectionTypes[i]){
                    fillStyle = context.pipeSectionColors[i];
                    break;
                }
            } 
            
            return fillStyle;
        },
        drawWellSchematicTVDToScale(){
            var context =  this;
            var originX = 0;
            var originY = 20;
            var canvas = document.getElementById("mycanvas");
            var ctx = canvas.getContext("2d");
            canvas.width = context.screenWidth;
            canvas.height = context.screenHeight;
            var offsetX = (canvas.width/2.0) - 100.0;
            ctx.translate(originX,originY); 
            ctx.lineWidth = 2;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            var fillStyle = 'lightblue';

            var formationOriginX = 0;
            var formationOriginY = 60;
            var formationWidth = canvas.width;
            var formationHeight = canvas.height - formationOriginY - 10;


            //Draw Formation
            fillStyle = ' #a26c37'
            context.drawFormation(ctx, formationOriginX, formationOriginY, formationWidth, formationHeight, fillStyle);

            var holeSections = this.$store.getters['holeStore/holeSections'];
            var pipes = this.$store.getters['tubingStringStore/pipes'];
            var deviationSurveys = this.$store.getters['wellPathStore/deviationSurveys'];

            var lengthOfdeviationSurveys = deviationSurveys.length;
            var tvDmin = deviationSurveys[0].trueVerticalDepth;
            var tvDmax = deviationSurveys[lengthOfdeviationSurveys-1].trueVerticalDepth;

            //canvas.height
            var i = 0, j = 0;
            var lengthOfholeSections = holeSections.length;
            var casing = [];
            var hole = [];
            for(i = 0; i < lengthOfholeSections; i++){
                var tvdTop = context.interpolation(deviationSurveys, holeSections[i].topOfHole, 'trueVerticalDepth');
                var tvdBottom = context.interpolation(deviationSurveys, holeSections[i].bottomOfHole, 'trueVerticalDepth');

                var holePoints = context.createRoughLine(tvdTop, tvdBottom, 0, false, deviationSurveys);

                
                var tvdTop_c = context.interpolate(0, 700, tvDmin, tvDmax, tvdTop);// + formationOriginY;
                var tvdBottom_c = context.interpolate(0, 700, tvDmin, tvDmax, tvdBottom);// + formationOriginY;

                //console.log("tvdTop_c: ", tvdTop_c);
                //console.log("tvdBottom_c: ", tvdBottom_c);

                var leftPoints = [];
                var rightPoints = [];
                var holePointsCount = holePoints.length;
                for(j = 0; j < holePointsCount; j++){
                    

                    var tvd_h = context.interpolate(0, 700, tvDmin, tvDmax, holePoints[j].y);
                    //console.log("tvd_h: ", tvd_h);
                    

                    var pointLeft =  {
                            x: originX + offsetX - 5,
                            y: tvd_h
                        }
                    pointLeft.x = pointLeft.x  - Math.floor(Math.random() * 10);
                    leftPoints.push(pointLeft);

                     var pointRight =  {
                            x:  originX + offsetX + 55,
                            y: tvd_h
                        }

                    pointRight.x = pointRight.x  + Math.floor(Math.random() * 10);
                    rightPoints.push(pointRight);
                }
                

                //console.log("tvdTop_c: ", tvdTop_c);
                //console.log("tvdBottom_c: ", tvdBottom_c);
                var pipe = {
                    points: {
                        pt1: {
                            x: originX + offsetX,
                            y: tvdTop_c
                        },
                        pt2: {
                            x: originX + offsetX + 50,
                            y: tvdTop_c
                        },
                        pt3: {
                            x: originX + offsetX + 50,
                            y: tvdBottom_c
                        },
                        pt4: {
                            x: originX + offsetX,
                            y: tvdBottom_c
                        }
                    }

                }

                var holeSection = {
                    leftPoints,
                    rightPoints
                }

                casing.push(pipe);
                hole.push(holeSection);

            }

            var lengthOfPipes = pipes.length;
            var drillPipes = [];
            for(i = 0; i < lengthOfPipes; i++){
                var tvdTop = context.interpolation(deviationSurveys, pipes[i].measuredDepth - pipes[i].length, 'trueVerticalDepth');
                var tvdBottom = context.interpolation(deviationSurveys, pipes[i].measuredDepth, 'trueVerticalDepth');
                var tvdTop_c = context.interpolate(0, 700, tvDmin, tvDmax, tvdTop);// + formationOriginY;
                var tvdBottom_c = context.interpolate(0, 700, tvDmin, tvDmax, tvdBottom);// + formationOriginY;
                //console.log("tvdTop_c: ", tvdTop_c);
                //console.log("tvdBottom_c: ", tvdBottom_c);
                var pipe = {
                    typeOfSection: pipes[i].typeOfSection,
                    fillStyle: '',
                    points: {
                        pt1: {
                            x: originX + offsetX + 10,
                            y: tvdTop_c
                        },
                        pt2: {
                            x: originX + offsetX + 40,
                            y: tvdTop_c
                        },
                        pt3: {
                            x: originX + offsetX + 40,
                            y: tvdBottom_c
                        },
                        pt4: {
                            x: originX + offsetX + 10,
                            y: tvdBottom_c
                        }
                    }

                }

                pipe.fillStyle = context.getDrillPipeFillStyle(pipe.typeOfSection);

                drillPipes.push(pipe);

            }

            // Draw Casing and Open Hole
            var lengthOfCasing = casing.length;
            fillStyle = '#b2beb5';
            for(i = 0; i < lengthOfCasing; i++){
                
                context.drawOpenHole(ctx, hole[i].leftPoints, hole[i].rightPoints, 'gray')
                if(i == 0){
                    context.drawCasing(ctx,
                    casing[i].points.pt1, casing[i].points.pt2, casing[i].points.pt3, casing[i].points.pt4, fillStyle, false, false,
                    true, true);
                }else if (i == lengthOfCasing-1){
                    context.drawCasing(ctx,
                    casing[i].points.pt1, casing[i].points.pt2, casing[i].points.pt3, casing[i].points.pt4, fillStyle, true, true,
                    true, true, true);
                }else{
                    context.drawCasing(ctx,
                    casing[i].points.pt1, casing[i].points.pt2, casing[i].points.pt3, casing[i].points.pt4, fillStyle, true, true,
                    true, true);
                }
            
            }

             // Draw Drill Pipes
            fillStyle = '#D3D3D3';
            var pipesCount = drillPipes.length;
            for(i = 0; i < pipesCount; i++){
                if(i == 0){
                    context.drawPipe(ctx,
                    drillPipes[i].points.pt1, drillPipes[i].points.pt2,
                     drillPipes[i].points.pt3, drillPipes[i].points.pt4, drillPipes[i].fillStyle, true, true,
                    true, true);
                }else if (i == pipesCount-1){
                    context.drawPipe(ctx,
                    drillPipes[i].points.pt1, drillPipes[i].points.pt2,
                     drillPipes[i].points.pt3, drillPipes[i].points.pt4, drillPipes[i].fillStyle, true, true,
                    true, true);
                }else{
                    context.drawPipe(ctx,
                    drillPipes[i].points.pt1, drillPipes[i].points.pt2,
                     drillPipes[i].points.pt3, drillPipes[i].points.pt4, drillPipes[i].fillStyle, true, true,
                    true, true);
                }

            }




        },
        drawWellSchematicTVDNotToScale(){
            //console.log('screenWidth: ', screen.width)
            var context =  this;
            var originX = 0;
            var originY = 20;
            var canvas = document.getElementById("mycanvas");
            var ctx = canvas.getContext("2d");
            canvas.width = screen.width;// context.screenWidth;
            canvas.height = context.schematicHeight + 50;
            var offsetX = (canvas.width/2.0) - 100.0;
            ctx.translate(originX,originY); 
            ctx.lineWidth = 2;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            var fillStyle = 'lightblue';
            

            var formationOriginX = 0;
            var formationOriginY = 0;
            var formationWidth = canvas.width;
            var formationHeight = canvas.height - formationOriginY;


            //Draw Formation
            fillStyle = ' #a26c37'
            context.drawFormation(ctx, formationOriginX, formationOriginY, formationWidth, formationHeight, fillStyle);

            var holeSections = this.$store.getters['holeStore/holeSections'];
            var pipes = this.$store.getters['tubingStringStore/pipes'];
            var deviationSurveys = this.$store.getters['wellPathStore/deviationSurveys'];

            var lengthOfdeviationSurveys = deviationSurveys.length;
            var tvDmin = deviationSurveys[0].trueVerticalDepth;
            var tvDmax = deviationSurveys[lengthOfdeviationSurveys-1].trueVerticalDepth;

            //canvas.height
            var i = 0, j = 0;
            var lengthOfholeSections = holeSections.length;
            var casing = [];
            var hole = [];
             var tvdTop_c = 0;
             var tvdBottom_c = 0;

            for(i = 0; i < lengthOfholeSections; i++){
                var tvdTop = context.interpolation(deviationSurveys, holeSections[i].topOfHole, 'trueVerticalDepth');
                var tvdBottom = context.interpolation(deviationSurveys, holeSections[i].bottomOfHole, 'trueVerticalDepth');

                var holePoints = context.createRoughLine(tvdTop, tvdBottom, 0, false, deviationSurveys);

                
                tvdTop_c = context.interpolate(0, context.schematicHeight, tvDmin, tvDmax, tvdTop);// + formationOriginY;
                tvdBottom_c = context.interpolate(0, context.schematicHeight, tvDmin, tvDmax, tvdBottom);// + formationOriginY;

                //console.log("tvdTop_c: ", tvdTop_c);
                //console.log("tvdBottom_c: ", tvdBottom_c);

                var leftPoints = [];
                var rightPoints = [];
                var holePointsCount = holePoints.length;
                for(j = 0; j < holePointsCount; j++){
                    

                    var tvd_h = context.interpolate(0, context.schematicHeight, tvDmin, tvDmax, holePoints[j].y);
                    //console.log("tvd_h: ", tvd_h);
                    

                    var pointLeft =  {
                            x: originX + offsetX - 5,
                            y: tvd_h
                        }
                    pointLeft.x = pointLeft.x  - Math.floor(Math.random() * 10);
                    leftPoints.push(pointLeft);

                     var pointRight =  {
                            x:  originX + offsetX + 55,
                            y: tvd_h
                        }

                    pointRight.x = pointRight.x  + Math.floor(Math.random() * 10);
                    rightPoints.push(pointRight);
                }
                

                //console.log("tvdTop_c: ", tvdTop_c);
                //console.log("tvdBottom_c: ", tvdBottom_c);
                var pipe = {
                    points: {
                        pt1: {
                            x: originX + offsetX,
                            y: tvdTop_c
                        },
                        pt2: {
                            x: originX + offsetX + 50,
                            y: tvdTop_c
                        },
                        pt3: {
                            x: originX + offsetX + 50,
                            y: tvdBottom_c
                        },
                        pt4: {
                            x: originX + offsetX,
                            y: tvdBottom_c
                        }
                    }

                }

                var holeSection = {
                    leftPoints,
                    rightPoints
                }

                casing.push(pipe);
                hole.push(holeSection);

            }

            var lengthOfPipes = pipes.length;
            var drillPipes = [];
            var pipeLength = context.schematicHeight / lengthOfPipes;
            tvdTop_c = 0;
            tvdBottom_c = 0;
            for(i = 0; i < lengthOfPipes; i++){
                //var tvdTop = context.interpolation(deviationSurveys, pipes[i].measuredDepth - pipes[i].length, 'trueVerticalDepth');
                //var tvdBottom = context.interpolation(deviationSurveys, pipes[i].measuredDepth, 'trueVerticalDepth');
                tvdBottom_c = tvdTop_c + pipeLength
                //console.log("tvdTop_c: ", tvdTop_c);
                //console.log("tvdBottom_c: ", tvdBottom_c);
                var x1  = 0;
                var x2 = 0;
                'Pup Joint', 'Tubing'
                if(pipes[i].typeOfSection == 'Pup Joint' ||
                    pipes[i].typeOfSection == 'Tubing'){
                        x1 = originX + offsetX + 15;
                        x2 = originX + offsetX + 35
                }else{
                    x1 = originX + offsetX + 10;
                    x2 =  originX + offsetX + 40;
                }
                var pipe = {
                    typeOfSection: pipes[i].typeOfSection,
                    showLabel:  true,
                    description: '',
                    depthDescription: '',
                    fillStyle: '',
                    points: {
                        pt1: {
                            x: x1,
                            y: tvdTop_c
                        },
                        pt2: {
                            x: x2,
                            y: tvdTop_c
                        },
                        pt3: {
                            x: x2,
                            y: tvdBottom_c
                        },
                        pt4: {
                            x: x1,
                            y: tvdBottom_c
                        }
                    }

                }
                if(pipes[i].weight == null){
                    pipe.description =  pipes[i].typeOfSection + ', ' +  pipes[i].outerDiameter.toFixed(2) + ' in';
                }else{
                    pipe.description = pipes[i].typeOfSection + ', ' +  pipes[i].outerDiameter.toFixed(2) + ' in, ' 
                    +  pipes[i].weight.toFixed(2) + ' ppf'
                }
                
                pipe.depthDescription = pipes[i].measuredDepth.toFixed(2) + ' ft'
                pipe.fillStyle = context.getDrillPipeFillStyle(pipe.typeOfSection);


                drillPipes.push(pipe);

                tvdTop_c = tvdBottom_c;

            }

            // Draw Casing and Open Hole
            var lengthOfCasing = casing.length;
            fillStyle = '#b2beb5';
            for(i = 0; i < lengthOfCasing; i++){
                
                context.drawOpenHole(ctx, hole[i].leftPoints, hole[i].rightPoints, 'gray')
                if(i == 0){
                    context.drawCasing(ctx,
                    casing[i].points.pt1, casing[i].points.pt2, casing[i].points.pt3, casing[i].points.pt4, fillStyle, false, false,
                    true, true);
                }else if (i == lengthOfCasing-1){
                    context.drawCasing(ctx,
                    casing[i].points.pt1, casing[i].points.pt2, casing[i].points.pt3, casing[i].points.pt4, fillStyle, true, true,
                    true, true, true);
                }else{
                    context.drawCasing(ctx,
                    casing[i].points.pt1, casing[i].points.pt2, casing[i].points.pt3, casing[i].points.pt4, fillStyle, true, true,
                    true, true);
                }
            
            }

             // Draw Drill Pipes
            fillStyle = '#D3D3D3';
            var pipesCount = drillPipes.length;
            for(i = 0; i < pipesCount; i++){
                if(i == 0){
                    context.drawPipe(ctx,
                    drillPipes[i].points.pt1, drillPipes[i].points.pt2,
                     drillPipes[i].points.pt3, drillPipes[i].points.pt4, drillPipes[i].fillStyle, true, true,
                    true, true, drillPipes[i].showLabel, drillPipes[i].description, drillPipes[i].depthDescription);
                }else if (i == pipesCount-1){
                    context.drawPipe(ctx,
                    drillPipes[i].points.pt1, drillPipes[i].points.pt2,
                     drillPipes[i].points.pt3, drillPipes[i].points.pt4, drillPipes[i].fillStyle, true, true,
                    true, true, drillPipes[i].showLabel, drillPipes[i].description, drillPipes[i].depthDescription);
                }else{
                    context.drawPipe(ctx,
                    drillPipes[i].points.pt1, drillPipes[i].points.pt2,
                     drillPipes[i].points.pt3, drillPipes[i].points.pt4, drillPipes[i].fillStyle, true, true,
                    true, true, drillPipes[i].showLabel, drillPipes[i].description, drillPipes[i].depthDescription);
                }


            }




        },
        drawWellSchematicMDNotToScale(){
            //console.log('screenWidth: ', screen.width)
            var context =  this;
            var originX = 0;
            var originY = 20;
            var canvas = document.getElementById("mycanvas");
            var ctx = canvas.getContext("2d");
            canvas.width = screen.width;// context.screenWidth;
            canvas.height = context.schematicHeight + 50;
            context.schematicWidth = screen.width - 100;
            var offsetX = (canvas.width/2.0) - 100.0;
            ctx.translate(originX,originY); 
            ctx.lineWidth = 2;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            var fillStyle = 'lightblue';
            

            var formationOriginX = 0;
            var formationOriginY = 0;
            var formationWidth = canvas.width;
            var formationHeight = canvas.height - formationOriginY;


            //Draw Formation
            fillStyle = ' #a26c37'
            context.drawFormation(ctx, formationOriginX, formationOriginY, formationWidth, formationHeight, fillStyle);

            var holeSections = this.$store.getters['holeStore/holeSections'];
            var pipes = this.$store.getters['tubingStringStore/pipes'];
            var deviationSurveys = this.$store.getters['wellPathStore/deviationSurveys'];

            var lengthOfdeviationSurveys = deviationSurveys.length;
            var mDmin = deviationSurveys[0].measuredDepth;
            var mDmax = deviationSurveys[lengthOfdeviationSurveys-1].measuredDepth;
            var displacementMin = deviationSurveys[0].verticalSection;
            var displacementMax = deviationSurveys[lengthOfdeviationSurveys-1].verticalSection;

            //canvas.height
            var i = 0, j = 0;
            var lengthOfholeSections = holeSections.length;
            var casing = [];
            var hole = [];
            var mDTop_c = 0;
            var mDBottom_c = 0;
            var topDisplacement_c = 0;
            var bottomDisplacement_c = 0;

            for(i = 0; i < lengthOfholeSections; i++){
                var mdTop = holeSections[i].topOfHole;
                var mdBottom = holeSections[i].bottomOfHole;
                var topDisplacement = holeSections[i].topDisplacement;
                var bottomDisplacement = holeSections[i].bottomDisplacement;
              
                mDTop_c = context.interpolate(0, context.schematicHeight, mDmin, mDmax, mdTop);
                mDBottom_c = context.interpolate(0, context.schematicHeight, mDmin, mDmax, mdBottom);
                topDisplacement_c = context.interpolate(0, context.schematicWidth, displacementMin, mDmax, topDisplacement);
                bottomDisplacement_c = context.interpolate(0, context.schematicWidth, displacementMin, displacementMax, bottomDisplacement_c);

                var holePoints = context.createRoughLine(mdTop, mdBottom, 0, true, deviationSurveys);
                var leftPoints = [];
                var rightPoints = [];
                var holePointsCount = holePoints.length;
                for(j = 0; j < holePointsCount; j++){
                    

                    var mD_h = context.interpolate(0, context.schematicHeight, mDmin, mDmax, holePoints[j].y);
                    var horizontaDisplacement_h = context.interpolate(0, context.schematicWidth, displacementMin, displacementMax, holePoints[j].y);
                    //console.log("tvd_h: ", tvd_h);
                    

                    var pointLeft =  {
                            x: originX + offsetX - 5,
                            y: mD_h
                        }
                    pointLeft.x = pointLeft.x  - Math.floor(Math.random() * 10);
                    leftPoints.push(pointLeft);

                     var pointRight =  {
                            x:  originX + offsetX + 55,
                            y: mD_h
                        }

                    pointRight.x = pointRight.x  + Math.floor(Math.random() * 10);
                    rightPoints.push(pointRight);
                }

                var pipe = {
                    points: {
                        pt1: {
                            x: originX + offsetX + topDisplacement_c,
                            y: mDTop_c
                        },
                        pt2: {
                            x: originX + offsetX + topDisplacement_c + 50,
                            y: mDTop_c
                        },
                        pt3: {
                            x: originX + offsetX + bottomDisplacement_c + 50,
                            y: mDBottom_c
                        },
                        pt4: {
                            x: originX + offsetX + bottomDisplacement_c,
                            y: mDBottom_c
                        }
                    }

                }

                var holeSection = {
                    leftPoints,
                    rightPoints
                }

                casing.push(pipe);
                hole.push(holeSection);

            }

            var lengthOfPipes = pipes.length;
            var drillPipes = [];
            var pipeLength = context.schematicHeight / lengthOfPipes;
            mDTop_c = 0;
            mDBottom_c = 0;
            for(i = 0; i < lengthOfPipes; i++){
                tvdBottom_c = tvdTop_c + pipeLength
                var x1  = 0;
                var x2 = 0;
                'Pup Joint', 'Tubing'
                if(pipes[i].typeOfSection == 'Pup Joint' ||
                    pipes[i].typeOfSection == 'Tubing'){
                        x1 = originX + offsetX + 15;
                        x2 = originX + offsetX + 35
                }else{
                    x1 = originX + offsetX + 10;
                    x2 =  originX + offsetX + 40;
                }
                var pipe = {
                    typeOfSection: pipes[i].typeOfSection,
                    showLabel:  true,
                    description: '',
                    depthDescription: '',
                    fillStyle: '',
                    points: {
                        pt1: {
                            x: x1,
                            y: tvdTop_c
                        },
                        pt2: {
                            x: x2,
                            y: tvdTop_c
                        },
                        pt3: {
                            x: x2,
                            y: tvdBottom_c
                        },
                        pt4: {
                            x: x1,
                            y: tvdBottom_c
                        }
                    }

                }
                if(pipes[i].weight == null){
                    pipe.description =  pipes[i].typeOfSection + ', ' +  pipes[i].outerDiameter.toFixed(2) + ' in';
                }else{
                    pipe.description = pipes[i].typeOfSection + ', ' +  pipes[i].outerDiameter.toFixed(2) + ' in, ' 
                    +  pipes[i].weight.toFixed(2) + ' ppf'
                }
                
                pipe.depthDescription = pipes[i].measuredDepth.toFixed(2) + ' ft'
                pipe.fillStyle = context.getDrillPipeFillStyle(pipe.typeOfSection);


                drillPipes.push(pipe);

                tvdTop_c = tvdBottom_c;

            }

            // Draw Casing and Open Hole
            var lengthOfCasing = casing.length;
            fillStyle = '#b2beb5';
            for(i = 0; i < lengthOfCasing; i++){
                
                context.drawOpenHole(ctx, hole[i].leftPoints, hole[i].rightPoints, 'gray')
                if(i == 0){
                    context.drawCasing(ctx,
                    casing[i].points.pt1, casing[i].points.pt2, casing[i].points.pt3, casing[i].points.pt4, fillStyle, false, false,
                    true, true);
                }else if (i == lengthOfCasing-1){
                    context.drawCasing(ctx,
                    casing[i].points.pt1, casing[i].points.pt2, casing[i].points.pt3, casing[i].points.pt4, fillStyle, true, true,
                    true, true, true);
                }else{
                    context.drawCasing(ctx,
                    casing[i].points.pt1, casing[i].points.pt2, casing[i].points.pt3, casing[i].points.pt4, fillStyle, true, true,
                    true, true);
                }
            
            }

             // Draw Drill Pipes
            fillStyle = '#D3D3D3';
            var pipesCount = drillPipes.length;
            /* for(i = 0; i < pipesCount; i++){
                if(i == 0){
                    context.drawPipe(ctx,
                    drillPipes[i].points.pt1, drillPipes[i].points.pt2,
                     drillPipes[i].points.pt3, drillPipes[i].points.pt4, drillPipes[i].fillStyle, true, true,
                    true, true, drillPipes[i].showLabel, drillPipes[i].description, drillPipes[i].depthDescription);
                }else if (i == pipesCount-1){
                    context.drawPipe(ctx,
                    drillPipes[i].points.pt1, drillPipes[i].points.pt2,
                     drillPipes[i].points.pt3, drillPipes[i].points.pt4, drillPipes[i].fillStyle, true, true,
                    true, true, drillPipes[i].showLabel, drillPipes[i].description, drillPipes[i].depthDescription);
                }else{
                    context.drawPipe(ctx,
                    drillPipes[i].points.pt1, drillPipes[i].points.pt2,
                     drillPipes[i].points.pt3, drillPipes[i].points.pt4, drillPipes[i].fillStyle, true, true,
                    true, true, drillPipes[i].showLabel, drillPipes[i].description, drillPipes[i].depthDescription);
                }


            } */




        }
    },
    mounted(){
        var context =  this;
        context.drawWellSchematicTVDNotToScale();
    },
    created(){
        
    }
    
}
</script>

<style scoped>

/* #c {
   width: 100%;
   height: 100%; 
   display: block;
} */

canvas
{
  border: 1px solid #ccc;
}
</style>