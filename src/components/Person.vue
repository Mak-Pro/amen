<template>
	
	<div class="person__item animation">
		<div class="person__item_image">
			<div class="person__item_image_inner" :style="[webp ? { backgroundImage: 'url(' + require(`@/assets/img/${id}.webp`) + ')' } : { backgroundImage: 'url(' + require(`@/assets/img/${id}.jpg`) + ')' }]"></div>
		</div>
		<div class="person__item_description">
			<h4 class="person__item_name">{{ name }}</h4>
			<p class="person__item_position">{{ position }}</p>
			<ul v-if="facebookUrl !== null || telegramUrl !== null" class="person__item_socials clear">
				<li><a :href="facebookUrl" class="btn btn-action" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
				<li><a :href="telegramUrl" class="btn btn-action" target="_blank"><i class="fab fa-telegram-plane"></i></a></li>
			</ul>
		</div>
	</div>

</template>

<script>
export default {

	props: {
		id: Number,
		name: String,
		position: String,
		facebookUrl: String,
		telegramUrl: String
	},

  data () {
    return {
			webp: document.querySelector('html.webp') !== null ? true : false
    }
  },

  computed: {

  }
}
</script>

<style lang="scss" scoped>

	.person__item {
		max-width: 39.9rem;
		margin: 0 auto 4.8rem;
		text-align: center;
		letter-spacing: 0.12rem;


		@media only screen and (max-width: 599px) {
			margin-bottom: 6.3rem;	
		}

		&_image {
			padding-top: 98.4%;
			margin-bottom: 4.1rem;
			position: relative;
			overflow: hidden;
			clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
			transition: all 1.5s cubic-bezier(0, 0.5, 0.5, 1) 0s;


			&_inner {
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center center;
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				transform: scale(1);
				-webkit-transition: all 0.3s ease 0s;
				-moz-transition: all 0.3s ease 0s;
				transition: all 0.3s ease 0s;
				backface-visibility: hidden;
			}

			@media only screen and (max-width: 992px) {
				margin-bottom: 2.5rem;	
			}

			@media only screen and (max-width: 559px) {
				padding-top: 114%;
				margin-bottom: 3rem;	
			}
		}

		&_name {
			font-size: 2.2rem;
			font-weight: 600;
			margin-bottom: 1.4rem;
			line-height: 1.2;

			@media only screen and (max-width: 992px) {
				font-size: 1.8rem;
				margin-bottom: 1.4rem;	
			}

			@media only screen and (max-width: 599px) {
				font-size: 2.2rem;
				margin-bottom: 2rem;	
			}
		}

		&_position {
			font-size: 1.2rem;
			font-weight: 400;
			text-transform: uppercase;
			margin-bottom: 3.9rem;
			letter-spacing: 0.6px;

			@media only screen and (max-width: 992px) {
				font-size: 1rem;
				letter-spacing: 0.5px;
				margin-bottom: 2.5rem;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				font-size: 0.9rem;	
			}

			@media only screen and (max-width: 599px) {
				font-size: 1.2rem;
				margin-bottom: 3rem;	
			}
		}

		&_socials {
			display: inline-flex;
			position: relative;
			z-index: 1;
			line-height: 0;

			li {

				a {
					font-size: 2rem;
					text-shadow: 0 0.1rem 0.1rem #04a7da;

					.fa-telegram-plane {
						font-size: 2.2rem;
						position: relative;
						top: 0.2rem;
					}
				}
			}
		}

		&:hover {

			.person__item_image {

				.person__item_image_inner {
					transform: scale(1.03);
				}
			}
		}
	}

</style>