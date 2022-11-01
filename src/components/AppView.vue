<script setup>
import { onMounted, ref } from 'vue';
import * as PIXI from 'pixi.js';
import gsap from 'gsap';

let SCREEN_WIDTH = window.innerWidth * 0.7;
let SCREEN_HEIGHT = window.innerHeight * 0.5;


const getAppDimensions = () => {
  //width = 4019
  //height = 2679

  //calculate aspect ratio
  SCREEN_HEIGHT = document.getElementById('view').clientHeight;
  SCREEN_WIDTH = (4019 / 2679) * SCREEN_HEIGHT ;
}

onMounted(() =>{
  getAppDimensions();
  let app = new PIXI.Application({ width: SCREEN_WIDTH, height: SCREEN_HEIGHT });
  document.getElementById('view').appendChild(app.view);

    // Create the sky and add it to the stage
    let sky = PIXI.Sprite.from('/src/assets/game-assets/sky.png');
  sky.width = SCREEN_WIDTH;
  sky.height = SCREEN_HEIGHT;
  sky.anchor.set(0.5, 0);
  sky.x = app.renderer.screen.width/2;
  sky.y = 0;
  app.stage.addChild(sky);

  // Create the moutain and add it to the stage
  let fadedMountain = PIXI.Sprite.from('/src/assets/game-assets/mountain_fade.png');
  fadedMountain.width = SCREEN_WIDTH;
  fadedMountain.anchor.set(0.5, 0.5);
  fadedMountain.x = app.renderer.screen.width/2;
  fadedMountain.y = app.renderer.screen.height * 0.55;
  app.stage.addChild(fadedMountain);


  // Create the road and add it to the stage
  let road = PIXI.Sprite.from('/src/assets/game-assets/road.png');
  road.width = SCREEN_WIDTH;
  road.height = SCREEN_HEIGHT * 0.4;
  road.anchor.set(0.5, 1);
  road.x = app.renderer.screen.width/2;
  road.y = app.renderer.screen.height + 10;
  app.stage.addChild(road);

  // Create the car and add it to the stage
  let playerCar = PIXI.Sprite.from('/src/assets/game-assets/cars/car_center.png');
  playerCar.width = SCREEN_WIDTH * 0.2;
  playerCar.height = SCREEN_HEIGHT * 0.25;
  playerCar.anchor.set(0.5, 1);
  playerCar.x = app.renderer.screen.width/2;
  playerCar.y = app.renderer.screen.height - 40;
  app.stage.addChild(playerCar);

  let elapsed = 0.0;
  app.ticker.add((delta) => {
    elapsed += delta;
  });

  
})


</script>

<template>
    <div class="app-view w-fit h-full" id="view"></div>
</template>

