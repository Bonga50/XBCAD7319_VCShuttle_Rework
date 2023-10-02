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
                <StudentMapForm/>
            </IonContent>
        </IonPage>
    );
};

export default StudentMapPage;