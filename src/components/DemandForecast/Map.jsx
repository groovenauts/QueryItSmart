import React, { Component } from 'react'

const MAP_OPTION = {
  center: {lat: 40.732, lng: -73.981},
  mapTypeId: 'roadmap',
  scaleControl: true,
  zoom: 13,
}

class Map extends Component {
  constructor(props) {
    super(props)
    this.map = new google.maps.Map(document.getElementById('map'), MAP_OPTION)
  }

  renderHeatMap() {
    const { heatMapData } = this.props
    if (_.isArray(heatMapData) && !_.isEmpty(heatMapData)) {
      const data = _.map(heatMapData, obj => {
        return {location: new google.maps.LatLng(obj.latitude, obj.longitude), weight: obj.usage || 1}
      })
      if (this.heatmap) {
        this.heatmap.setMap(null);
      }
      this.heatmap = new google.maps.visualization.HeatmapLayer({
        dissipating: true,
        data: data,
        maxIntensity: 26.0,
        radius: 20,
        map: this.map
      })
    } else if (this.heatmap) {
      this.heatmap.setMap(null);
    }
    return null
  }

  render() {
    this.renderHeatMap()
    return <div />
  }
}

export default Map
