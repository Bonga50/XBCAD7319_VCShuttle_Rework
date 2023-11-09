import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const AdminBookingList: React.FC = () => {

    return (
        <div>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Bookings</IonTitle>
                </IonToolbar>
                <IonButtons slot="end">
                    <IonButton>End</IonButton>
                </IonButtons>
                <IonToolbar>
                    <IonSearchbar></IonSearchbar>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                UI goes here...
            </IonContent>
        </div>
    );
};

export default AdminBookingList;