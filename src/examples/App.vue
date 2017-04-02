<style>
  body { margin: 0; }
</style>

<template>
  <fullscreen-renderer>
    <scene>
      <camera :position="{ z: 15 }"></camera>
      <ocean :position="{ y: -200 }"></ocean>
    </scene>
  </fullscreen-renderer>
</template>

<script>
import FullscreenRenderer from './FullscreenRenderer'
import Ocean from './Ocean'

export default {
  name: 'App',
  components: { Ocean, FullscreenRenderer }
}
</script>
