<template>
  <div>
    <Header @add="addUndoItem" />
    <UndoList
      :list="undoList"
      @delete="handleItemDelete"
      @status="changeItemStatus"
      @reset="resetItemStatus"
      @change="changeItemValue"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import UndoList from './components/UndoList'
export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  },
  data: () => {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem(inputValue) {
      this.undoList.push({
        status: 'div',
        value: inputValue
      })
    },
    handleItemDelete(index) {
      this.undoList.splice(index, 1)
    },
    changeItemStatus(index) {
      const newUndoList = []
      this.undoList.forEach((item, itemIndex) => {
        if (itemIndex === index) {
          newUndoList.push({ status: 'input', value: item.value })
        } else {
          newUndoList.push({ status: 'div', value: item.value })
        }
      })
      this.undoList = newUndoList
    },
    resetItemStatus() {
      this.undoList = this.undoList.map(
        item => (item = { status: 'div', value: item.value })
      )
      console.log(this.undoList)
    },
    changeItemValue(obj) {
      const { index, value } = obj
      this.undoList[index].value = value
    }
  }
}
</script>

<style scoped lang=""></style>
