<template>
	<nav id="nav">
		<Logo />
		<router-link to="/">Game</router-link>
		<router-link to="/achievements">Achievements</router-link>
		<router-link to="/about">About</router-link>
	</nav>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Logo from '@/components/layout/Logo.vue';
	export default defineComponent({
		name: 'Navbar',
    components: { Logo }
  });
</script>

<style scoped lang="scss">
	nav {
    @include d-flex-end;
		@include p-layout;
		width: 100%;
		background: $black;

		a {
			@include custom-link;
			color: $white;

			+ a {
				margin-left: 1em;
			}

			&.router-link-exact-active {
				color: $primary;
				font-weight: bold;

				&:before {
					content: none;
				}
			}
		}
	}
</style>
