<template>
  <div><slot></slot></div>
</template>

<script>
/* global requestAnimationFrame, cancelAnimationFrame */
import { Clock } from 'three'

export default {
  name: 'Animation',

  props: {
    fn: Function
  },

  data () {
    return {
      clock: new Clock(),
      frame: null
    }
  },

  mounted () {
    this.start()
  },
  beforeDestroy () {
    this.stop()
  },

  methods: {
    start () {
      if (!this.fn) return
      this.frame = requestAnimationFrame(this.start)
      const dt = this.clock.getElapsedTime()
      this.fn(dt)
    },

    stop () {
      cancelAnimationFrame(this._frame)
    }
  }
}
</script>
