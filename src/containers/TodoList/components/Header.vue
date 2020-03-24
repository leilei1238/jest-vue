<template>
  <div class="header">
    <div class="header-content">
      TodoList
      <input
        class="header-input"
        type="text"
        data-test="input"
        v-model="inputValue"
        placeholder="addTodoItem"
        @keyup.enter="addTodoItem"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem() {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.header{
  line-height 60px
  background #666
}
.header-content{
  width 600px
  margin 0 auto
  color #fff
  font-size 24px
}
.header-input{
  float right
  width 360px
  line-height 24px
  margin-top 16px
  outline none
  color #333333
}
</style>
