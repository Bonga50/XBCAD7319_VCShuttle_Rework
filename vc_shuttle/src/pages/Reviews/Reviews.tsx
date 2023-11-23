import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ReviewForm from '../../components/AdminReviews/AdminReviews';

const Reviews: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Reviews Page</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
            <ReviewForm/>
            </IonContent>
        </IonPage>
    );
};

export default Reviews;