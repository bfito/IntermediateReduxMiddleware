/* eslint-disable no-undef */
import React, { Component } from 'react';
import {GOOGLE_MAPS_API_KEY} from '../../key';

class GoogleMap extends Component {
  componentDidMount() {
    // eslint-disable-next-line
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.ref.map
    // eslint-disable-next-line
    // return <div id="map" />;
    // <div ref={div => this.map = div} />
    return <div ref="map" />;
  }
}

export default GoogleMap;
