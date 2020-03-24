import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import Header from '../../components/Header'

it('TodoList 初始化时，undoList 应该为空', () => {
  const wrapper = shallowMount(TodoList)
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual([])
})

it('TodoList 监听到Header的add事件时，会增加一个内容', () => {
  const content = 'abc'
  const wrapper = shallowMount(TodoList)
  const header = wrapper.find(Header)
  header.vm.$emit('add', content)
  expect(wrapper.vm.$data.undoList).toEqual([content])
})
