import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import AboutUs from '@/components/ModestEnComponents/AboutUS.vue'

describe('AboutUs', () => {
  it('проверка заголовка', () => {
    const Constructor = Vue.extend(AboutUs)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.about-title__title').textContent)
      .toEqual('We are modest.')
  })
})

describe('AboutUs', () => {
  it('renders item in props.items', () => {
    const items = ['', '', '']
    const wrapper = shallowMount(AboutUs, {
      propsData: { items }
    })
    if (items.length === 3) {
      expect(wrapper.findAll('.about-right-item')).toHaveLength(items.length)
    } else {
      console.log('test failed')
    }
  })
})
