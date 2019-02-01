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
     <app-footer></app-footer>
  </div> 
</template>

<script>
  import Header from '../components/ModestRuComponents/Header.vue'
  import PromoSlider from '../components/ModestRuComponents/PromoSlider.vue'
  import AboutUs from '../components/ModestRuComponents/AboutUs.vue'
  import Team from '../components/ModestRuComponents/Team.vue'
  import Work from '../components/ModestRuComponents/Work.vue'
  import Activity from '../components/ModestRuComponents/Activity.vue'
  import Features from '../components/ModestRuComponents/Features.vue'
  import Contact from '../components/ModestRuComponents/Contact.vue'
  import Footer from '../components/ModestRuComponents/Footer.vue'
 
export default {
  components: {
    'app-header': Header,
    'promo-slider': PromoSlider,
    'about-us': AboutUs,
    'team': Team,
    'work': Work,
    'activity': Activity,
    'features': Features,
    'contact': Contact,
    'app-footer': Footer
  }
}
</script>