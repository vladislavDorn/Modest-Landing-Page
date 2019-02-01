<template>
	<section class="team container">
		<div class="team__team-title team-title">
			<h2 class="team-title__title modest-title">Наша команда.</h2>
		</div>
		<div class="team__team-list team-list">
			<div class="team-list__team-item team-item" v-for="item in items">
				<div class="team-item__image">
					<img :src="item.image" class="team-item__img" alt="Team">
					<div class="team-item__team-social team-social">
						<a href="#" class="team-social__link team-social__link-twitter"></a>
						<a href="#" class="team-social__link team-social__link-facebook"></a>
						<a href="#" class="team-social__link team-social__link-linkedin"></a>
					</div>
				</div>
				<div class="team-item__team-text-block team-text-block">
					<h2 class="team-text-block__title">{{ item.title }}</h2>
					<p class="team-text-block__info">{{ item.info }}</p>
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
						image: 'src/assets/image/team-image-1.jpg',
						title: 'Глория Брумли',
						info: 'Генеральный директор'
					},
					{
						image: 'src/assets/image/team-image-2.jpg',
						title: 'Пол Торрес',
						info: 'Руководитель отдела развития'
					},
					{
						image: 'src/assets/image/team-image-3.jpg',
						title: 'Джудит Гиллет',
						info: 'Графический дизайнер'
					},
					{
						image: 'src/assets/image/team-image-4.jpg',
						title: 'Делорес Рид',
						info: 'Менеджер по обслуживанию'
					}
				]
			}
		}
	}
</script>