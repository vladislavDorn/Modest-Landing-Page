<template>
	<section class="work">
		<div class="container">
			<div class="work__work-block-title work-block-title">
				<h2 class="work-block-title__title modest-title">Lovely work.</h2>
			</div>
			<div class="work__work-list work-list">
				<div class="work-list__work-item work-item" v-for="work in works">
					<div class="work-item__block-image">
						<img class="work-item__image" :src="work.image" alt="">
					</div>				
					<div class="work-item__work-overlay-block work-overlay-block">
						<a href="#" class="work-overlay-block__add"></a>
					</div>
					<div class="work-item__work-block-info work-block-info">
						<p class="work-block-info__info">{{ work.description }}</p>
					</div>
				</div>
				<button class="work-item__work-show-btn modest-btn">Show me more</button>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				works: [
					{
						image: 'src/assets/image/work-1.jpg',
						description: 'partnership guidlines'
					},
					{
						image: 'src/assets/image/work-2.jpg',
						description: 'partnership guidlines'
					},
					{
						image: 'src/assets/image/work-3.jpg',
						description: 'partnership guidlines'
					},
					{
						image: 'src/assets/image/work-4.jpg',
						description: 'partnership guidlines'
					},
					{
						image: 'src/assets/image/work-5.jpg',
						description: 'partnership guidlines'
					},
					{
						image: 'src/assets/image/work-6.jpg',
						description: 'partnership guidlines'
					}
				]
			}
		}
	}
</script>