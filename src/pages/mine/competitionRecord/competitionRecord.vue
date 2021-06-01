<template>
  <AtNoticebar class="title-count">
    你有{{counter}}次参赛记录
  </AtNoticebar>

  <ContestCard></ContestCard>
</template>

<script>
import ContestCard from '../../../components/ContestCard'
import { AtNoticebar } from 'taro-ui-vue'
export default {
  name: 'competitionRecord',
  components: {
    ContestCard,
    AtNoticebar
  },
  data(){
    return {
      counter:1
    }
  },
  methods:{

  }
}
</script>

<style>


</style>
