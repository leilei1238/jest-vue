<template>
  <div class="undoList">
    <div class="title">
      正在进行
      <span data-test="count" class="count">{{ list.length }}</span>
    </div>
    <ul class="list">
      <li
        data-test="item"
        class="item"
        v-for="(item, index) in list"
        :key="item.value"
        @click="() => changeStatus(index)"
      >
        <input
          v-if="item.status === 'input'"
          :value="item.value"
          data-test="input"
          class="input"
          @mouseleave="handleInputBlur"
          @change="e => handleInputUpdate(index, e.target.value)"
        />
        <span v-else>{{ item.value }}</span>
        <span
          data-test="delete-button"
          class="delete-button"
          @click="
            () => {
              handleDelete(index)
            }
          "
        >
          -
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: ['list'],
  data: () => {
    return {}
  },
  methods: {
    handleDelete(index) {
      this.$emit('delete', index)
    },
    changeStatus(index) {
      this.$emit('status', index)
    },
    handleInputBlur() {
      this.$emit('reset')
    },
    handleInputUpdate(index, value) {
      this.$emit('change', {
        index,
        value
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.undoList{
  width 600px
  margin 0 auto
}
.title{
  line-height 30px
  font-size 24px
  font-weight bold
  margin 10px 0
}
.count{
  margin-top 5px
  float right
  display block
  width 20px
  height 20px
  line-height 20px
  text-align center
  background #e6e6e6
  border-radius 50%
  color #000
  font-size 12px
}
.list{
  list-style-type none
}
.item{
  height 32px
  line-height 32px
  font-size 14px
  background #ffffff
  border-left 5px solid #629a9a
  border-radius 3px
  margin-bottom 10px
  padding 0 10px
}
.delete-button{
  margin-top 5px
  float right
  display block
  width 20px
  height 20px
  line-height 20px
  text-align center
  background #e6e6e6
  border-radius 50%
  color #000
  font-size 12px
  cursor pointer
}
.input{
  height 22px
  text-indent 10px
  width 460px
}
</style>
