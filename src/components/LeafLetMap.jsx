import React, { useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Icon from "../image/marker-icon.png";

const customIcon = new L.Icon({
  iconUrl: Icon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

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
      dragging={true} 
      tap={true} 
      doubleClickZoom={false} 
      zoomControl={false} 
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        noWrap={true} 
      />

      <Marker
  position={firstOffice}
  eventHandlers={{
    click: () => setActiveMarker("first"),
  }}
  icon={customIcon}
/>
      <Marker
        position={secondOffice}
        eventHandlers={{
          click: () => setActiveMarker("second"),
        }}
        icon={customIcon}
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