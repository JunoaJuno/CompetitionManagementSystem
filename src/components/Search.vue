<template>
  <AtSearchBar
    :value="value1"
    :onChange="onChange.bind(this, 'value1')"
    :onActionClick="onActionClick"
  />
</template>

<script>
import { AtSearchBar } from 'taro-ui-vue'
export default {

  name: 'Search',
  components: {
    AtSearchBar
  },
  data() {
    return {
      value1: '',
    }
  },
  methods: {
    onChange(stateName, value) {
      this[stateName] = value
    },
    onActionClick() {
      console.log('点击了搜索按钮')
    }
  }
}
</script>

<style scoped>


</style>
