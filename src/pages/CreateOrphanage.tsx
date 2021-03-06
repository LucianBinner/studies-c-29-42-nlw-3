// 1h06min
import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';

import { FiPlus } from "react-icons/fi";

import Sidebar from "../components/Sidebar/Sidebar";
import LocationMarker from "../components/LocationMarker/LocationMarker";

import '../styles/pages/create-orphanage.css';

export default function CreateOrphanage() {
  const [geolocationLatitude, setGeolocationLatitude] = useState<number | undefined>();
  const [geolocationLongitude, setGeolocationLongitude] = useState<number | undefined>();

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      if (position.coords.latitude !== null || position.coords.longitude !== null) {
        setGeolocationLatitude(position.coords.latitude);
        setGeolocationLongitude(position.coords.longitude);
      }
    })
  }, [geolocationLatitude, geolocationLongitude]);

  return (
    <div id="page-create-orphanage">
      <Sidebar />

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>
            {(geolocationLatitude !== undefined && geolocationLongitude !== undefined) && (
              <MapContainer
                center={[geolocationLatitude, geolocationLongitude]}
                style={{ width: '100%', height: 280 }}
                zoom={15}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <LocationMarker />

              </MapContainer>
            )}

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" value={name} onChange={event => setName(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} value={about} onChange={event => setAbout(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" value={instructions} onChange={event => setInstructions(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário de Funcionamento</label>
              <input id="opening_hours" value={opening_hours} onChange={event => setOpeningHours(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
