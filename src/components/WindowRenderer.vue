<template>
  <renderer ref="com">
    <slot></slot>
  </renderer>
</template>

<script>
import WindowResize from '../threex/windowresize'

export default {
  data () {
    return { resizer: null }
  },

  mounted () {
    let { com } = this.$refs
    let { camera, curObj: renderer } = com
    this.resizer = new WindowResize(renderer, camera, this.getDimension)
    this.resizer.trigger()
  },
  beforeDestroy () {
    this.resizer.destroy()
  },

  methods: {
    getDimension () {
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  }
}
</script>

