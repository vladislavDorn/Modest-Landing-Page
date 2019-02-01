<template>
	<section class="features">
		<div class="container">
			<div class="features__features-block-title features-block-title">
				<h2 class="features-block-title__title modest-title">Features.</h2>
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
						title: 'Product Design: Eames Chairs',
						info: 'Eames designs are certainly iconic. Everyone of us know at least two or three of their famous chairs. I would even risk saying that most of us dream about having a nice Eames.'
					},
					{
						image: 'src/assets/image/features-2.jpg',
						title: 'Elegant and Colorful Logos',
						info: 'I’ve always found logo design to be one of the most challenging things to get right. There’s so much that a logo can say about a brand without actually saying it.'
					},
					{
						image: 'src/assets/image/features-3.jpg',
						title: 'A Showcase of Creative',
						info: 'It’s always interesting to see another designer’s take on a famous website, app or even physical product. Different designers add their own personality and style.'
					}
				]
			}
		}
	}
</script>