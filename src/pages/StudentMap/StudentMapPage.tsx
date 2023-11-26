import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import StudentMapForm from '../../components/StudentMapForm/StudentMapForm';
import { MapHandler } from '../../Data/MapHandler';

const StudentMapPage: React.FC = () => {

    const mapHandler = MapHandler.getInstance()

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Locations</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <StudentMapForm startLocation={{
                    locationId: 0,
                    latitude: mapHandler.getStartLocation().latitude,
                    longitude: mapHandler.getStartLocation().longitude,
                    description: '',
                    locationName: mapHandler.getStartLocation().locationName
                }} endLocation={{
                    locationId: 0,
                    latitude: mapHandler.getEndLocation().latitude,
                    longitude: mapHandler.getEndLocation().longitude,
                    description: '',
                    locationName: mapHandler.getEndLocation().locationName
                }}/>
            </IonContent>
        </IonPage>
    );
};

export default StudentMapPage;