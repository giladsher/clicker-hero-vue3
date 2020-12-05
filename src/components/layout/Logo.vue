<template>
	<router-link to="/" class="logo" aria-label="Home">
		<svg class="ico-logo" aria-hidden="true">
			<use xlink:href="#ico-logo" />
		</svg>
	</router-link>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	export default defineComponent({
    name: 'Logo'
  });
</script>

<style scoped lang="scss">
  a {
    display: inline-block;
    &.logo {
      margin-right: auto;
      color: $primary;
      transition: color .3s;

      &:hover {
        color: $primaryHover;
      }
  
      svg {
        width: 2.5em;
        height: 2.5em;
      }
    }
  }
</style>
