import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Features from '@/components/ModestEnComponents/Features'

describe('Features', () => {
  it('проверка заголовка', () => {
    const Constructor = Vue.extend(Features)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.features-block-title__title').textContent)
      .toEqual('Features.')
  })
})

describe('Features', () => {
  it('renders item in props.items', () => {
    const items = ['', '', '']
    const wrapper = shallowMount(Features, {
      propsData: { items }
    })
    if (items.length === 3) {
      expect(wrapper.findAll('.features-item')).toHaveLength(items.length)
    } else {
      console.log('test failed')
    }
  })
})
