<template>
  <router-view></router-view>


  <router-link to="/java">Java</router-link>
  <HomePage />
  <ButtonEvent />
  <LoopsDemo />
  <CompReuse />
  <FormDemo />
  <DynamicComp />
  <APICall />

  <Teleport to="#footer">
    <HelloWorld msg="Teleported to footer id" />

  </Teleport>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/HomePage.vue'
import ButtonEvent from './components/ButtonEvent.vue'
import LoopsDemo from './components/Loops.vue'
import CompReuse from './components/CompReuse.vue'
import FormDemo from './components/FormDemo.vue'
import DynamicComp from './components/DynamicComp.vue'
import APICall from './components/APICall.vue'
import { RouterView } from 'vue-router'



export default {
  name: 'App',
  components: {
    HelloWorld,
    HomePage,
    ButtonEvent,
    LoopsDemo,
    CompReuse,
    FormDemo,
    DynamicComp,
    RouterView,
    APICall
  }
}
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
