export type EventPosition = {
    latlng: {
        lat: number;
        lng: number;
    }
}

export type TPosition = {
    latitude: number;
    longitude: number;
}

export type TPositionContextState = {
    position: TPosition;
    addPosition: (position: TPosition) => void;
};
