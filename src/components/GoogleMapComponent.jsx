import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const mapContainerStyle = {
  width: '500px',
  height: '402px',
};

const center = {
  lat: 50.40363171032715,
  lng: 30.3396692276001, 
};

const firstOficce = { lat: 50.40755844116211, lng: 30.338287353515625 };
const secondOffice = {lat: 50.39970397949219, lng: 30.34105110168457 }


const GoogleMapComponent = () => {


  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14}>
        
        <Marker position={firstOficce} />
        <Marker position={secondOffice} />
        
      
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;


