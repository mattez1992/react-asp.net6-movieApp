import React, { useState } from 'react'
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png"
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, useMapEvent } from 'react-leaflet'
import { coordinateDTO } from '../models/map/coordinateDTO.model';


let defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [16, 37]
})

L.Marker.prototype.options.icon = defaultIcon;
export default function Map(props: mapProps) {
    const [coordinates, setCoordinates] = useState<coordinateDTO[]>(props.coordinates);
    return (
        <MapContainer
            center={[59.87588450363104, 17.67494311913416]} zoom={14} style={{ height: props.height }}
        >
            <TileLayer attribution='React Movies'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClick setCoordinates={coordinates => {
                setCoordinates([coordinates]);
                props.handleMapClick(coordinates);
            }} />
            {coordinates.map((cordinate, index) => <Marker key={index} position={[cordinate.lat, cordinate.lng]} />)}
        </MapContainer >
    )
}
interface mapProps {
    height: string;
    coordinates: coordinateDTO[];
    handleMapClick(coordinates: coordinateDTO): void;
}
Map.defaultProps = {
    height: "500px",
}

function MapClick(props: mapCLickProps) {
    useMapEvent("click", eventArgs => {
        props.setCoordinates({ lat: eventArgs.latlng.lat, lng: eventArgs.latlng.lng })
    })
    return null;
}
interface mapCLickProps {
    setCoordinates(cordinates: coordinateDTO): void
}