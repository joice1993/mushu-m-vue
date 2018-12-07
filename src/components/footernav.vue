<template>
    <nav class="footer">
      <router-link :to="{name:'Index'}">
        <img :src="'http://pbaimage.pba.cn/2015/m.mushu.cn/images/tab/' + ($route.path.indexOf('index') !== -1 ? 'home' : 'home_gray') + '.png'">
        <p>首页</p>
      </router-link>
      <router-link :to="{name:'Scratch'}">
        <img :src="'http://pbaimage.pba.cn/2015/m.mushu.cn/images/tab/' + ($route.path.indexOf('scratch') !== -1 ? 'scratch' : 'scratch_gray') + '_new.png'">
        <p>刮刮卡</p>
      </router-link>
      <router-link :to="{name:'Point'}">
        <img :src="'http://pbaimage.pba.cn/2015/m.mushu.cn/images/tab/' + ($route.path.indexOf('point') !== -1 ? 'point' : 'point_gray') + '.png'">
        <p>积分商城</p>
      </router-link>
      <router-link :to="{name:'Cart'}">
        <img :src="'http://pbaimage.pba.cn/2015/m.mushu.cn/images/tab/' + ($route.path.indexOf('cart') !== -1 ? 'cart' : 'cart_gray') + '.png'">
        <p>购物车</p>
      </router-link>
      <router-link :to="{name:'My'}">
        <img :src="'http://pbaimage.pba.cn/2015/m.mushu.cn/images/tab/' + ($route.path.indexOf('my') !== -1 ? 'my' : 'my_gray') + '.png'">
        <p>个人中心</p>
      </router-link>
    </nav>
</template>

<script>
    export default {
      name: "footernav",
    }
</script>

<style scoped lang="scss">
  .footer{
    @include flex;
    @include flex-around;
    @include fixed-bottom;
    @include border_t_line;
    @include padding-box;
    padding: 10px 0 5px 0;
    background-color: white;
    z-index: 99;
    a{
      flex: 1;
      text-align: center;
      img{
        width: 21px;
      }
      p{
        margin-top: 5px;
        color: #969292;
        font-size: 10px;
      }
      &.active{
        p{
          color: #E82076;
        }
      }
    }
  }
</style>
