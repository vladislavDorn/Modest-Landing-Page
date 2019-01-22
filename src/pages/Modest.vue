<template>
  <div>
     <app-header></app-header> 
     <promo-slider></promo-slider>
     <about-us></about-us>
     <team></team>
     <work></work>
     <activity></activity>
     <features></features>
     <contact></contact>
  </div> 
</template>

<script>
  import Header from '../components/Header.vue'
  import PromoSlider from '../components/PromoSlider.vue'
  import AboutUs from '../components/AboutUs.vue'
  import Team from '../components/Team.vue'
  import Work from '../components/Work.vue'
  import Activity from '../components/Activity.vue'
  import Features from '../components/Features.vue'
  import Contact from '../components/Contact.vue'
 
export default {
  components: {
    'app-header': Header,
    'promo-slider': PromoSlider,
    'about-us': AboutUs,
    'team': Team,
    'work': Work,
    'activity': Activity,
    'features': Features,
    'contact': Contact
  }
}
</script>