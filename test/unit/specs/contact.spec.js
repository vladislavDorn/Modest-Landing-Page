import Vue from 'vue'
import Contact from '@/components/ModestEnComponents/Contact.vue'

describe('Contact', () => {
  it('проверка заголовка', () => {
    const Constructor = Vue.extend(Contact)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.contact-clock-title').textContent)
      .toEqual('Stay in touch.')
  })
})
