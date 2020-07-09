<template>
	<a href="javascript:void(0);" @click.prevent="openModal('orderModal')" class="get__started">
		<span>Get Started</span> 
		<img :src="require(`@/assets/img/message-icon.svg`)" alt="" class="icon">
		<img :src="require(`@/assets/img/message-icon-white.svg`)" alt="" class="icon-alt">
	</a>
</template>

<script>

import * as types from '../store/types.js';
import { mapGetters, mapActions } from 'vuex';
import { TimelineMax } from 'gsap';


export function getStartedLinkAnimation() {
	let getStartedLink = document.querySelector('#app > .get__started');

	const gslTl = new TimelineMax();

	gslTl
		.set(getStartedLink, {visibility: "visible"})
		.to(getStartedLink, 1, {opacity: 1, y: 0, ease: Power4.easeOut});
}



export default {

	computed: {
		...mapGetters({
			'displayNav': types.TOGGLE_NAVIGATION
		})
	},

	methods: {
		...mapActions({
			'openModal': types.TOGGLE_MODAL_ACTION
		})
	},

	mounted() {

	}
}
</script>

<style lang="scss" scoped>

@import '../variables.scss';
	
	.get__started {
		font-size: 1rem;
		font-weight: 600;
		text-transform: uppercase;
		color: $gray-dark;
		display: inline-flex;
		align-items: center;
		position: fixed;
		right: 4.8rem;
		bottom: 4rem;
		z-index: 50;
		letter-spacing: .15rem;
		white-space: nowrap;
		visibility: hidden;
		transform: translateY(50px);
		opacity: 0;
		transition: none;

		.icon {
			width: 100%;
			width: 2.4rem;
			margin-left: 1.8rem;
			opacity: 1;
		}

		.icon-alt {
			width: 100%;
			width: 2.4rem;
			margin-left: 1.8rem;
			opacity: 0;
			position: absolute;
			right: 0;
			top: 0;
			display: none;
		}

		&.white,
		&.half-white {
			span {
				color: $white;
			}
		}

		&.nos {

			.icon-alt {
				display: inline-block;
			}

			&.white {

				.icon {
					opacity: 0;
				}

				.icon-alt {
					opacity: 1;
				}
			}
		}

		@media only screen and (max-width:1600px) {
			bottom: 2rem;
			right: 1.5rem;
		}

		@media only screen and (max-width:1399px) {
			font-size: .9rem;
			letter-spacing: .1rem;
		}

		@media only screen and (max-width: 1199px) {
			display: none;		
		}
	}

</style>