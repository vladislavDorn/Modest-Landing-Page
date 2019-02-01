<template>
	<section class="features">
		<div class="container">
			<div class="features__features-block-title features-block-title">
				<h2 class="features-block-title__title modest-title">Услуги.</h2>
			</div>
			<div class="features__features-list features-list">
				<div class="features-list__features-item features-item" v-for="item in items">
					<div class="features-item__features-image-block features-image-block">
						<img :src="item.image" alt="Features image" class="features-image-block__img">
					</div>
					<div class="features-item__features-item-title features-item-title">
						<h3 class="features-item-title__title">{{ item.title }}</h3>
					</div>
					<div class="features-item__features-item-info features-item-info">
						<p class="features-item-info__info">{{ item.info }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						image: 'src/assets/image/features-1.jpg',
						title: 'Дизайн продукта: Eames Chairs',
						info: 'Дизайн Eames, безусловно, знаковый. Каждый из нас знает по крайней мере два или три своих знаменитых кресла. Я бы даже рискнул сказать, что большинство из нас мечтает иметь приятного Имса.'
					},
					{
						image: 'src/assets/image/features-2.jpg',
						title: 'Элегантные и красочные логотипы',
						info: 'Я всегда считал, что дизайн логотипа - одна из самых сложных вещей, чтобы получить право. Так много, что логотип может сказать о бренде, даже не сказав этого.'
					},
					{
						image: 'src/assets/image/features-3.jpg',
						title: 'Креативные решения',
						info: 'Всегда интересно посмотреть, как другие дизайнеры смотрят на известный веб-сайт, приложение или даже физический продукт. Разные дизайнеры добавляют свою индивидуальность и стиль.'
					}
				]
			}
		}
	}
</script>