<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
    </ul>

    <div class="iconfont-wrap">
      <i class="iconfont icon-anquan1"></i>
    </div>

    <div class="list">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>

    <router-link :to="{name:'Index'}">
      <div class="go_index bt20">去首页</div>
    </router-link>

    <div @click="goIndex('我来自helloworld')" class="bt20">去首页</div>

    <a href="" class="bt20">我是来自store的url:{{url}}</a>

    <div v-for="todo in todos" class="bt20">我是来自store的{{todo.text}}</div>
    <div v-for="todo in getterDoneTodos" class="bt20">我是store中过滤过的doneTodos：{{todo.text}}</div>

    <div class="bt20">我是来自store的obj：{{obj}}</div>
    <div @click="changeObj({c: '119'})" class="bt20">点我改变store.state中的obj</div>

    <div @click="action1" class="bt20">点我dispatch action1：{{count}}</div>
    <div @click="action2({add: 20})" class="bt20">点我dispatch action2：{{count}}</div>
    <div @click="action3" class="bt20">点我dispatch action3：{{count}}</div>
    <div @click="action4({add: 40})" class="bt20">点我dispatch action4：{{count}}</div>

    <mt-swipe :auto="4000" class="swiper bt20">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import { indexList } from '@/axios/api/index';
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
  import { getStorage, saveStorage } from '@/assets/js/common'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    created() {
      this.Toast({
        message: 'Toast',
        iconClass: 'iconfont icon-guanbi'
      })
    },
    computed: {
      ...mapState({
        url: state => state.url,
        todos: state => state.todos,
        obj: state => state.obj,
        count: state => state.count,
      }),
      ...mapGetters({
        getterDoneTodos: 'doneTodos'
      })
    },
    mounted() {
      this.$nextTick(function () {
        saveStorage('110','111');

        indexList().then((res) => {
          console.log(res.data.data)
        })
      })
    },
    methods: {
      goIndex(info) {
        this.$router.push({name: 'Index', params: {info}});
      },
      ...mapMutations({
        changeObj: 'CHANGE_OBJ'
      }),
      ...mapActions(['action1','action2','action4']),
      action3() {
        this.$store.dispatch('action3', {add: 30})
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @mixin flex {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-around;
  }

  .list {
    @include flex;
  }

  .bt20{
    margin-bottom: 20px;
  }

  .swiper{
    height: 100px;
    background-color: palevioletred;
  }

  h1, h2 {
    font-weight: normal;
    font-size: 14px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: flex;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
