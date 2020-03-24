import { shallowMount } from '@vue/test-utils'
import UndoList from '../../components/UndoList'
import { findTestWrapper } from '../../../../testUtils'

describe('UndoList组件', () => {
  it('list参数为[]，count值应该为0，且列表无内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: []
      }
    })
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')

    expect(countElem.at(0).text()).toEqual('0')
    expect(listItems.length).toBe(0)
  })

  it('list参数为[1,2,3]，count值应该为3，且列表有内容,且存在删除按钮', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'div', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    const deleteButtons = findTestWrapper(wrapper, 'delete-button')

    expect(countElem.at(0).text()).toEqual('3')
    expect(listItems.length).toBe(3)
    expect(deleteButtons.exists()).toBe(true)
  })

  it('删除按钮被点击时，向外触发删除事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'div', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const deleteButton = findTestWrapper(wrapper, 'delete-button').at(1)
    deleteButton.trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
    expect(wrapper.emitted().delete[0][0]).toBe(1)
  })

  it('列表项目被点击，向外触发status事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'div', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const deleteButton = findTestWrapper(wrapper, 'item').at(1)
    deleteButton.trigger('click')
    expect(wrapper.emitted().status).toBeTruthy()
    expect(wrapper.emitted().status[0][0]).toBe(1)
  })

  it('列表项显示一个输入框，两个正常列表内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'input', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const input = findTestWrapper(wrapper, 'input')
    expect(input.length).toBe(1)
    expect(input.at(0).element.value).toBe('2')
  })

  it('输入框失去焦点时，向外触发reset事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'input', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const input = findTestWrapper(wrapper, 'input')
    input.trigger('mouseleave')
    expect(wrapper.emitted().reset).toBeTruthy()
  })

  it('输入框变化时，向外触发change事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'input', value: 2 },
          { status: 'div', value: 3 }
        ]
      }
    })
    const input = findTestWrapper(wrapper, 'input')
    input.at(0).element.value = 22
    input.trigger('change', {
      index: 1
    })
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0][0]).toEqual({ index: 1, value: '22' })
  })
})
