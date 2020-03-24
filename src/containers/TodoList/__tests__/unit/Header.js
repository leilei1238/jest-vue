import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'
import { findTestWrapper } from '../../../../testUtils'

it('Header 样式发生改变，做提示', () => {
  const wrapper = shallowMount(Header)
  expect(wrapper).toMatchSnapshot()
})
it('组件渲染正常', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  expect(input.exists()).toBe(true)
})
it('Header中input框初始内容为空', () => {
  const wrapper = shallowMount(Header)
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe('')
})
it('Header中input发生变化，数据应该跟着变', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('hello')
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe('hello')
})

it('Header中input框输入回车，无内容时，无反应', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeFalsy()
})
it('Header中input框输入回车，有内容时，向外触发事件', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('test')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy()
})
it('Header中input框输入回车，有内容时，向外触发事件，同时清空inputValue', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('test')
  input.trigger('keyup.enter')
  expect(wrapper.vm.$data.inputValue).toBe('')
})
