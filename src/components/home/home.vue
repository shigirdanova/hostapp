<template>
	<div class="home">
    <img class="vueIcon" alt="logo" src="../../assets/logo.png"/>
    <HostAppComp message="Welcome Vue 3"/>
    <div class="mfeArea">
      <slot name="mfe"></slot>
    </div>
  </div>
</template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import HostAppComp from '@/components/host-app-comp.vue'
  
  
  export default defineComponent({
	name: 'Home',
	components: {
	  HostAppComp,
	},
  })
  </script>

  <style scoped src="./home.css"/>
  