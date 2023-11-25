import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import MapNavigation from '../../components/StudentMapForm/Mapnavigation/MapNavigation';

const MapNavigationPage: React.FC = () => {

    return (
        <IonPage>
        <MapNavigation startLocation={{
                locationId: 0,
                latitude: 0,
                longitude: 0,
                description: '',
                locationName: ''
            }} endLocation={{
                locationId: 0,
                latitude: 0,
                longitude: 0,
                description: '',
                locationName: ''
            }}/>
        </IonPage>
    );
};

export default MapNavigationPage;