<template>
	<section class="about">
		<div class="container">
			<div class="about__about-title about-title">
				<h1 class="about-title__title modest-title">We are modest.</h1>
			</div>
			<div class="about__about-list about-list">
				<div class="about-list__about-item about-item">
					<div class="about-item__about-info about-info">
						<p class="about-info__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique ndolor non, ornare sagittis dolor. Nulla vestibulu lacus sed molestie gravida. Crferm entum  quismagna congue, vel sodales arcu vestibulum. Nunc lobortis dui magna, quis lacusullamcorper at. </p>
						<p class="about-info__text">Phasellus sollicitudin ante eros ornare, <span class="about-info__text_strong">sit amet luctus lorem semper</span>. Suspendisse posuere, quamdictum consectetur, augue metus pharetra tellus, eu feugiatloreg egetnisi. Cras ornare bibendum ante, ut bibendum odio convallis eget. vel sodales arcu vestibulum</p>
					</div>
					<div class="about-info_about-social-block about-social-block">
						<nav class="about-social-block__about-social about-social-nav">
							<a href="#" class="about-social-nav__link about-social-nav__link_facebook"></a>
							<a href="#" class="about-social-nav__link about-social-nav__link_twitter"></a>
							<a href="#" class="about-social-nav__link about-social-nav__link_google"></a>
							<a href="#" class="about-social-nav__link about-social-nav__link_dribble"></a>
							<a href="#" class="about-social-nav__link about-social-nav__link_behance"></a>
						</nav>
					</div>
				</div>
				<div class="about-list__about-right-block about-right">
					<div class="about-right__about-right-item about-right-item" v-for="(rightItem, index) in rightItems" :key="index">
						<div class="about-right-item__numbering">
							<span class="about-right-item__number-block">{{ rightItem.number }}</span>
						</div>
						<div class="about-right-item__about-right-text-block about-right-text-block">
							<h3 class="about-right-text-block__title">{{ rightItem.title }}</h3>
							<p class="about-right-text-block__text">{{ rightItem.text }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		data () {
			return {
				rightItems: [
					{
						number: '01',
						title: 'Dedication to the customers',
						text: 'Integer vel lacus non dui ullamcorper venenatis. Aliquam vitae tristique nisi, vitae ullamcorper risus. Nam porttitor blandit ultricies.'
					},
					{
						number: '02',
						title: 'working closely with our clients',
						text: 'Sed blandit nisi urna, sed pellentesque enim consectetur vitae. Suspendisse ut vehicula nibh.'
					},
					{
						number: '03',
						title: 'increase happiness',
						text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eleifend laoreet euismod.'
					}
				]
			}
		}
	}
</script>