<template>
	
	<div id="cases">
		<section class="works darkbox">
			<div class="works__content">
				<div class="works__row">
				<app-work-case
				:id="work.id"
				:name="work.name"
				:color="work.color"
				:routeUrl="work.routeUrl"
				:videoUrl="work.videoUrl"
				v-for="(work, index) in works.cases"
				>
				</app-work-case>
				</div>
			</div>
		</section>
		<app-similar-section></app-similar-section>
		<app-footer></app-footer>
	</div>

</template>

<script>

import Work from '../../components/Work.vue';
import Similar from '../../components/Similar.vue';
import Footer from '../../components/Footer.vue';

import { mapGetters, mapActions } from 'vuex';
import * as types from '../../store/types.js';

import SimpleScrollbar from 'simple-scrollbar';

import { pageTransitionDuration } from '../../App.vue';
import ScrollMagic from 'scrollmagic';

let similarAnimationTrigger = true;

export function changeColor(scrollcontainer, element, section) {
	
	document.querySelector(scrollcontainer).addEventListener('scroll', function(container){
		var fixedElement = document.querySelector(element);
		var fixedElementPosition = fixedElement.getBoundingClientRect().top;
		var fixedElementHeight = fixedElement.offsetHeight/2;
		var addClass = false;
		var half = false;
		document.querySelectorAll(section).forEach((section) => {
			var thisOffsetTop = section.getBoundingClientRect().top;
			var thisHeight = section.offsetHeight;

			if (fixedElementPosition + fixedElementHeight  < thisOffsetTop) {
				return;
			} else if (fixedElementPosition + fixedElementHeight > (thisOffsetTop + thisHeight)) {
				return;
			} else {
				if(section.classList.contains('next')) {
					half = true;
				}
				addClass = true;
			}
		});
		if(addClass == true && half == false){
			if(fixedElement.classList.contains('main__header_logo')) {
				document.querySelectorAll('.main__header_logo .logo path').forEach((path) => {
					path.style.fill = '#fff';
				});
			}
			if(fixedElement.classList.contains('hamburger')) {
				document.querySelector('.hamburger-inner').style.backgroundColor = '#fff';
				document.querySelectorAll('.hamburger-inner .line').forEach((line) => {
					line.style.backgroundColor = '#fff';
				});
			}
			if(fixedElement.classList.contains('languages-list')) {
				document.querySelector('.languages-list li a').style.color = '#fff';
			}
			fixedElement.classList.add('white');
		}
		else if(addClass == true && half == true) {
			if(fixedElement.classList.contains('main__header_logo')) {
				document.querySelectorAll('.main__header_logo .logo path').forEach((path) => {
					path.style.fill = '#fff';
				});
				fixedElement.classList.add('white');
			}
			if(fixedElement.classList.contains('side')) {
				fixedElement.classList.add('white');
			}
			if(fixedElement.classList.contains('play__showreel_btn') || fixedElement.classList.contains('back__link')) {
				fixedElement.classList.add('white');
			}

			if(fixedElement.classList.contains('side')) {
				fixedElement.classList.remove('white');
			}

		}
		else{
			document.querySelectorAll('.main__header_logo .logo path').forEach((path) => {
				path.removeAttribute('style');
			});
			document.querySelector('.hamburger-inner').removeAttribute('style');
			document.querySelectorAll('.hamburger-inner .line').forEach((line) => {
				line.removeAttribute('style');
			});
			document.querySelector('.languages-list li a').removeAttribute('style');
			fixedElement.classList.remove('white');
		}
	});
}


export function triggerCaseBg() {

	let triggerController = new ScrollMagic.Controller(),
			$case = document.querySelector('#case'),
			bg = document.querySelector('.case__bg'),
			trigger = document.querySelector('.adaptive__bg_trigger'),
			triggerHeight = trigger.offsetHeight;
	
		var triggerSet = new ScrollMagic
		.Scene({
			triggerElement: trigger,
			reverse: true,
			triggerHook: 0,
			duration: triggerHeight
		})
		.setClassToggle([bg, $case], "show")
		.addTo(triggerController);

		window.onresize = function(event) {
			triggerHeight = trigger.offsetHeight;
			var triggerSet = new ScrollMagic
			.Scene({
				triggerElement: trigger,
				reverse: true,
				triggerHook: 0,
				duration: triggerHeight
			})
			.setClassToggle([bg, $case], "show")
			.addTo(triggerController);
		};

}




export default {


  data () {
    return {

    }
  },

  computed: {
  	...mapGetters({
  		'works': types.GET_WORK_ITEMS
  	})
  },

  methods: {
  	...mapActions({
  		'toggleNav': types.TOGGLE_NAVIGATION_ACTION
  	}),

  },

  components: {
  	'app-work-case': Work,
  	'app-similar-section': Similar,
  	'app-footer': Footer
  },

  mounted() {

  	document.querySelector('.main__header').classList.remove('no-sticky');

  	document.querySelector('.play__showreel_controls').classList.add('hidden');

  	document.querySelector('#app > .get__started').classList.remove('nos');

  	// scroll bar
  	if(window.innerWidth > 1199) {
			var scrollContainer = document.getElementById('cases');  
  		SimpleScrollbar.initEl(scrollContainer);

			let casesLastScrollTop = document.querySelector('#cases .ss-content').scrollTop;

			document.querySelector('#cases .ss-content').addEventListener('scroll', () => {
				var cst = document.querySelector('#cases .ss-content').scrollTop;
				if(cst > casesLastScrollTop) {
					document.querySelector('.main__header_logo').classList.add('short');
				}
				else {
					document.querySelector('.main__header_logo').classList.remove('short');
				}
				casesLastScrollTop = cst;
			});
  	}

  	document.querySelector('.socials.side').classList.add('cs');
  	

  	document.querySelectorAll('*[data-delay]').forEach((item) => {
  		let thisDelay = item.getAttribute('data-delay');
  		item.setAttribute('style', 'transition: opacity 0.7s ease ' + thisDelay + 's, top 0.7s ease ' + thisDelay + 's');
  	});


  	let acLastScrollTop = document.querySelector('#cases').scrollTop;

  	document.querySelector('#cases').addEventListener('scroll', () => {
  		let st = document.querySelector('#cases').scrollTop;
  		st > 0 ? document.querySelector('.main__header').classList.add('mob-sticky') : document.querySelector('.main__header').classList.remove('mob-sticky');

  		if(st > acLastScrollTop) {
  			document.querySelector('.main__header_logo').classList.add('short');
  		}
  		else {
  			document.querySelector('.main__header_logo').classList.remove('short');
  		}


  		acLastScrollTop = st;
  	});


		setTimeout(() => {

			window.scrollTo(0, 0);
			document.querySelector('.main__header').classList.remove('mob-sticky');
			document.querySelector('.main__header_logo').classList.remove('short');

			// base fade animation
			if(similarAnimationTrigger == true) {
				document.querySelectorAll('.pin-wrapper').forEach((pin) => {
					const thisController = new ScrollMagic.Controller();
					var contentFadeUp = new ScrollMagic
					.Scene({
						triggerElement: pin,
						reverse: false,
						triggerHook: 0.8,
					})
					.setClassToggle(pin, "animated")
					.addTo(thisController);
				});
				similarAnimationTrigger = false
			}
			else {
				document.querySelectorAll('.pin-wrapper').forEach((pin) => {
					pin.classList.add('finished');
				});
			}
			

		}, pageTransitionDuration);

		document.querySelector('.languages-list').classList.remove('menu-opened');


  	document.querySelector('.main__header_logo').classList.add('white');
		document.querySelector('.socials.side').classList.add('white');
		document.querySelector('.hamburger').classList.add('white');
		document.querySelector('.get__started').classList.add('white');
		document.querySelector('#app > .get__started').classList.add('white');
		document.querySelector('.languages-list').classList.add('white');

		document.querySelectorAll('.main__header_logo .logo path').forEach((path) => {
			path.style.fill = '#fff';
		});
		document.querySelector('.hamburger-inner').style.backgroundColor = '#fff';
		document.querySelectorAll('.hamburger-inner .line').forEach((line) => {
			line.style.backgroundColor = '#fff';
		});

  	if(window.innerWidth > 1199) {
  		changeColor('#cases .ss-content','.main__header_logo', '.darkbox');
  		changeColor('#cases .ss-content','.socials.side', '.darkbox');
  		changeColor('#cases .ss-content','.hamburger', '.darkbox');
  		changeColor('#cases .ss-content','.get__started', '.darkbox');
  		changeColor('#cases .ss-content','#app > .get__started', '.darkbox');
  		changeColor('#cases .ss-content','.languages-list', '.darkbox');
  	}

  	if(window.innerWidth < 1200) {
  		changeColor('#cases','.main__header_logo', '.darkbox');
  		changeColor('#cases','.socials.side', '.darkbox');
  		changeColor('#cases','.hamburger', '.darkbox');
  		changeColor('#cases','.get__started', '.darkbox');
  		changeColor('#cases','#app > .get__started', '.darkbox');
  		changeColor('#cases','.languages-list', '.darkbox');
  	}
		
  	document.querySelectorAll('.works__item:nth-child(odd)').forEach((item) => {
			item.addEventListener('mouseenter', function() {
				item.nextSibling.classList.add('small');
				if(item.children[1].children[1].children[0] != undefined) {
					item.children[1].children[1].children[0].play();
				}
				
			});
			item.addEventListener('mouseleave', function() {
				item.nextSibling.classList.remove('small');
				if(item.children[1].children[1].children[0] != undefined) {
					item.children[1].children[1].children[0].pause();
				}
			});
  	});

  	document.querySelectorAll('.works__item:nth-child(even)').forEach((item) => {
			item.addEventListener('mouseenter', function() {
				item.previousSibling.classList.add('small');
				if(item.children[1].children[1].children[0] != undefined) {
					item.children[1].children[1].children[0].play();
				}
			});
			item.addEventListener('mouseleave', function() {
				item.previousSibling.classList.remove('small');
				if(item.children[1].children[1].children[0] != undefined) {
					item.children[1].children[1].children[0].pause();
				}
			});
  	});
  }
}
</script>

<style lang="scss" scoped>

@import '../../variables.scss';

	#cases {
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		will-change: transform;
		position: absolute;
		left: -18px;
		top: 0;
		width: calc(100% + 18px);
		height: 100%;
		overflow-y: auto;
		background: $cases-bg;

		.ss-content {
			padding: 0;
			left: 0;
			right: auto;
			width: calc(100% + 18px);
		}

		.ss-scroll {
			background: $black;
			border-radius: 0;
			opacity: 1;
			width: 0.7rem;
		}

		@media only screen and (max-width: 1199px) {
			width: 100%;
			left: 0;
			top: 6.9rem;	
		}
	}


	.works {

		&__row {
			display: flex;
			flex-wrap: wrap;

			@media only screen and (max-width: 992px) {
				display: block;	
			}
		}
	}


</style>