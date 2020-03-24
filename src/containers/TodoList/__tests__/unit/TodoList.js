import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import UndoList from '../../components/UndoList'
import Header from '../../components/Header'

describe('TodoList 组件', () => {
  it('使用Header组件，应该存在', () => {
    const wrapper = shallowMount(TodoList)
    const header = wrapper.find(Header)
    expect(header.exists()).toBeTruthy()
  })

  it('addUndoItem方法被执行时，undoList列表内容会增加一个', () => {
    const content = 'abc'
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2]
    })
    wrapper.vm.addUndoItem(content)
    expect(wrapper.vm.undoList).toEqual([1, 2, content])
  })

  it('初始化时，undoList 应该为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual([])
  })

  it('使用undoList组件,应该传递list参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.find(UndoList)

    expect(undoList.props('list')).toBeTruthy()
  })

  it('handleList方法被执行时，undoList列表内容会减少一个', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [1, 2, 3]
    })
    wrapper.vm.handleItemDelete(1)
    expect(wrapper.vm.undoList).toEqual([1, 3])
  })
})
