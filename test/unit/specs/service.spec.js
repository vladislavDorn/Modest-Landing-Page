import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Activity from '@/components/ModestEnComponents/Activity.vue'

describe('Activity', () => {
  it('проверка заголовка', () => {
    const Constructor = Vue.extend(Activity)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.activity-title__title').textContent)
      .toEqual('What we do.')
  })
})

describe('Activity', () => {
  it('renders item in props.items', () => {
    const items = ['', '', '', '', '', '', '', '']
    const wrapper = shallowMount(Activity, {
      propsData: { items }
    })
    if (items.length === 8) {
      expect(wrapper.findAll('.activity-item')).toHaveLength(items.length)
    } else {
      console.log('test failed')
    }
  })
})
