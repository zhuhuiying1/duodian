<template>
  <div class="map-page">
    <div id="container" class="map" tabindex="0"></div>
    <map-hint :list="pois"></map-hint>
  </div>
</template>

<script>
import AMapUI from 'AMapUI'
import AMap from 'AMap'
import MapHint from './components/MapHint.vue'
export default {
  name: 'MapView',
  components: {
    MapHint
  },
  data () {
    return {
      pois: []
    }
  },
  mounted () {
    AMapUI.loadUI(['misc/PositionPicker'], (PositionPicker) => {
      var map = new AMap.Map('container', {
        zoom: 16,
        scrollWheel: false
      })
      var positionPicker = new PositionPicker({
        mode: 'dragMap',
        map: map
      })

      positionPicker.on('success', (positionResult) => {
        this.pois = positionResult.regeocode.pois || []
        console.log(positionResult)
      })
      positionPicker.on('fail', (positionResult) => {
      })
      positionPicker.start()
      map.panBy(0, 1)

      map.addControl(new AMap.ToolBar({
        liteStyle: true
      }))
    })
  }
}
</script>

<style lang="scss" scoped>
.map-page {
  @include wh(100vw, 100vh);
  .map {
    @include wh(100%, 40vh);
  }
}

</style>
