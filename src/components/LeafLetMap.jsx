import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const mapContainerStyle = {
  width: "500px",
  height: "402px",
};

const center = [50.40363171032715, 30.3396692276001];

const firstOffice = [50.408089, 30.339429];
const secondOffice = [50.398478, 30.342186];

const MapComponent = () => {
  const [activeMarker, setActiveMarker] = useState(null);

  return (
    <MapContainer
      center={center}
      zoom={14}
      style={mapContainerStyle}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={firstOffice}
        eventHandlers={{
          click: () => setActiveMarker("first"),
        }}
      />
      <Marker
        position={secondOffice}
        eventHandlers={{
          click: () => setActiveMarker("second"),
        }}
      />

      {activeMarker === "first" && (
        <Popup
          position={firstOffice}
          onClose={() => setActiveMarker(null)}
        >
          <div>
            <img
              src="https://res.cloudinary.com/dsw7lnmcv/image/upload/v1691147447/photo_5362087646685415699_y_nkgwqu.jpg"
              style={{ width: "200px", height: "100%" }}
              alt="entrance"
            />
            <h3 style={{ fontSize: "14px", margin: 0 }}>ЖК ‘’Софіївський квартал’’,</h3>
            <p style={{ fontSize: "13px", margin: 0 }}>вул. Шалімова, 63а</p>
          </div>
        </Popup>
      )}

      {activeMarker === "second" && (
        <Popup
          position={secondOffice}
          onClose={() => setActiveMarker(null)}
        >
          <div>
            <img
              src="https://res.cloudinary.com/dsw7lnmcv/image/upload/v1691147447/photo_5359805674726479601_y_kkcwjd.jpg"
              style={{ width: "200px", height: "100%" }}
              alt="entrance"
            />
            <h3 style={{ fontSize: "14px", margin: 0 }}>ЖК ‘’Уютний квартал’’,</h3>
            <p style={{ fontSize: "13px", margin: 0 }}>пр-т Героїв Небесної Сотні, 16/22</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
};

export default MapComponent;