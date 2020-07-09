<template>
	<section class="similar">
		<app-lines v-if="showLines"></app-lines>
		<div class="similar__content pin-wrapper">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="similar__content_inner">
							<div class="similar__content_inner_left">
								<h2 class="section__title" data-delay="0">It looks <br/> awesome, right?</h2>
								<h4 class="section__subtitle" data-delay="0.1">Let’s do it for you!</h4>
								<p data-delay="0.2">We are sure you enjoyed our project. Do you want us to develop a cool thing for you?</p>
							</div>
							<div class="similar__content_inner_right" data-delay="0">
								<a href="https://t.me/AlexShpylovyi" class="telegram__link" target="_blank"><img :src="require(`@/assets/img/telegram-icon.svg`)" alt="telegram-icon"> Do you want to talk about it?</a>
								<a href="javascript:void(0);" class="btn btn-3d full" @click.prevent="openModal('orderModal')"><span>Order similar project</span></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script>

import * as types from '../store/types.js';
import { mapGetters, mapActions } from 'vuex';

import Lines from './Lines.vue';

export default {

	props: {
		showLines: Boolean
	},

  data () {
    return {

    }
  },

  methods: {
  	...mapActions({
  		'openModal': types.TOGGLE_MODAL_ACTION
  	}),
  },

  components: {
  	'app-lines': Lines
  }
}
</script>

<style lang="scss" scoped>

	@import '../variables.scss';

	a:not(.btn) {
		color: $blue-light;
		text-decoration: none;
	}

	.similar {
		position: relative;
		// background: $white;

		&__content {
			padding-top: 11rem;
			position: relative;
			z-index: 1;

			&_inner {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 11.5rem;

				&_left {
					width: 66.6666666%;
					max-width: 64rem;

					@media only screen and (max-width: 992px) {
						width: 100%;
						max-width: 100%;
						margin-bottom: 0rem;	
					}
				}

				&_right {
					width: 33.3333333%;

					.btn {
						width: 101.2%;
						margin-left: -0.6%;
					}

					@media only screen and (max-width: 992px) {
						width: 100%;
						max-width: 32rem;	
					}

					@media only screen and (max-width: 599px) {
						max-width: 100%;	
					}
				}

				@media only screen and (max-width: 992px) {
					display: block;
					margin-bottom: 3rem;	
				}
			}

			@media only screen and (max-width: 992px) {
				padding-top: 4rem;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				padding-left: 1.5rem;
				padding-right: 1.5rem;
			}
		}

		.section__title {
			margin-bottom: 5.6rem;

			@media only screen and (max-width: 992px) {
				margin-bottom: 2.5rem;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				margin-bottom: 2rem;
				margin-right: -2rem;	
			}
		}

		.section__subtitle {
			font-family: inherit;
			font-size: 2.2rem;
			font-weight: 500;
			text-transform: none;
			line-height: 1.59;
			margin-bottom: 2.5rem;

			@media only screen and (max-width: 992px) {
				margin-bottom: 2rem;	
			}
		}

		.telegram__link {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1.8rem;
			font-weight: 600;
			margin-bottom: 8.4rem;
			margin-top: 5rem;

			img {
				margin-right: 3rem;

				@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
					margin-right: 2rem;	
				}
			}

			@media only screen and (max-width: 992px) {
				margin-bottom: 3.5rem;
				margin-top: 0;
				position: relative;
				left: 0rem;
			}
		}

		.btn {

			@media only screen and (max-width: 599px) {
				width: 100%;
				min-width: 1px;	
			}
		}
	}

</style>