import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  Marker,
  InfoWindow
}  from "react-google-maps";

export class MapContainer extends React.Component {
   
   state = {
      places: [],
  
    
    };

  
  
  
    addMarker(e) {
      console.log(e);
      const newPlace = {
        id: this.state.places.length,
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      this.setState({
        places: [...this.state.places, newPlace]
        
      });
 
    }
   render() {
      

      return (
         <GoogleMap
         onClick={this.addMarker.bind(this)}
         defaultZoom={this.props.zoom}
         defaultCenter={this.props.center}
       >
         {this.state.places.map(place => {
           return (

             <Marker
               key={place.id}
               position={{ lat: place.lat, lng: place.lng }}
               title={place.title}
             >
            <InfoWindow
                key={`infowindow-${place.key}`}
                visible={true}>
                <div> {place.lat} -{place.lng}</div>
            </InfoWindow>
</Marker>
            );
         })
}

         
            
       </GoogleMap>
     );
    }
  }
  export default withScriptjs(withGoogleMap(MapContainer));