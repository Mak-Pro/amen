<template>
	<div id="app">
			<div class="page__overlay" id="page__overlay">
				<div class="page__overlay_logo">
					<picture>
						<source :srcset="require(`@/assets/img/overlay-logo-alt.webp`)" type="image/webp">
						<source :srcset="require(`@/assets/img/overlay-logo-alt.png`)" type="image/png">
						<img :src="require(`@/assets/img/overlay-logo-alt.png`)" alt="page-logo">
					</picture>
					<!-- <img :src="require(`@/assets/img/overlay-logo-alt.png`)" alt="page-logo"> -->
				</div>
			</div>
			<app-header></app-header>
			<app-navigation></app-navigation>
			<app-side-socials class="side"></app-side-socials>
			<app-getstarted-link></app-getstarted-link>
			<transition leave-active-class="hide">
				<app-showreel v-if="displayShowReel.show"></app-showreel>
			</transition>
			<transition leave-active-class="slideOut">
				<app-modal v-if="displayModal.show"></app-modal>
			</transition>
			<transition
				@enter="enter"
				@leave="leave"
			>
				<router-view></router-view>
			</transition>
			<play-showreel-btn></play-showreel-btn>
	</div>
</template>

<script>
	import * as types from './store/types.js';
	import { mapGetters } from 'vuex';
	
	import Header from './components/Header.vue';
	import Navigation from './components/Navigation.vue';
	import Modal from './components/Modals/ModalBox.vue';
	import SideSocials from './components/Socials.vue';
	import GetStartedLink from './components/GetStartedLink.vue';
	import ShowReel from './components/ShowReeel.vue';
	import PlayShowReel from './components/PlayShowReel.vue';
	import Main from './Projects/Main/Main.vue';
	import AllWorks from './Projects/AllWorks/AllWorks.vue';

	export const pageTransitionDuration = 1000;


	import { headerAnimation } from './components/Header.vue';
	import { sideSocialsAnimation } from './components/Socials.vue';
	import { getStartedLinkAnimation } from './components/GetStartedLink.vue';
	import { playShowreelAnimation } from './components/PlayShowReel.vue';
	




	export function preventTouchScroll(touchElement) {
		var _overlay = document.querySelector(touchElement);
		var _clientY = null;

		_overlay.addEventListener('touchstart', function (event) {
			if (event.targetTouches.length === 1) {
				_clientY = event.targetTouches[0].clientY;
			}
		}, false);

		_overlay.addEventListener('touchmove', function (event) {
			if (event.targetTouches.length === 1) {
				disableRubberBand(event);
			}
		}, false);

		function disableRubberBand(event) {
			var clientY = event.targetTouches[0].clientY - _clientY;

			if (_overlay.scrollTop === 0 && clientY > 0) {
				event.preventDefault();
			}

			if (isOverlayTotallyScrolled() && clientY < 0) {
				event.preventDefault();
			}
		}

		function isOverlayTotallyScrolled() {
			return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
		}
	}

	

	export function resetUploadFileEvent(form, initialText, fileSizeLimitText) {
		document.querySelector(`${form} .input-wrapper-text`).classList.remove('loaded');
		document.querySelector(`${form} .input-wrapper-text`).children[1].textContent = initialText;
		document.querySelector(`${form} .uploaded-file-name`).classList.remove('error');
		document.querySelector(`${form} .uploaded-file-name`).innerHTML = fileSizeLimitText;
		document.querySelector(`${form} input[type="file"]`).value = '';
		document.querySelector('form').classList.remove('prevent');
	}


	export function uploadFileEvent(form, initialText) {
		
		const fileSizeLimitText = 'file size must be less than 10mb';

		document.querySelector(`${form} input[type="file"]`).addEventListener('change', (e) => {
			let uploadedFileName = e.target.value.replace(/C:\\fakepath\\/i, '');
			e.target.closest('.upload-box').children[1].innerHTML = `<span>Attached:</span>' ${uploadedFileName}`;
			e.target.closest('.upload-box').children[0].children[1].classList.add('loaded');
			e.target.closest('.upload-box').children[0].children[1].children[1].textContent = 'delete file';
			if(e.target.files[0].size > 10000000){
				document.querySelector('form').classList.add('prevent');
				document.querySelector(`${form} .uploaded-file-name`).classList.add('error');
				document.querySelector(`${form} .uploaded-file-name`).innerHTML = 'File is too big!';
			};
		});
		let f = document.querySelectorAll('input[type=file]');

		let clearInput = function(){
			this.value = '';
		};
		for(let i=0;i<f.length; i++) {
			f[i].addEventListener('click', clearInput);
		}

		document.querySelector(`${form} .input-wrapper-text`).addEventListener('click', (e) => {
			resetUploadFileEvent(form, initialText, fileSizeLimitText);
		});
	}

	let baseAnimationTrigger = true;


	export default {
		components: {
			'app-header': Header,
			'app-navigation': Navigation,
			'app-modal': Modal,
			'app-side-socials': SideSocials,
			'app-getstarted-link': GetStartedLink,
			'app-showreel': ShowReel,
			'play-showreel-btn': PlayShowReel,
			'app-main': Main,
			'app-allworks': AllWorks
		},

		computed: {
			...mapGetters({
				'displayModal': types.TOGGLE_MODAL,
				'displayShowReel': types.TOGGLE_SHOWREEL
			})
		},

		
		mounted() {

			//First Animations
		
			document.querySelector('.sound__control').addEventListener('click', () => {
				// var splashVideo = document.querySelector('#splash__video');
				document.querySelector('.sound__control').classList.toggle('play');
				/*if(document.querySelector('body').classList.contains('fp-viewing-1')) {
					splashVideo.muted = !splashVideo.muted;
				}*/
			});

			document.querySelector('.play__showreel_btn').addEventListener('click', () => {
				document.querySelector('.sound__control').classList.add('play');
				document.querySelector('.play__showreel_controls').classList.add('eq-only');
			});

			document.querySelector('.footer__play__showreel_btn').addEventListener('click', () => {
				document.querySelector('.sound__control').classList.add('play');
				document.querySelector('.play__showreel_controls').classList.add('eq-only');
			});
			

			setTimeout(() => {
				headerAnimation();
				sideSocialsAnimation();
				getStartedLinkAnimation();
				playShowreelAnimation();
			}, 2000);

		},

		methods: {

			enter(el, done) {
				const paigeOverlay = document.getElementById('page__overlay'); 
				let tl = new TimelineMax(),
						paigeOverlayTl = new TimelineMax();
				paigeOverlayTl
						.set(paigeOverlay, {className: '-=set-to-left', delay: 1, onComplete: () => {
							TweenMax.set(paigeOverlay, {className: '+=to-right', onComplete: () => {
								TweenMax.set(paigeOverlay, {className: '-=from-left to-right', delay: 1})
							}});
						}});
				tl
				.from(el, 0, {opacity: 0, ease: Power4.easeInOut, delay: 1, onComplete: () => {
					TweenMax.set(el, {clearProps: 'all'});
  				done();
  			}});

			},

			leave(el, done) {
				const paigeOverlay = document.getElementById('page__overlay');  
				let tl = new TimelineMax(),
						paigeOverlayTl = new TimelineMax();
				paigeOverlayTl
						.set(paigeOverlay, {className: '+=set-to-left', onComplete: () => {
							TweenMax.set(paigeOverlay, {className: '+=from-left'});
						}});
				tl
				.to(el, 1, {opacity: 1, onComplete: () => {
					TweenMax.set(el, {clearProps: 'all'});
  				done();
  			}});
			},
		}

	}

</script>

<style lang="scss">
	@import './global.scss';

	.fadeOut {
		opacity: 0;
		-webkit-transition: all 0.4s ease 0s;
		-moz-transition: all 0.4s ease 0s;
		transition: all 0.4s ease 0s;
	}

	.modal-window {

		&.modal-show {

			&.slideOut {
				transform: translateX(100%);
				-webkit-transition: all 1s cubic-bezier(0.77, 0, 0.175, 1) 0s;
				-moz-transition: all 1s cubic-bezier(0.77, 0, 0.175, 1) 0s;
				transition: all 1s cubic-bezier(0.77, 0, 0.175, 1) 0s;
			}
		}
	}

	.slideOut {
		transform: translateX(100%);
		-webkit-transition: all 10s cubic-bezier(0.77, 0, 0.175, 1) 0s;
    -moz-transition: all 10s cubic-bezier(0.77, 0, 0.175, 1) 0s;
    transition: all 10s cubic-bezier(0.77, 0, 0.175, 1) 0s;
	}
</style>

