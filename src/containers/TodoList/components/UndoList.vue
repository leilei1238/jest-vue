<template>
  <div>
    <div data-test="count">{{ list.length }}</div>
    <ul>
      <li data-test="item" v-for="(item, index) in list" :key="item">
        {{ item }}
        <span
          data-test="delete-button"
          @click="
            () => {
              handleDelete(index)
            }
          "
        ></span>
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
    }
  }
}
</script>

<style scoped lang="stylus"></style>
