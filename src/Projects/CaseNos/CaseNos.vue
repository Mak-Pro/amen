<template>
	
	<div id="case">
		
		<div class="case__bg nos"></div>

		<router-link :to="{name: 'AllWorks'}" exact class="back__link" active-class="" exact-active-class="">
			<i class="fal fa-angle-left arrow"></i>
			<span class="text"><img :src="require(`@/assets/img/arrow-back-icon.svg`)" alt="">all cases</span>
		</router-link>

		<intro-section
			:data-bg="'#f9fbfb'"
			:className="'darkbox nos'"
			:backgroundImage="'case-nos-intro-bg.jpg'"
			:backgroundOverlay="'intro-nos-overlay.png'"
			:logo="'case-nos-intro-logo-icon.svg'"
			:projectName="'nOS client'"
			:text="'Discover & Build the web of the future'"
		></intro-section>
		<short-info-section
			:data-bg="'#F9FBFB'"
			:className="'nos'"
			:titleTextTop="'Discover & Build '"
			:titleTextBottom="'the web of the future'"
			:client="'nOS'"
			:location="'Netherlands'"
			:workTopLine="'UX/UI design, Prototyping'"
			:workBottomLine="''"
			:type="'Client'"
			:developedDate="'May 2018'"
			:hoursTracked="'~150'"
			:rightTextOne="'To launch this ambitious project, our client initiated a tender—and we aimed at winning this competition! A strategic research session with our internal team determined the motion vector – we needed to find an absolutely new style and become different from other contest participants.'"
			:rightTextTwo="'The task was not only to change colors and shapes of the various dashboard elements but to highlight the website navigation with the company logo-like geometrical shapes, minimalism, and numeric clarity.'"
			:siteUrl="'https://projects.invisionapp.com/share/K7JC2N585MW#/screens'"
		>
		</short-info-section>
		<product-section
			:data-bg="'#F3F7F7'"
			:className="'nos-intro'"
			:titleText="'The product'"
			:text="'nOS provides access to the crypto-powered web and allows the user to discover or create apps using blockchains and cryptocurrencies. nOS aims to overhaul the app, web, and cryptocurrency experience for consumers and creators alike, by introducing new solutions for app and content development, monetization, discovery, and interaction.'"
			:imageUrl="'nos-product-img.png'"
		>
		</product-section>
		<product-section
			:data-bg="'#F9FBFB'"
			:className="'nos nos-overview'"
			:titleText="'Project Overview'"
			:text="'The nOS logo is a circle, so we employed the round shape all over the design of their software. We emphasized on the minimal design, light colors, and round geometric elements. The result looks very lightweight, ultra-modern, and classy.'"
			:imageUrl="'nos-overview-img.jpg'"
		>
		</product-section>
		<browser-section
			:data-bg="'#F9FBFB'"
			:titleText="'Browser'"
			:text="'One of the project parts was the development of the nOS browser. Here we efficiently utilized a left-side icon menu, which makes the navigation and setup easy and intuitive. The browser features light green, white, and grey colors, as well as transparent geometries and a minimalistic look and feel.'"
			:imageUrl="'case-nos-browser-img.png'"
			:overlayUrl="'case-nos-browser-overlay-img.png'"
		></browser-section>
		<product-section
			:data-bg="'#f4fafa'"
			:className="'nos nos-store'"
			:titleText="'App Store'"
			:text="'When creating the App Store, we were greatly inspired by the nOS round logo. It features minimalistic graphic elements, graphical points on the background (which do not distract from the main info but add charm to the page), and logo-like icons for the apps.'"
			:imageUrl="'case-nos-store-img.jpg'"
		>
		</product-section>
		<exchange-section
			:data-bg="'gradient-nos'"
			:className="'darkbox'"
			:overlayImageUrl="'case-nos-exchange-overlay-img-full.png'"
			:titletext="'Exchange'"
			:text="'The same style we employed for the Exchange interface, which lets you easily trade cryptocurrencies and other digital assets, directly from nOS Browser.'"
			:textTwo="'Look, how cool it feels!'"
			:schemeTransparentImageUrl="'case-nos-scheme-transparent-img.png'"
			:schemeWhiteImageUrl="'case-nos-scheme-white-img.jpg'"
		></exchange-section>
		<wallet-section
			:data-bg="'#f9fbfa'"
			:titleText="'Crypto Wallet'"
			:text="'Our team developed all the pages of the nOS crypto wallet, where you can stake, send, and receive digital assets, and vote for delegates and curators on the nOS Network.'"
			:imageUrl="'case-nos-wallet-img.jpg'"
		></wallet-section>
		<similar-section
			:data-bg="'#F9FBFB'"
			:showLines="true"
		></similar-section>
		<next-project-section
			:data-bg="'#F9FBFB'"
			:imageUrl="'next-project-deepcloud.jpg'"
			:projectName="'DeepCloud AI'"
			:projectDescription="'Blockchain for next generation content distribution'"
			:linkText="'deepcloudai.com'"
			:siteUrl="'https://deepcloudai.com'"
			:nextCaseName="'deepcloud'"
		></next-project-section>
		<app-footer></app-footer>
	</div>

</template>

<script>

import Lines from '../../components/Lines.vue';
import IntroSection from '../../components/CasesSections/CaseIntroSection.vue';
import ShortinfoSection from '../../components/CasesSections/CaseShortInfoSection.vue';
import ProductSection from '../../components/CasesSections/CaseProductSection.vue';
import BrowserSection from '../../components/CasesSections/CaseBrowserSection.vue';
import ExchangeSection from '../../components/CasesSections/CaseExchangeSection.vue';
import WalletSection from '../../components/CasesSections/CaseWalletSection.vue';
import SimilarSection from '../../components/Similar.vue';
import NextProjectSection from '../../components/CasesSections/CaseNextProjectSection.vue';
import Footer from '../../components/Footer.vue';

import SimpleScrollbar from 'simple-scrollbar';
import Scrollbar from 'smooth-scrollbar';
import ScrollMagic from 'scrollmagic';

import { changeColor, triggerCaseBg } from '../AllWorks/AllWorks.vue';
import { pageTransitionDuration } from '../../App.vue';

let sectionsAnimationTrigger = true;

export default {

  data () {
    return {

    }
  },

  components: {
  	'app-lines': Lines,
		'intro-section': IntroSection,
		'short-info-section': ShortinfoSection,
		'product-section': ProductSection,
		'browser-section': BrowserSection,
		'exchange-section': ExchangeSection,
		'wallet-section': WalletSection,
		'similar-section': SimilarSection,
		'next-project-section': NextProjectSection,
		'app-footer': Footer
  },

  mounted() {


  	document.querySelector('.socials.side').classList.add('cs');

  	document.querySelector('#case').addEventListener('scroll', () => {
  		let st = document.querySelector('#case').scrollTop;
  		st > 0 ? document.querySelector('.main__header').classList.add('mob-sticky') : document.querySelector('.main__header').classList.remove('mob-sticky');
  	});
		

		// white for case
  	if(window.innerWidth < 1200) {
  		let cst = window.pageYOffset;
  		document.querySelector('.hamburger').addEventListener('click', () => {
  			if(cst == 0) {
  				document.querySelector('.main__header_logo').classList.add('white');
  				document.querySelector('.hamburger').classList.add('white');
  			}
  		});
  	}

		setTimeout(() => {

			window.scrollTo(0, 0);
			document.querySelector('#case').classList.remove('light');
			document.querySelector('.main__header').classList.remove('mob-sticky');
			document.querySelector('.main__header_logo').classList.remove('short');

			document.querySelector('.play__showreel_controls').classList.remove('hidden','eq-only');

			document.querySelector('#app > .get__started').classList.add('nos');

			// scroll bar
			if(window.innerWidth > 1199) {
				const scrollContainer = document.getElementById('case');  
				SimpleScrollbar.initEl(scrollContainer);
			}

			document.querySelectorAll('*[data-delay]').forEach((item) => {
				let thisDelay = item.getAttribute('data-delay');
				item.setAttribute('style', 'transition: opacity 0.7s ease ' + thisDelay + 's, top 0.7s ease ' + thisDelay + 's');
			});

			// base fade animation
			if(sectionsAnimationTrigger == true) {

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

				// image blocks animation
				document.querySelectorAll('.pin-scene').forEach((scene) => {

					var thisController = new ScrollMagic.Controller();
					var $this = scene;
					var contentFadeUp = new ScrollMagic
					.Scene({
						triggerElement: scene,
						reverse: false,
						triggerHook: 0.8,
					})
					.setClassToggle(scene, "show")
					.on("enter", (e) => {
						setTimeout(() => {
							scene.classList.add('no-clip');
							setTimeout(() => {
								scene.classList.add('show-shadow');
							}, 50);
						}, 1500);
					})
					.addTo(thisController);
				});

				sectionsAnimationTrigger = false;

			}
			else {
				document.querySelectorAll('.pin-wrapper').forEach((pin) => {
					pin.classList.add('finished');
				});

				document.querySelectorAll('.pin-scene').forEach((pin) => {
					pin.classList.add('finished');
				});
			}


			document.querySelector('.main__header_logo').classList.add('white');
			document.querySelector('.socials.side').classList.add('white');
			document.querySelector('.hamburger').classList.add('white');
			document.querySelector('.get__started').classList.add('white');
			document.querySelector('.play__showreel_btn').classList.add('white');
			document.querySelector('.back__link').classList.add('white');
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
				document.querySelector('.languages-list li a').style.color = '#fff';

				changeColor('#case .ss-content','.main__header_logo', '.darkbox');
				changeColor('#case .ss-content','.socials.side', '.darkbox');
				changeColor('#case .ss-content','.hamburger', '.darkbox');
				changeColor('#case .ss-content','.get__started', '.darkbox');
				changeColor('#case .ss-content','.play__showreel_btn', '.darkbox');
				changeColor('#case .ss-content','.back__link', '.darkbox');
				changeColor('#case .ss-content','#app > .get__started', '.darkbox');
				changeColor('#case .ss-content','.languages-list', '.darkbox');


				// A
				let clastScrollTop = document.querySelector('#case .ss-content').scrollTop;
				document.querySelector('#case .ss-content').addEventListener('scroll', () => {
					var cst = document.querySelector('#case .ss-content').scrollTop;
					if(cst > clastScrollTop) {
						document.querySelector('.main__header_logo').classList.add('short');
					}
					else {
						document.querySelector('.main__header_logo').classList.remove('short');
					}
					clastScrollTop = cst;
				});
			}

			if(window.innerWidth < 1200) {
				changeColor('#case','.main__header_logo', '.darkbox');
				changeColor('#case','.socials.side', '.darkbox');
				changeColor('#case','.hamburger', '.darkbox');
				changeColor('#case','.get__started', '.darkbox');
				changeColor('#case','.play__showreel_btn', '.darkbox');
				changeColor('#case','.back__link', '.darkbox');
				changeColor('#case','#app > .get__started', '.darkbox');
				changeColor('#case','.languages-list', '.darkbox');


				// A
				let clastScrollTop = window.pageYOffset;

				window.addEventListener('scroll', (e) => {
					let cst = window.pageYOffset;
					cst > clastScrollTop ? document.querySelector('.main__header_logo').classList.add('short') : document.querySelector('.main__header_logo').classList.remove('short');
					clastScrollTop = cst;
				});
			}





			// BG

			triggerCaseBg();


			

			var exchangeSchemeLight = document.querySelector('.scheme.white');

			var exchangeSchemeLightController = new ScrollMagic.Controller();

			var exchangeTriggerHook = 0.2;

			if(window.innerWidth < 768) {
				exchangeTriggerHook = 0.7;
			}


			var exchangeSchemeLightSet = new ScrollMagic
			.Scene({
				triggerElement: exchangeSchemeLight,
				reverse: true,
				triggerHook: exchangeTriggerHook,
			})
			.setClassToggle(exchangeSchemeLight, "show-sheme")
			.addTo(exchangeSchemeLightController);



		}, pageTransitionDuration);
		
  },

  beforeDestroy() {
  	setTimeout(() => {
  		document.querySelector('.get__started').classList.remove('nos');
  	}, pageTransitionDuration);
  	
  }
}
</script>

<style lang="scss" scoped>

	

</style>