<template>
	
	<div class="play__showreel_controls">

		<div class="play__showreel_controls_inner" :class="{'menu-active': displayNav.show}">
			<div class="sound__control">
				<div class="sound__control_eq">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<a href="javascript:void(0);" @click.prevent="openShowReel('showreel')" class="play__showreel_btn">
				<img :src="require(`@/assets/img/play-icon.svg`)" alt="" class="icon">
				play showreel
			</a>
		</div>

	</div>

</template>

<script>

import * as types from '../store/types.js';
import { mapGetters, mapActions } from 'vuex';


export function playShowreelAnimation() {
	let playShowReelLink = document.querySelector('.play__showreel_controls');

	const psrTl = new TimelineMax();

	psrTl
		.set(playShowReelLink, {visibility: "visible"})
		.to(playShowReelLink, 1, {opacity: 1, y: 0, ease: Power4.easeOut});
}



export default {

	computed: {
		...mapGetters({
			'displayNav': types.TOGGLE_NAVIGATION
		})
	},

	methods: {
		...mapActions({
			'openShowReel': types.TOGGLE_SHOWREEL_ACTION
		})
	},

	props: {
		videoType: String
	},

  data () {
    return {

    }
  },

	mounted() {
		
	}
}
</script>

<style lang="scss">

	@import '../variables.scss';

	.play__showreel_controls {
		position: fixed;
		left: 4.8rem;
		bottom: 4rem;
		z-index: 5001;
		line-height: 0;
		visibility: hidden;
		opacity: 0;
		transform: translateY(50px);

		@media only screen and (max-width: 1600px) {
			left: 3rem;
			bottom: 2rem;
		}

		@media only screen and (max-width: 1199px) {
			display: none;		
		}

		&.eq-only {

			.play__showreel_btn {
				opacity: 0;
				visibility: hidden;
			}

			.sound__control {
				opacity: 1;
				visibility: visible;
			}
		}

		&.hidden {
			display: none;
		}

		&_inner {
			position: relative;
			opacity: 1;
			visibility: visible;
			-webkit-transition: all 0.3s ease 0.8s;
			-moz-transition: all 0.3s ease 0.8s;
			transition: all 0.3s ease 0.8s;

			&.menu-active {
				opacity: 0;
				visibility: hidden;
				transition-delay: 0s;
			}
		}
	}

	
	.play__showreel_btn {
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		font-size: 1rem;
		font-weight: 600;
		text-transform: uppercase;
		color: $gray-dark;
		letter-spacing: 0.15rem;
		opacity: 1;
		visibility: visible;
		-webkit-transition: all 0.5s ease 0s;
		-moz-transition: all 0.5s ease 0s;
		transition: all 0.5s ease 0s;

		&.white {
			color: $white;
		}

		img {
			margin-right: 1.5rem;
		}
	}


	.sound__control {
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		z-index: 5;
		opacity: 0;
		visibility: hidden;
		-webkit-transition: all 0.5s ease 0s;
		-moz-transition: all 0.5s ease 0s;
		transition: all 0.5s ease 0s;

		&_eq {
			display: flex;
			align-items: center;

			span {
				display: block;
				width: 1px;
				margin: 0 1px;

				&:nth-child(odd) {
					background: #41BFFD;
				}

				&:nth-child(even) {
					background: #00E7EF;
				}

				&:nth-child(1) {
					height: 0.4rem;
					animation-delay: -1.9s;
				}

				&:nth-child(2) {
					height: 0.9rem;
					animation-delay: -.9s;
				}

				&:nth-child(3) {
					height: 1.7rem;
					animation-delay: -2.9s;
				}

				&:nth-child(4) {
					height: 1.1rem;
					animation-delay: -3.9s;
				}

				&:nth-child(5) {
					height: 0.3rem;
					animation-delay: -4.9s;
				}

				&:nth-child(6) {
					height: 0.6rem;
					animation-delay: -1.9s;
				}

				&:nth-child(7) {
					height: 1.4rem;
					animation-delay: -.9s;
				}

				&:nth-child(8) {
					height: 2.2rem;
					animation-delay: -2.9s;
				}

				&:nth-child(9) {
					height: 1.3rem;
					animation-delay: -3.9s;
				}

				&:nth-child(10) {
					height: 0.7rem;
					animation-delay: -4.9s;
				}

				&:nth-child(11) {
					height: 0.4rem;
					animation-delay: -1.9s;
				}


				@keyframes equalize {
					0% {
						height: 2.2rem;
					}
					4% {
						height: 1.9rem;
					}
					8% {
						height: 1.8rem;
					}
					12% {
						height: 1.2rem;
					}
					16% {
						height: 1rem;
					}
					20% {
						height: 1.2rem;
					}
					24% {
						height: 1.8rem;
					}
					28% {
						height: 0.4rem;
					}
					32% {
						height: 1.8rem;
					}
					36% {
						height: 2.2rem;
					}
					40% {
						height: 1rem;
					}
					44% {
						height: 1.8rem;
					}
					48% {
						height: 2.2rem;
					}
					52% {
						height: 1.2rem;
					}
					56% {
						height: 0.6rem;
					}
					60% {
						height: 1.2rem;
					}
					64% {
						height: 2.2rem;
					}
					68% {
						height: 1.2rem;
					}
					72% {
						height: 2.2rem;
					}
					76% {
						height: 1rem;
					}
					80% {
						height:2.2rem;
					}
					84% {
						height: 1.7rem;
					}
					88% {
						height: 2.2rem;
					}
					92% {
						height: 1rem;
					}
					96% {
						height: 2.2rem;
					}
					100% {
						height: 2.2rem;
					}
				}
			}
		}

		&.play {

			.sound__control_eq {

				span {
					animation: equalize 5s 0s infinite;
					animation-timing-function: linear;

					&:nth-child(1) {
						animation-delay: -1.9s;
					}

					&:nth-child(2) {
						animation-delay: -.9s;
					}

					&:nth-child(3) {
						animation-delay: -2.9s;
					}

					&:nth-child(4) {
						animation-delay: -3.9s;
					}

					&:nth-child(5) {
						animation-delay: -4.9s;
					}

					&:nth-child(6) {
						animation-delay: -1.9s;
					}

					&:nth-child(7) {
						animation-delay: -.9s;
					}

					&:nth-child(8) {
						animation-delay: -2.9s;
					}

					&:nth-child(9) {
						animation-delay: -3.9s;
					}

					&:nth-child(10) {
						animation-delay: -4.9s;
					}

					&:nth-child(11) {
						animation-delay: -1.9s;
					}
				}
			}
		}
	}

</style>