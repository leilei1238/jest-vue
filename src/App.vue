<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from './containers/TodoList/TodoList'

export default {
  components: {
    TodoList
  },
  name: 'App'
}
</script>

<style lang="stylus"></style>
