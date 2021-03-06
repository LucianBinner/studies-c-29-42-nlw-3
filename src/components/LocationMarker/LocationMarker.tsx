import React, { useState } from 'react'
import { Marker, useMapEvents } from 'react-leaflet';

import { EventPosition } from '../../types';

import mapIcon from "../../utils/mapIcon";

export default function LocationMarker() {
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
    
    useMapEvents({
        click(e: EventPosition) {
            const { lat, lng } = e.latlng;
            setPosition({
                latitude: lat,
                longitude: lng
            });
        },
    })

    return position === null ? null : (
        <Marker
            interactive={false}
            position={[
                position.latitude,
                position.longitude
            ]}
            icon={mapIcon}
        />
    )
}