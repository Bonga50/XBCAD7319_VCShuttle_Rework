import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import StudentMapForm from '../../components/StudentMapForm/StudentMapForm';

const StudentMapPage: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Page Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <StudentMapForm startLocation={{
                    locationId: 0,
                    latitude: -26.093444,
                    longitude: 28.047038,
                    description: '',
                    locationName: 'Varsity College Sandton'
                }} endLocation={{
                    locationId: 0,
                    latitude: -26.107862,
                    longitude: 28.057683,
                    description: '',
                    locationName: 'Gautrain Station Sandton'
                }}/>
            </IonContent>
        </IonPage>
    );
};

export default StudentMapPage;