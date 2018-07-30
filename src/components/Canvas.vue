<template>
  <div class='box'>
    <canvas id='pic' width='200' height="200"></canvas>
    <img width='20%' height="20%" class='imgCon' src='../assets/wxUser.png'/>
    new branch
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    init () {
      let ca = document.getElementById('pic')
      let startAng = 0.5 * Math.PI
      let xAng = 1 * (Math.PI / 180) // 偏移角度
      let endAng = 1.5 * Math.PI
      let tmpAng = startAng + xAng // 临时角度
      let ctx = ca.getContext('2d')

      let render = function () {
        if (tmpAng >= endAng) {
          return
        } else if (tmpAng + xAng > endAng) {
          tmpAng = endAng
        } else {
          tmpAng += xAng
        }
        ctx.clearRect(0, 0, 100, 100)
        ctx.beginPath()
        ctx.arc(100, 100, 50, 0.5 * Math.PI, 2 * Math.PI)
        ctx.stroke()

        requestAnimationFrame(render)
      }
      render()
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="stylus" scoped>
.box
  position relative
  width 400px
  height 400px
  border 1px solid #ddd
  #pic
    border 1px solid #aaddaa
  .imgCon
    border 1px solid #000
    border-radius 50%
    position absolute
    top 60px
    left 160px
</style>
