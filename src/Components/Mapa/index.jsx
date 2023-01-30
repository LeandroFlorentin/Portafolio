import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'

const Mapa = () => {
    const newIcon = L.icon({
        iconUrl: require('../../img/logoL.png'),
        iconSize: [15, 30],
        iconAnchor: [12, 12],
        popupAnchor: [0, 0],
    })
    const sacarCirculo = () => {
        const cursor = document.getElementById('cursor')
        cursor.style.transform = 'scale(0)';
    }
    const volverCirculo = () => {
        const cursor = document.getElementById('cursor')
        cursor.style.transform = 'scale(1)';
    }
    return (
        <div onMouseEnter={sacarCirculo} onMouseLeave={volverCirculo}>
            <MapContainer
                style={{ position: 'relative', width: '100vw', height: '100vh' }}
                center={[-34.7192408, -58.3123167]}
                zoom={15}
                scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    icon={newIcon}
                    position={[-34.7192408, -58.3123167]} zoom={13}>
                    <Popup>Popup for Marker</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Mapa;
