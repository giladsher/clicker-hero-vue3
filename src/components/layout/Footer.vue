<template>
  <footer>
    <Logo />
    <span>
      ©{{currentYear}} 
      <a class="author" href="https://github.com/giladsher" target="_blank">
        Gilad Sher
      </a> - all rights reserved
    </span>
  </footer>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Logo from '@/components/layout/Logo.vue';

const currentYear = new Date().getFullYear();

export default defineComponent({
  name: 'Footer',
  components: { Logo },
  setup() {
    return {
      currentYear
    };
  }
});
</script>

<style scoped lang='scss'>
  footer {
    @include d-flex-end;
    @include p-layout;
    width: 100%;
    background: $black;
    color: $white;

    .author {
      @include custom-link;
      color: $primary;
    }
  }
</style>