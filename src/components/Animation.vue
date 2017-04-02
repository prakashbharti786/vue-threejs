<script>
/* global requestAnimationFrame, cancelAnimationFrame */
import { Clock } from 'three'

export default {
  name: 'Animation',

  data () {
    return {
      animClock: new Clock(),
      animFrame: null
    }
  },

  mounted () {
    if (this.animate) {
      this.start()
    }
  },
  beforeDestroy () {
    if (this.animate) {
      this.stop()
    }
  },

  methods: {
    // `animate` method is optional
    start () {
      this.animFrame = requestAnimationFrame(this.start)
      const dt = this.animClock.getElapsedTime()
      this.animate(dt)
    },
    stop () {
      cancelAnimationFrame(this.animFrame)
    }
  }
}
</script>
