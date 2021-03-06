import { Marker, useMapEvents } from 'react-leaflet';
import { usePosition } from '../../Providers/PositionProvider';

import { EventPosition } from '../../types';

import mapIcon from "../../utils/mapIcon";

export default function LocationMarker() {
    const { position, addPosition } = usePosition();

    useMapEvents({
        click(e: EventPosition) {
            const { lat, lng } = e.latlng;
            addPosition({
                latitude: lat,
                longitude: lng
            });
        },
    })

    return position.latitude === 0 ? null : (
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