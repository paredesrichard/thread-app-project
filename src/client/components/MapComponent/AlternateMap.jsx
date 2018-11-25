import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import moment from 'moment';
import { relative } from 'upath';

const style = {
  width: '100%',
  height: '70vh',
  position: 'relative',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      details: [],
    };
  }

  componentDidMount() {
    //this.setState({ data: this.props.data });
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      details: props.data,
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <div className="container m-0 p-0" style={{ position: 'relative'}}>
        <Map
          className="container-fluid"
          google={this.props.google}
          style={style}
          initialCenter={{
            lat: 55.676098,
            lng: 12.568337,
          }}
          zoom={11}
          onClick={this.onMapClicked}
        >
          {this.state.data.map(data => {
            //console.log('data', data);
            const { id, event_geo_lat, event_geo_lng, event_name } = data;
            const tempCoords = {
              lat: event_geo_lat,
              lng: event_geo_lng,
            };
            return (
              <Marker
                key={id}
                onClick={this.onMarkerClick}
                name={event_name}
                position={tempCoords}
                data={data}
              />
            );
          })}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div className="container" style={{ width: 300 }}>
              <img
                className="card-img-top"
                src={this.state.details.event_theme_image}
                alt="Event card"
              />
              <h4 className="text-primary">{this.state.selectedPlace.name}</h4>
              <p className="h6">
                <span className="text-primary">Start Date :</span>{' '}
                {moment(this.state.details.event_start_date).format(
                  'DD-MM-YYYY',
                )}
              </p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w',
})(MapContainer);
