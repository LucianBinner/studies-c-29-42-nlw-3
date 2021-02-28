import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import mapIcon from '../utils/mapIcon';

import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Mogi das Cruzes</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <MapContainer
        center={[-23.542723, -46.177102]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer
          url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker
          position={[-23.542723, -46.177102]}
          icon={mapIcon}
        >
          <Popup 
            closeButton={false} 
            minWidth={240} 
            maxWidth={240}
            className="map-popup"
          >
            Lar das Meninas
            <Link to="/orphanage/10">
              <FiArrowRight size={20} color="#fff" />
            </Link>
          </Popup>
        </Marker>
      </MapContainer>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF"></FiPlus>
      </Link>
    </div>
  );
}

export default OrphanagesMap;