<template>
  <AtNoticebar class="title-count">
    你有{{counter}}次获奖记录
  </AtNoticebar>

  <AwardCard></AwardCard>
</template>

<script>
import ContestCard from '../../../components/ContestCard'
import { AtNoticebar } from 'taro-ui-vue'
import AwardCard from '../../../components/AwardCard'
export default {
  name: 'personalAward.vue',
  components: {
    AwardCard,
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
