<template>
		<Home>
			<template #mfe>
				<Suspense>
					<template #default>
						<ExposeAppComp message="Successfully connected MFE through Webpack Module federation"/>
					</template>
					<template #fallback>
						<div>Loading Module Federation...</div>
					</template>
				</Suspense>
			</template>
		</Home>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue'
import HostAppComp from '@/components/host-app-comp.vue'
import Home from '@/components/home/home.vue'

const ExposeAppComp = defineAsyncComponent({
  loader: () => import('exposeApp/ExposeAppComp.vue')
})

export default defineComponent({
  name: 'HomeView',
	props: {
    message: {
      type: String,
      required: false,
    },
  },
  components: {
    HostAppComp,
    ExposeAppComp,
		Home,
  },
})
</script>
