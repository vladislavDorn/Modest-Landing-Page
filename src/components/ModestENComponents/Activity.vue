<template>
	<section class="activity container">
		<div class="activity__activity-title activity-title">
			<h2 class="activity-title__title modest-title">What we do.</h2>
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
						title: 'Easy theme Setup',
						info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.'
					},
					{
						class: 'activity-image-block__img_design',
						title: 'pixel perfect design',
						info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.'
					},
					{
						class: 'activity-image-block__img_display',
						title: 'responsive display',
						info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.'
					},
					{
						class: 'activity-image-block__img_support',
						title: '24/7 support',
						info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.'
					},
					{
						class: 'activity-image-block__img_setup',
						title: 'Easy theme Setup',
						info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.'
					},
					{
						class: 'activity-image-block__img_design',
						title: 'pixel perfect design',
						info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.'
					},
					{
						class: 'activity-image-block__img_display',
						title: 'responsive display',
						info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.'
					},
					{
						class: 'activity-image-block__img_support',
						title: '24/7 support',
						info: 'Nunc mattis lorem in leo lobortis, ut venenatis justo commodo. Maecenas a justo nec velit egestas fermentum.'
					}
				]
			}
		}
	}
</script>	