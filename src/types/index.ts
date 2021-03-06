export type EventPosition = {
    latlng: {
        lat: number;
        lng: number;
    }
}

export type TPosition = {
    latitude: Number;
    longitude: Number;
}

export type TPositionContextState = {
    position: TPosition;
    addPosition: (position: TPosition) => void;
};
