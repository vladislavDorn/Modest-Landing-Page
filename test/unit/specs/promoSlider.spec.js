import { shallowMount } from '@vue/test-utils'
import PromoSlider from '@/components/ModestEnComponents/PromoSlider'

describe('PromoSlider', () => {
  it('renders item in props.items', () => {
    const slides = ['', '', '']
    const wrapper = shallowMount(PromoSlider, {
      propsData: { slides }
    })
    if (slides.length === 3) {
      expect(wrapper.findAll('.promo-slide')).toHaveLength(slides.length)
    } else {
      console.log('test failed')
    }
  })
})
