import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Work from '@/components/ModestEnComponents/Work.vue'

describe('Work', () => {
  it('проверка заголовка', () => {
    const Constructor = Vue.extend(Work)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.modest-title').textContent)
      .toEqual('Lovely work.')
  })
})

describe('Work', () => {
  it('Проверка названия кнопки', () => {
    const Constructor = Vue.extend(Work)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.work-item__work-show-btn').textContent)
      .toEqual('Show me more')
  })
})

describe('Work', () => {
  it('renders item in props.items', () => {
    const items = ['', '', '', '', '', '']
    const wrapper = shallowMount(Work, {
      propsData: { items }
    })
    if (items.length === 6) {
      expect(wrapper.findAll('.work-item')).toHaveLength(items.length)
    } else {
      console.log('test failed')
    }
  })
})
