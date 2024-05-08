import { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const MapModal = ({ getLatLng, markerPosition, readOnly = true }) => {

  function AddMarker() {
    const [position, setPosition] = useState(markerPosition)
    const map = useMap()
    useEffect(() => {
      if (!readOnly) {
        map.addEventListener('click', (e) => {
          getLatLng(e.latlng)
          setPosition(e.latlng)
        })

        if (!position) map.locate().on('locationfound', (e) => {
          setPosition(e.latlng)
          map.flyTo(e.latlng, 15)
        })

      }
      position && map.flyTo(position, 18)
    }, [map])

    const icon_1 = L.icon({
      iconUrl: "/Images/marker1.png",
      iconSize: [25, 45],
      iconAnchor: [12, 45],
      popupAnchor: [0, -40]
    })

    const icon_2 = L.icon({
      iconUrl: "/Images/marker2.png",
      iconSize: [25, 45],
      iconAnchor: [12, 45],
      popupAnchor: [0, -42],
    })

    if (!position) return null
    else return (
      <Marker position={position} icon={icon_1}>
        <Popup>
          موقعیت قرارگیری
        </Popup>
      </Marker>
    )
  }


  return (<>

    <MapContainer
      style={{ width: '100%', height: '100%', zIndex: '2' }}
      center={[38.07, 46.30]}
      zoom={12}
      scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AddMarker />
    </MapContainer>

  </>)
}

export default MapModal