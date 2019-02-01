<template>
	<section class="activity container">
		<div class="activity__activity-title activity-title">
			<h2 class="activity-title__title modest-title">Что мы делаем.</h2>
		</div>
		<div class="activity__activity-list activity-list">
			<div class="activity-list__activity-item activity-item" v-for="service in services">
				<div class="activity-item__activity-image-block activity-image-block">
					<span class="activity-image-block__img" :class="service.class"></span>
				</div>
				<div class="activity-item__activity-item-title activity-item-title">
					<h3 class="activity-item-title__title">{{ service.title }}</h3>
				</div>
				<div class="activity-item__activity-item-info activity-item-info">
					<p class="activity-item-info__info">{{ service.info }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				services: [
					{
						class: 'activity-image-block__img_setup',
						title: 'Настройка темы',
						info: 'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах'
					},
					{
						class: 'activity-image-block__img_design',
						title: 'Дизайн пиксель в пиксель',
						info: 'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах'
					},
					{
						class: 'activity-image-block__img_display',
						title: 'Адаптивный дизайн',
						info: 'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах'
					},
					{
						class: 'activity-image-block__img_support',
						title: 'Поддержка 24/7',
						info: 'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах'
					},
					{
						class: 'activity-image-block__img_setup',
						title: 'Настройка темы',
						info: 'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах'
					},
					{
						class: 'activity-image-block__img_design',
						title: 'Дизайн пиксель в пиксель',
						info: 'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах'
					},
					{
						class: 'activity-image-block__img_display',
						title: 'Адаптивный дизайн',
						info: 'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах'
					},
					{
						class: 'activity-image-block__img_support',
						title: 'Поддержка 24/7',
						info: 'Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах'
					}
				]
			}
		}
	}
</script>	