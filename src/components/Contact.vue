<template>
	<section class="contact">
		<div class="contact__contact-clock-title contact-clock-title container">
			<h1 class="contact-clock-title modest-title">Stay in touch.</h1>
		</div>
		<yandex-map
		  :coords="[42.879181, 74.617817]"
		  zoom="15"
		  class="contact__map"
		  :cluster-options="{
		    1: {clusterDisableClickZoom: true}
		  }"
		  :placemarks="placemarks"
		  @map-was-initialized="initHandler">
		</yandex-map>
		<div class="contact__contact-list contact-list container">
			<div class="contact-list__contact-item-info contact-item-info">
				<div class="contact-item-info__block-title">
					<h2 class="contact-item-info__title">contact information</h2>
				</div>
				<div class="contact-item-info__block-info">
					<p class="contact-item-info__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi metus, tristique nec dolor non, ornare sagittis dolor. Nulla vestibulum lacus sed molestie gravida</p>
					<p class="contact-item-info__info">Cras fermentum elit quis magna congue, <span class="contact-item-info__info_strong">vel sodales</span> arcu vestibulum. Nunc lobortis dui magna, quis dapibus lacus </p>
				</div>
			</div>
			<div class="contact-list__contact-item-form contact-item-form">
				<form action="" class="contact-item-form__form">
					<div class="contact-item-form__wrapper_input">
						<p class="contact-item-form__p">your name</p>
						<input name="name" required class="contact-item-form__input" type="text">
					</div>
					<div class="contact-item-form__wrapper_input">
						<p class="contact-item-form__p">your email</p>
						<input name="email" required class="contact-item-form__input" type="email">
					</div>
					<div class="contact-item-form__wrapper_textarea">
						<p class="contact-item-form__p">your message</p>
						<textarea required class="contact-item-form__textarea" name="" style="resize: none"></textarea>
					</div>
					<input class="contact-item-form__submit-btn" type="submit" value="SEND MESSAGE">
				</form>
			</div>
		</div>
	</section>
</template>
	
<script>
</script>