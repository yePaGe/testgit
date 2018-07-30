<template>
  <div>
    <el-button @click='add'>新增等级</el-button>
    <levelCom @iptChange='firstIpt'></levelCom>
    <div class='com'>
      <component :is='item.template' :obj='item' @del='del' @iptChange='iptChange' v-for='(item, index) in comList' :key='index'></component>
    </div>
    <div class='rightc'>
      <div v-for='item in comList' :key='item.num'>
        <p>{{item.num}} --- {{item.content.levelName}}</p>
        <p>{{item.content.minNum}} --- {{item.content.maxNum}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import levelCom from './levelCom.vue'

export default {
  name: 'Com',
  components: {
    levelCom
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      comList: [],
      num: 0,
      firstCom: {
        levelName: '',
        minNum: '',
        maxNum: ''
      }
    }
  },
  computed: {
    comLength () {
      return this.comList.length
    }
  },
  methods: {
    add () {
      console.log('add')
      this.num++
      this.comList.push({
        template: 'levelCom',
        num: this.num,
        content: {
          levelName: '',
          minNum: '',
          maxNum: ''
        }
      })
    },
    del (num) {
      console.log('delll', num)
      this.comList = this.comList.filter((i) => {
        return i.num !== num
      })
    },
    iptChange (obj) {
      this.comList = this.comList.map((i) => {
        if (i.num === obj.num) {
          switch (obj.key) {
            case 1:
              i.content.levelName = obj.msg
              break
            case 2:
              i.content.minNum = obj.msg
              break
            case 3:
              i.content.maxNum = obj.msg
              break
          }
        }
        return i
      })
    },
    firstIpt (obj) {
      switch (obj.key) {
        case 1:
          this.firstCom.levelName = obj.msg
          break
        case 2:
          this.firstCom.minNum = obj.msg
          break
        case 3:
          this.firstCom.maxNum = obj.msg
          break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
h1
h2
  font-weight: normal
.com
  width: 600px
  display: flex
  flex-direction: column
  float: left
.rightc
  width: 500px
  float: right
</style>
