import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";



const mapContainerStyle = {
  width: "500px",
  height: "402px",
};

const center = {
  lat: 50.40363171032715,
  lng: 30.3396692276001,
};

const firstOficce = { lat: 50.408089, lng: 30.339429 };
const secondOffice = { lat: 50.398478, lng: 30.342186 };

const GoogleMapComponent = () => {
  const [activeMarker, setActiveMarker] = useState(null);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
      >
        <Marker
          position={firstOficce}
          onClick={() => setActiveMarker("first")}
        />
        <Marker
          position={secondOffice}
          onClick={() => setActiveMarker("second")}
        />

        {activeMarker === "first" && (
          <InfoWindow
            position={firstOficce}
            onCloseClick={() => setActiveMarker(null)}
          >
            <div>
              <img
                src="https://res.cloudinary.com/dsw7lnmcv/image/upload/v1691147447/photo_5362087646685415699_y_nkgwqu.jpg"
                style={{ width: "200px", height: "100%" }}
                alt="entrance"
              />
              
               <h3 style={{ fontSize: "14px", margin: 0 }}>ЖК ‘’Софіївський квартал’’,</h3>
               <p style={{ fontSize: "13px", margin: 0 }}> вул. Шалімова, 63а </p>
             
              
            </div>
          </InfoWindow>
        )}

        {activeMarker === "second" && (
          <InfoWindow
            position={secondOffice}
            onCloseClick={() => setActiveMarker(null)}
          >
            <div>
              <img
                src="https://res.cloudinary.com/dsw7lnmcv/image/upload/v1691147447/photo_5359805674726479601_y_kkcwjd.jpg"
                style={{ width: "200px", height: "100%" }}
                alt="entrance"
              />
              <h3 style={{ fontSize: "14px", margin: 0 }}>ЖК ‘’Уютний квартал’’, </h3>
               <p style={{ fontSize: "13px", margin: 0 }}> пр-т Героїв Небесної Сотні, 16/22</p>
              
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;


