import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   // shallowMount 浅渲染
  //   const wrapper = shallowMount(HelloWorld, {
  //     propsData: { msg }
  //   })
  //   expect(wrapper.vm.msg).toEqual('new message')
  //   console.log(wrapper.text())
  // })

  it('组件渲染正常', () => {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: 'helloworld' }
    })
    expect(wrapper).toMatchSnapshot()
  })
})
