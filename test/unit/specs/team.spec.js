import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Team from '@/components/ModestEnComponents/Team.vue'

describe('Team', () => {
  it('проверка заголовка', () => {
    const Constructor = Vue.extend(Team)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.team-title__title').textContent)
      .toEqual('Meet the team.')
  })
})

describe('Team', () => {
  it('renders item in props.items', () => {
    const items = ['', '', '', '']
    const wrapper = shallowMount(Team, {
      propsData: { items }
    })
    if (items.length === 4) {
      expect(wrapper.findAll('.team-item')).toHaveLength(items.length)
    } else {
      console.log('test failed')
    }
  })
})
