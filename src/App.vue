<template>
  <Navbar />
  <main id="main">
    <router-view />
  </main>
  <Footer />
  <SvgSprites />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';
import SvgSprites from '@/components/layout/SvgSprites.vue';

export default defineComponent({
  name: 'App',
  components: { Navbar, Footer, SvgSprites }
});
</script>

<style lang="scss">
@import '@/styles/site.scss';

#app {
  @include d-flex-start;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex-direction: column;
  height: 100vh;

  #main {
    @include p-layout;
    width: 100%;
    flex: 1;
  }
}
</style>
