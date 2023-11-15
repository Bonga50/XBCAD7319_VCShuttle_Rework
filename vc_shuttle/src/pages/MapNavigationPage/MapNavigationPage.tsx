import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import MapNavigation from '../../components/StudentMapForm/Mapnavigation/MapNavigation';

const MapNavigationPage: React.FC = () => {

    return (
        <IonPage>
        <MapNavigation/>
        </IonPage>
    );
};

export default MapNavigationPage;