<template>
  <div class="index-wrap">
    <!--顶部tab-->
    <ul class="header_tab">
      <li v-for="(item,index) in navData" :key="index">
        <a :href="'#'+(item.idClass)">
          <span :class="{nav_active:index == num}" @click="tabSwitch(index)">{{item.txtClass}}</span>
        </a>
      </li>
    </ul>

    <!--轮播-->
    <mt-swipe :auto="4000" class="swiper">
      <mt-swipe-item v-for="(item,index) in indexList.banners" :key="index">
        <rouer-link :to="{name:''}">
          <img :src="item.picture_address">
        </rouer-link>
      </mt-swipe-item>
    </mt-swipe>

    <!--菜单栏-->
    <ul class="menu">
      <li>
        <router-link :to="{name:''}">
          <img src="http://pbaimage.pba.cn/2015/m.mushu.cn/images/point/task01.png">
          <p>防伪查询</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:''}">
          <img src="http://pbaimage.pba.cn/2015/m.mushu.cn/images/homepage/group.png">
          <p>拼团</p>
        </router-link>
      </li>
      <li>
        <router-link :to="{name:''}">
          <img src="http://pbaimage.pba.cn/2015/m.mushu.cn/images/homepage/black.png">
          <p>去黑宣言</p>
        </router-link>
      </li>
    </ul>

    <!--新品上新-->
    <div class="goods">
      <titleleft :title="newTitle"></titleleft>
      <router-link :to="{name:'Goods',query:{sale_id:item.sale_id}}" v-for="(item,index) in indexList.new_sales" :key="index" v-if="item.new!=0">
        <img :src="item.advertising_photo">
      </router-link>
    </div>

    <!--明星专区-->
    <div class="goods">
      <titleleft :title="starTitle"></titleleft>
      <router-link :to="{name:'Goods',query:{sale_id:item.sale_id}}" v-for="(item,index) in indexList.hot_sales" :key="index" v-if="item.hot!=0">
        <img :src="item.advertising_photo">
      </router-link>
    </div>

    <!--洁净肌肤-->
    <div class="goods" id="clean">
      <titleleft :title="cleanTitle"></titleleft>
      <router-link :to="{name:'Goods',query:{sale_id:item.sale_id}}" v-for="(item,index) in indexList.sale_cate.clean" :key="index">
        <img :src="item.advertising_photo">
      </router-link>
    </div>

    <!--扫除黑头-->
    <div class="goods" id="black">
      <titleleft :title="blackTitle"></titleleft>
      <router-link :to="{name:'Goods',query:{sale_id:item.sale_id}}" v-for="(item,index) in indexList.sale_cate['black']" :key="index">
        <img :src="item.advertising_photo">
      </router-link>
    </div>

    <!--按摩活肤-->
    <div class="goods" id="mass">
      <titleleft :title="massTitle"></titleleft>
      <router-link :to="{name:'Goods',query:{sale_id:item.sale_id}}" v-for="(item,index) in indexList.sale_cate['mass']" :key="index">
        <img :src="item.advertising_photo">
      </router-link>
    </div>

    <!--水润肌肤-->
    <div class="goods" id="water">
      <titleleft :title="waterTitle"></titleleft>
      <router-link :to="{name:'Goods',query:{sale_id:item.sale_id}}" v-for="(item,index) in indexList.sale_cate['water']" :key="index">
        <img :src="item.advertising_photo">
      </router-link>
    </div>

    <!--快速战痘-->
    <div class="goods" id="fight">
      <titleleft :title="fightTitle"></titleleft>
      <router-link :to="{name:'Goods',query:{sale_id:item.sale_id}}" v-for="(item,index) in indexList.sale_cate['fight']" :key="index">
        <img :src="item.advertising_photo">
      </router-link>
    </div>

    <!--紧致嫩肤-->
    <div class="goods" id="tight">
      <titleleft :title="tightTitle"></titleleft>
      <router-link :to="{name:'Goods',query:{sale_id:item.sale_id}}" v-for="(item,index) in indexList.sale_cate['tight']" :key="index">
        <img :src="item.advertising_photo">
      </router-link>
    </div>

    <!--轻松脱毛-->
    <div class="goods" id="hair">
      <titleleft :title="hairTitle"></titleleft>
      <router-link :to="{name:'Goods',query:{sale_id:item.sale_id}}" v-for="(item,index) in indexList.sale_cate['hair']" :key="index">
        <img :src="item.advertising_photo">
      </router-link>
    </div>

    <!--配件专区-->
    <div class="access">
      <titlecenter :title="accessTitle"></titlecenter>
      <ul>
        <li v-for="(item,index) in indexList.part_sales" :key="index">
          <router-link :to="{name:'Goods',query:{sale_id:item.sale_id}}">
            <img :src="item.outside_view">
            <p>{{item.goods_name}}</p>
            <p>{{item.simple_desc}}</p>
            <div>
              <span>¥{{item.shop_price}}</span>
              <span class="buy_now">立即购买</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <!--视频-->
    <div class="media">
      <img src="http://pbaimage.pba.cn/2015/m.mushu.cn/images/homepage/video_bg.jpg" title="视频背景图" width="100%">
      <div class="video_box">
        <img src="http://pbaimage.pba.cn/2015/m.mushu.cn/images/homepage/video_play_new.jpg" @click="playVideo" title="视频遮罩" width="100%" v-show="vidoe_imged">
        <video src="http://pbaimage.pba.cn/2015/m.mushu.cn/images/homepage/mushu.mp4" controls="controls" id="video"></video>
      </div>
    </div>

    <!--荣誉榜单-->
    <img class="honor" src="http://pbaimage.pba.cn/2015/m.mushu.cn/images/homepage/honor.jpg" width="100%">

    <!--底部nav-->
    <footernav></footernav>
  </div>
</template>

<script>
  import { indexList } from '@/axios/api/index';
  import titleleft from '@/components/titleleft';
  import titlecenter from '@/components/titlecenter';
  import footernav from '@/components/footernav';
  import { shareSdk } from '@/assets/js/common.js';

  export default {
    name: "index",
    data() {
      return {
        indexList: [],
        navData:[{
            idClass: 'clean',
            txtClass: '清洁',
          },{
            idClass: 'black',
            txtClass: '去黑头',
          },{
            idClass: 'mass',
            txtClass: '按摩',
          },{
            idClass: 'water',
            txtClass: '补水',
          },{
            idClass: 'tight',
            txtClass: '抗衰',
          },{
            idClass: 'hair',
            txtClass: '脱毛',
          }],
        num:6,
        newTitle: {
          title_c: '新品上新',
          title_e: '|  New product',
          link: '',
          link_text: '全部产品 >'
        },
        starTitle: {
          title_c: '明星专区',
          title_e: '|  Star zone',
        },
        cleanTitle: {
          title_c: '洁净肌肤',
          title_e: '|  Clean skin',
        },
        blackTitle: {
          title_c: '扫除黑头',
          title_e: '|  Removing blackhead',
        },
        massTitle: {
          title_c: '按摩活肤',
          title_e: '|  Massage activating',
        },
        waterTitle: {
          title_c: '水润肌肤',
          title_e: '|  Water embellish skin',
        },
        fightTitle: {
          title_c: '快速战痘',
          title_e: '|  Quick fighting acne',
        },
        tightTitle: {
          title_c: '紧致嫩肤',
          title_e: '|  Tighten the skin',
        },
        hairTitle: {
          title_c: '轻松脱毛',
          title_e: '|  Easy hair removal',
        },
        accessTitle: {
          title_b: '— 配件专区 —',
          title_l: 'ACCESSORIES SECTION',
        },
        vidoe_imged: true,
        shareData: {
          title: '木薯智能美容仪',
          desc: '中国上市美容仪品牌',
          link: 'http://m.mushu.cn',
          imgUrl: 'http://pbaimage.pba.cn/2015/m.mushu.cn/images/header/logo_share.png'
        }
      }
    },
    mounted() {
      //请求首页列表
      indexList().then((res) => {
        this.indexList = res.data.data;
      })
      shareSdk(this.shareData)
    },
    computed: {
    },
    methods: {
      //视频播放
      playVideo() {
        this.vidoe_imged = false;
        var vdo = document.getElementById("video");
        vdo.play();
      },
      //顶部tab点击
      tabSwitch(index) {
        this.num = index;
      }
    },
    components: {
      titleleft,
      titlecenter,
      footernav,
    }
  }
</script>

<style scoped lang="scss">
  .header_tab {
    @include fixed-top;
    @include flex;
    @include flex-around;
    @include border_b_line;
    background-color: white;
    z-index: 99;
    li{
      a{
        display: block;
        span{
          display: inline-block;
          padding: 12px 6px;
          @include padding-box;
          color: #808080;
          &.nav_active{
            color: $pink;
            border-bottom: 2px solid #ee2174;
          }
        }
        &.current{
          color: #ee2174;
        }
      }
    }
  }
  .swiper{
    height: 197px;
    margin-top: 40px;
    img{
      width: 100%;
    }
  }
  .menu{
    @include flex;
    @include flex-around;
    @include padding-box;
    @include border_b;
    padding: 15px 0;
    a{
      display: block;
      color: #000;
      text-align: center;
      img{
        width: 40px;
        margin-bottom: 10px;
      }
    }
  }
  .goods{
    a{
      display: block;
      img{
        width: 100%;
      }
    }
    a+a{
      margin-top: 10px;
    }
  }
  .access{
    ul{
      @include flex;
      @include flex-between;
      @include padding-box;
      padding: 0 10px;
      flex-wrap: wrap;
      li{
        width: 49%;
        margin-bottom: 15px;
        a{
          display: block;
          text-align: center;
          img{
            width: 100%;
          }
          p:nth-child(2){
            margin: 10px 0 8px;
            color: #333;
            font-size: 15px;
          }
          p:nth-child(3){
            color: #808080;
            font-size: 12px;
          }
          div{
            margin-top: 8px;
            span:nth-child(1){
              color: $pink;
              font-size: 15px;
            }
            span:nth-child(2){
              display: inline-block;
              margin-left: 15px;
              width: 60px;
              height: 18px;
              color: white;
              font-size: 10px;
              text-align: center;
              line-height: 18px;
              border-radius: 3px;
              background-color: #f14e91;
            }
          }
        }
      }
    }
  }
  .video_box{
    position: relative;
    margin: -115px auto;
    width: 90%;
    height: 200px;
    border: 10px solid white;
    box-shadow: 0px 5px 10px #efecec;
    background-color: white;
    img{
      position: absolute;
      z-index: 9;
    }
    video{
      width: 100%;
    }
  }
  .honor{
    margin-top: 115px;
  }
</style>
