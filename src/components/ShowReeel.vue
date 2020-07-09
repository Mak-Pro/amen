<template>
	
	<div class="case__showreel">
		<a href="javascript:void(0);" class="case__showreel_close" @click.prevent="closeShowReel">
			<span></span><span></span>
		</a>

		<video class="ankr-old" autoplay="autoplay" v-if="showShowReel.selectedShowreelInner == 'ankr-old'">
			<source :src="require(`@/assets/img/mdv-ankr-old.mp4`)" type="video/mp4">
		</video>

		<video class="ankr-new" autoplay="autoplay" v-if="showShowReel.selectedShowreelInner == 'ankr-new'">
			<source :src="require(`@/assets/img/mdv-ankr-new.mp4`)" type="video/mp4">
		</video>

		<video class="phantasma" autoplay="autoplay" v-if="showShowReel.selectedShowreelInner == 'phantasma'">
			<source :src="require(`@/assets/img/phantasma-shemes.mp4`)" type="video/mp4">
		</video>

		<video class="deepcloud" autoplay="autoplay" v-if="showShowReel.selectedShowreelInner == 'deepcloud'">
			<source :src="require(`@/assets/img/mdv-deepcloud.mp4`)" type="video/mp4">
		</video>

		<video class="alita" autoplay="autoplay" v-if="showShowReel.selectedShowreelInner == 'alita'">
			<source :src="require(`@/assets/img/alita-testnet.mp4`)" type="video/mp4">
		</video>

		<video id="popup__showreel" autoplay="autoplay" loop v-if="showShowReel.selectedShowreelInner == 'showreel'">
			<source :src="require(`@/assets/img/splash.mp4`)" type="video/mp4">
		</video>

	</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import * as types from '../store/types.js';

export default {

  data () {
    return {

    }
  },

  props: {
		
	},

	computed: {
  	...mapGetters({
			'showShowReel': types.TOGGLE_SHOWREEL
		})
  },

  methods: {
  	...mapActions({
  		'closeShowReel': types.TOGGLE_SHOWREEL_ACTION
  	})
  },

	mounted() {

		this.$nextTick(function () {
  		setTimeout(() => {
  			this.$el.classList.add('show');
  		}, 10);
  	});
		
		var popupSplashVideo = document.querySelector('#popup__showreel');

		document.querySelector('.case__showreel_close').addEventListener('click', () => {
			document.querySelector('.sound__control').classList.remove('play');
			document.querySelector('.play__showreel_controls').classList.remove('eq-only');
			if(document.querySelector('#main') !== null) {
				fullpage_api.setAllowScrolling(true);
			}
			
		});

		document.querySelector('.sound__control').addEventListener('click', () => {
			popupSplashVideo.muted = !popupSplashVideo.muted;
		});

	}
}
</script>


<style lang="scss" scoped>

@import '../variables.scss';


.case__showreel {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 5000;
	background: $black;
	visibility: hidden;
	opacity: 0; 
	-webkit-transition: all 0.5s ease 0s;
	-moz-transition: all 0.5s ease 0s;
	transition: all 0.5s ease 0s;
	overflow: hidden;

	&_close {
		display: block;
		width: 4rem;
		height: 4rem;
		position: absolute;
		right: 3.5rem;
		top: 4rem;
		transform: rotate(45deg);
		z-index: 2;

		@media only screen and (max-width: 1600px) {
			right: 1.5rem;
			top: 2rem;	
		}

		@media only screen and (max-width: 1399px) {
			right: 1rem;
			top: 1.5rem;	
		}

		span {
			display: inline-block;
			background: $black;

			&:first-child {
				width: 3rem;
				height: 1px;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}

			&:last-child {
				width: 1px;
				height: 3rem;
				position: absolute;
				left: 50%;
				top: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}

	video {
		max-width: 100%;
		min-width: 100%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	&.show {
		opacity: 1;
		visibility: visible;
	}

	&.hide {
		opacity: 0;
		visibility: hidden;
	}

	&.nos {
		background: -moz-linear-gradient(0deg, rgba(96,187,70,1) 0%, rgba(180,211,51,1) 100%);
		background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(96,187,70,1)), color-stop(100%, rgba(180,211,51,1)));
		background: -webkit-linear-gradient(0deg, rgba(96,187,70,1) 0%, rgba(180,211,51,1) 100%);
		background: -o-linear-gradient(0deg, rgba(96,187,70,1) 0%, rgba(180,211,51,1) 100%);
		background: -ms-linear-gradient(0deg, rgba(96,187,70,1) 0%, rgba(180,211,51,1) 100%);
		background: linear-gradient(90deg, rgba(96,187,70,1) 0%, rgba(180,211,51,1) 100%);
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#60BB46', endColorstr='#B4D333',GradientType=1 );
	}
}


</style>