import React from "react";
import ReactDOM from "react-dom";
import MapContainer from "./MapContainer";



const App = () => {
  return (
    <div>
      <MapContainer
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAt4xvTXrS-KTVckK3tisj9y8DIRf5K3hU"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        center={{ lat: -33.8665433, lng: 151.1956316 }}
        zoom={11}
      />
    </div>
  );
};
export default App;
