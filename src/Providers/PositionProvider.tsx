import { createContext, useState, FC, useContext } from "react";
import { TPositionContextState, TPosition } from "../types";

const contextDefaultValues: TPositionContextState = {
    position: { latitude: 0, longitude: 0 },
    addPosition: () => { }
};

export const PositionContext = createContext<TPositionContextState>(
    contextDefaultValues
);

const PositionProvider: FC = ({ children }) => {
    const [position, setPosition] = useState<TPosition>(contextDefaultValues.position);

    const addPosition = (newPosition: TPosition) =>
        setPosition(newPosition);

    return (
        <PositionContext.Provider
            value={{
                position,
                addPosition
            }}
        >
            {children}
        </PositionContext.Provider>
    );
};

export default PositionProvider;

export const usePosition = () => useContext(PositionContext);