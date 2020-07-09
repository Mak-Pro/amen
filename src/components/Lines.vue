<template>
	<div class="lines-wrapper">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</div>
</template>


<style lang="scss" scoped>

	@import '../variables.scss';
	
	.lines-wrapper {
		width: 100%;
		max-width: 120rem;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		z-index: 0;

		span {
			display: block;
			width: 1px;
			background: $lines-color;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			opacity: 0.4;

			&:nth-child(2) {
				left: 33.3333333%;
			}

			&:nth-child(3) {
				left: 66.66666666%;
			}

			&:nth-child(4) {
				left: auto;
				right: 0;
			}
		}

		@media only screen and (max-width:1499px) {
			max-width: 108rem;
		}

		@media only screen and (max-width:1399px) {
			max-width: 104rem;
		}

		@media only screen and (max-width:1299px) {
			max-width: 94rem;
		}

		@media only screen and (max-width:992px) {
			max-width: 69rem;
		}

		@media (max-height: 499px) and (max-width: 899px), (max-width: 767px) {
			max-width: 100%;	
		}

		@media only screen and (max-width: 599px) {
			display: none;	
		}
	}

</style>