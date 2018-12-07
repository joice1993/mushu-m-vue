<template>
  <div class="wrap">
    <!--轮播-->
    <mt-swipe :auto="4000" class="swiper">
      <mt-swipe-item v-for="(item,index) in goodsList.outside_picture" :key="index">
          <img>
      </mt-swipe-item>
    </mt-swipe>

  </div>
</template>

<script>
  import { goodsList } from '@/axios/api/goods';

  export default {
      name: "detail",
      data() {
        return {
          goodsList: []
        }
      },
      mounted() {
        //请求商品详情
        goodsList(this.$route.query.sale_id).then((res) => {
          this.goodsList = res.data.data;
          console.log(res.data.data)
        })
      }
    }
</script>

<style scoped lang="scss">

</style>
