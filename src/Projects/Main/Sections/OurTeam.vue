<template>

	<section id="team" class="team ms" data-target="team">
				<div class="content team__content">
					<div class="container">
						<div class="row no-gutters">
							<div class="col-sm-12">
								<h2 class="section-title split chars animation">Amen Team</h2>
								<p class="slogan animation">When you choose to work with our agency, you are getting more than just a website — You get experience, vision, and a love for design and development. If you’re tired of working with amateurs and ready to hire a professional, the team at AMEN is here to help!</p>
							</div>
						</div>

						<div class="row no-gutters animation">
							<div class="col-xs-12 col-sm-4" v-for="(person, index) in personsData.persons">
								<person-item 
									:id="person.id"
									:name="person.name"
									:position="person.position"
									:facebookUrl="person.facebookUrl"
									:telegramUrl="person.telegramUrl"
								>	
								</person-item>
							</div>
						</div>


						<div class="row no-gutters">
							<div class="col-xs-12 col-sm-4 offset-sm-4">
								<span v-if="personsData.count > personsData.persons.length" ></span>
								<div v-else class="persons__more">
									<a href="javascript:void(0);" class="btn full btn-base" @click="increaseTeamCounter(3)">show more</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="team__bottom animation">
					<div class="team__bottom_content">
						<div class="container">
							<div class="row no-gutters align-items-center">
								<div class="col-xs-12 col-sm-4">
									<h4>Looking for a change of scenery?</h4>
								</div>
								<div class="col-xs-12 col-sm-4">
									<p>Good News! We’re recruiting!</p>
								</div>
								<div class="col-xs-12 col-sm-4">
									<a href="javascript:void(0);" class="btn btn-3d full" @click.prevent="openModal('teamModal')"><span></span>join amen team</a>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>

</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import * as types from '../../../store/types.js';

import Person from '../../../components/Person.vue';

export default {

  data () {
    return {

    }
  },

  computed: {
  	...mapGetters({
  		'personsData': types.GET_TEAM_PERSONS
  	})
  },

  methods: {
  	...mapActions({
  		'increaseTeamCounter': types.TEAM_PERSONS_COUNT_ACTION,
  		'openModal': types.TOGGLE_MODAL_ACTION
  	})
  },

  components: {
  	'person-item': Person
  }
}
</script>

<style lang="scss" scoped>

@import '../../../variables.scss';

	.team {
		background: #F3F7F7;
		box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.2);

		@media only screen and (max-width: 599px) {
			box-shadow: none;
			background: transparent;	
		}
	}

	.team__content {
		padding-top: 15rem;

		@media only screen and (max-width:1600px) {
			padding-top: 10rem;	
		}

		@media only screen and (max-width:1399px) {
			padding-top: 8rem;	
		}

		@media only screen and (max-width: 992px) {
			padding-top: 6rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			padding-top: 4rem;	
		}

		@media only screen and (max-width: 599px) {
			padding-top: 8.7rem;	
		}

		.row {

			&:first-child {
				padding: 0 1.5rem;
			}
		}
	}

	.section-title {
		margin-bottom: 4.7rem;

		@media only screen and (max-width:1600px) {
			margin-bottom: 5rem;	
		}

		@media only screen and (max-width:1399px) {
			margin-bottom: 4rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-bottom: 2.2rem;	
		}
	}

	.slogan {
		max-width: 78rem;
		line-height: 2.18;
		margin-bottom: 9rem;

		strong {
			font-weight: 500;
		}

		@media only screen and (max-width:1600px) {
			margin-bottom: 7rem;	
		}

		@media only screen and (max-width:1399px) {
			margin-bottom: 6rem;	
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			margin-bottom: 5rem;	
		}
	}

	.persons__more {
		line-height: 0;
		margin-top: 4rem;
		margin-bottom: 10rem;

		@media only screen and (max-width:1399px) {
			margin-top: 2rem;
			margin-bottom: 8rem;	
		}

		@media only screen and (max-width: 599px) {
			margin-top: -1.5rem;
			margin-bottom: 7rem;
			margin-left: -1.5rem;
			margin-right: -1.5rem;
		}
	}

	.team__bottom {
		border-bottom: 0.4rem solid #C4C4C4;
		background: $cases-bg;

		@media only screen and (max-width: 599px) {
			border-bottom: 0 none;
		}

		.btn {
			width: calc(100% + 0.4rem);
			position: relative;
			left: 0rem;

			&:hover {
				transform: translateY(0);
			}

			&:active {
				transform: translateY(0.2rem);
			}
		}

		h4 {
			font-size: 2.2rem;
			font-weight: 500;
			letter-spacing: 0;
			line-height: 1.4;
			position: relative;

			&::after {
				content: '';
				display: block;
				width: 2px;
				height: 4rem;
				background: #EBEFEF;
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				right: -0.2rem;

				@media only screen and (max-width: 599px) {
					display: none;	
				}
			}

			@media only screen and (max-width:1600px) {
				font-size: 2rem;	
			}

			@media only screen and (max-width:1199px) {
				font-size: 1.8rem;	
			}

			@media only screen and (max-width:992px) {
				font-size: 1.4rem;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				font-size: 1.23rem;	
			}

			@media only screen and (max-width: 599px) {
				font-size: 2rem;
				margin-bottom: 1.2rem;	
			}
		}

		p {
			position: relative;
			font-size: 1.8rem;
			margin: 0;
			line-height: 1.4;
			top: 0.2rem;
			left: -1rem;
			text-align: center;

			@media only screen and (max-width: 992px) {
				font-size: 1.2rem;	
			}

			@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
				left: 0;
			}

			@media only screen and (max-width: 599px) {
				font-size: 1.8rem;
				margin-bottom: 2.8rem;	
			}
		}

		@media only screen and (max-width: 599px) {
			text-align: center;
			padding: 0 1.3rem;
		}
	}

</style>