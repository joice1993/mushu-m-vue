<template>
    <div class="title">
      <span>{{title.title_c}}<var>{{title.title_e}}</var></span>
      <router-link :to="{name:''}">{{title.link_text}}</router-link>
    </div>
</template>

<script>
    export default {
      name: 'titleleft',
      props: {
        title: {
          type: Object
        }
      }
    };
</script>

<style scoped lang="scss">
  .title{
    @include padding-box;
    @include flex;
    @include flex-between;
    padding: 20px 10px;
    span{
      @include padding-box;
      padding-left: 10px;
      font-size: 15px;
      border-left: 3px solid #ee2174;
      var{
        @include padding-box;
        padding-left: 5px;
        font-size: 13px;
        font-style: normal;
      }
    }
    a{
      color: #999;
      font-size: 14px;
    }
  }
</style>
