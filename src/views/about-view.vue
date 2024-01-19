<template>
  <div class="about">
    <h1>This is an about page</h1>
		<div class="mfeArea">
			<Suspense>
    	  <template #default>
    	      <YellowCar message="Yellow car successfully connected through Webpack Module federation"/>
    	  </template>
    	  <template #fallback>
    	    <div>Loading Module Federation...</div>
    	  </template>
    	</Suspense>
		</div>
	</div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'

const YellowCar = defineAsyncComponent({
  loader: () => import('exposeApp/YellowCar.vue')
})

export default defineComponent({
  name: 'AboutView',
  components: {
    YellowCar,
  },
})
</script>

<style scoped src="./about-view.css"/>
