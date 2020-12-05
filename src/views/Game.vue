<template>
  <div class="home">
    <img alt="Clicker Hero" src="../assets/logo.svg" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Game',
  components: {
    HelloWorld
  }
});
</script>
