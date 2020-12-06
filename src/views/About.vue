<template>
	<section class="about">
		<header class="about__header">
			<h1 class="about__header-title">Welcome to Clicker Hero!</h1>
		</header>
		<article class="about__body">
			<div class="about__body-container">
				<section class="about__body-inspiration">
					<h2>
						Inspiration
					</h2>
					<p>
						This game was inspried by the very well known game
						<a href="http://orteil.dashnet.org/cookieclicker/" target="_blank">
							Cookie Clicker.
						</a>
					</p>
				</section>
				<section class="about__body-about-me">
					<h2>
						About Me
					</h2>
					<p>
						My name is
						<a
							class="author"
							href="https://github.com/giladsher"
							target="_blank"
						>
							Gilad Sher
						</a>
						and I'm a full-stack developer seeking to develop my abilities
						whilst having fun!
						<br />
						I'm currently working as a full-stack developer for
						<a href="https://www.zoominsoftware.com" target="_blank">
							Zoomin Software </a
						>, a product documentation solutions company working with
						<a href="https://reactjs.org" target="_blank">
							React.js
						</a>
						to provide the front-end application, along with a
						<a href="https://www.haskell.org" target="_blank">
							Haskell
						</a>
						back-end (a remnant from a previous iteration of the company -
						currently working on switching to
						<a href="https://nodejs.org" target="_blank">
							Node.js
						</a>
						back-end along with
						<a href="https://aws.amazon.com" target="_blank">
							AWS
						</a>
						micro-services).
					</p>
					<p>
						This is my first time trying to use
						<a href="https://vuejs.org" target="_blank">
							Vue.js
						</a>
						as a front-end framework, and I'm liking it a lot so far!
					</p>
				</section>
				<section class="about__body-contact">
					<h2>
						Contact Me
					</h2>
					<p>
						If you have any questions, suggestions, job opportunities (I'm
						currently looking for a relocation to the U.S.A), or anything else,
						please do contact me at:
						<a :href="emailTemplate">
							triplesher6@gmail.com
						</a>
					</p>
					<p>
						If you want to take a look at some of my works, feel free to take a
						look at my
						<a href="https://github.com/giladsher" target="_blank">
							GitHub account </a
						>(whenever you see my name in this site it links to my GitHub), or
						take a look at my
						<!-- TODO: add a link to my resume -->
						<a href="#" target="_blank">
							resume.
						</a>
					</p>
				</section>
			</div>
		</article>
	</section>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	const siteUrl =
		`https://${window?.location.host}` || 'https://clicker-hero.com';
	const emailAddress = 'triplesher6@gmail.com';
	const emailSubject = `subject=${encodeURIComponent(
		`Hi Gilad! I Wanted to Contact You Regarding Your site: ${siteUrl}`
	)}`;
	const emailTemplate = `mailto:${emailAddress}?${emailSubject}`;

	export default defineComponent({
		name: 'About',
		setup() {
			return {
				emailTemplate,
				emailAddress
			};
		}
	});
</script>

<style scoped lang="scss">
	.about {
		&__header {
			@extend .container, .container-small;
			@include desktop-only {
				text-align: center;
			}
		}

		&__body {
			&-container {
				@extend .container, .container-small;
				margin-top: 1em;

				section {
					margin-bottom: 1em;

					h2 {
						background: linear-gradient(to right, $secondary, $primaryHover);
						-webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            margin-bottom: 0.5rem;
					}

					p {
						+ p {
							margin-top: 0.5rem;
						}
					}
				}
			}
		}
	}
</style>
