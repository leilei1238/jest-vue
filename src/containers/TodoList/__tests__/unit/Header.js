import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'
import { findTestWrapper } from '../../../../testUtils'

describe('Header组件', () => {
  it('样式发生改变，做提示', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper).toMatchSnapshot()
  })
  it('输入框应该存在', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    expect(input.exists()).toBe(true)
  })
  it('输入框，初始内容为空', () => {
    const wrapper = shallowMount(Header)
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('')
  })
  it('输入框值发生变化，数据应该跟着变', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('hello')
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('hello')
  })

  it('输入框回车时，无内容时，无反应', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })
  it('输入框回车时，有内容时，向外触发事件', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('test')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.$data.inputValue).toBe('')
  })
  it('输入框回车时，有内容时，向外触发事件，同时清空inputValue', () => {
    const wrapper = shallowMount(Header)
    const input = findTestWrapper(wrapper, 'input')
    input.setValue('test')
    input.trigger('keyup.enter')
    expect(wrapper.vm.$data.inputValue).toBe('')
  })
})
