<template>
  <div id="sumerian-scene-dom-id"></div>
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
      console.log("loadAndStateScene Called", XR);
      await XR.loadScene("scene1", "sumerian-scene-dom-id");
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
