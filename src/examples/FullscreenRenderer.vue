<template>
  <renderer :size="size">
    <slot></slot>
  </renderer>
</template>

<script>
import Renderer from '../components/Renderer'
import { throttle } from '../util'

export default {
  name: 'FullscreenRenderer',

  components: { Renderer },

  data () {
    return {
      size: {
        w: window.innerWidth,
        h: window.innerHeight
      }
    }
  },

  created () {
    this.handleResize = throttle(this.handleResize, 50)
    window.addEventListener('resize', this.handleResize)
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },

  methods: {
    handleResize () {
      this.size = {
        w: window.innerWidth,
        h: window.innerHeight
      }
    }
  }
}
</script>
