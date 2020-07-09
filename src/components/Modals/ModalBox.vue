<template>
	
	<div class="modal-window">
		<div class="modal-content-wrapper">

			<button class="modal-close" @click.prevent="closeModal">
				<span class="inner"></span>
			</button>

			<div class="wrapper_bg left"></div>
			<div class="wrapper_bg right"></div>

			<div class="modal-content-block">
				<div class="inner">
					<component :is="showModal.selectedModalInner"></component>
				</div>
			</div>

		</div>
	</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import * as types from '../../store/types.js';

import orderModal from './OrderModal.vue';
import teamModal from './TeamModal.vue';
import briefModal from './BriefModal.vue';

import { preventTouchScroll } from '../../App.vue';

export default {

	data() {
		return {

		}
	},

	components: {
		orderModal,
		teamModal,
		briefModal
	},

  computed: {
  	...mapGetters({
			'showModal': types.TOGGLE_MODAL
		})
  },

  methods: {
  	...mapActions({
  		'closeModal': types.TOGGLE_MODAL_ACTION
  	})
  },

  mounted() {

  	document.querySelector('.play__showreel_controls').classList.add('hidden');

  	document.querySelector('.modal-close').addEventListener('click', function() {
  		document.querySelector('.play__showreel_controls').classList.remove('hidden');
  	});

		// preventTouchScroll('.modal-content-wrapper');

  	this.$nextTick(function () {
  		setTimeout(() => {
  			this.$el.classList.add('modal-show');
  		}, 10);
  	})
  }
}
</script>

<style lang="scss">

	@import '../../variables.scss';
	
	.modal-window {
		background: transparent;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		top: 0;
		/* -webkit-transition: background 0s ease-out .6s;
		-o-transition: background 0s ease-out .6s;
		transition: background 0s ease-out .6s; */
		-webkit-transition: all 1s cubic-bezier(0.77, 0, 0.175, 1) 0s;
    -moz-transition: all 1s cubic-bezier(0.77, 0, 0.175, 1) 0s;
    transition: all 1s cubic-bezier(0.77, 0, 0.175, 1) 0s;
		z-index: 5000;
		transform: translateX(100%);


		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			overflow-y: auto; 	
		}

		.modal-content-wrapper {
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
			transform: translateX(-100%);

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				bottom: auto;	
			}

			.wrapper_bg {
				position: absolute;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				z-index: 0;
				overflow: hidden;
				background: $white;


				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					bottom: auto;
					height: 100vh;	
				}

				&::after {
					// content: '';
					display: block;
					position: absolute;
					left: 0;
					top: 0;
					right: 0;
					bottom: 0;
					background: $white;
					-webkit-transition: all .3s ease-in-out .5s;
					-o-transition: all .3s ease-in-out .5s;
					transition: all .3s ease-in-out .5s;
					backface-visibility: hidden;
				}

				&.left {
					clip-path: polygon(0 0,100% 0,100% 100%,99.9% 100%,0 .1%);

					&::after {
						transform: translateY(100%);
					}
				}

				&.right {
					clip-path: polygon(0 0,100% 100%,0 100%);

					&::after {
						transform: translateY(-100%);
					}
				}
			}

			.modal-content-block {
				position: relative;
				z-index: 1;
				height: 100%;
				opacity: 0;
				-webkit-transition: all .3s ease 0s;
				-o-transition: all .3s ease 0s;
				transition: all .3s ease 0s;
				max-width: 1170px;
				margin: 0 auto;
				display: flex;
				align-items: center;


				@media only screen and (max-width: 1199px) {
					margin: 0 1.5rem;	
				}


				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					height: auto;
					clear: both;
					margin-bottom: 6rem;	
				}

				&::before,
				&::after {
					content: '';
					display: block;
					width: 33.3333333%;
					border-left: 1px solid #ecefef;
					border-right: 1px solid #ecefef;
					position: absolute;
					top: 0;
					bottom: 0;
					z-index: 0;


					@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
						display: none;	
					}
				}

				&::before {
					left: 0;
				}

				&::after {
					right: 0;
				}

				.inner {
					width: 100%;
					position: relative;
					z-index: 1;
				}
			}
		}

		&.modal-show {
			transform: translateX(0);

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				background: $cases-bg;	
			}

			.modal-content-wrapper {
				transform: translateX(0);

				.wrapper_bg {

					&::after {
						transform: translateY(0) !important;
						transition-delay: 0s;
					}
				}

				.modal-content-block {
					opacity: 1;
					transition-delay: .7s;
				}

				.modal-close {
					opacity: 1;
					transform: translateX(0);
				}
			}
		}

		.modal-close {
			width: 118px;
			height: 118px;
			background: #e8eeee;
			display: flex;
			align-items: center;
			justify-content: center;
			position: absolute;
			z-index: 5;
			right: 0;
			top: 0;
			overflow: hidden;
			opacity: 0;
			transform: translateX(20px);
			-webkit-transition: all 0.3s ease 0.2s;
			-moz-transition: all 0.3s ease 0.2s;
			transition: all 0.3s ease 0.2s;

			@media only screen and (max-width: 1499px) {
				width: 9rem;
				height: 9rem;	
			}

			@media only screen and (max-width: 1399px) {
				width: 7rem;
				height: 7rem;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				float: right;
				position: relative;
				width: 5rem;
				height: 5rem;	
			}

			.inner {
				width: 3rem;
				height: 3rem;
				position: relative;
				transform: rotate(45deg);

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					width: 2rem;
					height: 2rem;	
				}

				&::before,
				&::after {
					content: '';
					display: block;
					position: absolute;
					background: $black;
				}

				&::before {
					width: 1px;
					height: 100%;
					left: 50%;
					transform: translateX(-50%);
				}

				&::after {
					height: 1px;
					width: 100%;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}

		form {

			input,
			select {

				@media only screen and (max-width: 1600px) {
					height: 7rem;	
				}

				@media only screen and (max-width: 1399px) {
					height: 6rem;	
				}
			}

			input[type="submit"] {

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					margin: 0 -0.2rem 4rem;
					width: 100%;	
				}
			}
		}
	}

</style>