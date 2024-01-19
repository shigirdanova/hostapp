<template>
  <h2 class="heading">HostAppComp prop: {{ message }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HostAppComp',
  props: {
    message: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped src="./host-app-comp.css"/>