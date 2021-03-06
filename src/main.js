import Vue from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import scene1Config from './assets/scenes/RedFlag' // This file will be generated by the Sumerian AWS Console

Amplify.configure({
  ...awsconfig,
  XR: { // XR category configuration
    region: 'us-west-2', // Sumerian region
    scenes: {
      "scene1": { // Friendly scene name
        sceneConfig: scene1Config // Scene configuration from Sumerian publish
      }
    }
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
