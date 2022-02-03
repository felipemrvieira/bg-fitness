import React from "react";
// import Link from "next/link";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import unitMap from "./unitMap.module.scss";

interface Props {
  lat: number;
  lng: number;
}
const UnitMap: React.FC<Props> = ({ lat, lng }) => {
  const ACCESS_TOKEN_MAP_BOX = process.env.NEXT_PUBLIC_ACCESS_TOKEN_MAP_BOX;

  return (
    <section className={unitMap.sectionContainer}>
      <div>
        token:
        {ACCESS_TOKEN_MAP_BOX}
      </div>
      <div className={unitMap.sectionContent}>
        <MapContainer
          center={[lat, lng]}
          zoom={16}
          scrollWheelZoom={false}
          style={{ height: "80vh", width: "100%" }}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/felipemrvieira/ckvmews0c4qhu14lcz53ywzae/tiles/256/{z}/{x}/{y}@2x?access_token=${ACCESS_TOKEN_MAP_BOX}`}
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          />
          <Marker
            position={[lat, lng]}
            draggable={true}
            // animate={true}
          >
            <Popup>Hey ! I live here</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default UnitMap;
