import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import MapNavigation from '../../components/StudentMapForm/Mapnavigation/MapNavigation';

const MapNavigationPage: React.FC = () => {

    return (
        <IonPage>
        <MapNavigation  endLocation={{
                locationId: 0,
                latitude:  -26.107862,
                longitude: 28.057683,
                description: '',
                locationName: 'Gautrain Station Sandton'
            }}/>
        </IonPage>
    );
};

export default MapNavigationPage;