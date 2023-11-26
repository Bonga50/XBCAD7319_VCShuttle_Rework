import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import MapNavigation from '../../components/StudentMapForm/Mapnavigation/MapNavigation';
import { MapHandler } from '../../Data/MapHandler';

const MapNavigationPage: React.FC = () => {
    const mapHandler = MapHandler.getInstance()

    return (
        <IonPage>
        <MapNavigation  endLocation={{
                locationId: 0,
                latitude: mapHandler.getTravelEndLocation().latitude,
                longitude: mapHandler.getTravelEndLocation().longitude,
                description: '',
                locationName: mapHandler.getTravelEndLocation().locationName
            }}/>
        </IonPage>
    );
};

export default MapNavigationPage;