<template>
	<carousel class="promo-slider" :perPage="1" :autoplay="true" :autoplayTimeout="4000" :loop="true">
		<slide class="promo-slider__promo-slide promo-slide" v-for="(slide, index) in slides" :key="index">
			<div class="promo-slide__promo-image">
				<img class="promo-image__img" :src="slide.img" alt="Slider Image">
			</div>
			<div class="container">
				<div class="promo-slide__promo-info promo-info">
					<div class="promo-info__promo-title promo-title">
						<h1 class="promo-title__title">{{slide.title}}</h1>
					</div>
					<div class="promo-info__promo-text promo-text">
						<p class="promo-text__text">{{ slide.info }}</p>
					</div>
					<div class="promo-info__promo-button promo-button">
						<button class="promo-button__btn modest-btn">View more</button>
						<button class="promo-button__btn modest-btn">Video tour</button>
					</div>
				</div>
			</div>
		</slide>
	</carousel>
</template>

<script>
	export default {
		data () {
			return {
				slides: [
				{
					img: 'static/promo-image.jpg',
					title: 'welcome to our marketplace',
					info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus ...'
				},
				{
					img: 'static/promo-image.jpg',
					title: 'welcome to our marketplace',
					info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus ...'
				},
				{
					img: 'static/promo-image.jpg',
					title: 'welcome to our marketplace',
					info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus ...'
				}
				]
			}
		}
	}
</script>
