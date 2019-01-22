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
	
		

	</section>
</template>
	
<script>
</script>