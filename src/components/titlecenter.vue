<template>
  <div class="title">
    <p>{{title.title_b}}</p>
    <span>{{title.title_l}}</span>
  </div>
</template>

<script>
    export default {
        name: "titlecenter",
        props: {
          title: {
            type: Object
          }
        }
    }
</script>

<style scoped lang="scss">
  .title{
    @include padding-box;
    padding: 30px 0;
    text-align: center;
    p{
      font-size: 16px;
      padding-bottom: 5px;
    }
    span{
      color: #4c4c4c;
      font-size: 12px;
    }
  }
</style>
