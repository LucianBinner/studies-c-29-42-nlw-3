import { FC } from 'react';
import PositionProvider from './PositionProvider';

export const Provider: FC = ({children}) => {
    return (
        <PositionProvider>
            {children}
        </PositionProvider>
    );
};