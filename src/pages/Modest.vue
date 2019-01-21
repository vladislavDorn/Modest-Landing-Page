<template>
  <div>
     <app-header></app-header> 
     <promo-slider></promo-slider>
     <about-us></about-us>
     <team></team>
     <work></work>
  </div> 
</template>

<script>
  import Header from '../components/Header.vue'
  import PromoSlider from '../components/PromoSlider.vue'
  import AboutUs from '../components/AboutUs'
  import Team from '../components/Team.vue'
  import Work from '../components/Work.vue'

export default {
  components: {
    'app-header': Header,
    'promo-slider': PromoSlider,
    'about-us': AboutUs,
    'team': Team,
    'work': Work
  }
}
</script>