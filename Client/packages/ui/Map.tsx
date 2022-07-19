import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// eslint-disable-next-line
//const TOKEN = process.env.MapboxAccessToken; // Set your mapbox token here

export const Mapp = () => {
  return (
    <>
      <Map
        initialViewState={{
          longitude: 3.051918113029529,
          latitude: 36.78888034664789,
          zoom: 7,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken="pk.eyJ1IjoieWFjaW5lMDUxNiIsImEiOiJjbDBoODh6bDIwMWFxM2RtcTN4NmQ0anpxIn0.Loa-dBHhfq-oBUK1fywYUw"
      >
        <Marker
          longitude={3.051918113029529}
          latitude={36.78888034664789}
          color="red"
        />
      </Map>
    </>
  );
};
