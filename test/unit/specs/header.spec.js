import Vue from 'vue'
import Header from '@/components/ModestEnComponents/Header.vue'

describe('Header', () => {
    it('проверка заголовка', () => {
      const Constructor = Vue.extend(Header)
      const vm = new Constructor().$mount()
      expect(vm.$el.querySelector('.header-logo__title').textContent)
        .toEqual('Modest.')
    })
})
