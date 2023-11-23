import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Reviews: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Reviews Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              
            </IonContent>
        </IonPage>
    );
};

export default Reviews;