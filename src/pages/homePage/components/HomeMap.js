import { useState } from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { useEffect } from 'react'
import 'leaflet/dist/leaflet.css'

const demoDataFromServer = [
  { lat: 25.032935, lng: 121.5427002 , name:"捷運大安站(信義)"},
  { lat: 25.033967, lng: 121.5433893 , name:"捷運大安站(復興)"},
  { lat: 25.0334365, lng:121.5400901 , name:"師大附中"},
  { lat: 25.0333056, lng: 121.5434491 , name:"信義大安路口"},
  { lat: 25.031991, lng: 121.5412516 , name:"大安高工)"},

]

const customMarker = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
})

function FCMap() {
  // const initState = {
  //   coords: [
  //     { lat: 41.19197, lng: 25.33719 },
  //     { lat: 41.26352, lng: 25.1471 },
  //     { lat: 41.26365, lng: 25.24215 },
  //     { lat: 41.26369, lng: 25.33719 },
  //     { lat: 41.26365, lng: 25.43224 },
  //     { lat: 41.26352, lng: 25.52728 },
  //     { lat: 41.2633, lng: 25.62233 },
  //     { lat: 41.263, lng: 25.71737 },
  //     { lat: 41.3082, lng: 22.95892 },
  //     { lat: 41.31041, lng: 23.054 },
  //   ],
  //   zoom: 7,
  // }

  const [state, setState] = useState([])



  // didMount
  useEffect(() => {
    // 連接資料庫
    // 設定狀態
    console.log('didmount')
    setState(demoDataFromServer)
  }, [])

  return (
    <LeafletMap
      center={[25.0339193,121.541218]}
      zoom={30}
      style={{ height: '100vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />

      {state.map(({ lat, lng , name }, index) => (
        <Marker position={[lat, lng]} icon={customMarker} key={index}>
          <Popup>
            {name}
          </Popup>
        </Marker>
      ))}
    </LeafletMap>
  )
}

export default FCMap