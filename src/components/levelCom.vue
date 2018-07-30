<template>
  <div class='content'>
    <div class='box'>
      <div class='line'>
        <div class='name'>
          等级称号：
        </div>
        <el-input size='small' class='ipt-width' v-model='obj.content.levelName' @change='iptChange(1, $event)'></el-input>
      </div>
      <div class='line'>
        <div class='name'>
          成长值范围：
        </div>
        <el-input size='small' class='ipt-width' v-model='obj.content.minNum' @change='iptChange(2, $event)'></el-input>
        <div class='little-line'>——</div>
        <el-input size='small' class='ipt-width' v-model='obj.content.maxNum' @change='iptChange(3, $event)'></el-input>
      </div>
    </div>
    <div @click='del' v-if='obj.num >= 1' class='btn-r'><i class='el-icon-error'></i></div>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default: function () {
        return {
          num: 0,
          content: {
            levelName: '',
            minNum: '',
            maxNum: ''
          }
        }
      }
    }
  },
  data () {
    return {
      // levelName: '',
      // minNum: '',
      // maxNum: ''
    }
  },
  methods: {
    del () {
      this.$emit('del', this.obj.num)
    },
    iptChange (key, e) {
      let obj = {
        num: this.num,
        key: key,
        msg: e
      }
      this.$emit('iptChange', obj)
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  display: flex
  margin: 20px 15px 10px
  .box
    width: 500px
    height: 110px
    border: 1px dashed #aaa
    border-radius: 8px
    font-size: 14px
  .line
    display: flex
    margin-top: 15px
    .name
      width: 100px
      margin-right: 5px
      padding-top: 6px
      text-align: right
    .ipt-width
      width: 150px
    .little-line
      width: 40px
      padding: 6px 10px
      font-size: 20px
  .btn-r
    width: 30px
    margin-left: 20px
    margin-top: 45px
    font-size: 24px
    cursor: pointer
    :hover
      color: #708090
</style>
