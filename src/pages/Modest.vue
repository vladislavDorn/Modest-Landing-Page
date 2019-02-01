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
  import Header from '../components/ModestENComponents/Header.vue'
  import PromoSlider from '../components/ModestENComponents/PromoSlider.vue'
  import AboutUs from '../components/ModestENComponents/AboutUs.vue'
  import Team from '../components/ModestENComponents/Team.vue'
  import Work from '../components/ModestENComponents/Work.vue'
  import Activity from '../components/ModestENComponents/Activity.vue'
  import Features from '../components/ModestENComponents/Features.vue'
  import Contact from '../components/ModestENComponents/Contact.vue'
  import Footer from '../components/ModestENComponents/Footer.vue'
 
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