<template>

	<div class="fullpage-container">
		<div class="fullpage-wp" v-fullpage="options" ref="brief">
			<div class="page active">
				<div class="page__content">
					<button class="btn btn-action btn-action-full start-brief" @click="moveNext">Start</button>
				</div>
			</div>
			<div class="page progress">
				<div class="page__content">
					<div class="step">
						<h5 class="step__title">Type of project *</h5>
						<p>indicate which site you need</p>

						<ul class="form__fields">
							<li>
								<div class="form__field">
									<input type="radio" name="SiteType" value="Promo site" @click="moveNext(800)">
									<span class="price">Promo site (landing)</span>
								</div>
							</li>
							<li>
								<div class="form__field">
									<input type="radio" name="SiteType" value="Corporate site" @click="moveNext(800)">
									<span class="price">Corporate site</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="page progress">
				<div class="page__content">
					<div class="step">
						<h5 class="step__title">expected budget</h5>
						<p>Indicate the average figure, within your capabilities. In the following steps, you can always review it.</p>

						<ul class="form__fields">
							<li>
								<div class="form__field">
									<input type="radio" name="SitePrice" value="Less than 1000" @click="moveNext(800)">
									<span class="price">Less than $1000</span>
								</div>
							</li>
							<li>
								<div class="form__field">
									<input type="radio" name="SitePrice" value="1000 - 2000" @click="moveNext(800)">
									<span class="price">$1000 - $2000</span>
								</div>
							</li>
							<li>
								<div class="form__field">
									<input type="radio" name="SitePrice" value="2000 - 3000" @click="moveNext(800)">
									<span class="price">$2000 - $3000</span>
								</div>
							</li>
							<li>
								<div class="form__field">
									<input type="radio" name="SitePrice" value="3000 - 5000" @click="moveNext(800)">
									<span class="price">$3000 - $5000</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="page progress">
				<div class="page__content">
					<div class="step">
						<h5 class="step__title">Are other services needed in the complex?</h5>
						<p>Choose as many options as you like</p>

						<ul class="form__fields">
							<li>
								<div class="form__field">
									<input type="checkbox" name="SMMSEO" value="SMM/SEO">
									<span class="price">SMM/SEO Promotion</span>
								</div>
							</li>
							<li>
								<div class="form__field">
									<input type="checkbox" name="ChatBot" value="ChatBot">
									<span class="price">Chat bot development</span>
								</div>
							</li>
							<li>
								<div class="form__field">
									<input type="checkbox" name="AR/VR" value="AR/VR">
									<span class="price">AR/VR Solution</span>
								</div>
							</li>
							<li>
								<div class="form__field">
									<input type="checkbox" name="VideoProdaction" value="3000 - 5000">
									<span class="price">Video - Prodaction</span>
								</div>
							</li>
						</ul>
						
						<div class="next__step_wrapper">
							<button class="next__step btn btn-action">OK</button>
						</div>

					</div>
				</div>
			</div>
			<div class="page progress">
				<div class="page__content">
					<div class="step">
						<h5 class="step__title">Your name</h5>
						<p>Name and surname of the person who will be responsible for the site</p>
						<input type="text" placeholder="Write answer here...">
					</div>
				</div>
			</div>
			<div class="page progress">
				<div class="page__content">
					<div class="step">
						<h5 class="step__title">Your phone *</h5>
						<p>We promise not to call at night :)</p>
						<input type="tel" name="Phone" placeholder="099 999 99 99">
					</div>
				</div>
			</div>
			<div class="page progress">
				<div class="page__content">
					<div class="step">
						<h5 class="step__title">Your email *</h5>
						<input type="email" name="Email" placeholder="Input your email address here...">
					</div>
				</div>
			</div>
			<div class="page progress">
				<div class="page__content">
					<div class="step">
						<h5 class="step__title">Comments</h5>
						<p>You can describe the tasks of the site or specify special requirements and wishes</p>
						<textarea name="Commnets" placeholder="Write your answer here..."></textarea>
					</div>
				</div>
			</div>
			<div class="page progress">
				<div class="page__content">
					<div class="step">
						<h5 class="step__title">Do you consent to the processing of your personal data.</h5>
						<p>we do not place your data in the public domain and do not use it for advertising or other purposes, except for the provision of the main service - selection of the Contractor</p>
						<ul class="form__fields">
							<li>
								<div class="form__field">
									<input type="radio" name="AcceptDecline" value="Accept" @click="moveNext(800)">
									<span class="price">I Accept</span>
								</div>
							</li>
							<li>
								<div class="form__field">
									<input type="radio" name="AcceptDecline" value="Decline" @click="moveNext(800)">
									<span class="price">I Decline</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="page">
				<div class="page__content">
					<div class="step">
						<button type="submit" class="btn btn-action btn-action-full">Send</button>
					</div>
				</div>
			</div>
		</div>
		<ul class="controls__list">
			<li><button class="control prev" @click="movePrev">prev</button></li>
			<li><button class="control next" @click="moveNext">next</button></li>
		</ul>

		<div class="progress__bar_wrapper">
			<div class="progress__bar_text">
				<span class="percents">0</span>% Done
			</div>
			<div class="progress__bar">
				<div class="line"></div>
			</div>
		</div>
	</div>


</template>

<script>


import 'fullpage-vue/src/fullpage.css';


let progressCounter = 0,
		incrementStep = 0,
		clicks = 0;


export default {
  data() {
    return {
      options: {
        start: 0,
        dir: 'v',
        duration: 100,
        beforeChange: function (currentSlideEl,currenIndex,nextIndex) {

        	document.querySelectorAll('.page').forEach((page, index) => {
						if(index == currenIndex) {
							page.classList.remove('active');
							page.classList.add('last');
						}
						if(index == nextIndex) {
							page.classList.add('active');
						}

						if(nextIndex <= 1 ) {
							document.querySelector('.controls__list').classList.add('show');
							document.querySelector('.control.prev').classList.add('disabled');
						}
						else {
							document.querySelector('.control.prev').classList.remove('disabled');
						}

						if(nextIndex == document.querySelectorAll('.page').length - 1) {
							document.querySelector('.control.next').classList.add('disabled');
						}
						else {
							document.querySelector('.control.next').classList.remove('disabled');
						}

        	});
        	if(currenIndex < nextIndex) {
        		document.querySelector('.last').classList.add('to-top');
        		document.querySelector('.active').classList.add('from-bottom');
        	}
        	if(currenIndex > nextIndex) {
        		document.querySelector('.last').classList.add('to-bottom');
        		document.querySelector('.active').classList.add('from-top');
        	}
        },
        afterChange: function (currentSlideEl,currenIndex) {
        	document.querySelectorAll('.page').forEach((page, index) => {
						page.classList.remove('last');
						page.classList.remove('to-top');
						page.classList.remove('from-bottom');
						page.classList.remove('from-top');
						page.classList.remove('to-bottom');
						if(page.classList.contains('active')) {
							setTimeout(() => {
								if(page.querySelector('[type="text"]') !== null) {
									page.querySelector('[type="text"]').focus();
								}
								if(page.querySelector('[type="tel"]') !== null) {
									page.querySelector('[type="tel"]').focus();
								}
								if(page.querySelector('[type="email"]') !== null) {
									page.querySelector('[type="email"]').focus();
								}
								if(page.querySelector('textarea') !== null) {
									page.querySelector('textarea').focus();
								}
							}, 200);
						}
						
						
        	});
        }
      }
    }
  },
  methods:{
    moveNext(delay){
    	clicks++;
    	if(clicks == 1) {
    		setTimeout(() => {
    			this.$refs.brief.$fullpage.moveNext();
    			clicks = 0;
    		}, delay);
    	}
    	
    	
    },
    movePrev(delay){
    	setTimeout(() => {
    		this.$refs.brief.$fullpage.movePrev();
    	}, delay);
      
    }
  },

  mounted() {

  	let proggressPagesCount = document.querySelectorAll('.progress').length;

  	incrementStep = 100/proggressPagesCount;


  	document.addEventListener('keydown', (document) => {
  		if (document.keyCode == 13) {
  			this.$refs.brief.$fullpage.moveNext();
  		}
  	});

  	document.querySelector('.next__step').addEventListener('click', () => {
  		this.$refs.brief.$fullpage.moveNext();
  	});

		
		
		document.querySelectorAll('.progress .form__fields').forEach((list) => {
			let checkedCounter = 0;
			list.querySelectorAll('[type="checkbox"]').forEach((checkbox) => {
				checkbox.addEventListener('click', () => {
					if(checkbox.checked) {
						checkedCounter++;
					}
					else {
						checkedCounter--;
					}
					if(checkedCounter > 0) {
						checkbox.closest('.form__fields').nextSibling.classList.add('show');
					}
					else {
						checkbox.closest('.form__fields').nextSibling.classList.remove('show');
					}
				});
			});
		});

		

		document.querySelectorAll('.progress .form__fields').forEach((list) => {
			let radioTrigger = true,
					checkboxCounter = 0,
					checkboxTrigger = false;

			//RADIO
			list.querySelectorAll('[type="radio"]').forEach((radio) => {
				radio.addEventListener('click', () => {
					if(radioTrigger) {
						progressCounter += incrementStep;
						document.querySelector('.progress__bar_text .percents').textContent = Math.round(progressCounter);
        		document.querySelector('.progress__bar .line').style.width = `${progressCounter}%`;
					}
					radioTrigger = false;
				});
			});

			//CHECKBOXES
			list.querySelectorAll('[type="checkbox"]').forEach((checkbox) => {
				checkbox.addEventListener('click', () => {
					if(checkbox.checked) {
						checkboxCounter++;
						if(checkboxCounter == 1) {
							progressCounter += incrementStep;
							document.querySelector('.progress__bar_text .percents').textContent = Math.round(progressCounter);
        			document.querySelector('.progress__bar .line').style.width = `${progressCounter}%`;
						}
					}
					else {
						checkboxCounter--;
					}
					if(checkboxCounter == 0) {
						checkboxTrigger = true;
					}
					else {
						checkboxTrigger = false;
					}
					if(checkboxTrigger == true) {
						progressCounter -= incrementStep;
						document.querySelector('.progress__bar_text .percents').textContent = Math.round(progressCounter);
        		document.querySelector('.progress__bar .line').style.width = `${progressCounter}%`;
					}
				});
			});

		});



		//INPUTS
		function checkFieldValue(field) {
			document.querySelectorAll(`.progress ${field}`).forEach((item) => {
				let inputTrigger = 0;
				item.addEventListener('input', (e) => {
					if(e.target.value.length > 0) {
						inputTrigger++;
						if(inputTrigger == 1) {
							progressCounter += incrementStep;
							document.querySelector('.progress__bar_text .percents').textContent = Math.round(progressCounter);
        			document.querySelector('.progress__bar .line').style.width = `${progressCounter}%`;
						}
					}
					if(e.target.value.length == 0) {
						inputTrigger = 0;
						progressCounter -= incrementStep;
						document.querySelector('.progress__bar_text .percents').textContent = Math.round(progressCounter);
        		document.querySelector('.progress__bar .line').style.width = `${progressCounter}%`;
					}
				});

			});
		}
		checkFieldValue('[type="text"]');
		checkFieldValue('[type="tel"]');
		checkFieldValue('[type="email"]');
		checkFieldValue('textarea');

  }
}
</script>

<style lang="scss" scoped>

@import '../../variables.scss';

.modal-window .modal-content-wrapper .modal-content-block .inner {
	height: 100% !important;
}

.fullpage-container {
	height: 100vh;

	.fullpage-wp {
		-webkit-transition: all 0.5s ease-out 0.1s;
		-moz-transition: all 0.5s ease-out 0.1s;
		transition: all 0.5s ease-out 0.1s;
	}

	.page {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		opacity: 0;
		-webkit-transition: all 0.3s ease 0s;
		-moz-transition: all 0.3s ease 0s;
		transition: all 0.3s ease 0s;


		&__content {
			position: relative;
			max-width: 30%;
		}

		&.to-top {

			.page__content {
				animation: toTop 0.6s ease;

				@keyframes toTop {
					0% {
						transform: translateY(0);
						opacity: 1;
					}

					100% {
						transform: translateY(-100%);
						opacity: 0;
					}
				} 
			}
		}

		&.to-bottom {

			.page__content {
				animation: toBottom 0.6s ease;

				@keyframes toBottom {
					0% {
						transform: translateY(0);
						opacity: 1;
					}

					100% {
						transform: translateY(100%);
						opacity: 0;
					}
				} 
			}
		}

		&.from-bottom {
			transition-delay: 0.3s;

			.page__content {
				animation: fromBottom 0.4s ease 0;

				@keyframes fromBottom {
					0% {
						opacity: 0;
					}

					100% {
						opacity: 1;
					}
				} 
			}
		}

		&.from-top {
			transition-delay: 0.3s;

			.page__content {
				animation: fromTop 0.4s ease;

				@keyframes fromTop {
					0% {
						opacity: 0;
					}

					100% {
						opacity: 1;
					}
				} 
			}
		}

		&.active {
			opacity: 1;
		}
	}
}


.controls__list {
	list-style: none;
	margin: 0;
	padding: 0;
	display: inline-flex;
	align-items: center;
	position: absolute;
	bottom: 0;
	right: 0;
	opacity: 0;
	visibility: hidden;
	-webkit-transition: all 0.3s ease 0s;
	-moz-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s;

	&.show {
		opacity: 1;
		visibility: visible;
	}

	li {
		margin: 0 2rem;
	}
}


.control {

	&.disabled {
		pointer-events: none;
	}
}


ul {
	list-style: none;
	margin: 0;
	padding: 0;
	counter-reset: list;

	li {
		display: flex;
		width: 100%;
		position: relative;
		padding-left: 3rem;
		margin-bottom: 1rem;

		&::before {
			counter-increment: list;
			content: counter(list) ". ";
			position: relative;
			margin-right: 1rem;
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	.form__field {
		position: relative;
		width: 100%;

		[type="radio"],
		[type="checkbox"] {
			min-width: 100%;
			min-height: 100%;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1;
			opacity: 0;
			cursor: pointer;

			&:checked ~ span {
				animation: 0.25s ease 0s 2 normal none running fieldChecked;
				border-color: $red-error;

				@keyframes fieldChecked {
					0% {
						opacity: 1;
						border-color: $red-error;
					}

					50% {
						opacity: 0.1;
					}

					100% {
						opacity: 1;
						border-color: $red-error;
					}
				}
			}
		}

		span {
			display: block;
			height: 4rem;
			border: 1px solid #23d3f7;
			padding: 0 2rem;
		}
	}
}


.next__step_wrapper {
	opacity: 0;
	visibility: hidden;
	-webkit-transition: all 0.3s ease 0s;
	-moz-transition: all 0.3s ease 0s;
	transition: all 0.3s ease 0s;

	&.show {
		opacity: 1;
		visibility: visible;
	}
}


.progress__bar_wrapper {
	position: absolute;
	left: 0;
	bottom: 3rem;
}

.progress__bar {
	height: 0.4rem;
	background: #e8eeee;
	width: 30rem;
	position: relative;

	.line {
		display: inline-block;
		height: 100%;
		width: 0%;
		background: $blue-light;
		position: absolute;
		left: 0;
		top: 0;
		-webkit-transition: all 0.3s ease 0s;
		-moz-transition: all 0.3s ease 0s;
		transition: all 0.3s ease 0s;
	}
}

</style>