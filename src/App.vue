<template>
  <div>
    <h1>AR APP</h1>
    <div id="sumerian-scene-dom-id" style="height: 800px; width: 500px"></div>
  </div>
</template>

<script>
import { XR } from "aws-amplify";

export default {
  name: "App",

  mounted() {
    this.loadAndStartScene();
  },

  methods: {
    async loadAndStartScene() {
      const progressCallback = (progress) => {
        console.log(`Sumerian scene load progress: ${progress * 100}%`);
      };

      const sceneOptions = {
        progressCallback,
      };

      await XR.loadScene("scene1", "sumerian-scene-dom-id", sceneOptions);
      XR.start("scene1");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
