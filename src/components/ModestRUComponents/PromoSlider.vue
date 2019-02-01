<template>
	<carousel class="promo-slider" :perPage="1" :autoplay="true" :autoplayTimeout="4000" :loop="true">
		<slide class="promo-slider__promo-slide promo-slide" v-for="slide in slides">
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
						<button class="promo-button__btn modest-btn">Узнать больше</button>
						<button class="promo-button__btn modest-btn">Видео тур</button>
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
					img: 'src/assets/image/promo-image.jpg',
					title: 'Добро пожаловать на нашу площадку',
					info: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.'
				},
				{
					img: 'src/assets/image/promo-image.jpg',
					title: 'Добро пожаловать на нашу площадку',
					info: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.'
				},
				{
					img: 'src/assets/image/promo-image.jpg',
					title: 'Добро пожаловать на нашу площадку',
					info: 'Есть много вариантов Lorem Ipsum, но большинство из них имеет не всегда приемлемые модификации, например, юмористические вставки или слова, которые даже отдалённо не напоминают латынь.'
				}
				]
			}
		}
	}
</script>
